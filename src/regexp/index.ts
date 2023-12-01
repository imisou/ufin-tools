// 邮箱的正则表达式
export const EmailRegexp =
  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;

// export const EmailRegexp =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

// IP正则表达式
export const IPRegexp =
  /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/;

/**
 * QQ号码正则表达式
 * @example 492877865 、 1532653
 * @example 错误 ： 012565982 、 12312312423434
 */
export const QQRegexp = /^[1-9][0-9]{4,9}$/;

// 邮政号码正则表达式
export const PostalRegexp = /^[1-9]\d{5}$/;

// 手机号码正则表达式 -- 202203版本
export const PhoneRegexp =
  /^1((3[0-9])|(4[5,7])|(5[0-3,5-9])|(66|67)|(7[0,3,5-8])|(8[0-9])|(9[0-9]))\d{8}$/;

/**
 * 有效的电话(座机)正则表达式
 * @example 0571-4221236
 * @example 错误 ： 15601598909 、 252-12312
 */
export const TelephoneRegexp = /^0\d{2,3}-\d{7,8}$/;

/**
 * 中文姓名正则
 * @example 胡歌
 * @example 错误 ： Jad
 */
export const ChinaNameRegexp = /^[\u4E00-\u9FA5]{2,}$/;

/**
 * 昵称正则
 * @example 胡歌 、Jad 、 胡歌1
 * @example 错误 ： 胡歌# 、 @Jad
 */
export const NickNameRegexp =
  /^[^`~!@#$^&*()+=|{}':;',\[\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？%]{2,}$/;

/**
 * 英文姓名正则
 * @example James 、 Kevin Wayne Durant 、 Dirk Nowitzki
 * @example 错误 ： 胡歌 、 @Jad
 */
export const EnglishNameRegexp = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;

/**
 * 银行卡号（10到30位, 覆盖对公/私账户, 参考[微信支付](https://pay.weixin.qq.com/wiki/doc/api/xiaowei.php?chapter=22_1)）
 */
export const BankNoRegexp = /^[1-9]\d{9,29}$/;

/**
 * 数字正则，注意 不关注是否数字第一个为0，且支持 负值，小数位，如 12 ， 012 , -12, 12.1
 * @example 100 、 012 、 -012 、 12.12
 * @example 错误 ： abc
 */
export const DigitRegexp = /^-?\d+\.?\d*$/;
