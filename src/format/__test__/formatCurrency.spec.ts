import { formatCurrency } from '../formatCurrency';

test('formatCurrency : 默认配置  ', () => {
  expect(formatCurrency(12345)).toBe('$12,345.00');
});

test('formatCurrency : 小数点数为4位，如12345.235621  ', () => {
  expect(
    formatCurrency(12345.235621, {
      decimals: 4,
    }),
  ).toBe('$12,345.2356');
});

test('formatCurrency : 修改货币符号，并四舍五入', () => {
  expect(
    formatCurrency(5.235621, {
      symbol: '￥',
    }),
  ).toBe('￥5.24');
});

test('formatCurrency : 货币符号后缀 ', () => {
  expect(
    formatCurrency(12345.235621, {
      symbolOnLeft: false,
    }),
  ).toBe('12,345.24$');
});

test('formatCurrency : 货币符号与值之间添加一个空格 ', () => {
  expect(
    formatCurrency(12345.235621, {
      spaceBetweenAmountAndSymbol: true,
    }),
  ).toBe('$ 12,345.24');
});

test('formatCurrency : 修改千分位符号为" " ', () => {
  expect(
    formatCurrency(12345.235621, {
      thousandsSeparator: ' ',
    }),
  ).toBe('$12 345.24');
});

test('formatCurrency : 修改货币中的小数点的符号为".." ', () => {
  expect(
    formatCurrency(12345.235621, {
      decimalSeparator: '..',
    }),
  ).toBe('$123,45..24');
});

test('formatCurrency : 修改配置信息', () => {
  expect(
    formatCurrency(12345.235621, {
      symbolOnLeft: false,
      thousandsSeparator: ' ',
      spaceBetweenAmountAndSymbol: true,
      decimalSeparator: '..',
    }),
  ).toBe('123 45..24 $');
});
