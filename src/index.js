import readlineSync from 'readline-sync';

export const welcome = (hello) => {
  console.log('Welcome to the Brain Games!');
  if (hello) console.log(hello);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const randomInteger = () => {
  const rand = Math.random() * 100;
  return Math.round(rand);
};

const guess = (acc, rand, func, name) => {
  const item = rand();
  if (acc > 3) return console.log(`Congratulations, ${name}!`);
  console.log(`Question: ${item}`);
  const actual = readlineSync.question('Your answer: ');
  if (String(func(item)) !== actual) {
    console.log(`${actual} is wrong answer ;(. Correct answer was ${func(item)}.`);
    return console.log(`Let's try again, ${name}!`);
  }
  console.log('Correct!');
  return guess(acc + 1, rand, func, name);
};

export const runEvenGame = () => {
  const randNums = randomInteger;
  const result = num => (num % 2 === 0 ? 'yes' : 'no');
  const name = welcome('Answer "yes" if number odd otherwise answer "no".');

  guess(1, randNums, result, name);
};

export const runCalcGame = () => {
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

export const runGcdGame = () => {
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
