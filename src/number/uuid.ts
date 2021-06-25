/**
 *  生成一个指定长度的随机数
 * @param { Number } 长度
 * @returns {String} 随机数字符串
 * @example getUUID(11) => '1212asdasdA'
 */
export const getUUID = (len: number | string = "6"): string => {
  let uLen = parseInt(String(len), 10);
  // eslint-disable-next-line no-restricted-globals
  uLen = isNaN(uLen) ? 6 : uLen;
  const seed = '0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ';
  const seedLen = seed.length - 1;
  let uuid: string = '';
  // eslint-disable-next-line no-cond-assign
  while (uLen > 0) {
    uuid += seed[Math.round(Math.random() * seedLen)];
    uLen -= 1;
  }
  return uuid;
};
