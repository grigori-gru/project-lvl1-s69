#!/usr/bin/env node
import { welcome, hello, yourName } from '..';

welcome();
const name = yourName();
hello(name);
