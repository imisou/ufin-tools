declare type Time = string | number | Date;
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
export declare const isEarly: (timeStamp: number, currentTime: number) => boolean;
/**
 * 获取相对时间
 * @param { String | Number | Date } origin 相对时间
 * @param { String | Number | Date } target 目标时间
 * @param { RelativeTimeOptions } options 配置
 * @returns { String } 时间差
 */
export declare const relativeTime: (origin: Time, target?: string | number | Date | undefined, options?: {
    before: string;
    after: string;
    just: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}) => string;
export {};
