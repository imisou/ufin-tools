import { formatPhoneEllipsis } from '../formatPhoneEllipsis';

test('formatPhoneEllipsis : 默认', () => {
  expect(formatPhoneEllipsis('18915601235')).toBe('189******35');
});

test('formatPhoneEllipsis : 修改左边不始隐藏的个数 ', () => {
  expect(
    formatPhoneEllipsis('18915601235', {
      leftNoEllipsisNumber: 4,
    }),
  ).toBe('1891*****35');
});

test('formatPhoneEllipsis : 修改右边不隐藏的个数  ', () => {
  expect(
    formatPhoneEllipsis('18915601235', {
      rightNoEllipsisNumber: 4,
    }),
  ).toBe('189****1235');
});

test('formatPhoneEllipsis : 修改隐藏的符号 ', () => {
  expect(
    formatPhoneEllipsis('18915601235', {
      ellipsisSeparator: '-',
    }),
  ).toBe('189------35');
});
