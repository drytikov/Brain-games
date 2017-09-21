import { cons } from 'hexlet-pairs';
import runGame from '..';
import random from '../utils';


const description = 'Find the greatest common divisor of given numbers.';

const nod = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return nod(num2, num1 % num2);
};

const getCorrectAnswer = (num1, num2) => String(nod(num1, num2));

const getInputParams = () => {
  const num1 = random(1000);
  const num2 = random(1000);
  const question = `${num1} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, num2);
  return cons(question, correctAnswer);
};

export default () => runGame(description, getInputParams);
