import { common, random } from '..';

const correctAnswer = (num1, num2) => {
  if (num2 === 0) {
    return String(num1);
  }
  return correctAnswer(num2, num1 % num2);
};
export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.');
  console.log('');
  const numOfGames = 3;
  const iter = (param, index) => {
    if (index === numOfGames) {
      common(...param);
      return;
    }
    const num1 = random();
    const num2 = random();
    const newParam = param.concat(`${num1} ${num2}`, correctAnswer(num1, num2));
    iter(newParam, index + 1);
  };
  return iter([], 0);
};
