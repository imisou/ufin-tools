/**
 *
 * 将数字转换为大写金额
 *   如果没有小数位则后面加一个整
 *   如果超过十亿，返回值为""
 *
 * @param { number|string } currency 货币
 * @returns { string }  大写金额
 *
 *
 * @example
 * formatCurrencyToChinese(100)
 * // => "壹佰元整"
 *
 * formatCurrencyToChinese(100.1)
 * // => "壹佰元壹角"
 *
 * formatCurrencyToChinese(100.01)
 * // => "壹佰元壹分"
 *
 * formatCurrencyToChinese(100100001)
 * // => "壹亿零壹拾万零壹元整"
 *
 * formatCurrencyToChinese(10000000000)
 * // => ""
 *
 * formatCurrencyToChinese("")
 * // => ""
 *
 * formatCurrencyToChinese("  ")
 * // => ""
 *
 * formatCurrencyToChinese(0)
 * // => "零元"
 */
export const formatCurrencyToChinese = (curreny: number | string): string => {
  let currenyStr: string;
  // 判断如果传递进来的不是字符的话转换为字符
  if (typeof curreny === 'number') {
    currenyStr = curreny.toString();
  } else {
    currenyStr = curreny;
  }

  currenyStr = currenyStr.replace(/,/g, ''); // 替换tomoney()中的“,”
  currenyStr = currenyStr.replace(/ /g, ''); // 替换tomoney()中的空格
  currenyStr = currenyStr.replace(/￥/g, ''); // 替换掉可能出现的￥字符
  if (currenyStr === '0') return '零元';
  // 字符处理完毕后开始转换，采用前后两部分分别转换
  var part = String(currenyStr).split('.');
  var newchar = '';
  // 小数点前进行转化
  if (part[0].length > 10) {
    return '';
    // 若数量超过拾亿单位，提示
  }

  for (var i = part[0].length - 1; i >= 0; i--) {
    var tmpnewchar = '';
    var perchar = part[0].charAt(i);
    switch (perchar) {
      case '0':
        tmpnewchar = '零' + tmpnewchar;
        break;
      case '1':
        tmpnewchar = '壹' + tmpnewchar;
        break;
      case '2':
        tmpnewchar = '贰' + tmpnewchar;
        break;
      case '3':
        tmpnewchar = '叁' + tmpnewchar;
        break;
      case '4':
        tmpnewchar = '肆' + tmpnewchar;
        break;
      case '5':
        tmpnewchar = '伍' + tmpnewchar;
        break;
      case '6':
        tmpnewchar = '陆' + tmpnewchar;
        break;
      case '7':
        tmpnewchar = '柒' + tmpnewchar;
        break;
      case '8':
        tmpnewchar = '捌' + tmpnewchar;
        break;
      case '9':
        tmpnewchar = '玖' + tmpnewchar;
        break;
    }
    switch (part[0].length - i - 1) {
      case 0:
        tmpnewchar = tmpnewchar + '元';
        break;
      case 1:
        if (perchar != '0') tmpnewchar = tmpnewchar + '拾';
        break;
      case 2:
        if (perchar != '0') tmpnewchar = tmpnewchar + '佰';
        break;
      case 3:
        if (perchar != '0') tmpnewchar = tmpnewchar + '仟';
        break;
      case 4:
        tmpnewchar = tmpnewchar + '万';
        break;
      case 5:
        if (perchar != '0') tmpnewchar = tmpnewchar + '拾';
        break;
      case 6:
        if (perchar != '0') tmpnewchar = tmpnewchar + '佰';
        break;
      case 7:
        if (perchar != '0') tmpnewchar = tmpnewchar + '仟';
        break;
      case 8:
        tmpnewchar = tmpnewchar + '亿';
        break;
      case 9:
        tmpnewchar = tmpnewchar + '拾';
        break;
    }
    var newchar = tmpnewchar + newchar;
  }
  // 小数点之后进行转化
  if (currenyStr.indexOf('.') != -1) {
    if (part[1].length > 2) {
      // alert("小数点之后只能保留两位,系统将自动截断");
      part[1] = part[1].substr(0, 2);
    }
    for (i = 0; i < part[1].length; i++) {
      tmpnewchar = '';
      perchar = part[1].charAt(i);
      switch (perchar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar;
          break;
        case '1':
          tmpnewchar = '壹' + tmpnewchar;
          break;
        case '2':
          tmpnewchar = '贰' + tmpnewchar;
          break;
        case '3':
          tmpnewchar = '叁' + tmpnewchar;
          break;
        case '4':
          tmpnewchar = '肆' + tmpnewchar;
          break;
        case '5':
          tmpnewchar = '伍' + tmpnewchar;
          break;
        case '6':
          tmpnewchar = '陆' + tmpnewchar;
          break;
        case '7':
          tmpnewchar = '柒' + tmpnewchar;
          break;
        case '8':
          tmpnewchar = '捌' + tmpnewchar;
          break;
        case '9':
          tmpnewchar = '玖' + tmpnewchar;
          break;
      }
      if (i == 0) tmpnewchar = tmpnewchar + '角';
      if (i == 1) tmpnewchar = tmpnewchar + '分';
      newchar = newchar + tmpnewchar;
    }
  }
  // 替换所有无用汉字
  while (newchar.search('零零') != -1) newchar = newchar.replace('零零', '零');
  newchar = newchar.replace('零亿', '亿');
  newchar = newchar.replace('亿万', '亿');
  newchar = newchar.replace('零万', '万');
  newchar = newchar.replace('零元', '元');
  newchar = newchar.replace('零角', '');
  newchar = newchar.replace('零分', '');
  if (newchar.charAt(newchar.length - 1) == '元') {
    newchar = newchar + '整';
  }
  return newchar;
};
