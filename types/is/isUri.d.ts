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
export declare const isURI: (url: string) => boolean;
