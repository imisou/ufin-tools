import { formatCurrencyToChinese  } from "../formatCurrencyToChinese";

test('formatCurrencyToChinese: 默认的 100 => 壹佰元整', () => {
  expect(formatCurrencyToChinese(100)).toBe("壹佰元整");
});

test('formatCurrencyToChinese: 小数位', () => {
  expect(formatCurrencyToChinese(100.1)).toBe("壹佰元壹角");
});

test('formatCurrencyToChinese: 小数位', () => {
  expect(formatCurrencyToChinese(100.01)).toBe("壹佰元壹分");
});

test('formatCurrencyToChinese: 大额', () => {
  expect(formatCurrencyToChinese(100100001)).toBe("壹亿零壹拾万零壹元整");
});

test('formatCurrencyToChinese: 超过十亿则显示""', () => {
  expect(formatCurrencyToChinese(10000000000)).toBe("");
});

//
test('formatCurrencyToChinese: ""', () => {
  expect(formatCurrencyToChinese("")).toBe("");
});

test('formatCurrencyToChinese: "  "', () => {
  expect(formatCurrencyToChinese("  ")).toBe("");
});

test('formatCurrencyToChinese: 0 ', () => {
  expect(formatCurrencyToChinese(0)).toBe("零元");
});
