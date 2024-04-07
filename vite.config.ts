import million from 'million/compiler';
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export default defineConfig({
  plugins: [million.vite({ auto: true }), TanStackRouterVite(), react()],
  server: {
    port: 3005,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
