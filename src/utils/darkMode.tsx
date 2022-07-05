import { createEffect, createSignal } from 'solid-js';

const [dark, setDark] = createSignal(window.matchMedia('(prefers-color-scheme: dark)').matches);
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  setDark(e.matches);
});
createEffect(() => {
  if (dark()) {
    window.document.documentElement.classList.add('dark');
  } else {
    window.document.documentElement.classList.remove('dark');
  }
});
const darkMode = { dark, setDark };

export default darkMode;
