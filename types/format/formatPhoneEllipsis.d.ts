export interface FormatPhoneEllipsisOption {
    leftNoEllipsisNumber?: number;
    rightNoEllipsisNumber?: number;
    ellipsisSeparator?: string;
}
/**
 * 手机号码部分隐藏工具方法
 *
 * @param {Number} mobileNumber         手机号码
 * @param { FormatPhoneEllipsisOption } option 配置项
 *        --- option.leftNoEllipsisNumber  {Number} 左边不始隐藏的个数
 *        --- option.rightNoEllipsisNumber {Number} 右边不隐藏的个数
 *        --- option.ellipsisSeparator     {String}  隐藏的符号
 * @returns { String } 隐藏后的手机号码
 *
 * @example
 * formatPhoneEllipsis('18915601235')
 * // => 189*****35
 *
 * // 修改左边不始隐藏的个数
 * formatPhoneEllipsis('18915601235', { leftNoEllipsisNumber: 4 })
 * // => '1891*****35'
 *
 * // 修改右边不隐藏的个数
 * formatPhoneEllipsis('18915601235', { rightNoEllipsisNumber: 4 })
 * // => '189****1235'
 *
 * // 修改隐藏的符号
 * formatPhoneEllipsis('18915601235', { ellipsisSeparator: '-' })
 * // => '189------35'
 *
 */
export declare const formatPhoneEllipsis: (mobileNumber: string, option?: FormatPhoneEllipsisOption) => string;
