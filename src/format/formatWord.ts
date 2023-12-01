/**
 * 字符串转换 - 首字母大写、小写、全大写、全小写、
 * @param  {str}
 * @param  {type}
 *       type:  1:首字母大写  2：首页母小写  3：大小写转换  4：全部大写  5：全部小写
 * @return {String}
 *
 * @example
 * test('formatWord : 默认', () => {
 *   expect(formatWord('jed')).toBe('JED');
 * });
 *
 * test('formatWord : type = 1 =>  首字母大写', () => {
 *   expect(formatWord('jed', 1)).toBe('Jed');
 * });
 *
 * test('formatWord : type = 2 =>  首页母小写', () => {
 *   expect(formatWord('JED', 2)).toBe('jED');
 * });
 *
 * test('formatWord : type = 3 =>  大小写转换', () => {
 *   expect(formatWord('jEd', 3)).toBe('JeD');
 * });
 *
 * test('formatWord : type = 4 =>  全部大写', () => {
 *   expect(formatWord('jed Gu 张', 4)).toBe('JED GU 张');
 * });
 *
 * test('formatWord : type = 5 =>  全部小写', () => {
 *   expect(formatWord('JeD', 5)).toBe('jed');
 * });
 */

export const formatWord = (str :string, type = 4):string => {
  if (type === 1) {
    return str.replace(
      /\b\w+\b/g,
      (word) =>
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
    )
  }
  if (type === 2) {
    return str.replace(
      /\b\w+\b/g,
      (word) =>
        word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
    )
  }
  if (type === 3) {
    return str
      .split('')
      .map((word) => {
        if (/[a-z]/.test(word)) {
          return word.toUpperCase()
        }
        return word.toLowerCase()
      })
      .join('')
  }
  if (type === 4) {
    return str.toUpperCase()
  }
  if (type === 5) {
    return str.toLowerCase()
  }
  return str
}
