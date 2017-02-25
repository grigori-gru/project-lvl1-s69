import { randomInteger, guess } from '..';

const randNums = () => {
  const dotStep = 4;
  const step = randomInteger();
  const iter = (base, acc) => {
    if (acc === 10) return '';
    const nextNum = base + step;
    const newNum = (acc === dotStep) ? '..' : nextNum;
    return `${newNum} ${iter(nextNum, acc + 1)}`;
  };
  return iter(randomInteger(), 0);
};

const toResult = (string) => {
  const arr = string.split(' ');
  const position = arr.indexOf('..');
  const item1 = Number(arr[position - 1]);
  const item2 = Number(arr[position + 1]);
  const result = ((item2 - item1) / 2) + item1;
  return result;
};

const hello = 'What number is missing in this progression?';

export default () => guess(hello, randNums, toResult);
