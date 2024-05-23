import * as config from './config.js';
import baseRollupConfig from './rollup.base.config.js';
import { merge } from 'lodash-es';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';

const iifeRollupBaseConfig = merge({}, baseRollupConfig, {
  output: {
    format: 'iife',
    name: config.name,
  },
});

export default defineConfig([
  // 基础版本
  merge({}, iifeRollupBaseConfig, {
    output: {
      file: `libs/${config.name}.iife.js`,
    },
  }),
  // 压缩版本
  merge({}, iifeRollupBaseConfig, {
    output: {
      file: `libs/${config.name}.iife.min.js`,
    },
    plugins: [terser()],
  }),
]);
