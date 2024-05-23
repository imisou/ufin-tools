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
export declare const increaseWithUnit: (target: string | number, delta: number) => string | number;
