import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
   server: {
      port: 6688,
      host: '0.0.0.0',
   },
});
