import { Component } from 'solid-js';
import DarkSwitch from './components/DarkSwitch';
import Intro from './components/Intro';

const App: Component = () => (
  <>
    <DarkSwitch />
    <div class="flex flex-col items-center gap-4 text-neutral-800 dark:text-neutral-100 p-4">
      <img
        src="./头像圆.webp"
        class="h-40 w-40"
        onError={(e) => {
          e.currentTarget.src = './头像圆.png';
        }}
      />
      <h1 class="text-3xl">黎想</h1>
      <Intro />
    </div>
  </>
);

export default App;
