import runGame from '..';
import random from '../utils';


const description = 'What number is missing in this progression?';
const progressionLength = 10;

const getProgression = () => {
  const firstItem = random(100);
  const step = random(10);
  const iter = (acc, numOfItem) => {
    if (numOfItem === progressionLength) {
      return acc;
    }
    return iter([...acc, acc[numOfItem - 1] + step], numOfItem + 1);
  };
  return iter([firstItem], 1);
};

const getInputParams = () => {
  const progression = getProgression();
  const numOfRandomItem = random(10);
  const correctAnswer = String(progression[numOfRandomItem]);
  progression[numOfRandomItem] = '...';
  const question = progression.join(' ');
  return {
    question,
    correctAnswer,
  };
};
export default userName => runGame(userName, description, getInputParams);
