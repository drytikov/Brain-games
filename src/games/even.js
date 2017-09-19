import { common, random } from '..';

const correctAnswer = (curNumber) => {
  if (curNumber % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const numOfGames = 3;
  const iter = (param, index) => {
    if (index === numOfGames) {
      common(...param);
      return;
    }
    const number = random();
    const newParam = param.concat(number, correctAnswer(number));
    iter(newParam, index + 1);
  };
  return iter([], 0);
};
