import { common, random } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
console.log('');
const correctAnswer = (curNumber) => {
  if (curNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
export default () => {
  const iter = (param, numOfGames) => {
    if (numOfGames === 3) {
      common(...param);
      return;
    }
    const number = random();
    const newParam = param.concat(number, correctAnswer(number));
    iter(newParam, numOfGames + 1);
  };
  return iter([], 0);
};
