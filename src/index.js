import readlineSync from 'readline-sync';
import colors from 'colors';
import { car, cdr } from 'hexlet-pairs';
import chooseGame from './menu';


const numOfGames = 3;

export default (name, description, getInputParams) => {
  console.log(colors.green(description));
  console.log('');
  const iter = (gameNumber) => {
    if (gameNumber === numOfGames) {
      console.log(colors.rainbow(`Congratulations, ${name}!`));
      return;
    }
    const inputParams = getInputParams();
    const question = car(inputParams);
    const correctAnswer = cdr(inputParams);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log(colors.yellow('Correct!'));
      iter(gameNumber + 1);
    } else {
      console.log(colors.red(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`));
      console.log(colors.cyan(`Let's try again, ${name}!`));
    }
  };
  iter(0);
  console.log('');
  if (readlineSync.keyInYN('Do you want to play another game?')) {
    chooseGame();
  } else {
    console.log(colors.cyan(`Goodbye, ${name}!`));
  }
};
