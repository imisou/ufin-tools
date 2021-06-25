import * as config from './config';
import baseRollupConfig from './rollup.base.config';
import { merge } from 'lodash';
import { uglify } from 'rollup-plugin-uglify';
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
    plugins: [uglify()],
  }),
]);
