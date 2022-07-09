import { IoMoon, IoSunny } from 'solid-icons/io';
import { Component, Show } from 'solid-js';
import darkMode from '../utils/darkMode';

const DarkSwitch: Component = () => (
  <label class="cursor-pointer">
    <Show when={darkMode.dark()} fallback={<IoMoon size={24} />}>
      <IoSunny size={24} />
    </Show>
    <input
      class="hidden"
      type="checkbox"
      onChange={(e) => {
        darkMode.setDark(e.currentTarget.checked);
      }}
      checked={darkMode.dark()}
    />
  </label>
);

export default DarkSwitch;
