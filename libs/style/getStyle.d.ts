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
export declare const getStyle: (element: HTMLElementStyle, styleName: string) => string | number | null;
export {};
