import dayjs from 'dayjs';

/**
 * 时间格式化 格式为 'YYYY-MM-DD HH:mm:ss'
 *
 * @description 时间格式化方法
 * @param  { String | Number} time
 * @param { String }  fmt
 * @returns {String} 格式化后的时间
 *
 * @example
 * test('formatTime : 默认', () => {
 *   expect(formatTime(1629190692284)).toBe('2021-08-17 16:58:12');
 * });
 *
 * test('formatTime : 格式化："YYYY-MM-DD"', () => {
 *   expect(formatTime(1629190692284, 'YYYY-MM-DD')).toBe('2021-08-17');
 * });
 *
 * test('formatTime : 格式化："HH:mm:ss"', () => {
 *   expect(formatTime(1629190692284, 'HH:mm:ss')).toBe('16:58:12');
 * });
 *
 * test('formatTime : 格式化："hh:mm:ss"', () => {
 *   expect(formatTime(1629190692284, 'hh:mm:ss')).toBe('04:58:12');
 * });
 *
 */
export const formatTime = (time: string | number, fmt: string = 'YYYY-MM-DD HH:mm:ss'): string => {
  if (!time) return '';
  return dayjs(time).format(fmt);
};
