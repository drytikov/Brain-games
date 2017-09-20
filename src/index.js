import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numOfGames = 3;

export default (gameAbout, getOptions) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameAbout);
  console.log('');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('');
  const iter = (gameNumber) => {
    if (gameNumber === numOfGames) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const curOptions = getOptions();
    const curQuestion = car(curOptions);
    const curCorrectAnswer = cdr(curOptions);
    console.log(`Question: ${curQuestion}`);
    const curAnswer = readlineSync.question('Your answer: ');
    if (curCorrectAnswer === curAnswer) {
      console.log('Correct!');
      iter(gameNumber + 1);
    } else {
      console.log(`'${curAnswer}' is wrong answer ;(. Correct answer was '${curCorrectAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(0);
};
