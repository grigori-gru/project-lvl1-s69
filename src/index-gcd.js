import { randomInteger, guess, welcome } from '.';

export default () => {
  const randNums = () => `${randomInteger()} ${randomInteger()}`;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  const result = (string) => {
    const arr = string.split(' ');
    const item1 = Number(arr[0]);
    const item2 = Number(arr[1]);
    return item1 > item2 ? gcd(item1, item2) : gcd(item2, item1);
  };

  const name = welcome('Find the greatest common divisor of given numbers.');

  guess(1, randNums, result, name);
};
