import runGame from '..';
import random from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const getCorrectAnswer = question =>
  (isEven(question) ? 'yes' : 'no');

const getInputParams = () => {
  const question = random(1000);
  const correctAnswer = getCorrectAnswer(question);
  return {
    question,
    correctAnswer,
  };
};

export default userName => runGame(userName, description, getInputParams);
