import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoExternal from 'rollup-plugin-auto-external';
import swc from 'rollup-plugin-swc';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import replace from '@rollup/plugin-replace';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.jsx',
  external: ['react', 'react-dom', 'react-router-dom'],
  output: {
    file: 'public/js/app.js',
    // For 'external' and 'output.globals' are only available
    // when we output bundles in either 'iife' or 'umd',
    // we are not specifying 'es'.
    format: 'umd',
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'react-router-dom': 'ReactRouterDOM',
    },
  },
  plugins: [
    !production &&
      serve({
        verbose: true,
        contentBase: ['', 'public'],
        host: 'localhost',
        port: 8080,
      }),
    !production && livereload({ watch: 'public/js' }),
    production && terser(),
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    commonjs(),
    autoExternal(),
    postcss({
      extract: 'public/css/styles.css',
      minimize: production,
      sourceMap: true,
      // Allows default import for styles.
      // (alternatively, you can set 'true' for
      // 'swc.jsc.parser.exportDefaultFrom')
      extensions: ['.css'],
    }),
    swc({
      jsc: {
        parser: {
          jsx: true,
          // exportDefaultFrom: true,
        },
        target: 'es2015',
      },
    }),
    alias({
      entries: [{ find: '@', replacement: 'src' }],
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
};
