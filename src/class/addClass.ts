import { hasClass } from "./hasClass";

/**
 * 为元素添加class
 * @param {HTMLElement} el
 * @param {String} cls
 */
export function addClass(el: HTMLElement, cls: string): void {
  if (!el) return;
  let curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
