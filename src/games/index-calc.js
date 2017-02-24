import { randomInteger, guess } from '..';

export default () => {
  const randNums = () => {
    const operations = ['-', '+', '*'];
    const operator = operations[Math.floor(Math.random() * operations.length)];
    return `${randomInteger()} ${operator} ${randomInteger()}`;
  };

  const toResult = (string) => {
    const arr = string.split(' ');
    const item1 = Number(arr[0]);
    const item2 = Number(arr[2]);
    const operator = arr[1];
    if (operator === '-') {
      return item1 - item2;
    }
    return operator === '+' ? item1 + item2 : item1 * item2;
  };

  const hello = 'What is the result of the expression?';

  guess(hello, randNums, toResult);
};
