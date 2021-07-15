import * as config from './config';
import baseRollupConfig from './rollup.base.config';
import { merge } from 'lodash';
import { uglify } from 'rollup-plugin-uglify';
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
    plugins: [uglify()],
  }),
];

export default defineConfig(result);
