import { common, random } from '..';

const getCorrectAnswer = (num1, num2) => {
  if (num2 === 0) {
    return String(num1);
  }
  return getCorrectAnswer(num2, num1 % num2);
};
const randQuestion = () => {
  const num1 = random();
  const num2 = random();
  return [num1, num2];
};
export default () => {
  const curInfo = 'Find the greatest common divisor of given numbers.';
  const numOfGames = 3;
  return common(curInfo, numOfGames, randQuestion, getCorrectAnswer);
};
