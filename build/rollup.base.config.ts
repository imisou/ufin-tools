import * as config from './config.js';

import nodeResolve from '@rollup/plugin-node-resolve'; //加载查找外部模块
import commonjs from '@rollup/plugin-commonjs'; //加载查找外部模块
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { resolve } from 'path';

export default {
  // 入口函数
  input: config.input,

  external: ['lodash-es', 'vue'],

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

    commonjs({
      //  commonjs模块支持
      include: 'node_modules/**', // 包括
      exclude: [], // 排除
    }),

    typescript({
      // 如果 tsconfig 中的 declarationDir 没有定义，则优先使用 package.json 中的 types 或 typings 定义的目录， 默认值：outputDir
      // declarationDir: config.declarationDir,
      // 用来给 输出目录 outDir 提供源文件目录结构的，以便生成的文件中的导入导出能够正确地访问；
      // rootDir: dirname(config.input),
      // tsconfigOverride: { compilerOptions: { module: 'ES2015' } },
      tsconfig: './tsconfig.json',

      // useTsconfigDeclarationDir: true,
    }), // 将 TypeScript 转换为 JavaScript

    babel({
      extensions: ['.js', '.ts'],
      // runtimeHelpers: true,
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      // runtimeHelpers: true,
      // babelHelpers: 'runtime', // 使plugin-transform-runtime生效
      // 使用预设
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: false,
            // 目标浏览器
            targets: {
              edge: '17',
              firefox: '60',
              chrome: '67',
              safari: '11.1',
              ie: '10',
            },
          },
        ],
      ],
      plugins: [
        //  多次导入的文件，只导入一次
        // "@babel/plugin-transform-runtime",
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
      ],
    }),
  ],

  // extensions: config.extensions,
};
