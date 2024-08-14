// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    exclude: [...configDefaults.exclude, 'tests/e2e/*'], // Exclude e2e tests if you have any
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'vite-lib-e2e',
      fileName: (format) => `vite-lib-e2e.${format}.js`
    }
  }
});
/*
module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'vite-lib-e2e',
      fileName: (format) => `vite-lib-e2e.${format}.js`
    }
  }
});
*/
