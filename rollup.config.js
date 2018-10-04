import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  input: 'source/datetimeUtils.js',
  output: {
    file: './lib/datetimeUtils.js',
    format: 'umd',
    name: 'nugit-datetime-utils',
  },
  plugins: [
    resolve(),
    commonJS({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
  ],
};

