export * from './core/index';

// 类型判断
export * from './is/isArray';
export * from './is/isBoolean';
export * from './is/isCardID';
export * from './is/isEmail';
export * from './is/isEmptyValue';
export * from './is/isEnglishName';
export * from './is/isFunction';
export * from './is/isIos';
export * from './is/isIP';
export * from './is/isNil';
export * from './is/isNull';
export * from './is/isNumber';
export * from './is/isObject';
export * from './is/isPC';
export * from './is/isString';
export * from './is/isSymbol';
export * from './is/isUndefined';
export * from './is/isTelePhone';
export * from './is/isZipcode';
export * from './is/isBankNo';
export * from './is/isUri';
export * from './is/isQQ';
export * from './is/isPostal';
export * from './is/isMobile';

//-------------------------------------
//----------  number
//-------------------------------------
export * from './number/random';
export * from './number/uuid';

//-------------------------------------
//----------  format
//-------------------------------------
import { FormatCurrencyOption, formatCurrency } from './format/formatCurrency';
export * from './format/formatCurrencyToChinese';
export * from './format/formatNumberToChinese';
export * from './format/formatPhone';
export { FormatPhoneEllipsisOption, formatPhoneEllipsis } from './format/formatPhoneEllipsis';
export * from './format/formatTime';
export * from './format/formatWord';

//-------------------------------------
//----------  平台
//-------------------------------------
export * from './device/getBrowser';
export * from './device/getOs';
export * from './device/inAlipay';
export * from './device/inQQBrowser';
export * from './device/inUCBrowser';
export * from './device/inWeibo';
export * from './device/inWeixin';

//-------------------------------------
//----------  string
//-------------------------------------
export * from './string/trim';

export * from './class/index';
export * from './style/index';
//-------------------------------------
//----------  常用的正则
//-------------------------------------
export * from './regexp/index';

export * from './title/index';

//-------------------------------------
//----------  date
//-------------------------------------
export { relativeTime, RelativeTimeOptions } from './date/relativeTime';

//-------------------------------------
//----------  cookies
//-------------------------------------
export * from './cookies/index';

//-------------------------------------
//----------  URL
//-------------------------------------
export * from './url/url';
export { getUrlQuery, UrlQueryData } from './url/getUrlQuery';
export * from './url/getUrlQueryByName';

//-------------------------------------
//----------  DOM
//-------------------------------------
export * from './dom/on';
export * from './dom/once';
export * from './dom/off';
