import { cons } from 'hexlet-pairs';
import runGame from '..';
import random from '../utils';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (div) => {
    if (div > num / 2) {
      return true;
    }
    if (num % div === 0) {
      return false;
    }
    return iter(div + 1);
  };
  return iter(2);
};

const getCorrectAnswer = question =>
  (isPrime(question) ? 'yes' : 'no');

const getInputParams = () => {
  const question = random(100);
  const correctAnswer = getCorrectAnswer(question);
  return cons(question, correctAnswer);
};

export default userName => runGame(userName, description, getInputParams);
