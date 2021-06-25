import { isEmail } from '../../../src/is/email';

/*
441030517@QQ..com
119941779@qq,com
5579001QQ@.COM
1107531656@q?q?.com
654088115@@qq.com
495456580@qq@139.com
279985462@qq。com.cn
chen@foxmail.com)m
2990814514@?￡QQ.COM
xxxxxxxxx@_.com.cn (严格版校验不通过)
xxxxxxxxx@wwew_163sadasdf.com.cn (严格版校验不通过)

*/

test('isEmail : 1106329684@qq.com ', () => {
  expect(isEmail('1106329684@qq.com')).toBe(true);
});

test('isEmail : 1106329684@163.com ', () => {
  expect(isEmail('1106329684@163.com')).toBe(true);
});

test('isEmail : no pass ', () => {
  const example1 = "441030517@QQ..com";
  expect(isEmail(example1)).toBe(false);
  const example2 = "119941779@qq,com";
  expect(isEmail(example2)).toBe(false);
  const example3 = "5579001QQ@.COM";
  expect(isEmail(example3)).toBe(false);
  const example4 = "1107531656@q?q?.com";
  expect(isEmail(example4)).toBe(false);
  const example5 = "654088115@@qq.com";
  expect(isEmail(example5)).toBe(false);
  const example6 = "495456580@qq@139.com";
  expect(isEmail(example6)).toBe(false);
  // const example7 = "279985462@qq。com.cn";
  // expect(isEmail(example7)).toBe(false);
  const example8 = "chen@foxmail.com)m";
  expect(isEmail(example8)).toBe(false);
  const example9 = "2990814514@?￡QQ.COM";
  expect(isEmail(example9)).toBe(false);
  // const example10 = "xxxxxxxxx@_.com.cn";
  // expect(isEmail(example10)).toBe(false);
  // const example11 = "xxxxxxxxx@wwew_163sadasdf.com.cn";
  // expect(isEmail(example11)).toBe(false);
});
