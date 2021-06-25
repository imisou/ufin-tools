import { getUrlQuery } from '../../src/url';

const example1 =
  'http://rob:abcd1234@www.example.co.uk/path/index.html?query1=test&silly=willy&field[0]=zero&field[2]=two#test=hash&chucky=cheese';

test('getUrlQuery', () => {
  expect(getUrlQuery(example1)).toEqual({
    query1: 'test',
    silly: 'willy',
    field: ['zero', , 'two'],
  });
});
