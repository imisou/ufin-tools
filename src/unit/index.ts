import { isNumber } from './is/base';

/**
 * 带单位的加减处理
 *
 * @example "1px" + 1 = "2px"
 *
 * @example "10em" + (-1) = "9em"
 *
 * @param { String | Number } target 可以带单位的
 * @param { Number } delta
 * @returns { String | Number }
 */
export const increaseWithUnit = (target: string | number, delta: number): string | number => {
  // 两个都是数字类型，直接相加
  if (isNumber(target)) return target + delta;
  // 获取值
  const value = target.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || '';
  // 获取单位
  const unit = target.slice(value.length);
  // 计算结果
  const result = parseFloat(value) + delta;
  // 异常处理
  if (Number.isNaN(result)) return target;
  return result + unit;
};
