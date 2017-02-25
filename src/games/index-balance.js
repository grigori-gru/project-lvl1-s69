import { randomInteger, guess } from '..';

const randNums = randomInteger;

const sumOfItem = x => (x < 10 ? x : Math.floor(x / 10) + sumOfItem(x % 10));

const toResult = (item) => {
  const iter = (base, itemLen) => {
    if (base === 0) return '';
    const element = (base % itemLen === 0) ? base / itemLen
                                           : Math.floor(base / itemLen);
    return String(element) + iter(base - element, itemLen - 1);
  };
  return iter(sumOfItem(item), String(item).length);
};
const hello = 'Balance the given number.';

export default () => guess(hello, randNums, toResult);
