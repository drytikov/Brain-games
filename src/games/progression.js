import { cons } from 'hexlet-pairs';
import runGame from '..';
import random from '../utils';


const description = 'What number is missing in this progression?';

const getOptions = () => {
  const progressionLength = 10;
  const progression = [random(100)];
  const step = random(10);
  const iter = (numOfItem) => {
    if (numOfItem === progressionLength) {
      return;
    }
    progression.push(progression[numOfItem - 1] + step);
    iter(numOfItem + 1);
  };
  iter(1);
  const numOfRandomItem = random(10);
  const correctAnswer = String(progression[numOfRandomItem]);
  progression[numOfRandomItem] = '...';
  const question = progression.join(' ');
  return cons(question, correctAnswer);
};

export default () => runGame(description, getOptions);
