import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { defineConfig } from 'vitest/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  test: {
    include: ['tests/**/*.spec.ts', 'src/**/*.spec.ts'],
    environment: 'node',
    globals: true,
  },
  resolve: {
    alias: {
      '@domain': resolve(__dirname, './src/domain'),
      '@application': resolve(__dirname, './src/application'),
      '@infrastructure': resolve(__dirname, './src/infrastructure'),
      '@shared': resolve(__dirname, './src/shared'),
    }
  }
});