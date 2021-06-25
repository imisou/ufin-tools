/******************************************
 **********   浏览器和系统检测工具   ***************
 ******************************************/

// // 判断是否是服务器环境
// export const isServer = Vue.prototype.$isServer;

/**
 * 判断当前是否是在PC端 window | mac | linux
 */
export const isPC = (): boolean => {
  var userAgentInfo = navigator.userAgent;
  var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

/**
 * 判断是否是IOS系统 ''
 * @author jed
 * @returns Boolean
 */
export const isIos = (): boolean => {
  var u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    // 安卓手机
    // return "Android";
    return false;
  } else if (u.indexOf('iPhone') > -1) {
    // 苹果手机
    // return "iPhone";
    return true;
  } else if (u.indexOf('iPad') > -1) {
    // iPad
    // return "iPad";
    return false;
  } else if (u.indexOf('Windows Phone') > -1) {
    // winphone手机
    // return "Windows Phone";
    return false;
  } else {
    return false;
  }
};

// /**
//  * 判断当前是否是 微信平台
//  */
// export const isWeixin = (): boolean => {
//   const ua = navigator.userAgent.toLowerCase();
//   if (ua.match(/MicroMessenger/i)  === 'micromessenger') {
//     return true;
//   }
//   return false;
// };
