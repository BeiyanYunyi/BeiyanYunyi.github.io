import { Component } from 'solid-js';
import AnimateSwitch from './AnimateSwitch';
import DarkSwitch from './DarkSwitch';

const SideBar: Component = () => (
  <div class="flex flex-col p-2 gap-2 fixed right-2 text-neutral-700 dark:text-neutral-200">
    <DarkSwitch />
    <AnimateSwitch />
  </div>
);

export default SideBar;
