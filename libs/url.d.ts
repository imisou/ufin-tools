/** **************
 *
 * 处理URL的工具方法
 *

  如：
  1. http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese

  url();            // http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese
  url('tld');       // co.uk
  url('domain');    // example.co.uk
  url('hostname');  // www.example.co.uk
  url('sub');       // www
  url('.0')         // undefined
  url('.1')         // www
  url('.2')         // example
  url('.-1')        // uk
  url('auth')       // rob:abcd1234
  url('user')       // rob
  url('pass')       // abcd1234
  url('port');      // 80
  url('protocol');  // http
  url('path');      // /path/index.html
  url('file');      // index.html
  url('filename');  // index
  url('fileext');   // html
  url('1');         // path
  url('2');         // index.html
  url('3');         // undefined
  url('-1');        // index.html
  url(1);           // path
  url(2);           // index.html
  url(-1);          // index.html
  url('query');     // query1=test&silly=willy
  url('?');         // {query1: 'test', silly: 'willy', field: ['zero', undefined, 'two']}
  url('?silly');    // willy
  url('?poo');      // undefined
  url('field[0]')   // zero
  url('field')      // ['zero', undefined, 'two']
  url('hash');      // test=hash&chucky=cheese
  url('#');         // {test: 'hash', chucky: 'cheese'}
  url('#chucky');   // cheese
  url('#poo');      // undefined

  2. mailto

  url('protocol', 'mailto:rob@websanova.com'); // mailto
  url('email', 'mailto:rob@websanova.com');    // rob@websanova.com

  2. 用第二个参数
  url('hostname', 'test.www.example.com/path/here');          // test.www.example.com
  url('protocol', 'www.example.com/path/here');               // http
  url('path', 'http://www.example.com:8080/some/path');       // /some/path
  url('port', 'http://www.example.com:8080/some/path');       // 8080
  url('protocol', 'https://www.example.com:8080/some/path');  // https

 */
declare type Url = (arg: string | number, url?: string) => string;
declare const url: Url;
interface UrlQueryData {
    [propName: string]: string;
}
/**
 * 获取Url中的参数，并转换成对象类型
 * @param url
 * @returns
 */
export declare const getUrlQuery: (urlstr?: string | undefined) => UrlQueryData;
export default url;
