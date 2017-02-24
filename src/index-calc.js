import { randomInteger, guess, welcome } from '.';

export default () => {
  const operations = ['-', '+', '*'];

  const randNums = () => {
    const operator = operations[Math.floor(Math.random() * operations.length)];
    return `${randomInteger()} ${operator} ${randomInteger()}`;
  };

  const result = (string) => {
    const arr = string.split(' ');
    const item1 = Number(arr[0]);
    const item2 = Number(arr[2]);
    const operator = arr[1];
    if (operator === '-') {
      return item1 - item2;
    }
    return operator === '+' ? item1 + item2 : item1 * item2;
  };

  const name = welcome('What is the result of the expression?');

  guess(1, randNums, result, name);
};
