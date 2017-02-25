import readlineSync from 'readline-sync';

export const randomInteger = () => {
  const rand = Math.random() * 100;
  return Math.round(rand);
};

export const guess = (hello, rand, toResult) => {
  console.log(`Welcome to the Brain Games!\n${hello}`);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}!\n`);

  const iter = (acc, item) => {
    if (acc > 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    console.log(`Question: ${item}`);
    const actual = readlineSync.question('Your answer: ');
    if (String(toResult(item)) !== actual) {
      console.log(`${actual} is wrong answer ;(. Correct answer was ${toResult(item)}.`);
      return console.log(`Let's try again, ${name}!`);
    }
    console.log('Correct!');
    return iter(acc + 1, rand());
  };

  return rand ? iter(1, rand()) : '';
};
