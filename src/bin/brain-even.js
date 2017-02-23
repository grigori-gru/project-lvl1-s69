#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
const isOdd = num => (num % 2 === 0 ? 'yes' : 'no');
const check = () => {
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const guessOdd = (arr) => {
    if (arr.length === 0) return console.log(`Congratulations, ${name}!`);
    const item = arr[0];
    console.log(`Question: ${item}`);
    const actual = readlineSync.question('Your answer: ');
    if (isOdd(item) !== actual) {
      console.log(`${actual} is wrong answer ;(. Correct answer was ${isOdd(item)}.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    return guessOdd(arr.slice(1));
  };
  return guessOdd([1, 10, 5]);
};
check();
