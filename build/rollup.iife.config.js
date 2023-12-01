import * as config from './config';
import baseRollupConfig from './rollup.base.config';
import { merge } from 'lodash';
import { uglify } from 'rollup-plugin-uglify';
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
    plugins: [uglify()],
  }),
]);
