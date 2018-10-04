import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'source/datetimeUtils.js',
  output: {
    name: 'nugit-datetime-utils',
    file: './lib/datetimeUtils.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonJS({ include: 'node_modules/**' }),
    babel({ exclude: 'node_modules/**' }),
    uglify({ sourcemap: false }),
  ],
};

