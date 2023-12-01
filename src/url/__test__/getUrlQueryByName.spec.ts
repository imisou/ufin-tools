import { getUrlQueryByName } from '../getUrlQueryByName';

const example1 =
  'http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese';

test('getUrlQueryByName: 获取基本类型的', () => {
  expect(getUrlQueryByName('query1', example1)).toEqual('test');
});

test('getUrlQueryByName： 获取数组类型的', () => {
  expect(getUrlQueryByName('field', example1)).toEqual(["zero", undefined, "two"]);
});

test('getUrlQueryByName: 获取不存在的属性', () => {
  expect(getUrlQueryByName('notdata', example1)).toEqual(undefined);
});
