const typescript = require('rollup-plugin-typescript2');
const vue = require('rollup-plugin-vue');

module.exports = {
  input: 'src/index.ts',
  output: {
    format: 'esm',
    file: 'dist/MyComponent.js'
  },
  plugins: [
    typescript(),
    vue(),
  ],
};
