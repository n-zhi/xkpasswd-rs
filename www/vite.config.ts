import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import wasm from 'vite-plugin-wasm';
import tsconfigPaths from 'vite-tsconfig-paths';

const basePath = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base: basePath.endsWith('/') ? basePath : `${basePath}/`,
  plugins: [preact(), wasm(), tsconfigPaths()],
});
