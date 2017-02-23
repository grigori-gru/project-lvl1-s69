import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const yourName = () => readlineSync.question('\nMay I have your name? ');

export const hello = name => console.log(`Hello, ${name}!\n`);

export const randomInteger = () => {
  const rand = Math.random() * 100;
  return Math.round(rand);
};

export const guess = (acc, item, func, name) => {
  if (acc > 3) return console.log(`Congratulations, ${name}!`);
  console.log(`Question: ${item}`);
  const actual = readlineSync.question('Your answer: ');
  if (func(item) !== actual) {
    console.log(`${actual} is wrong answer ;(. Correct answer was ${func(item)}.`);
    return console.log(`Let's try again, ${name}!`);
  }
  console.log('Correct!');
  return guess(acc + 1, randomInteger(), func, name);
};
