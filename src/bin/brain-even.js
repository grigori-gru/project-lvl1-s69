#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, hello, yourName, randomInteger } from '..';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
const name = yourName();
hello(name);

const isOdd = num => (num % 2 === 0 ? 'yes' : 'no');

const guessOdd = (acc, item) => {
  if (acc > 3) return console.log(`Congratulations, ${name}!`);
  console.log(`Question: ${item}`);
  const actual = readlineSync.question('Your answer: ');
  if (isOdd(item) !== actual) {
    console.log(`${actual} is wrong answer ;(. Correct answer was ${isOdd(item)}.`);
    return console.log(`Let's try again, ${name}!`);
  }
  console.log('Correct!');
  return guessOdd(acc + 1, randomInteger());
};
guessOdd(1, randomInteger());
