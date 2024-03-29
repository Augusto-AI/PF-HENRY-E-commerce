import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';


export default defineConfig(({ production }) => {
  process.env.NODE_ENV = production;

  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3000
    }
  };
});
