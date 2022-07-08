import { Component, createMemo, ParentComponent, Show } from 'solid-js';
import styles from './fractalClock.module.css';

const getColorString = (total = 7, layer = 1) => {
  const minOpacity = 0.1;
  const maxOpacity = 1;
  const colorFloor = 10;
  const red = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
  const green = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
  const blue = colorFloor + Math.floor(Math.random() * (255 - colorFloor));
  const opacity = minOpacity + (maxOpacity - minOpacity) * ((total - layer) / total);
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

const Arm: ParentComponent<{ total: number; layer: number; date: Date }> = (props) => {
  const color = createMemo(() => getColorString(props.total, props.layer));
  return (
    <>
      <div
        classList={{ [styles.hand]: true, [styles['rotate-minute']]: true }}
        style={{
          'background-color': color(),
        }}
      >
        <Show when={props.layer <= props.total}>
          <Arm total={props.total} layer={props.layer + 1} date={props.date} />
        </Show>
      </div>
      <div
        classList={{ [styles.hand]: true, [styles['rotate-second']]: true }}
        style={{
          'background-color': color(),
        }}
      >
        <Show when={props.layer <= props.total}>
          <Arm total={props.total} layer={props.layer + 1} date={props.date} />
        </Show>
      </div>
    </>
  );
};

const FractalClock: Component = () => {
  const date = new Date();
  const color = createMemo(() => getColorString());
  const seconds = () => date.getSeconds() + 60 * date.getMinutes() + 3600 * date.getHours();
  return (
    <div
      classList={{ [styles.hand]: true, [styles['rotate-hour']]: true, [styles.hour]: true }}
      style={{
        'background-color': color(),
      }}
    >
      <style type="text/css">{`.${styles.hand} {animation-delay: ${seconds() * -1}s}`}</style>
      <Arm total={3} layer={1} date={date} />
    </div>
  );
};

export default FractalClock;
