import { cons } from 'hexlet-pairs';
import common from '..';
import random from '../utils';

const gameAbout = 'Answer "yes" if number even otherwise answer "no".';

const isEven = question => question % 2 === 0;

const getCorrectAnswer = question =>
  isEven(question) ? 'yes' : 'no';

const getOptions = () => {
  const question = random();
  const correctAnswer = getCorrectAnswer(question);
  return cons(question, correctAnswer);
};

export default () => common(gameAbout, getOptions);
