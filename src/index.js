import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');

export const yourName = () => readlineSync.question('\nMay I have your name? ');

export const hello = name => console.log(`Hello, ${name}!`);

export const randomInteger = () => {
  const rand = Math.random() * 100;
  return Math.round(rand);
};
