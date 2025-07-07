import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solid(),
    createHtmlPlugin({
      entry: '/main.tsx',
    }),
  ],
});
