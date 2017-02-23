#!/usr/bin/env node
import { welcome, hello, yourName, randomInteger, guess } from '..';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
const name = yourName();
hello(name);

const isOdd = num => (num % 2 === 0 ? 'yes' : 'no');

guess(1, randomInteger(), isOdd());
