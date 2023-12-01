import { isIP } from '../isIP';

test('isIP : no pass ', () => {
  const example1 = '192.168.0..0';
  expect(isIP(example1)).toBe(false);
  const example2 = '192.168.0.0.0';
  expect(isIP(example2)).toBe(false);
  const example3 = '256.255.0.0';
  expect(isIP(example3)).toBe(false);
  const example4 = 'a.0.2.0';
  expect(isIP(example4)).toBe(false);
  const example5 = '255.255.255。255';
  expect(isIP(example5)).toBe(false);
});

test('isIP :  pass ', () => {
  const example1 = '192.168.0.0';
  expect(isIP(example1)).toBe(false);
  const example2 = '192.168.0.0';
  expect(isIP(example2)).toBe(false);
});
