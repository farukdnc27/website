import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { copyFileSync } from 'node:fs';

const staticRouterFallback = {
  name: 'static-router-fallback',
  closeBundle() {
    copyFileSync('dist/index.html', 'dist/404.html');
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), staticRouterFallback],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
