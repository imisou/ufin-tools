const protocols = '((https?|s?ftp|irc[6s]?|git|afp|telnet|smb):\\/\\/)?';
const userInfo = '([a-z0-9]\\w*(\\:[\\S]+)?\\@)?';
const domain = '([a-z0-9]([\\w]*[a-z0-9])*\\.)?[a-z0-9]\\w*\\.[a-z]{2,}(\\.[a-z]{2,})?';
const port = '(:\\d{1,5})?';
const ip = '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}';
const address = '(\\/\\S*)?';
const domainType = [protocols, userInfo, domain, port, address];
const ipType = [protocols, userInfo, ip, port, address];

/**
 * 是否为有效的 url
 *    支持类型:
 * http(s)://(username:password@)(www.)domain.(com/co.uk)(/...)<br>
 * (s)ftp://(username:password@)domain.com/...<br>
 * git://(username:password@)domain.com/...<br>
 * irc(6/s)://host:port/... //<br>
 * afp over TCP/IP: afp://[<user>@]<host>[:<port>][/[<path>]]<br>
 * telnet://<user>:<password>@<host>[:<port>/]<br>
 * smb://[<user>@]<host>[:<port>][/[<path>]][?<param1>=<value1>[;<param2>=<value2>]]<br>
 *
 * @param { string } val  url地址
 * @returns { Boolean }
 *
 *
 * @example
 *
 * isValidURI('https://github.com/lodash');
 * // => true
 */
export const isURI = (url: string): boolean => {
  const verify = function (type) {
    return new RegExp('^' + type.join('') + '$', 'i').test(url);
  };
  return verify(domainType) || verify(ipType);
};
