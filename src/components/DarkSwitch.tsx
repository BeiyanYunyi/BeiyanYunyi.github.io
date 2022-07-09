import { IoMoonOutline, IoSunnyOutline } from 'solid-icons/io';
import { Component, Show } from 'solid-js';
import darkMode from '../utils/darkMode';

const DarkSwitch: Component = () => (
  <label>
    <Show when={darkMode.dark()} fallback={<IoMoonOutline size={24} />}>
      <IoSunnyOutline size={24} />
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
