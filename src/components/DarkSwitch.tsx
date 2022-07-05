import { IoMoonOutline, IoSunnyOutline } from 'solid-icons/io';
import { Component, Show } from 'solid-js';
import darkMode from '../utils/darkMode';

const DarkSwitch: Component = () => (
  <label class="p-2 text-neutral-800 dark:text-neutral-100 fixed gap-1 right-2">
    <Show when={darkMode.dark()} fallback={<IoMoonOutline size="24px" />}>
      <IoSunnyOutline size="24px" />
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
