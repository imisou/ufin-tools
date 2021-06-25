import dayjs from 'dayjs';

/**
 * 时间格式化
 * @description 时间格式化方法
 * @param  { String | Number} time
 * @param { String }  fmt
 * @returns {String} 格式化后的时间
 */
export const formateTime = (time: string | number, fmt?: 'YYYY-MM-DD HH:mm:ss'): string => {
  if (!time) return '';
  return dayjs(time).format(fmt);
};
