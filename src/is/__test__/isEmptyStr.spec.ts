import { isEmptyStr } from '../isEmptyStr';


// 正确数据

test('isEmptyStr : null  ', () => {
  expect(isEmptyStr(null)).toBe(true);
});

test('isEmptyStr : undefined  ', () => {
  expect(isEmptyStr(undefined)).toBe(true);
});


test('isEmptyStr : ""  ', () => {
  expect(isEmptyStr("")).toBe(true);
});

test('isEmptyStr : " "  ', () => {
  expect(isEmptyStr(" ")).toBe(true);
});

test('isEmptyStr : "    "  ', () => {
  expect(isEmptyStr("    ")).toBe(true);
});

// 0 类型的
test('isEmptyStr : 0  ', () => {
  expect(isEmptyStr(0)).toBe(true);
});

// false 类型的数据
test('isEmptyStr : " 1 "  ', () => {
  expect(isEmptyStr(" 1 ")).toBe(false);
});

test('isEmptyStr : "1"  ', () => {
  expect(isEmptyStr("1")).toBe(false);
});

test('isEmptyStr : 1  ', () => {
  expect(isEmptyStr(1)).toBe(false);
});



test('isEmptyStr : {}  ', () => {
  expect(isEmptyStr({})).toBe(false);
});

// 数组类型
test('isEmptyStr : []  ', () => {
  expect(isEmptyStr([])).toBe(false);
});

// Symbol
test('isEmptyStr : Symbol()  ', () => {
  expect(isEmptyStr(Symbol())).toBe(false);
});
