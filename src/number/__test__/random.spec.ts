import { random } from "../random";

test('random : random(11)  ', () => {
  expect(random(1,99).toString()).toMatch(/^[1-9]{1}[0-9]{0,1}$/);
});
