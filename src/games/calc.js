import { cons } from 'hexlet-pairs';
import common from '..';
import random from '../utils';

const operColl = ['+', '-', '*'];
const gameAbout = 'What is the result of the expression?';

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
  const getOper = Math.floor(Math.random() * operColl.length);
  const operation = operColl[getOper];
  const question = `${num1} ${operation} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, num2, operation);
  return cons(question, correctAnswer);
};

export default () => common(gameAbout, getOptions);
