/**
 * @description 设置页面的标题  [title]
 * @param {string} title title内容
 */
 export function setDocumentTitle(title: string): void {
  document.title = title;
  const ua = navigator.userAgent;
  const regex = /\bMicroMessenger\/([\d.]+)/;
  // 兼容
  if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement('iframe');
    i.src = '/favicon.ico';
    i.style.display = 'none';
    i.onload = function () {
      setTimeout(() => {
        i.remove();
      }, 9);
    };
    document.body.appendChild(i);
  }
}

/**
 * @description 设置页面的标题  [appTitle - title]
 * @param {string} title title内容
 * @param {string} appTitle title的前缀
 */
export function setTitle(title: string, appTitle: string = 'ufin'): void {
  if (title) {
    const _title = title ? ` ${title} - ${appTitle} ` : `${appTitle}`;
    setDocumentTitle(_title);
  }
}
