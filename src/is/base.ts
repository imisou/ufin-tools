export const toString = Object.prototype.toString;

/**
 * 根据 Object.prototype.toString 获取变量的类型
 * @param type
 * @returns
 */
export const helperGetTypeInObjectToString = (type: string) => {
  return function (obj) {
    return '[object ' + type + ']' === toString.call(obj);
  };
};
