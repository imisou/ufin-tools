/*!
* ufin-tools 0.0.1 (https://git.code.tencent.com/ucall/npm_ucall/ufin-tools.git)
* API https://git.code.tencent.com/ucall/npm_ucall/ufin-tools/blob/master/README.md
* Copyright 2021-2021 jed. All Rights Reserved
* Licensed under MIT (https://git.code.tencent.com/ucall/npm_ucall/ufin-tools/blob/master/LICENSE)
*/

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.tools = {}));
}(this, (function (exports) { 'use strict';

  var toString = Object.prototype.toString;

  /**
   * 是否是数组类型
   * @author jed
   * @param { any } val
   * @returns  { Boolean }
   */

  var isArray = function isArray(val) {
    return toString.call(val).slice(8, -1) === 'Array';
  };

  /**
   * 判断是否是Boolean类型
   * @author jed
   * @param { any } val
   * @returns  { Boolean }
   *
   * @example
   * isBoolean(true)
   * // => true
   * isBoolean("true")
   * //=> false
   */
  var isBoolean = function isBoolean(val) {
    return typeof val === 'boolean';
  };

  /******************************************
   **********   严格的身份证校验   ***************
   ******************************************/
  // 获取各省市与身份证上第1、2两位数字
  // import { ID_CARD_CITY_MAP, VALIDATE_ID_CARD_ERROR_MSG } from '@/constants/id-card-city'
  // 省、直辖市代码表
  var ID_CARD_CITY_MAP = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65', '71', '81', '82', '91']; // 加权因子

  var weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  /**
   * 身份证格式严格校验
   * @author jed
   * @param { String } sId   身份证号码
   * @returns  { Boolean }
   * @example
   * // 正确数据-输入18位身份证号且只有数字，例如130701199310302288
   * isCardID("130701199310302288")
   * // => true
   *
   * // 正确数据_输入18位身份证号且最后一位为X，例如52030219891209794X
   * isCardID("52030219891209794X")
   * // => true
   *
   * // 错误数据_输入18位身份证号且最后一位为除X外的字母，例如52030219891209794Y
   * isCardID("52030219891209794Y")
   * // => false
   */

  var isCardID = function isCardID(sId) {
    // 你输入的身份证长度或格式错误
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      return false;
    } // 你的身份证地区非法


    if (!ID_CARD_CITY_MAP.includes(sId.substr(0, 2))) {
      return false;
    } // 出生日期验证


    var sBirthday = (sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) + '-' + Number(sId.substr(12, 2))).replace(/-/g, '/');
    var d = new Date(sBirthday);

    if (sBirthday != d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
      return false;
    } // 身份证号码校验


    var sum = 0;
    var codes = '10X98765432';

    for (var i = 0; i < sId.length - 1; i++) {
      sum += Number(sId[i]) * weights[i];
    }

    var last = codes[sum % 11]; // 计算出来的最后一位身份证号码

    if (sId[sId.length - 1] != last) {
      return false;
    }

    return true;
  };

  // 邮箱的正则表达式
  var EmailRegexp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // export const EmailRegexp =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  // IP正则表达式

  var IPRegexp = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/;

  /**
   * 是否为有效的邮箱地址<br>
   * 名称允许汉字、字母、数字，域名只允许英文域名<br>
   *
   * @param {String} val 检测的值
   * @returns { boolean } 返回true|false
   * @example
   *
   * isEmail("11063296@qq.com")
   * // => true
   * test('isEmail : 正确数据', () => {
   *   expect(isEmail("11063296@qq.com")).toBe(true);
   * });
   *
   * //
   * test('isEmail : 2、错误数据-只输入空白、空或者回车 ', () => {
   *   expect(isEmail("")).toBe(false);
   *   expect(isEmail(" ")).toBe(false);
   *   expect(isEmail(`
   *   `)).toBe(false);
   * });
   *
   * // 3. 错误数据-只输入字母
   * test('isEmail : 错误数据-只输入字母', () => {
   *   expect(isEmail("qw")).toBe(false);
   * });
   *
   * // 4. 错误数据-只输入数字
   * test('isEmail : 错误数据-只输入数字', () => {
   *   expect(isEmail("123123")).toBe(false);
   * });
   * // 5. 错误数据-只输入特殊字符
   * test('isEmail : 错误数据-只输入特殊字符', () => {
   *   expect(isEmail("@#$")).toBe(false);
   * });
   *
   * // 6. 错误数据-输入以上数据的组合
   * test('isEmail : 错误数据-输入以上数据的组合', () => {
   *   expect(isEmail("1#qq.com")).toBe(false);
   * });
   * // 7. 错误数据-缺少@符号，例如email163.com
   * test('isEmail : 错误数据-缺少@符号，例如email163.com', () => {
   *   expect(isEmail("email163.com")).toBe(false);
   * });
   *
   * // 8. 错误数据-缺少黑点“.”，例如email@163com
   * test('isEmail : 错误数据-缺少黑点“.”，例如email@163com', () => {
   *   expect(isEmail("email@163com")).toBe(false);
   * });
   * // 9. 错误数据-缺少com、cn、net、hotmail等，例如：email@163.
   * test('isEmail : 错误数据-缺少com、cn、net、hotmail等，例如：email@163.', () => {
   *   expect(isEmail("email@163.")).toBe(false);
   * });
   *
   * // 10. 错误数据-@符号位置不正确，例如：email163@.com、email163.@com、email163.com@等
   * test('isEmail : 错误数据-@符号位置不正确，例如：email163@.com、email163.@com、email163.com@等', () => {
   *   expect(isEmail("email163@.com")).toBe(false);
   *   expect(isEmail("email163.@com")).toBe(false);
   *   expect(isEmail("email163.com@")).toBe(false);
   * });
   * // 11. 错误数据-黑点“.”位置不正确，例如：email.@163.com、email@.163com、email@163com.
   * test('isEmail : 错误数据-黑点“.”位置不正确，例如：email.@163.com、email@.163com、email@163com.', () => {
   *   expect(isEmail("email.@163.com")).toBe(false);
   *   expect(isEmail("email@.163com")).toBe(false);
   *   expect(isEmail("email@163com.")).toBe(false);
   * });
   */

  var isEmail = function isEmail(val) {
    return EmailRegexp.test(val);
  };

  /**
   * 判断是否是undefined类型
   * @param val
   * @returns { Boolean }
   *
   * isUndefined(undefined)
   * // => true
   *
   * isUndefined(null)
   * // => false
   * isUndefined("")
   * // => false
   */
  var isUndefined = function isUndefined(val) {
    return val === undefined;
  };

  /**
   * 判断是否是Null类型
   * @param val
   * @returns Boolean
   * @example
   *
   * isNull(null)
   * // => true
   *
   * isNull(undefined)
   * // => false
   * isNull("")
   * // => false
   */
  var isNull = function isNull(val) {
    return val === null;
  };

  /**
   * 是否是对象类型
   * @param val
   * @returns  Boolean
   * @example
   *
   * isObject({})
   * // => true
   * isObject([])
   * // => true
   *
   * isObject(1)
   * // => false
   * isObject(true)
   * // => false
   * isObject(undefined)
   * // => false
   * isObject(null)
   * // => false
   *
   */

  var isObject = function isObject(val) {
    return toString.call(val).slice(8, -1) === 'Object';
  };

  /**
   * 判断val是否是一个空值，如"" , null , undefined , [] , {} ,
   * @param val
   * @returns Boolean
   * @example
   *
   * isEmptyValue([])
   * // => true
   * isEmptyValue("")
   * // => true
   * isEmptyValue(null)
   * // => true
   * isEmptyValue(undefined)
   * // => true
   * isEmptyValue(undefined)
   * // => true
   * isEmptyValue({})
   * // => true
   *
   * // 错误的数据
   * isEmptyValue(" ")
   * // => false
   * isEmptyValue("1")
   * // => false
   */

  var isEmptyValue = function isEmptyValue(val) {
    if (isUndefined(val) || isNull(val) || val === '') {
      return true;
    }

    if (isObject(val)) {
      return !Object.keys(val).length;
    }

    if (isArray(val)) {
      return val.length === 0;
    }

    return false;
  };

  /**
   * 是否为有效的英文姓名
   *
   * @param { String } val
   * @returns {boolean}
   * @example
   *
   * isEnglishName('James');
   * // => true
   *
   * isEnglishName('Kevin Wayne Durant');
   * // => true
   *
   * isEnglishName('Dirk Nowitzki');
   * // => true
   */
  var isEnglishName = function isEnglishName(val) {
    var reg = /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/;
    return reg.test(val);
  };

  /**
   * 判断是否是函数类型
   * @param val
   * @returns { Boolean }
   * @example
   * const func = () =>  1;
   * isFunction(func)
   * // => true
   *
   * const function func() {}
   * isFunction(func)
   * // => true
   *
   * isFunction("1udr Bide")
   * // => false
   */
  var isFunction = function isFunction(val) {
    return typeof val === 'function';
  };

  /**
   * 判断是否是IOS系统 ''
   * @author jed
   * @returns { Boolean }
   */
  var isIos = function isIos() {
    var u = navigator.userAgent;

    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
      // 安卓手机
      return false;
    } else if (u.indexOf('iPhone') > -1) {
      // 苹果手机
      return true;
    } else if (u.indexOf('iPad') > -1) {
      // iPad
      return false;
    } else if (u.indexOf('Windows Phone') > -1) {
      // winphone手机
      return false;
    } else {
      return false;
    }
  };

  /**
   * IP格式校验
   *
   * @param {String} str 检测的值
   * @returns Boolean
   *
   */

  var isIP = function isIP(str) {
    return IPRegexp.test(str);
  };

  /**
   * 判断是否为 null 或 undefined 类型。
   * @param val
   * @returns Boolean
   * @example
   *
   * isNil(undefined)
   * // => true
   * isNil(null)
   * // => true
   * isNil("")
   * // => false
   */
  var isNil = function isNil(val) {
    return val === undefined || val === null;
  };

  /**
   * 判断是否为 number 类型。
   * @param val
   * @returns Boolean
   * @example
   *
   * isNumber(1)
   * // => true
   * isNumber(-1)
   * // => true
   * isNumber("")
   * // => false
   * isNumber("1")
   * // => false
   * isNumber(null)
   * // => false
   * isNumber(false)
   * // => false
   */
  var isNumber = function isNumber(val) {
    return typeof val === 'number';
  };

  /**
   * 判断当前是否是在PC端 window | mac | linux
   * @author jed
   * @returns { Boolean }
   */
  var isPC = function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    var flag = true;

    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }

    return flag;
  };

  /**
   * 判断是否为 string 类型。
   * @param val
   * @returns Boolean
   * @example
   *
   * isString("")
   * // => true
   */
  var isString = function isString(val) {
    return typeof val === 'string';
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule(function (module) {
  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      module.exports["default"] = module.exports, module.exports.__esModule = true;
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var _typeof = unwrapExports(_typeof_1);

  /**
   * 判断参数的值是否是 Symbol 类型
   * @param val
   * @returns  Boolean
   * @example
   *
   * isSymbol(Symbol(1))
   * // => true
   */
  var isSymbol = function isSymbol(val) {
    return _typeof(val) === 'symbol';
  };

  var defineProperty = createCommonjsModule(function (module) {
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  module.exports = _defineProperty;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var _defineProperty = unwrapExports(defineProperty);

  var _extends_1 = createCommonjsModule(function (module) {
  function _extends() {
    module.exports = _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
    return _extends.apply(this, arguments);
  }

  module.exports = _extends;
  module.exports["default"] = module.exports, module.exports.__esModule = true;
  });

  var _extends = unwrapExports(_extends_1);

  var js_cookie = createCommonjsModule(function (module, exports) {
  (function (factory) {
  	var registeredInModuleLoader;
  	{
  		module.exports = factory();
  		registeredInModuleLoader = true;
  	}
  	if (!registeredInModuleLoader) {
  		var OldCookies = window.Cookies;
  		var api = window.Cookies = factory();
  		api.noConflict = function () {
  			window.Cookies = OldCookies;
  			return api;
  		};
  	}
  }(function () {
  	function extend () {
  		var i = 0;
  		var result = {};
  		for (; i < arguments.length; i++) {
  			var attributes = arguments[ i ];
  			for (var key in attributes) {
  				result[key] = attributes[key];
  			}
  		}
  		return result;
  	}

  	function decode (s) {
  		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
  	}

  	function init (converter) {
  		function api() {}

  		function set (key, value, attributes) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			attributes = extend({
  				path: '/'
  			}, api.defaults, attributes);

  			if (typeof attributes.expires === 'number') {
  				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
  			}

  			// We're using "expires" because "max-age" is not supported by IE
  			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

  			try {
  				var result = JSON.stringify(value);
  				if (/^[\{\[]/.test(result)) {
  					value = result;
  				}
  			} catch (e) {}

  			value = converter.write ?
  				converter.write(value, key) :
  				encodeURIComponent(String(value))
  					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

  			key = encodeURIComponent(String(key))
  				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
  				.replace(/[\(\)]/g, escape);

  			var stringifiedAttributes = '';
  			for (var attributeName in attributes) {
  				if (!attributes[attributeName]) {
  					continue;
  				}
  				stringifiedAttributes += '; ' + attributeName;
  				if (attributes[attributeName] === true) {
  					continue;
  				}

  				// Considers RFC 6265 section 5.2:
  				// ...
  				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
  				//     character:
  				// Consume the characters of the unparsed-attributes up to,
  				// not including, the first %x3B (";") character.
  				// ...
  				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
  			}

  			return (document.cookie = key + '=' + value + stringifiedAttributes);
  		}

  		function get (key, json) {
  			if (typeof document === 'undefined') {
  				return;
  			}

  			var jar = {};
  			// To prevent the for loop in the first place assign an empty array
  			// in case there are no cookies at all.
  			var cookies = document.cookie ? document.cookie.split('; ') : [];
  			var i = 0;

  			for (; i < cookies.length; i++) {
  				var parts = cookies[i].split('=');
  				var cookie = parts.slice(1).join('=');

  				if (!json && cookie.charAt(0) === '"') {
  					cookie = cookie.slice(1, -1);
  				}

  				try {
  					var name = decode(parts[0]);
  					cookie = (converter.read || converter)(cookie, name) ||
  						decode(cookie);

  					if (json) {
  						try {
  							cookie = JSON.parse(cookie);
  						} catch (e) {}
  					}

  					jar[name] = cookie;

  					if (key === name) {
  						break;
  					}
  				} catch (e) {}
  			}

  			return key ? jar[key] : jar;
  		}

  		api.set = set;
  		api.get = function (key) {
  			return get(key, false /* read as raw */);
  		};
  		api.getJSON = function (key) {
  			return get(key, true /* read as json */);
  		};
  		api.remove = function (key, attributes) {
  			set(key, '', extend(attributes, {
  				expires: -1
  			}));
  		};

  		api.defaults = {};

  		api.withConverter = init;

  		return api;
  	}

  	return init(function () {});
  }));
  });

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  var DEFAULT_COOKIE_OPTIONS = {
    path: '',
    expires: 1,
    prefix: 'ufin'
  };
  /**
   * 初始化Cookie的配置数据
   * @param option
   */

  var initCookie = function initCookie(option) {
    _extends(DEFAULT_COOKIE_OPTIONS, option);
  };
  /**
   * @description 存储 cookie 值
   * @param {String} name cookie name
   * @param {String} value cookie value
   * @param {Object} setting cookie setting
   * @returns undefined
   * @example
   * setCookie("token" ,"1232")
   */

  var setCookie = function setCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var cookieSetting = arguments.length > 2 ? arguments[2] : undefined;

    // 设置cookie的 配置属性  主要为 path : 路径  expires : 生命周期
    var currentCookieSetting = _objectSpread(_objectSpread({}, DEFAULT_COOKIE_OPTIONS), {}, {
      expires: 1
    });

    _extends(currentCookieSetting, cookieSetting || {});

    js_cookie.set("".concat(DEFAULT_COOKIE_OPTIONS.prefix, "-").concat(name), value, currentCookieSetting);
  };
  /**
   * @description 拿到 cookie 值
   * @param {String} name cookie name
   * @returns { String } cookie存储的值
   * @example
   *
   * getCookieByName("token")
   */

  var getCookieByName = function getCookieByName() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    return js_cookie.get("".concat(DEFAULT_COOKIE_OPTIONS.prefix, "-").concat(name));
  };
  /**
   * @description 拿到 cookie 全部的值
   */

  var getCookieAll = function getCookieAll() {
    return js_cookie.get();
  };
  /**
   * @description 删除 cookie
   * @param {String} name cookie name
   */

  var removeCookie = function removeCookie() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_COOKIE_OPTIONS.path;
    // 删除的时候必须与添加的路径相同  不然  path = '/oa'  下的 数据直接删除是删除不了的
    js_cookie.remove("".concat(DEFAULT_COOKIE_OPTIONS.prefix, "-").concat(name), {
      path: path
    });
  };

  /**
   *  获取一个在指定范围内的随机整数
   * @param {*} min  最小范围(包含)
   * @param {*} max  最大范围(包含)
   * @returns {Number} 整数
   */
  var random = function random(min, max) {
    // eslint-disable-next-line no-undef
    if (typeof min === "number" && typeof max === "number") {
      return Math.floor(min + Math.random() * (max + 1 - min));
    }

    return null;
  };

  /**
   *  生成一个指定长度的随机数
   * @param { Number } 长度
   * @returns {String} 随机数字符串
   * @example getUUID(11) => '1212asdasdA'
   */
  var getUUID = function getUUID() {
    var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "6";
    var uLen = parseInt(String(len), 10); // eslint-disable-next-line no-restricted-globals

    uLen = isNaN(uLen) ? 6 : uLen;
    var seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
    var seedLen = seed.length - 1;
    var uuid = ''; // eslint-disable-next-line no-cond-assign

    while (uLen > 0) {
      uuid += seed[Math.round(Math.random() * seedLen)];
      uLen -= 1;
    }

    return uuid;
  };

  var ChineseAA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');
  var ChineseBB = new Array('', '十', '百', '仟', '萬', '億', '点', '');
  /**
   *  将阿拉伯数字翻译成中文的大写数字
   * @param {*} num  阿拉伯数字
   * @returns { String }  阿拉伯数字的大写数字
   * @example numberToChinese(100.1)   =>   一百点一
   */

  var formatChinese = function formatChinese(num) {
    if (num === 0) return ChineseAA[0];
    var a = "".concat(num).replace(/(^0*)/g, '').split('.');
    var k = 0;
    var re = '';

    for (var i = a[0].length - 1; i >= 0; i--) {
      switch (k) {
        case 0:
          re = ChineseBB[7] + re;
          break;

        case 4:
          if (!new RegExp("0{4}//d{".concat(a[0].length - i - 1, "}$")).test(a[0])) re = ChineseBB[4] + re;
          break;

        case 8:
          re = ChineseBB[5] + re;
          ChineseBB[7] = ChineseBB[5];
          k = 0;
          break;
      }

      if (k % 4 == 2 && a[0].charAt(i + 2) !== '0' && a[0].charAt(i + 1) !== '0') re = ChineseAA[0] + re;
      if (a[0].charAt(i) !== '0') re = ChineseAA[Number(a[0].charAt(i))] + ChineseBB[k % 4] + re;
      k++;
    }

    if (a.length > 1) {
      // 加上小数部分(如果有小数部分)
      re += ChineseBB[6];

      for (var i = 0; i < a[1].length; i++) {
        re += ChineseAA[Number(a[1].charAt(i))];
      }
    }

    if (re == '一十') re = '十';
    if (re.match(/^一/) && re.length == 3) re = re.replace('一', '');
    return re;
  };

  /**
   * 判断元素上是否存在对应的class
   * @param el  元素
   * @param cls className
   * @returns Boolean
   */
  function hasClass(el, cls) {
    if (!el || !cls) return false;

    if (cls.indexOf(' ') !== -1) {
      throw new Error('className should not contain space.');
    }

    if (el.classList) {
      return el.classList.contains(cls);
    }

    return " ".concat(el.className, " ").indexOf(" ".concat(cls, " ")) > -1;
  }

  /**
   * 为元素添加class
   * @param {HTMLElement} el
   * @param {String} cls
   */

  function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');

    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) continue;

      if (el.classList) {
        el.classList.add(clsName);
      } else if (hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }

    if (!el.classList) {
      el.className = curClass;
    }
  }

  /**
   * 去除空格
   * @param  {str}
   * @param  {type}
   *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
   * @return {String}
   */
  var trim = function trim(str) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    switch (type) {
      case 1:
        return str.replace(/\s+/g, '');

      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '');

      case 3:
        return str.replace(/(^\s*)/g, '');

      case 4:
        return str.replace(/(\s*$)/g, '');

      default:
        return str;
    }
  };

  /**
   * @desc 移除指定元素上的指定class
   * @param {HTMLElement} el
   * @param {String} cls
   */

  function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';

    for (var i = 0, j = classes.length; i < j; i++) {
      var clsName = classes[i];
      if (!clsName) continue;

      if (el.classList) {
        el.classList.remove(clsName);
      } else if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }

    if (!el.classList) {
      el.className = trim(curClass);
    }
  }

  var _document;

  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/; // @ts-ignore

  var ieVersion = Number((_document = document) === null || _document === void 0 ? void 0 : _document.documentMode);
  var camelCase = function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
  };

  // @ts-nocheck
  /**
   * 获取元素上的 style
   * @param {HTMLElement} element
   * @param {String} styleName
   */

  var getStyle = ieVersion < 9 ? function (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);

    if (styleName === 'float') {
      styleName = 'styleFloat';
    }

    try {
      switch (styleName) {
        case 'opacity':
          try {
            return element['filters'].item('alpha').opacity / 100;
          } catch (e) {
            return 1.0;
          }

        default:
          // @ts-ignore
          return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
      }
    } catch (e) {
      // @ts-ignore
      return element.style[styleName];
    }
  } : function (element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    try {
      var computed = document.defaultView.getComputedStyle(element, '');
      return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
      return element.style[styleName];
    }
  };

  /**
   * 给指定元素设置style
   * @param {HTMLElement} element
   * @param {String} styleName
   * @param {String} value
   */

  function setStyle(element, styleName, value) {
    if (!element || !styleName) return;

    if (_typeof(styleName) === 'object') {
      for (var prop in styleName) {
        if (styleName.hasOwnProperty(prop)) {
          setStyle(element, prop, styleName[prop]);
        }
      }
    } else {
      styleName = camelCase(styleName);

      if (styleName === 'opacity' && ieVersion < 9) {
        element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
      } else {
        element.style[styleName] = value;
      }
    }
  }

  // @ts-nocheck

  /** **************
   *
   * 处理URL的工具方法
   *

    如：
    1. http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese

    url();            // http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese
    url('tld');       // co.uk
    url('domain');    // example.co.uk
    url('hostname');  // www.example.co.uk
    url('sub');       // www
    url('.0')         // undefined
    url('.1')         // www
    url('.2')         // example
    url('.-1')        // uk
    url('auth')       // rob:abcd1234
    url('user')       // rob
    url('pass')       // abcd1234
    url('port');      // 80
    url('protocol');  // http
    url('path');      // /path/index.html
    url('file');      // index.html
    url('filename');  // index
    url('fileext');   // html
    url('1');         // path
    url('2');         // index.html
    url('3');         // undefined
    url('-1');        // index.html
    url(1);           // path
    url(2);           // index.html
    url(-1);          // index.html
    url('query');     // query1=test&silly=willy
    url('?');         // {query1: 'test', silly: 'willy', field: ['zero', undefined, 'two']}
    url('?silly');    // willy
    url('?poo');      // undefined
    url('field[0]')   // zero
    url('field')      // ['zero', undefined, 'two']
    url('hash');      // test=hash&chucky=cheese
    url('#');         // {test: 'hash', chucky: 'cheese'}
    url('#chucky');   // cheese
    url('#poo');      // undefined

    2. mailto

    url('protocol', 'mailto:rob@websanova.com'); // mailto
    url('email', 'mailto:rob@websanova.com');    // rob@websanova.com

    2. 用第二个参数
    url('hostname', 'test.www.example.com/path/here');          // test.www.example.com
    url('protocol', 'www.example.com/path/here');               // http
    url('path', 'http://www.example.com:8080/some/path');       // /some/path
    url('port', 'http://www.example.com:8080/some/path');       // 8080
    url('protocol', 'https://www.example.com:8080/some/path');  // https

   */
  var url = function () {
    function _t() {
      return new RegExp(/(.*?)\.?([^\.]*?)\.(gl|com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/);
    }

    function _d(s) {
      return decodeURIComponent(s.replace(/\+/g, ' '));
    }

    function _i(arg, str) {
      var sptr = arg.charAt(0);
      var split = str.split(sptr);

      if (sptr === arg) {
        return split;
      }

      arg = parseInt(arg.substring(1), 10);
      return split[arg < 0 ? split.length + arg : arg - 1];
    }

    function _f(arg, str) {
      var sptr = arg.charAt(0);
      var split = str.split('&');
      var field = [];
      var params = {};
      var tmp = [];
      var arg2 = arg.substring(1);

      for (var i = 0, ii = split.length; i < ii; i++) {
        field = split[i].match(/(.*?)=(.*)/); // TODO: regex should be able to handle this.

        if (!field) {
          field = [split[i], split[i], ''];
        }

        if (field[1].replace(/\s/g, '') !== '') {
          field[2] = _d(field[2] || ''); // If we have a match just return it right away.

          if (arg2 === field[1]) {
            return field[2];
          } // Check for array pattern.


          tmp = field[1].match(/(.*)\[([0-9]+)\]/);

          if (tmp) {
            params[tmp[1]] = params[tmp[1]] || [];
            params[tmp[1]][tmp[2]] = field[2];
          } else {
            params[field[1]] = field[2];
          }
        }
      }

      if (sptr === arg) {
        return params;
      }

      return params[arg2];
    }

    return function (arg, url) {
      var _l = {};
      var tmp;

      if (arg === 'tld?') {
        return _t();
      }

      url = url || window.location.toString();

      if (!arg) {
        return url;
      }

      arg = arg.toString();

      if (tmp = url.match(/^mailto:([^\/].+)/)) {
        _l.protocol = 'mailto';
        _l.email = tmp[1];
      } else {
        // Ignore Hashbangs.
        if (tmp = url.match(/(.*?)\/#\!(.*)/)) {
          url = tmp[1] + tmp[2];
        } // Hash.


        if (tmp = url.match(/(.*?)#(.*)/)) {
          _l.hash = tmp[2];
          url = tmp[1];
        } // Return hash parts.


        if (_l.hash && arg.match(/^#/)) {
          return _f(arg, _l.hash);
        } // Query


        if (tmp = url.match(/(.*?)\?(.*)/)) {
          _l.query = tmp[2];
          url = tmp[1];
        } // Return query parts.


        if (_l.query && arg.match(/^\?/)) {
          return _f(arg, _l.query);
        } // Protocol.


        if (tmp = url.match(/(.*?)\:?\/\/(.*)/)) {
          _l.protocol = tmp[1].toLowerCase();
          url = tmp[2];
        } // Path.


        if (tmp = url.match(/(.*?)(\/.*)/)) {
          _l.path = tmp[2];
          url = tmp[1];
        } // Clean up path.


        _l.path = (_l.path || '').replace(/^([^\/])/, '/$1'); // Return path parts.

        if (arg.match(/^[\-0-9]+$/)) {
          arg = arg.replace(/^([^\/])/, '/$1');
        }

        if (arg.match(/^\//)) {
          return _i(arg, _l.path.substring(1));
        } // File.


        tmp = _i('/-1', _l.path.substring(1));

        if (tmp && (tmp = tmp.match(/(.*?)\.([^.]+)$/))) {
          _l.file = tmp[0];
          _l.filename = tmp[1];
          _l.fileext = tmp[2];
        } // Port.


        if (tmp = url.match(/(.*)\:([0-9]+)$/)) {
          _l.port = tmp[2];
          url = tmp[1];
        } // Auth.


        if (tmp = url.match(/(.*?)@(.*)/)) {
          _l.auth = tmp[1];
          url = tmp[2];
        } // User and pass.


        if (_l.auth) {
          tmp = _l.auth.match(/(.*)\:(.*)/);
          _l.user = tmp ? tmp[1] : _l.auth;
          _l.pass = tmp ? tmp[2] : undefined;
        } // Hostname.


        _l.hostname = url.toLowerCase(); // Return hostname parts.

        if (arg.charAt(0) === '.') {
          return _i(arg, _l.hostname);
        } // Domain, tld and sub domain.


        if (_t()) {
          tmp = _l.hostname.match(_t());

          if (tmp) {
            _l.tld = tmp[3];
            _l.domain = tmp[2] ? "".concat(tmp[2], ".").concat(tmp[3]) : undefined;
            _l.sub = tmp[1] || undefined;
          }
        } // Set port and protocol defaults if not set.


        _l.port = _l.port || (_l.protocol === 'https' ? '443' : '80');
        _l.protocol = _l.protocol || (_l.port === '443' ? 'https' : 'http');
      } // Return arg.


      if (arg in _l) {
        return _l[arg];
      } // Return everything.


      if (arg === '{}') {
        return _l;
      } // Default to undefined for no match.


      return undefined;
    };
  }();
  /**
   * 获取Url中的参数，并转换成对象类型
   *
   * @example
   *  import { getUrlQuery } from "ufin-tools"
   *  const queryObjectData = getUrlQuery()
   *
   * @example
   *  import { getUrlQuery } from "ufin-tools"
   *  const queryObjectData = getUrlQuery("http://www.baidu.com?name=2")
   *
   * @param url  URL 地址
   * @returns Object
   */

  var getUrlQuery = function getUrlQuery(urlstr) {
    urlstr = !urlstr ? window.location.href : urlstr;
    return url('?', urlstr);
  };
  /**
   * 根据Name获取Url中的对应的参数
   *
   * @example
   *  import { getUrlQueryByName } from "ufin-tools"
   *  const val = getUrlQueryByName("name")
   * @example
   *  import { getUrlQueryByName } from "ufin-tools"
   *  const val1 = getUrlQueryByName("name" , "http://www.baidu.com?name=2")
   *
   * @param { String } name  属性的name
   * @param { String }  urlStr  URL 地址
   * @returns string | undefined
   */

  var getUrlQueryByName = function getUrlQueryByName(name, urlstr) {
    // url 地址
    urlstr = !urlstr ? window.location.href : urlstr; // 查询条件

    name = name ? name.trim() : '';
    return url("?".concat(name), urlstr);
  };

  // 浏览器的类型
  exports.BrowserType = void 0;

  (function (BrowserType) {
    BrowserType["Chrome"] = "Chrome";
    BrowserType["Safari"] = "Safari";
    BrowserType["Opera"] = "Opera";
    BrowserType["FF"] = "FF";
    BrowserType["Edge"] = "Edge";
    BrowserType["IE11"] = "IE11";
    BrowserType["IE10"] = "IE10";
    BrowserType["IE9"] = "IE9";
    BrowserType["IE8"] = "IE8";
    BrowserType["IE7"] = "IE7";
    BrowserType["IEOld"] = "IE7\u4EE5\u4E0B";
  })(exports.BrowserType || (exports.BrowserType = {}));
  /**
   * @desc 获取当前浏览器的类型
   *
   * @returns ['Chrome'、"Safari"、"Opera"、"FF"、"Edge"、"IE11"、"IE10"、"IE9"、"IE8"、"IE7"、"IE7以下"]
   */


  var getBrowser = function getBrowser() {
    var _navigator = navigator,
        userAgent = _navigator.userAgent; // 取得浏览器的userAgent字符串

    var isOpera = userAgent.indexOf('Opera') > -1; // 判断是否Opera浏览器

    var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera; // 判断是否IE浏览器

    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;
    var isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // 判断是否IE的Edge浏览器

    var isFF = userAgent.indexOf('Firefox') > -1; // 判断是否Firefox浏览器

    var isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1; // 判断是否Safari浏览器

    var isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1; // 判断Chrome浏览器

    if (isIE) {
      var reIE = new RegExp('MSIE (\\d+\\.\\d+);');
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp.$1);
      if (fIEVersion === 7) return exports.BrowserType.IE7;
      if (fIEVersion === 8) return exports.BrowserType.IE8;
      if (fIEVersion === 9) return exports.BrowserType.IE9;
      if (fIEVersion === 10) return exports.BrowserType.IE10;
      return exports.BrowserType.IEOld; // IE版本过低
    }

    if (isIE11) return exports.BrowserType.IE11;
    if (isEdge) return exports.BrowserType.Edge;
    if (isFF) return exports.BrowserType.FF;
    if (isOpera) return exports.BrowserType.Opera;
    if (isSafari) return exports.BrowserType.Safari;
    if (isChrome) return exports.BrowserType.Chrome;
  };

  // 系统平台名称
  exports.BrowserDetectOS = void 0;

  (function (BrowserDetectOS) {
    BrowserDetectOS["Mac"] = "mac";
    BrowserDetectOS["Android"] = "android";
    BrowserDetectOS["Ios"] = "ios";
    BrowserDetectOS["Linux"] = "linux";
    BrowserDetectOS["Window"] = "window";
    BrowserDetectOS["Other"] = "other";
  })(exports.BrowserDetectOS || (exports.BrowserDetectOS = {}));
  /**
   * @desc 获取当前系统类型
   * @returns BrowserDetectOS 'mac' | 'android' | 'ios' | 'linux' | 'window' | 'other'
   */


  var getOs = function getOs() {
    var sUserAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent || '';
    var isWin = navigator.platform === 'Win32' || navigator.platform === 'Windows';
    var isMac = navigator.platform === 'Mac68K' || navigator.platform === 'MacPPC' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel';
    if (isMac) return exports.BrowserDetectOS.Mac;
    var isLinux = String(navigator.platform).indexOf('Linux') > -1;

    if (isLinux) {
      var _isAndroid = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;

      if (_isAndroid) {
        return exports.BrowserDetectOS.Android;
      }

      var _isiOS = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端


      if (_isiOS) {
        return exports.BrowserDetectOS.Ios;
      }

      return exports.BrowserDetectOS.Linux;
    }

    if (isWin) {
      var _isAndroid2 = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;

      if (_isAndroid2) {
        return exports.BrowserDetectOS.Android;
      }

      var _isiOS2 = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端


      if (_isiOS2) {
        return exports.BrowserDetectOS.Ios;
      }

      return exports.BrowserDetectOS.Window;
    }

    var isAndroid = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;

    if (isAndroid) {
      return exports.BrowserDetectOS.Android;
    }

    var isiOS = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

    if (isiOS) {
      return exports.BrowserDetectOS.Ios;
    }

    return exports.BrowserDetectOS.Other;
  };

  /**
   * @description 设置页面的标题  [title]
   * @param {string} title title内容
   */
  function setDocumentTitle(title) {
    document.title = title;
    var ua = navigator.userAgent;
    var regex = /\bMicroMessenger\/([\d.]+)/; // 兼容

    if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
      var i = document.createElement('iframe');
      i.src = '/favicon.ico';
      i.style.display = 'none';

      i.onload = function () {
        setTimeout(function () {
          i.remove();
        }, 9);
      };

      document.body.appendChild(i);
    }
  }
  /**
   * @description 设置页面的标题  [appTitle - title]
   * @param {string} title title内容
   * @param {string} appTitle title的前缀
   */

  function setTitle(title) {
    var appTitle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ufin';

    if (title) {
      var _title = title ? " ".concat(title, " - ").concat(appTitle, " ") : "".concat(appTitle);

      setDocumentTitle(_title);
    }
  }

  var dayjs_min = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
  });

  /**
   * 时间格式化
   * @description 时间格式化方法
   * @param  { String | Number} time
   * @param { String }  fmt
   * @returns {String} 格式化后的时间
   */

  var formateTime = function formateTime(time) {
    var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD HH:mm:ss';
    if (!time) return '';
    return dayjs_min(time).format(fmt);
  };

  var getDateTimeFromTimeType = function getDateTimeFromTimeType(time) {
    if (typeof time === 'string') {
      return new Date(time).getTime();
    }

    if (time instanceof Date) {
      return time.getTime();
    } // 数字


    if (typeof time === 'number') {
      if (String(time).length === 13) {
        return time;
      }

      if (String(time).length === 10) {
        return time * 1000;
      }
    }

    return new Date().getTime();
  };

  var isEarly = function isEarly(timeStamp, currentTime) {
    return timeStamp <= currentTime;
  };
  /**
   * 获取相对时间
   * @param { String | Number | Date } origin 相对时间
   * @param { String | Number | Date } target 目标时间
   * @param { RelativeTimeOptions } options 配置
   * @returns { String } 时间差
   */

  var relativeTime = function relativeTime(origin, target) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      before: '前',
      after: '后',
      just: '刚刚',
      days: '天',
      hours: '小时',
      minutes: '分钟',
      seconds: '秒'
    };
    // 目标时间
    var targetTime = getDateTimeFromTimeType(target);
    var originTime = getDateTimeFromTimeType(origin); // 判断传入时间戳是否早于当前时间戳

    var IS_EARLY = isEarly(originTime, targetTime); // 获取两个时间戳差值

    var diff = targetTime - originTime; // 如果IS_EARLY为false则差值取反

    if (!IS_EARLY) diff = -diff;
    var resStr = '';
    var dirStr = IS_EARLY ? options.before : options.after;
    if (diff < 1000) resStr = options.just; // 少于等于59秒
    else if (diff < 60000) resStr = "".concat(Math.floor(diff / 1000)).concat(options.seconds).concat(dirStr); // 多于59秒，少于等于59分钟59秒
    else if (diff >= 60000 && diff < 3600000) resStr = Math.floor(diff / 60000) + options.minutes + dirStr; // 多于59分钟59秒，少于等于23小时59分钟59秒
    else if (diff >= 3600000 && diff < 86400000) resStr = Math.floor(diff / 3600000) + options.hours + dirStr; // 多于23小时59分钟59秒，少于等于29天59分钟59秒
    else if (diff >= 86400000 && diff < 2623860000) resStr = Math.floor(diff / 86400000) + options.days + dirStr; // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
    else if (diff >= 2623860000 && diff <= 31567860000 && IS_EARLY) resStr = formateTime(originTime, 'MM-dd HH:mm');else resStr = formateTime(originTime, 'yyyy-MM-dd HH:mm');
    return resStr;
  };

  var dateUtil = dayjs_min;

  /**
   * 空函数
   *
   * @returns undefined
   */
  var noop = function noop() {};

  exports.EmailRegexp = EmailRegexp;
  exports.IPRegexp = IPRegexp;
  exports.addClass = addClass;
  exports.dateUtil = dateUtil;
  exports.formatChinese = formatChinese;
  exports.formateTime = formateTime;
  exports.getBrowser = getBrowser;
  exports.getCookieAll = getCookieAll;
  exports.getCookieByName = getCookieByName;
  exports.getOs = getOs;
  exports.getStyle = getStyle;
  exports.getUUID = getUUID;
  exports.getUrlQuery = getUrlQuery;
  exports.getUrlQueryByName = getUrlQueryByName;
  exports.hasClass = hasClass;
  exports.initCookie = initCookie;
  exports.isArray = isArray;
  exports.isBoolean = isBoolean;
  exports.isCardID = isCardID;
  exports.isEmail = isEmail;
  exports.isEmptyValue = isEmptyValue;
  exports.isEnglishName = isEnglishName;
  exports.isFunction = isFunction;
  exports.isIP = isIP;
  exports.isIos = isIos;
  exports.isNil = isNil;
  exports.isNull = isNull;
  exports.isNumber = isNumber;
  exports.isObject = isObject;
  exports.isPC = isPC;
  exports.isString = isString;
  exports.isSymbol = isSymbol;
  exports.isUndefined = isUndefined;
  exports.noop = noop;
  exports.random = random;
  exports.relativeTime = relativeTime;
  exports.removeClass = removeClass;
  exports.removeCookie = removeCookie;
  exports.setCookie = setCookie;
  exports.setDocumentTitle = setDocumentTitle;
  exports.setStyle = setStyle;
  exports.setTitle = setTitle;
  exports.url = url;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
