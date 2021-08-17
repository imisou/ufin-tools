/**
 * 判断是否是IOS系统 ''
 * @author jed
 * @returns { Boolean }
 */
 export const isIos = (): boolean => {
  var u = navigator.userAgent;
  if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
    // 安卓手机
    return false;
  } else if (u.indexOf('iPhone') > -1) {
    // 苹果手机
    return true;
  } else if (u.indexOf('iPad') > -1) {
    // iPad
    return false;
  } else if (u.indexOf('Windows Phone') > -1) {
    // winphone手机
    return false;
  } else {
    return false;
  }
};
