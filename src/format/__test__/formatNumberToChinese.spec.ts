import { formatNumberToChinese } from "../formatNumberToChinese";

test('formatNumberToChinese : formatNumberToChinese(100)  ', () => {
  expect(formatNumberToChinese(100).toString()).toBe("一百");
});

test('formatNumberToChinese : formatNumberToChinese(100.1)  ', () => {
  expect(formatNumberToChinese(100.1).toString()).toBe("一百点一");

});
test('formatNumberToChinese : formatNumberToChinese(100.01)  ', () => {
  expect(formatNumberToChinese(100.01).toString()).toBe("一百点零一");
});

test('formatNumberToChinese : formatNumberToChinese(1001.01)  ', () => {
  expect(formatNumberToChinese(1001.01).toString()).toBe("一仟一点零一");
});
