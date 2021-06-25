# @ufin/ufin-tools

前端代码工具库

> 目的：整合业务中常用地工具方法，进行统一管理

为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到 npm，以提高开发效率。

## 安装使用

### npm:

```bash
$ npm install @ufin/ufin-tools -S
```

1. 完整使用

```js
// 完整引入
const tools = require('@ufin/ufin-tools');
const browser = tools.getBrowser();
```

2. **推荐使用方法**

依赖加载

```js
import { getBrowser } from '@ufin/ufin-tools';
const browser = tools.getBrowser();
```

## API 文档

### is

#### &emsp;&emsp;[isBoolean][isboolean]&emsp;&emsp;判断是否是 Boolean 类型

[isBoolean](https://git.code.tencent.com/ucall/npm_ucall/ufin-tools/blob/master/src/is/base.ts)
