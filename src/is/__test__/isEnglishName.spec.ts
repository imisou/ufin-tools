import { isEnglishName } from "../isEnglishName";


// 正确数据
test('isEnglishName : "Jed"  ', () => {
  expect(isEnglishName("Jed")).toBe(true);
});

// 正确数据
test('isEnglishName : "Kevin Wayne Durant"  ', () => {
  expect(isEnglishName("Kevin Wayne Durant")).toBe(true);
});

// 正确数据
test('isEnglishName : "Dirk Nowitzki"  ', () => {
  expect(isEnglishName("Dirk Nowitzki")).toBe(true);
});


// 错误用例
test('isEnglishName 错误用例 : "1udr Bide"  ', () => {
  expect(isEnglishName("1udr Bide")).toBe(false);
});

// 错误用例
test('isEnglishName 错误用例 : "Audr Bide1"  ', () => {
  expect(isEnglishName("Audr Bide1")).toBe(false);
});

