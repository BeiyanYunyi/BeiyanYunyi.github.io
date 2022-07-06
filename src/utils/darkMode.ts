import { createEffect, createRoot, createSignal } from 'solid-js';

const createDarkMode = () => {
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
  return { dark, setDark };
};

const darkMode = createRoot(createDarkMode);

export default darkMode;
