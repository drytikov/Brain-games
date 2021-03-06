import runGame from '..';
import random from '../utils';

const operColl = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getInputParams = () => {
  const num1 = random(10);
  const num2 = random(10);
  const operation = operColl[random(3)];
  switch (operation) {
    case '+':
      return {
        question: `${num1} + ${num2}`,
        correctAnswer: String(num1 + num2),
      };
    case '-':
      return {
        question: `${num1} - ${num2}`,
        correctAnswer: String(num1 - num2),
      };
    case '*':
      return {
        question: `${num1} * ${num2}`,
        correctAnswer: String(num1 * num2),
      };
    default:
      return console.log('incorrect operation');
  }
};

export default userName => runGame(userName, description, getInputParams);
