import { getUrlQuery } from '../getUrlQuery';

const example1 =
  'http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese';

test('getUrlQuery', () => {
  expect(getUrlQuery(example1)).toEqual({
    query1: 'test',
    silly: 'willy',
    field: ['zero', , 'two'],
  });
});

test('getUrlQuery: 不存在参数的时候返回空的对象', () => {
  expect(getUrlQuery('http://rob:abcd1234@www.example.co.uk/path/index.html')).toEqual({});
});
