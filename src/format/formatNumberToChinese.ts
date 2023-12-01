const ChineseAA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十');

const ChineseBB = new Array('', '十', '百', '仟', '萬', '億', '点', '');
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
export const formatNumberToChinese = (num: number): string => {
  if (num === 0) return ChineseAA[0];
  const a: string[] = `${num}`.replace(/(^0*)/g, '').split('.');
  let k = 0;
  let re = '';
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = ChineseBB[7] + re;
        break;
      case 4:
        if (!new RegExp(`0{4}//d{${a[0].length - i - 1}}$`).test(a[0])) re = ChineseBB[4] + re;
        break;
      case 8:
        re = ChineseBB[5] + re;
        ChineseBB[7] = ChineseBB[5];
        k = 0;
        break;
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) !== '0' && a[0].charAt(i + 1) !== '0')
      re = ChineseAA[0] + re;
    if (a[0].charAt(i) !== '0') re = ChineseAA[Number(a[0].charAt(i))] + ChineseBB[k % 4] + re;
    k++;
  }

  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += ChineseBB[6];
    for (var i = 0; i < a[1].length; i++) re += ChineseAA[Number(a[1].charAt(i))];
  }
  if (re == '一十') re = '十';
  if (re.match(/^一/) && re.length == 3) re = re.replace('一', '');
  return re;
};
