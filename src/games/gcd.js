import { cons } from 'hexlet-pairs';
import common from '..';
import random from '../utils';


const gameAbout = 'Find the greatest common divisor of given numbers.';

const getCorrectAnswer = (num1, num2) => {
  if (num2 === 0) {
    return String(num1);
  }
  return getCorrectAnswer(num2, num1 % num2);
};

const getOptions = () => {
  const num1 = random();
  const num2 = random();
  const question = `${num1} ${num2}`;
  const correctAnswer = getCorrectAnswer(num1, num2);
  return cons(question, correctAnswer);
};

export default () => common(gameAbout, getOptions);
