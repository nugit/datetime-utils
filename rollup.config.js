import babel from '@rollup/plugin-babel';
import commonJS from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import bundlesize from 'rollup-plugin-bundle-size';
import { terser } from 'rollup-plugin-terser';
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
      nodeResolve(),
      commonJS({
        include: 'node_modules/**',
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      terser(),
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
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      bundlesize(),
    ],
  },
];
