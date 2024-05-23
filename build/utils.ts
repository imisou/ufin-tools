import path from 'path';
import typescript from '@rollup/plugin-typescript';
import { merge } from 'lodash-es';

export default {
  resolve: dir => {
    return path.resolve(__dirname, '../', dir);
  },
  getCompiler: function getCompiler(opt) {
    opt = opt || {
      tsconfigOverride: { compilerOptions: { module: 'ES2015' } },
    };

    return typescript(opt);
  },
  isDev: function isDev() {
    return process.env.NODE_ENV === 'production';
  },

  merge: (...args) => {
    let result = {};
    result = merge(...args, {});
    return result;
  },
};
