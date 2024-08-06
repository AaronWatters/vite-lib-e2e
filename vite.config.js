const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'vite-lib-e2e',
      fileName: (format) => `vite-lib-e2e.${format}.js`
    }
  }
});
