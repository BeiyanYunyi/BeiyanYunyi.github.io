import { Component } from 'solid-js';
import png from './assets/头像圆.png';
import webp from './assets/头像圆.webp';
import DarkSwitch from './components/DarkSwitch';
import GhRepo from './components/GhRepo';
import Intro from './components/Intro';

const App: Component = () => (
  <>
    <DarkSwitch />
    <div class="flex flex-col items-center gap-4 text-neutral-800 dark:text-neutral-100 p-4">
      <img
        src={webp}
        onError={(e) => {
          e.currentTarget.src = png;
        }}
        class="h-40 w-40"
      />
      <h1 class="text-3xl">黎想</h1>
      <Intro />
      <GhRepo />
    </div>
  </>
);

export default App;
