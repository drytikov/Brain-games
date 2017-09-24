import { cons } from 'hexlet-pairs';
import runGame from '..';
import random from '../utils';


const description = 'What number is missing in this progression?';
const progressionLength = 10;
const step = random(10);

const getProgression = (acc, numOfItem) => {
  if (numOfItem === progressionLength) {
    return acc;
  }
  return getProgression([...acc, acc[numOfItem - 1] + step], numOfItem + 1);
};

const getInputParams = () => {
  const progression = getProgression([random(100)], 1);
  const numOfRandomItem = random(10);
  const correctAnswer = String(progression[numOfRandomItem]);
  progression[numOfRandomItem] = '...';
  const question = progression.join(' ');
  return cons(question, correctAnswer);
};

export default name => runGame(name, description, getInputParams);
