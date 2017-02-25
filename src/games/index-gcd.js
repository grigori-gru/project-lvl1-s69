import { randomInteger, guess } from '..';

const randNums = () => `${randomInteger()} ${randomInteger()}`;

const toResult = (string) => {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const arr = string.split(' ');
  const item1 = Number(arr[0]);
  const item2 = Number(arr[1]);
  return item1 > item2 ? gcd(item1, item2) : gcd(item2, item1);
};

const hello = 'Find the greatest common divisor of given numbers.';

export default () => guess(hello, randNums, toResult);
