import { randomInteger, guess } from '..';

const randNums = randomInteger;

const toResult = (item) => {
  if (item < 2 || (item % 2 === 0)) return 'no';
  const sqrtItem = Math.sqrt(item);
  const iter = (div) => {
    if (div > sqrtItem) return 'yes';
    return item % div === 0 ? 'no' : iter(div + 2);
  };
  return iter(3);
};

const hello = '';

export default () => guess(hello, randNums, toResult);
