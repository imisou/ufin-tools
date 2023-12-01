/**
 * 将阿拉伯数字翻译成中文的大写数字
 * @param {*} num  阿拉伯数字
 * @returns { String }  阿拉伯数字的大写数字
 *
 * @example
 * formatNumberToChinese(100.1)
 * //=>   一百点一
 *
 * formatNumberToChinese(100)
 * // => "一百点一"
 *
 * formatNumberToChinese(100.01)
 * // => "一百点零一"
 *
 * formatNumberToChinese(1001.01)
 * // => "一仟一点零一"
 */
export declare const formatNumberToChinese: (num: number) => string;
