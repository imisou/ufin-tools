/**
 * 判断元素上是否存在对应的class
 * @param el  元素
 * @param cls className
 * @returns Boolean
 */
export function hasClass(el: HTMLElement, cls: string): boolean {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.');
  }
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return ` ${el.className} `.indexOf(` ${cls} `) > -1;
}
