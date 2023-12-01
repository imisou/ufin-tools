import { uuid } from "../uuid";

test('uuid : uuid(11)  ', () => {
  expect(uuid(11)).toMatch(/^[0123456789abcdefghijklmnopqrstubwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ]{11}$/);
});
