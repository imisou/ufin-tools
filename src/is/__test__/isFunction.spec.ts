import { isFunction } from "../isFunction";


// 正确数据
test('isFunction : () => 1  ', () => {
  const func = () =>  1;
  expect(isFunction(func)).toBe(true);
});

// 正确数据
test('isFunction : function func() {}', () => {
  const func = function func() {}
  expect(isFunction(func)).toBe(true);
});

// 错误用例
test('isFunction 错误用例 : "1udr Bide"  ', () => {
  expect(isFunction("1udr Bide")).toBe(false);
});

