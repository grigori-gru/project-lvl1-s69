import { randomInteger, guess } from '..';

const randNums = randomInteger;


const toResult = (item) => {
  if (item < 2 || (item % 2 === 0)) {
    return 'no';
  }
  const sqrtItem = Math.sqrt(item);
  const checkPrime = (div) => {
    if (div > sqrtItem) return 'yes';
    return (item % div === 0) ? 'no' : checkPrime(div + 2);
  };

  return checkPrime(3);
};

const hello = '';

export default () => guess(hello, randNums, toResult);
