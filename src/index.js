import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const numOfGames = 3;

export default (description, getInputParams) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  console.log('');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('');
  const iter = (gameNumber) => {
    if (gameNumber === numOfGames) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const inputParams = getInputParams();
    const question = car(inputParams);
    const correctAnswer = cdr(inputParams);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (correctAnswer === answer) {
      console.log('Correct!');
      iter(gameNumber + 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(0);
};
