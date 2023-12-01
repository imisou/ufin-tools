export interface FormatPhoneEllipsisOption {
  leftNoEllipsisNumber?: number;
  rightNoEllipsisNumber?: number;
  ellipsisSeparator?: string;
}

const FORMAR_PHONE_ELLIPSIS_OPTION = {
  leftNoEllipsisNumber: 3,
  rightNoEllipsisNumber: 2,
  ellipsisSeparator: '*',
};

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
export const formatPhoneEllipsis = (
  mobileNumber: string,
  option: FormatPhoneEllipsisOption = FORMAR_PHONE_ELLIPSIS_OPTION,
): string => {
  let leftNoEllipsisNumber =
    option.leftNoEllipsisNumber || FORMAR_PHONE_ELLIPSIS_OPTION.leftNoEllipsisNumber;
    let rightNoEllipsisNumber =
    option.rightNoEllipsisNumber || FORMAR_PHONE_ELLIPSIS_OPTION.rightNoEllipsisNumber;
  const ellipsisSeparator =
    option.ellipsisSeparator || FORMAR_PHONE_ELLIPSIS_OPTION.ellipsisSeparator;

  //  获取手机号的个数
  const strLength = mobileNumber.length;

  // 不能左边加右边的数目大于总个数
  if (leftNoEllipsisNumber + rightNoEllipsisNumber >= strLength) {
    // eslint-disable-next-line no-param-reassign
    leftNoEllipsisNumber = 0;
    // eslint-disable-next-line no-param-reassign
    rightNoEllipsisNumber = 0;
  }
  let star = '';
  let strRel = '';
  // 星号部分
  const hideSec = mobileNumber.substring(leftNoEllipsisNumber, strLength - rightNoEllipsisNumber);
  for (let i = 0; i < hideSec.length; i += 1) {
    star += ellipsisSeparator;
  }
  strRel =
    mobileNumber.substring(0, leftNoEllipsisNumber) +
    star +
    mobileNumber.substr(strLength - rightNoEllipsisNumber);
  return strRel;
};
