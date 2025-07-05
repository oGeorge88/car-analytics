import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default ({ mode }) => {
  // Load environment variables based on the current mode (e.g., development)
  const env = loadEnv(mode, process.cwd());

  console.log('VITE_BASE_PATH:', env.VITE_BASE_PATH);

  return defineConfig({
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
  });
};
