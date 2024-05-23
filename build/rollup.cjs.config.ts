import * as config from './config.js';
import baseRollupConfig from './rollup.base.config.js';
import { merge } from 'lodash-es';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';

const RollupBaseConfig = merge({}, baseRollupConfig, {
  output: {
    format: 'cjs',
    name: config.name,
  },
});

export default defineConfig([
  // 基础版本
  merge({}, RollupBaseConfig, {
    output: {
      file: `libs/${config.name}.cjs.js`,
    },
  }),
  // 压缩版本
  merge({}, RollupBaseConfig, {
    output: {
      file: `libs/${config.name}.cjs.min.js`,
    },
    plugins: [terser()],
  }),
]);
