/*!
* @ufin/ufin-tools 0.0.0-beta.2 (https://git.code.tencent.com/ucall/npm_ucall/ufin-tools.git)
* API https://git.code.tencent.com/ucall/npm_ucall/ufin-tools/blob/master/README.md
* Copyright 2021-2021 jed. All Rights Reserved
* Licensed under MIT (https://git.code.tencent.com/ucall/npm_ucall/ufin-tools/blob/master/LICENSE)
*/

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

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

/* Built-in method references that are verified to be native. */
var Set = _getNative(_root, 'Set');

var _Set = Set;

/* Built-in method references that are verified to be native. */
var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** `Object#toString` result references. */
var mapTag$2 = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag$2 = '[object Set]',
    weakMapTag$1 = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView),
    mapCtorString = _toSource(_Map),
    promiseCtorString = _toSource(_Promise),
    setCtorString = _toSource(_Set),
    weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$1;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag$1;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike_1(value) &&
      (isArray_1(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer_1(value) || isTypedArray_1(value) || isArguments_1(value))) {
    return !value.length;
  }
  var tag = _getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (_isPrototype(value)) {
    return !_baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

var isEmpty_1 = isEmpty;

var toString = Object.prototype.toString;
/**
 * 判断是否是Boolean类型
 * @param val
 * @returns Boolean
 */

var isBoolean = function isBoolean(val) {
  return typeof val === 'boolean';
};
/**
 * 判断是否是Null类型
 * @param val
 * @returns Boolean
 */

var isNull = function isNull(val) {
  return val === null;
};
/**
 * 判断是否是undefined类型
 * @param val
 * @returns Boolean
 */

var isUndefined = function isUndefined(val) {
  return val === undefined;
};
/**
 * 判断是否为 null 或 undefined 类型。
 * @param val
 * @returns Boolean
 */

var isNil = function isNil(val) {
  return val === undefined || val === null;
};
/**
 * 判断是否为 number 类型。
 * @param val
 * @returns Boolean
 */

var isNumber = function isNumber(val) {
  return typeof val === 'number';
};
/**
 * 判断是否为 string 类型。
 * @param val
 * @returns Boolean
 */

var isString = function isString(val) {
  return typeof val === 'string';
};
/**
 * 判断参数的值是否是 Symbol 类型
 * @param val
 * @returns  Boolean
 */

var isSymbol = function isSymbol(val) {
  return _typeof(val) === 'symbol';
};
/**
 * 是否是对象类型
 * @param val
 * @returns  Boolean
 */

var isObject = function isObject(val) {
  //
  return toString.call(val).slice(8, -1) === 'Object';
};
/**
 * 是否是数组类型
 * @param val
 * @returns  Boolean
 */

var isArray = function isArray(val) {
  return toString.call(val).slice(8, -1) === 'Array';
};
/**
 * 判断val是否是一个空值，如"" , null , undefined , [] , {} ,
 * @param val
 * @returns Boolean
 */

var isEmptyValue = function isEmptyValue(val) {
  if (isUndefined(val) || isNull(val) || val === '') {
    return true;
  }

  if (isObject(val)) {
    return isEmpty_1(val);
  }

  if (isArray(val)) {
    return val.length === 0;
  }

  return false;
};
/**
 * 判断是否是函数类型
 * @param val
 * @returns
 */

var isFunction = function isFunction(val) {
  return typeof val === 'function';
};

/******************************************
 **********   浏览器和系统检测工具   ***************
 ******************************************/
// // 判断是否是服务器环境
// export const isServer = Vue.prototype.$isServer;

/**
 * 判断当前是否是在PC端 window | mac | linux
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
 * 判断是否是IOS系统 ''
 * @author jed
 * @returns Boolean
 */

var isIos = function isIos() {
  var u = navigator.userAgent;

  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    // 安卓手机
    // return "Android";
    return false;
  } else if (u.indexOf('iPhone') > -1) {
    // 苹果手机
    // return "iPhone";
    return true;
  } else if (u.indexOf('iPad') > -1) {
    // iPad
    // return "iPad";
    return false;
  } else if (u.indexOf('Windows Phone') > -1) {
    // winphone手机
    // return "Windows Phone";
    return false;
  } else {
    return false;
  }
}; // /**
//  * 判断当前是否是 微信平台
//  */
// export const isWeixin = (): boolean => {
//   const ua = navigator.userAgent.toLowerCase();
//   if (ua.match(/MicroMessenger/i)  === 'micromessenger') {
//     return true;
//   }
//   return false;
// };

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
var cookies = {}; // 默认配置信息

