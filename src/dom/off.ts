/* istanbul ignore next */
export const off = function(
  element: HTMLElement | Document | Window,
  event: string,
  handler: EventListenerOrEventListenerObject,
  useCapture = false,
): void {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture)
  }
}
