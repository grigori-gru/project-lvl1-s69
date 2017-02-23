#!/usr/bin/env node
import { welcome, randomInteger, guess } from '..';

const name = welcome('Answer "yes" if number even otherwise answer "no".');

const isOdd = num => (num % 2 === 0 ? 'yes' : 'no');

guess(1, randomInteger(), isOdd, name);
