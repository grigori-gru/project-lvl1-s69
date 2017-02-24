import { randomInteger, guess } from '..';

export default () => {
  const randNums = randomInteger;
  const toResult = num => (num % 2 === 0 ? 'yes' : 'no');
  const hello = 'Answer "yes" if number odd otherwise answer "no".';

  guess(hello, randNums, toResult);
};
