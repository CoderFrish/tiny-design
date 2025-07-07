import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [
    solid(),
    dts({
      tsconfigPath: '../../tsconfig.app.json',
      outDir: '../../dist/types',
    }),
  ],
  build: {
    outDir: '../../dist',
    lib: {
      entry: 'index.ts',
      name: "index",
      fileName: 'index',
      formats: ['cjs', 'es', 'umd'],
    },
    rollupOptions: {
      external: ['solid-js'],
    },
  },
});
