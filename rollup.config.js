import bundlesize from 'rollup-plugin-bundle-size';
import resolve from 'rollup-plugin-node-resolve';
import commonJS from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  // Browser-friendly UMD build
  {
    input: 'src/index.js',
    output: {
      name: 'nugit-datetime-utils',
      file: 'lib/nugit-datetime-utils.umd.js',
      format: 'umd',
    },
    plugins: [
      resolve(),
      commonJS({ include: 'node_modules/**' }),
      babel({ exclude: 'node_modules/**' }),
      uglify({ sourcemap: false }),
      bundlesize(),
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: 'src/index.js',
    external: id => /^date-fns/.test(id),
    output: [
      {
        name: 'nugit-datetime-utils',
        file: pkg.main,
        format: 'cjs',
      },
      {
        name: 'nugit-datetime-utils',
        file: pkg.module,
        format: 'es',
      },
    ],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      bundlesize(),
    ],
  },
];