var DEFAULT_COOKIE_OPTIONS = {
  path: '',
  expires: 1,
  prefix: 'ufin'
};
/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param {Object} setting cookie setting
 */

cookies.set = function () {
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
 */


cookies.get = function () {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
  return js_cookie.get("".concat(DEFAULT_COOKIE_OPTIONS.prefix, "-").concat(name));
};
/**
 * @description 拿到 cookie 全部的值
 */


cookies.getAll = function () {
  return js_cookie.get();
};
/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */


cookies.remove = function () {
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

// 邮箱的正则表达式
var EmailRegexp = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i; // export const EmailRegexp =/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
// IP正则表达式

var IPRegexp = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/;

// 浏览器的类型
var BrowserType;

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
})(BrowserType || (BrowserType = {}));
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
    if (fIEVersion === 7) return BrowserType.IE7;
    if (fIEVersion === 8) return BrowserType.IE8;
    if (fIEVersion === 9) return BrowserType.IE9;
    if (fIEVersion === 10) return BrowserType.IE10;
    return BrowserType.IEOld; // IE版本过低
  }

  if (isIE11) return BrowserType.IE11;
  if (isEdge) return BrowserType.Edge;
  if (isFF) return BrowserType.FF;
  if (isOpera) return BrowserType.Opera;
  if (isSafari) return BrowserType.Safari;
  if (isChrome) return BrowserType.Chrome;
};

// 系统平台名称
var BrowserDetectOS;

(function (BrowserDetectOS) {
  BrowserDetectOS["Mac"] = "mac";
  BrowserDetectOS["Android"] = "android";
  BrowserDetectOS["Ios"] = "ios";
  BrowserDetectOS["Linux"] = "linux";
  BrowserDetectOS["Window"] = "window";
  BrowserDetectOS["Other"] = "other";
})(BrowserDetectOS || (BrowserDetectOS = {}));
/**
 * @desc 获取当前系统类型
 * @returns BrowserDetectOS 'mac' | 'android' | 'ios' | 'linux' | 'window' | 'other'
 */


var getOs = function getOs() {
  var sUserAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent || '';
  var isWin = navigator.platform === 'Win32' || navigator.platform === 'Windows';
  var isMac = navigator.platform === 'Mac68K' || navigator.platform === 'MacPPC' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel';
  if (isMac) return BrowserDetectOS.Mac;
  var isLinux = String(navigator.platform).indexOf('Linux') > -1;

  if (isLinux) {
    var _isAndroid = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;

    if (_isAndroid) {
      return BrowserDetectOS.Android;
    }

    var _isiOS = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端


    if (_isiOS) {
      return BrowserDetectOS.Ios;
    }

    return BrowserDetectOS.Linux;
  }

  if (isWin) {
    var _isAndroid2 = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;

    if (_isAndroid2) {
      return BrowserDetectOS.Android;
    }

    var _isiOS2 = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端


    if (_isiOS2) {
      return BrowserDetectOS.Ios;
    }

    return BrowserDetectOS.Window;
  }

  var isAndroid = sUserAgent.indexOf('Android') > -1 || sUserAgent.indexOf('Adr') > -1;

  if (isAndroid) {
    return BrowserDetectOS.Android;
  }

  var isiOS = !!sUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

  if (isiOS) {
    return BrowserDetectOS.Ios;
  }

  return BrowserDetectOS.Other;
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

export { BrowserDetectOS, BrowserType, EmailRegexp, IPRegexp, addClass, cookies, formatChinese, formateTime, getBrowser, getOs, getStyle, getUUID, getUrlQuery, getUrlQueryByName, hasClass, isArray, isBoolean, isEarly, isEmptyValue, isFunction, isIos, isNil, isNull, isNumber, isObject, isPC, isString, isSymbol, isUndefined, random, relativeTime, removeClass, setDocumentTitle, setStyle, setTitle, url };
