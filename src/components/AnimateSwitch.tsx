import { IoPause, IoPlay } from 'solid-icons/io';
import { Component, Show } from 'solid-js';
import animatePause from '../utils/animatePause';

const AnimateSwitch: Component = () => (
  <label class="cursor-pointer">
    <Show when={!animatePause.pause()} fallback={<IoPlay size={24} />}>
      <IoPause size={24} />
    </Show>
    <input
      class="hidden"
      type="checkbox"
      onChange={(e) => {
        animatePause.setPause(e.currentTarget.checked);
      }}
      checked={!!animatePause.pause()}
    />
  </label>
);

export default AnimateSwitch;
