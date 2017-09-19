import { common, random } from '..';

const correctAnswer = (num1, num2, operation) => {
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

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('What is the result of the expression?');
  console.log('');
  const numOfGames = 3;
  const iter = (acc, index) => {
    if (index === numOfGames) {
      common(...acc);
      return;
    }
    const num1 = random();
    const num2 = random();
    const operColl = ['+', '-', '*'];
    const getOper = Math.floor(Math.random() * operColl.length);
    const operation = operColl[getOper];
    const question = `${num1}${operation}${num2}`;
    const newAcc = acc.concat(question, correctAnswer(num1, num2, operation));
    iter(newAcc, index + 1);
  };
  return iter([], 0);
};
