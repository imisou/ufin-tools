import dayjs from 'dayjs';

import { formateTime } from './format';

type Time = string | number | Date;

/**
 * 配置
 */
export interface RelativeTimeOptions {
  before: string;
  after: string;
  just: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getDateTimeFromTimeType = (time?: Time): number => {
  if (typeof time === 'string') {
    return new Date(time).getTime();
  }

  if (time instanceof Date) {
    return (time as Date).getTime();
  }

  // 数字
  if (typeof time === 'number') {
    if (String(time).length === 13) {
      return time as number;
    }
    if (String(time).length === 10) {
      return (time as number) * 1000;
    }
  }
  return new Date().getTime();
};

export const isEarly = (timeStamp: number, currentTime: number): boolean => {
  return timeStamp <= currentTime;
};

/**
 * 获取相对时间
 * @param { String | Number | Date } origin 相对时间
 * @param { String | Number | Date } target 目标时间
 * @param { RelativeTimeOptions } options 配置
 * @returns { String } 时间差
 */
export const relativeTime = (
  origin: Time,
  target?: Time,
  options = {
    before: '前',
    after: '后',
    just: '刚刚',
    days: '天',
    hours: '小时',
    minutes: '分钟',
    seconds: '秒',
  },
): string => {
  // 目标时间
  const targetTime = getDateTimeFromTimeType(target);

  const originTime = getDateTimeFromTimeType(origin);

  // 判断传入时间戳是否早于当前时间戳
  const IS_EARLY = isEarly(originTime, targetTime);
  // 获取两个时间戳差值
  let diff = targetTime - originTime;
  // 如果IS_EARLY为false则差值取反
  if (!IS_EARLY) diff = -diff;
  let resStr = '';
  let dirStr = IS_EARLY ? options.before : options.after;

  if (diff < 1000) resStr = options.just;
  // 少于等于59秒
  else if (diff < 60000) resStr = `${Math.floor(diff / 1000)}${options.seconds}${dirStr}`;
  // 多于59秒，少于等于59分钟59秒
  else if (diff >= 60000 && diff < 3600000)
    resStr = Math.floor(diff / 60000) + options.minutes + dirStr;
  // 多于59分钟59秒，少于等于23小时59分钟59秒
  else if (diff >= 3600000 && diff < 86400000)
    resStr = Math.floor(diff / 3600000) + options.hours + dirStr;
  // 多于23小时59分钟59秒，少于等于29天59分钟59秒
  else if (diff >= 86400000 && diff < 2623860000)
    resStr = Math.floor(diff / 86400000) + options.days + dirStr;
  // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前
  else if (diff >= 2623860000 && diff <= 31567860000 && IS_EARLY)
    resStr = formateTime(originTime, 'MM-dd HH:mm');
  else resStr = formateTime(originTime, 'yyyy-MM-dd HH:mm');
  return resStr;
};
