import * as config from './config.js';
import baseRollupConfig from './rollup.base.config.js';
import { merge } from 'lodash-es';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';

const umdRollupBaseConfig = merge({}, baseRollupConfig, {
  output: {
    format: 'umd',
    name: config.name,
  },
});

export default defineConfig([
  // 基础版本
  merge({}, umdRollupBaseConfig, {
    output: {
      file: `libs/${config.name}.js`,
    },
  }),
  // 压缩版本
  merge({}, umdRollupBaseConfig, {
    output: {
      file: `libs/${config.name}.min.js`,
    },
    plugins: [terser()],
  }),
]);
