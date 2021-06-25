/**
 *  获取一个在指定范围内的随机整数
 * @param {*} min  最小范围(包含)
 * @param {*} max  最大范围(包含)
 * @returns {Number} 整数
 */
export const random = (min: number, max: number): number | null => {
  // eslint-disable-next-line no-undef
  if (typeof min === "number" && typeof max === "number") {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }
  return null
}
