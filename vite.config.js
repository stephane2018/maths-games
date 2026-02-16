import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsInlineLimit: 10000,
  },
  server: {
    open: true,
  },
});
