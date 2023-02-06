import { SiSolid } from 'solid-icons/si';
import { Component } from 'solid-js';
import png from './assets/头像圆.png';
import webp from './assets/头像圆.webp';
import FractalClock from './components/FractalClock';
import GhRepo from './components/GhRepo';
import Intro from './components/Intro';
import SideBar from './components/SideBar';

const App: Component = () => (
  <>
    <FractalClock />
    <SideBar />
    <div class="flex flex-col items-center gap-4 text-neutral-700 dark:text-neutral-200 p-4">
      <img
        src={webp}
        onError={(e) => {
          e.currentTarget.src = png;
        }}
        class="h-40 w-40"
      />
      <h1 class="text-3xl">北雁云依</h1>
      <Intro />
      <GhRepo />
    </div>
    <div class="flex flex-col items-center gap-4 text-neutral-700 dark:text-neutral-200 p-4">
      <p>Copyleft in AGPL.</p>
      <p>
        <a
          class="underline"
          href="https://github.com/BeiyanYunyi/BeiyanYunyi.github.io"
          target="_blank"
        >
          Built
        </a>{' '}
        with{' '}
        <a href="https://www.solidjs.com/" class="underline" target="_blank">
          <SiSolid />
          SolidJS
        </a>
        .
      </p>
    </div>
  </>
);

export default App;
