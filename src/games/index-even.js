import { randomInteger, guess } from '..';

const randNums = randomInteger;
const toResult = num => (num % 2 === 0 ? 'yes' : 'no');
const hello = 'Answer "yes" if number odd otherwise answer "no".';

export default () => guess(hello, randNums, toResult);
