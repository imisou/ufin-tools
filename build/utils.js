import path from 'path';
import typescript from 'rollup-plugin-typescript2';
import { merge } from 'lodash';
import execa from 'execa';

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

  run: (bin , args , opts) => {
    return execa(bin, args, {
      stdio: 'inherit',
      ...opts,
    });
  },
};
