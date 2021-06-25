import { formatChinese } from '../../src/number/format';

test('用例1', function () {
  const result = formatChinese(10);
  expect(result).toBe('十');
});
