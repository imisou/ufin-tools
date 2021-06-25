import * as config from './config';

import nodeResolve from 'rollup-plugin-node-resolve'; //加载查找外部模块
import commonjs from 'rollup-plugin-commonjs'; //加载查找外部模块
import typescript from 'rollup-plugin-typescript2';
import { resolve } from 'path';

export default {
  // 入口函数
  input: config.input,

  // external: ['lodash', 'vue'],

  output: {
    file: `libs/${config.name}.js`,

    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    banner: config.banner,
  },

  plugins: [
    // 使用node解析算法查找模块
    nodeResolve({
      /*
			browser   类型: Boolean   默认值: false
			是否优先使用 `package.json` 中的 browser 字段来解析依赖包的入口文件；
			- 构建专门用于浏览器环境的包时，建义设置为 `browser:true`；
			- 构建专门用于node环境的包时，建义设置为 `browser:false` 或者 删除此选项；
			*/
      browser: true,
      /*
			extensions   类型: Array[...String]    默认值: ['.mjs', '.js', '.json', '.node']
			扩展文件名
			*/
      extensions: config.extensions,
    }),

    commonjs(),

    typescript({
      // 如果 tsconfig 中的 declarationDir 没有定义，则优先使用 package.json 中的 types 或 typings 定义的目录， 默认值：outputDir
      // declarationDir: config.declarationDir,
      // 用来给 输出目录 outDir 提供源文件目录结构的，以便生成的文件中的导入导出能够正确地访问；
      // rootDir: dirname(config.input),
      tsconfigOverride: { compilerOptions: { module: 'ES2015' } },

      tsconfig: resolve(__dirname, '../tsconfig.json'),


    }), // 将 TypeScript 转换为 JavaScript
  ],

  // extensions: config.extensions,
};
