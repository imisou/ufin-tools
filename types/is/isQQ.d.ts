/**
 * QQ号码格式校验
 * 正则 :  /^[1-9][0-9]{4,9}$/
 * @param {String} str QQ号码的值
 * @returns Boolean
 * @
 * @example
 * // => true
 * test('isQQ : 正确数据', () => {
 *   expect(isQQ("123456789")).toBe(true);
 * });
 * // => false
 * test('isQQ : 错误数据', () => {
 *   expect(isQQ("1234")).toBe(false);        // 小于5位
 *   expect(isQQ("12345678901")).toBe(false); // 超过10位
 *   expect(isQQ("12345678a")).toBe(false);   // 包含非数字类型字符
 *   expect(isQQ("023456789")).toBe(false);   // 首字符不能为0
 * });
 */
export declare const isQQ: (str: string) => boolean;
