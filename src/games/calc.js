import { common, random } from '..';

const correctAnswer = (num1, operation, num2) => {
  switch (operation) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    default:
      return console.log('incorrect operation');
  }
};
const randQuestion = () => {
  const num1 = random();
  const num2 = random();
  const operColl = ['+', '-', '*'];
  const getOper = Math.floor(Math.random() * operColl.length);
  const operation = operColl[getOper];
  return [num1, operation, num2];
};
export default () => {
  const curInfo = 'What is the result of the expression?';
  const numOfGames = 3;
  return common(curInfo, numOfGames, randQuestion, correctAnswer);
};
