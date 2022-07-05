import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [solidPlugin(), WindiCSS()],
  build: {
    target: 'esnext',
  },
  base: '',
  server: { port: 3000 },
});
