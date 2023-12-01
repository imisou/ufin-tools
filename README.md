# ufin-tools

前端代码工具库

> 目的：整合业务中常用地工具方法，进行统一管理

为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到 npm，以提高开发效率。

## 目录介绍

```
.
├── build 脚本
├── libs 编译产出代码
├── docs 项目文档
├── src 源代码目录
├── tests 单元测试
```

## 安装使用

### npm:

```bash
$ npm install ufin-tools -S
```

1. 完整使用

```js
// 完整引入
const tools = require('ufin-tools');
const browser = tools.getBrowser();
```

2. **推荐使用方法**

依赖加载

```js
import { getBrowser } from 'ufin-tools';
const browser = getBrowser();
```

## API 文档

[文档地址](https://nj-front-docs-1301513947.cos.ap-nanjing.myqcloud.com/ufin/ufin-tools/0.0.7/global.html)

## 方法

### 核心方法

### 类型判断

- isArray
- isBoolean
- isCardID
- isEmail
- isEmptyValue
- isEnglishName
- isFunction
- isIos
- isIP
- isNil
- isNull
- isNumber
- isObject
- isPC
- isString
- isSymbol
- isUndefined
- isTelePhone
- isZipcode
- isBankNo
- isUri
- isMobile
- isChinaName
- isNickName

### 格式化

- formatCurrency
- formatCurrencyToChinese
- formatNumberToChinese
- formatPhone
- formatPhoneEllipsis
- formatTime
- formatWord

### 平台判断

- getBrowser
- getOs
- inAlipay
- inQQBrowser
- inUCBrowser
- inWeibo
- inWeixin

### number 类型方法

- random
- uuid

### string 类型的方法

- trim

### 日期处理

- relativeTime

### cookie 处理

### url 处理

- url
- getUrlQuery
- getUrlQueryByName

### title 处理

### class/style 方法

### 常用正则表达式

- EmailRegexp

邮箱的正则表达式

- IPRegexp

IP 正则表达式

- QQRegexp

QQ 号码正则表达式

- PostalRegexp

邮政号码正则表达式

- PhoneRegexp

手机号码正则表达式 -- 202203 版本

- TelephoneRegexp

有效的电话(座机)正则表达式

- ChinaNameRegexp

中文姓名正则

- NickNameRegexp

昵称正则

- EnglishNameRegexp

英文姓名正则

- BankNoRegexp

银行卡号（10 到 30 位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）

- DigitRegexp

数字正则，注意 不关注是否数字第一个为 0，且支持 负值，小数位，如 12 ， 012 , -12, 12.1

## 贡献指南

首次运行需要先安装依赖

```bash
$ yarn install
```

#### 添加测试用例

在 在每一个方法文件夹下建一个 `__test__/*.spec.ts` 添加相应的测试用例文件

#### 打包生成生产代码

```bash
$ npm run build
```

#### 运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

#### 生成文档

```bash
$ npm run gen:docs
```
