import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';
import { setDefaultResultOrder } from 'node:dns';

setDefaultResultOrder('verbatim');

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  build: {
    target: 'esnext',
  },
});
