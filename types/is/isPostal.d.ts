/**
 * 邮政号码格式校验
 * 正则 :  /^[1-9]\d{5}
 * @param {String} str 邮政号码的值
 * @returns Boolean
 * @
 * @example
 * // => true
 * test('isPostal : 正确数据', () => {
 *   expect(isPostal("100000")).toBe(true);
 * });
 * // => false
 * test('isPostal : 错误数据', () => {
 *   expect(isPostal("1234")).toBe(false);        // 小于5位
 *   expect(isPostal("12345678901")).toBe(false); // 超过10位
 *   expect(isPostal("12345678a")).toBe(false);   // 包含非数字类型字符
 *   expect(isPostal("023456789")).toBe(false);   // 首字符不能为0
 * });
 */
export declare const isPostal: (str: string) => boolean;
