import { cons } from 'hexlet-pairs';
import runGame from '..';
import random from '../utils';


const description = 'What number is missing in this progression?';
const progressionLength = 10;
const step = random(10);

const getProgression = (progression, numOfItem) => {
  if (numOfItem === progressionLength) {
    return progression;
  }
  const newProgression = progression.concat(progression[numOfItem - 1] + step);
  return getProgression(newProgression, numOfItem + 1);
};

const getInputParams = () => {
  const progression = getProgression([random(100)], 1);
  const numOfRandomItem = random(10);
  const correctAnswer = String(progression[numOfRandomItem]);
  progression[numOfRandomItem] = '...';
  const question = progression.join(' ');
  return cons(question, correctAnswer);
};

export default () => runGame(description, getInputParams);
