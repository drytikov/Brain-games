import { common, random } from '..';

const correctAnswer = (question) => {
  if (question % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
const randQuestion = () => [random()];
export default () => {
  const curInfo = 'Answer "yes" if number even otherwise answer "no".';
  const numOfGames = 3;
  return common(curInfo, numOfGames, randQuestion, correctAnswer);
};
