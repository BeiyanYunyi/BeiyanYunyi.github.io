import { createRoot, createSignal } from 'solid-js';

const createAnimatePause = () => {
  const [pause, setPause] = createSignal(false);
  return { pause, setPause };
};

export default createRoot(createAnimatePause);
