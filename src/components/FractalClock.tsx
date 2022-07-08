import { Component, createSignal, onMount } from 'solid-js';

const settings = {
  depth: 7,
  lineWidth: 2,
  scale: 1,
  showFps: false,
};

const OFFSET = 0;

const getColorString = (total: number, layer: number) => {
  const minOpacity = 0;
  const maxOpacity = 1;
  const colorFloor = 10;
  const random = () =>
    colorFloor +
    Math.floor(
      (Array.from(crypto.getRandomValues(new Uint8Array(1)))[0] / 255) * (255 - colorFloor),
    );
  const [red, green, blue] = [random(), random(), random()];
  const opacity = minOpacity + (maxOpacity - minOpacity) * ((total - layer) / total);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

let colorArray: string[] = [];

const changeColorArray = () => {
  colorArray = [];
  for (let i = 0; i < settings.depth; i += 1) {
    colorArray.push(getColorString(settings.depth, i));
  }
};

changeColorArray();

window.addEventListener('click', () => {
  changeColorArray();
});

const ratioToRadians = (value: number) => value * 2 * Math.PI - Math.PI / 2;

const getAngle = () => {
  const date = new Date();
  const seconds = (date.getSeconds() * 1000 + date.getMilliseconds()) / 1000;
  const minutes = date.getMinutes() + seconds / 60;
  const hours = (date.getHours() % 12) + minutes / 60;

  return {
    second: ratioToRadians(seconds / 60),
    minute: ratioToRadians(minutes / 60),
    hour: ratioToRadians(hours / 12),
  };
};

const FractalClock: Component = () => {
  let angle = getAngle();
  let ref: HTMLCanvasElement | undefined;
  let ctx: CanvasRenderingContext2D | undefined;
  const [pr, setPr] = createSignal(window.devicePixelRatio || 1);
  const getWh = () => ({ width: window.innerWidth, height: window.innerHeight });
  const [wh, setWh] = createSignal(getWh());

  const clearCanvas = () => {
    ctx!.clearRect(0, 0, ref!.width, ref!.height);
  };

  const drawMinuteSecond = (
    count: number,
    length: number,
    centre: { x: number; y: number },
    pAngle: number,
  ) => {
    if (!ctx) return;
    ctx.strokeStyle = colorArray[settings.depth - count];

    ctx.beginPath();
    ctx.moveTo(centre.x, centre.y);
    ctx.lineTo(
      centre.x + Math.cos(angle.second + pAngle) * length,
      centre.y + Math.sin(angle.second + pAngle) * length,
    );
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centre.x, centre.y);
    ctx.lineTo(
      centre.x + Math.cos(angle.minute + pAngle) * length,
      centre.y + Math.sin(angle.minute + pAngle) * length,
    );
    ctx.stroke();

    if (count) {
      drawMinuteSecond(
        count - 1,
        length * settings.scale,
        {
          x: centre.x + Math.cos(angle.second + pAngle) * length,
          y: centre.y + Math.sin(angle.second + pAngle) * length,
        },

        angle.second - angle.hour - Math.PI + pAngle + OFFSET,
      );
      drawMinuteSecond(
        count - 1,
        length * settings.scale,
        {
          x: centre.x + Math.cos(angle.minute + pAngle) * length,
          y: centre.y + Math.sin(angle.minute + pAngle) * length,
        },

        angle.minute - angle.hour - Math.PI + pAngle + OFFSET,
      );
    }
  };

  const draw = () => {
    if (!ref) return;
    if (!ctx) return;
    clearCanvas();
    ctx.globalAlpha = 1;
    // eslint-disable-next-line prefer-destructuring
    ctx.strokeStyle = colorArray[0];
    ctx.lineWidth = settings.lineWidth * window.devicePixelRatio;

    const centre = {
      x: ref.width / 2,
      y: ref.height / 2,
    };

    const length = Math.min(ref.width, ref.height) / 4;

    ctx.beginPath();
    ctx.moveTo(centre.x, centre.y);
    ctx.lineTo(
      centre.x + (Math.cos(angle.hour) * length) / 2,
      centre.y + (Math.sin(angle.hour) * length) / 2,
    );
    ctx.stroke();

    drawMinuteSecond(settings.depth, length, centre, 0);
  };
  let aid: number | undefined;

  const animate = () => {
    aid = window.requestAnimationFrame(animate);
    angle = getAngle();
    draw();
  };

  window.addEventListener('resize', () => {
    setPr(window.devicePixelRatio || 1);
    setWh(getWh());
    window.cancelAnimationFrame(aid!);
    animate();
  });

  onMount(() => {
    setPr(window.devicePixelRatio || 1);
    setWh(getWh());
    ctx = ref?.getContext('2d')!;
    animate();
  });

  return (
    <canvas
      ref={ref}
      height={wh().height * pr()}
      width={wh().width * pr()}
      class="fixed -z-1 h-screen w-screen"
    />
  );
};

export default FractalClock;
