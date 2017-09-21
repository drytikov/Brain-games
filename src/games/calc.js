import { cons } from 'hexlet-pairs';
import run from '..';
import random from '../utils';

const operColl = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getCorrectAnswer = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      return console.log('incorrect operation');
  }
};

const getOptions = () => {
  const num1 = random();
  const num2 = random();
  const operation = operColl[random(3)];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, num2, operation);
  return cons(question, correctAnswer);
};

export default () => run(description, getOptions);
