import { isUndefined } from '../is/isUndefined';
import { url } from './url';

export interface UrlQueryData {
  [propName: string]: string;
}

/**
 * 获取Url中的参数，并转换成对象类型
 *
 * @param url  URL 地址
 * @returns Object
 * @example
 *
 * // 基础
 * getUrlQuery('http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese')
 * // => {
    query1: 'test',
    silly: 'willy',
    field: ['zero', , 'two'],
  }
 *
 * // 不存在参数的时候返回空的对象
 * getUrlQuery('http://rob:abcd1234@www.example.co.uk/path/index.html')
 * // => {}
 *
 */
export const getUrlQuery = (urlstr?: string): UrlQueryData => {
  urlstr = !urlstr ? window.location.href : urlstr;

  const queryVal = url('?', urlstr);

  if (isUndefined(queryVal)) {
    return {};
  }
  return queryVal as UrlQueryData;
};
