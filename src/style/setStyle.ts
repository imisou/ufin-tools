// @ts-nocheck
import { ieVersion, camelCase } from './util';

/**
 * 给指定元素设置style
 * @param {HTMLElement} element
 * @param {String} styleName
 * @param {String} value
 */
export function setStyle(element: HTMLElement, styleName: any, value: string | number): void {
  if (!element || !styleName) return;

  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value as number)
        ? ''
        : 'alpha(opacity=' + (value as number) * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
}
