export declare const EmailRegexp: RegExp;
export declare const IPRegexp: RegExp;
/**
 * QQ号码正则表达式
 * @example 492877865 、 1532653
 * @example 错误 ： 012565982 、 12312312423434
 */
export declare const QQRegexp: RegExp;
export declare const PostalRegexp: RegExp;
export declare const PhoneRegexp: RegExp;
/**
 * 有效的电话(座机)正则表达式
 * @example 0571-4221236
 * @example 错误 ： 15601598909 、 252-12312
 */
export declare const TelephoneRegexp: RegExp;
/**
 * 中文姓名正则
 * @example 胡歌
 * @example 错误 ： Jad
 */
export declare const ChinaNameRegexp: RegExp;
/**
 * 昵称正则
 * @example 胡歌 、Jad 、 胡歌1
 * @example 错误 ： 胡歌# 、 @Jad
 */
export declare const NickNameRegexp: RegExp;
/**
 * 英文姓名正则
 * @example James 、 Kevin Wayne Durant 、 Dirk Nowitzki
 * @example 错误 ： 胡歌 、 @Jad
 */
export declare const EnglishNameRegexp: RegExp;
/**
 * 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 */
export declare const BankNoRegexp: RegExp;
/**
 * 数字正则，注意 不关注是否数字第一个为0，且支持 负值，小数位，如 12 ， 012 , -12, 12.1
 * @example 100 、 012 、 -012 、 12.12
 * @example 错误 ： abc
 */
export declare const DigitRegexp: RegExp;
