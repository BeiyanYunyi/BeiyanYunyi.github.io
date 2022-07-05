/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {},
  plugins: [require('windicss/plugin/typography')({ dark: true })],
  darkMode: 'class',
});
