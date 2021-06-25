import pkg from '../package.json';

// 版本号
export const version = pkg.version;
// 打包的名称
export const name = 'tools';

export const main = pkg.main;


// 输入（入口）文件
export const input = 'src/index.ts';

// 默认查找的文件扩展名
export const extensions = ['.ts', '.js'];

export const banner = `/*!
* ${pkg.name} ${version} (https://git.code.tencent.com/ucall/npm_ucall/ufin-tools.git)
* API https://git.code.tencent.com/ucall/npm_ucall/ufin-tools/blob/master/README.md
* Copyright 2021-${new Date().getFullYear()} jed. All Rights Reserved
* Licensed under MIT (https://git.code.tencent.com/ucall/npm_ucall/ufin-tools/blob/master/LICENSE)
*/
`;
