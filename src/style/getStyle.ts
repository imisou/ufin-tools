// @ts-nocheck
import { ieVersion, camelCase } from './util';

interface HTMLElementFiltersItemResult {
  opacity: number;
}

type HTMLElementFiltersItem = (arg: string) => HTMLElementFiltersItemResult;

interface HTMLElementFilters {
  item: HTMLElementFiltersItem;
}

interface HTMLElementCurrentStyle {
  [propName: string]: string;
}
interface HTMLElementStyle extends HTMLElement {
  filters: HTMLElementFilters;
  currentStyle: HTMLElementCurrentStyle;
}

/**
 * 获取元素上的 style
 * @param {HTMLElement} element
 * @param {String} styleName
 */
export const getStyle =
  ieVersion < 9
    ? function (element: HTMLElementStyle, styleName: string): string | number | null {
        if (!element || !styleName) return null;
        styleName = camelCase(styleName);
        if (styleName === 'float') {
          styleName = 'styleFloat';
        }
        try {
          switch (styleName) {
            case 'opacity':
              try {
                return element['filters'].item('alpha').opacity / 100;
              } catch (e) {
                return 1.0;
              }
            default:
              // @ts-ignore
              return element.style[styleName] || element.currentStyle
                ? element.currentStyle[styleName]
                : null;
          }
        } catch (e) {
          // @ts-ignore
          return element.style[styleName];
        }
      }
    : function (element: HTMLElement, styleName: string): string | null {
        if (!element || !styleName) return null;
        styleName = camelCase(styleName);
        if (styleName === 'float') {
          styleName = 'cssFloat';
        }
        try {
          var computed = document.defaultView.getComputedStyle(element, '');
          return element.style[styleName] || computed ? computed[styleName] : null;
        } catch (e) {
          return element.style[styleName];
        }
      };
