import * as config from './config';
import baseRollupConfig from './rollup.base.config';
import { merge } from 'lodash';
import { uglify } from 'rollup-plugin-uglify';
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
    plugins: [uglify()],
  }),
]);
