import { isEmail } from "../isEmail";
/*
1、正确数据
2、错误数据-只输入空白、空或者回车
3、错误数据-只输入字母
4、错误数据-只输入数字
5、错误数据-只输入特殊字符
6、错误数据-输入以上数据的组合
7、错误数据-缺少@符号，例如email163.com
8、错误数据-缺少黑点“.”，例如email@163com
9、错误数据-缺少com、cn、net、hotmail等，例如：email@163.
10、错误数据-@符号位置不正确，例如：email163@.com、email163.@com、email163.com@等
11、错误数据-黑点“.”位置不正确，例如：email.@163.com、email@.163com、email@163com.
*/

//
test('isEmail : 正确数据', () => {
  expect(isEmail("11063296@qq.com")).toBe(true);
});

//
test('isEmail : 2、错误数据-只输入空白、空或者回车 ', () => {
  expect(isEmail("")).toBe(false);
  expect(isEmail(" ")).toBe(false);
  expect(isEmail(`
  `)).toBe(false);
});

// 3. 错误数据-只输入字母
test('isEmail : 错误数据-只输入字母', () => {
  expect(isEmail("qw")).toBe(false);
});

// 4. 错误数据-只输入数字
test('isEmail : 错误数据-只输入数字', () => {
  expect(isEmail("123123")).toBe(false);
});
// 5. 错误数据-只输入特殊字符
test('isEmail : 错误数据-只输入特殊字符', () => {
  expect(isEmail("@#$")).toBe(false);
});

// 6. 错误数据-输入以上数据的组合
test('isEmail : 错误数据-输入以上数据的组合', () => {
  expect(isEmail("1#qq.com")).toBe(false);
});
// 7. 错误数据-缺少@符号，例如email163.com
test('isEmail : 错误数据-缺少@符号，例如email163.com', () => {
  expect(isEmail("email163.com")).toBe(false);
});

// 8. 错误数据-缺少黑点“.”，例如email@163com
test('isEmail : 错误数据-缺少黑点“.”，例如email@163com', () => {
  expect(isEmail("email@163com")).toBe(false);
});
// 9. 错误数据-缺少com、cn、net、hotmail等，例如：email@163.
test('isEmail : 错误数据-缺少com、cn、net、hotmail等，例如：email@163.', () => {
  expect(isEmail("email@163.")).toBe(false);
});

// 10. 错误数据-@符号位置不正确，例如：email163@.com、email163.@com、email163.com@等
test('isEmail : 错误数据-@符号位置不正确，例如：email163@.com、email163.@com、email163.com@等', () => {
  expect(isEmail("email163@.com")).toBe(false);
  expect(isEmail("email163.@com")).toBe(false);
  expect(isEmail("email163.com@")).toBe(false);
});
// 11. 错误数据-黑点“.”位置不正确，例如：email.@163.com、email@.163com、email@163com.
test('isEmail : 错误数据-黑点“.”位置不正确，例如：email.@163.com、email@.163com、email@163com.', () => {
  expect(isEmail("email.@163.com")).toBe(false);
  expect(isEmail("email@.163com")).toBe(false);
  expect(isEmail("email@163com.")).toBe(false);
});
