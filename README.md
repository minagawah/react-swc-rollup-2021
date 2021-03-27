# swc-rollup-react-2021

A template project for React apps using SWC and Rollup.

[1. About](#1-about)  
[2. Installed NPM Packages](#2-installed-npm-packages)  
[3. LICENSE](#3-license)

## 1. About

A template project for React apps using SWC and Rollup.

## 2. Installed NPM Packages

```
yarn add --dev @swc/core @swc/cli @rollup/plugin-node-resolve @rollup/plugin-commonjs rollup-plugin-swc rollup-plugin-auto-external @rollup/plugin-alias rollup-plugin-serve rollup-plugin-livereload @rollup/plugin-replace rollup-plugin-postcss rollup-plugin-terser @testing-library/react concurrently prettier pretty-quick
```

We download `react`, `react-dom`, and `react-router-dom` from the CDN service (jsdelivr),
the app use them as its peer dependencies. For Rollup configuration,
we need to set them in `externals` and `output.globals`.

- @swc/core
- @swc/cli
- @rollup/plugin-node-resolve
- @rollup/plugin-commonjs
- rollup-plugin-swc
- rollup-plugin-auto-external
- @rollup/plugin-alias
- rollup-plugin-serve
- rollup-plugin-livereload
- @rollup/plugin-replace
- rollup-plugin-postcss
- rollup-plugin-terser
- @testing-library/react
- concurrently
- prettier
- pretty-quick

## 3. License

Dual-licensed under either of the followings.  
Choose at your option.

- The UNLICENSE ([LICENSE.UNLICENSE](LICENSE.UNLICENSE))
- MIT license ([LICENSE.MIT](LICENSE.MIT))
