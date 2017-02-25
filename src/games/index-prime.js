import { randomInteger, guess } from '..';

const randNums = randomInteger;

const isPrime = (item) => {
  if (item < 2 || (item % 2 === 0)) {
    return false;
  }
  const sqrtItem = Math.sqrt(item);
  const iter = (div) => {
    if (div > sqrtItem) return true;
    return (item % div === 0) ? false : iter(div + 2);
  };

  return iter(3);
};

const toResult = item => (isPrime(item) ? 'yes' : 'no');

const hello = '';

export default () => guess(hello, randNums, toResult);
