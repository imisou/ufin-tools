import * as config from './config.js';
import baseRollupConfig from './rollup.base.config.js';
import { merge } from 'lodash-es';
import terser from '@rollup/plugin-terser';
import { defineConfig } from 'rollup';

const esmRollupBaseConfig = merge({}, baseRollupConfig, {
  output: {
    format: 'es',
    name: config.name,
  }
});

const result = [
  // 基础版本
  merge({}, esmRollupBaseConfig, {
    output: {
      file: `libs/${config.name}.esm.js`,
    },
  }),
  // 压缩版本
  merge({}, esmRollupBaseConfig, {
    output: {
      file: `libs/${config.name}.esm.min.js`,
    },
    plugins: [terser()],
  }),
];

export default defineConfig(result);
