import { getRandomHole } from '../app';

test('The object is moved randomly, without moving to the same field', () => {
  const number = '5';
  expect(getRandomHole(number)).not.toEqual(number);
});
