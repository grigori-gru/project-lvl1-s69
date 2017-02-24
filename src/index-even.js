import { randomInteger, guess, welcome } from '.';

export default () => {
  const randNums = randomInteger;
  const result = num => (num % 2 === 0 ? 'yes' : 'no');
  const name = welcome('Answer "yes" if number odd otherwise answer "no".');

  guess(1, randNums, result, name);
};
