/******************************************
 **********   严格的身份证校验   ***************
 ******************************************/
// 获取各省市与身份证上第1、2两位数字
// import { ID_CARD_CITY_MAP, VALIDATE_ID_CARD_ERROR_MSG } from '@/constants/id-card-city'

// 省、直辖市代码表
const ID_CARD_CITY_MAP = [
  '11',
  '12',
  '13',
  '14',
  '15',
  '21',
  '22',
  '23',
  '31',
  '32',
  '33',
  '34',
  '35',
  '36',
  '37',
  '41',
  '42',
  '43',
  '44',
  '45',
  '46',
  '50',
  '51',
  '52',
  '53',
  '54',
  '61',
  '62',
  '63',
  '64',
  '65',
  '71',
  '81',
  '82',
  '91',
];

// 加权因子
const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

/**
 * 身份证格式严格校验
 * @author jed
 * @param { String } sId   身份证号码
 * @returns  { Boolean }
 * @example
 * // 正确数据-输入18位身份证号且只有数字，例如130701199310302288
 * isCardID("130701199310302288")
 * // => true
 *
 * // 正确数据_输入18位身份证号且最后一位为X，例如52030219891209794X
 * isCardID("52030219891209794X")
 * // => true
 *
 * // 错误数据_输入18位身份证号且最后一位为除X外的字母，例如52030219891209794Y
 * isCardID("52030219891209794Y")
 * // => false
 */
export const isCardID = (sId: string): boolean => {
  // 你输入的身份证长度或格式错误
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
    return false;
  }
  // 你的身份证地区非法
  if (!ID_CARD_CITY_MAP.includes(sId.substr(0, 2))) {
    return false;
  }

  // 出生日期验证
  var sBirthday = (
    sId.substr(6, 4) +
    '-' +
    Number(sId.substr(10, 2)) +
    '-' +
    Number(sId.substr(12, 2))
  ).replace(/-/g, '/');
  var d = new Date(sBirthday);
  if (sBirthday != d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
    return false;
  }

  // 身份证号码校验
  var sum = 0;

  var codes = '10X98765432';
  for (var i = 0; i < sId.length - 1; i++) {
    sum += Number(sId[i]) * weights[i];
  }
  var last = codes[sum % 11]; // 计算出来的最后一位身份证号码
  if (sId[sId.length - 1] != last) {
    return false;
  }
  return true;
};
