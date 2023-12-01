import { NickNameRegexp } from '../regexp/index';
/**
 * 是否为 昵称(可以是中英文，且最少两位)
 *
 * @param { string } val 昵称
 * @returns { Boolean }
 *
 *
 * @example
 *
 * isNickName('胡歌');  // => true
 * isNickName('Jad');  // => true
 * isNickName('Barack Hussein Obama');  // => true
 * isNickName('贝拉克·侯赛因·奥巴马');  // => true
 * isNickName('胡歌1');  // => true
 * isNickName('胡歌a');  // => true
 *
 *
 * isNickName('胡');    // => false
 * isNickName('J');     // => false
 * isNickName('#胡歌');  // => false
 * isNickName('胡歌#');  // => false
 * isNickName('@胡歌');  // => false
 * isNickName('(胡歌)'); // => false
 *
 */
export const isNickName = (val: string): boolean => {
  return NickNameRegexp.test(val);
};
