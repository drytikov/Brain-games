import { common, random } from '..';

const isEven = question => question % 2 === 0;
const getCorrectAnswer = question =>
  isEven(question) ? 'yes' : 'no';
const randQuestion = () => [random()];
export default () => {
  const curInfo = 'Answer "yes" if number even otherwise answer "no".';
  const numOfGames = 3;
  return common(curInfo, numOfGames, randQuestion, getCorrectAnswer);
};
