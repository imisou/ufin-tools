import { formatPhone } from '../formatPhone';

test('formatPhone : 默认', () => {
  expect(formatPhone('18915601235')).toBe('189 1560 1235');
});

test('formatPhone : 修改分隔符 ', () => {
  expect(formatPhone('18915601235', ',')).toBe(`189,1560,1235`);
});
