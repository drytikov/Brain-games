import { cons } from 'hexlet-pairs';
import run from '..';
import random from '../utils';

const operColl = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getOptions = () => {
  const num1 = random(10);
  const num2 = random(10);
  const operation = operColl[random(3)];
  switch (operation) {
    case '+':
      return cons(`${num1} + ${num2}`, String(num1 + num2));
    case '-':
      return cons(`${num1} - ${num2}`, String(num1 - num2));
    case '*':
      return cons(`${num1} * ${num2}`, String(num1 * num2));
    default:
      return console.log('incorrect operation');
  }
};

export default () => run(description, getOptions);
