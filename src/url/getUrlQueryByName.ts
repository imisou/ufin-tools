import { url } from './url';

export type GetUrlQueryByNameValue = string | undefined;
/**
 * 根据Name获取Url中的对应的参数， 如果不存在返回 undefined
 *
 * @param { String } name  属性的name
 * @param { String }  urlStr  URL 地址
 * @returns { string | undefined }
 *
 * @example
 * const example1 = 'http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese'
 *
 * // 获取基本类型的
 * getUrlQueryByName('query1', example1)
 * // => 'test'
 *
 * // 获取数组类型的
 * getUrlQueryByName('field', example1)
 * // => ["zero", undefined, "two"]
 *
 * // 获取不存在的属性
 * getUrlQueryByName('notdata', example1)
 * // => undefined
 *
 */
export const getUrlQueryByName = (name?: string, urlstr?: string): GetUrlQueryByNameValue => {
  // url 地址
  urlstr = !urlstr ? window.location.href : urlstr;
  // 查询条件
  name = name ? name.trim() : '';

  return url(`?${name}`, urlstr) as GetUrlQueryByNameValue;
};
