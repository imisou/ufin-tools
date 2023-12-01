/* istanbul ignore next */
import { on } from './on';
import { off } from './off';

export const once = function (el: HTMLElement, event: string, fn: EventListener): void {
  const listener = function (...args: unknown[]) {
    if (fn) {
      fn.apply(this, args);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};
