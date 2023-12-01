import { hasClass } from './hasClass';
import { trim } from '../string/trim';
/**
 * @desc 移除指定元素上的指定class
 * @param {HTMLElement} el
 * @param {String} cls
 */
export function removeClass(el: HTMLElement, cls: string): void {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}
