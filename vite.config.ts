import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

const NODE_ENV = process.env.NODE_ENV;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: NODE_ENV === 'development' ? '/' : 'https://mypymypy.github.io/mypymypy-rssReact2024Q3/',
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
