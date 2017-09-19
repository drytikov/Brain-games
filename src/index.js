import readlineSync from 'readline-sync';

export const random = () => Math.floor(Math.random() * 10);
export const common = (...param) => {
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('');
  if (!param) {
    return;
  }
  const iter = (params, index) => {
    if (params.length === 0) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [curNumber, correctAnswer, ...rest] = params;
    console.log(`Question: ${curNumber}`);
    const curAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === curAnswer) {
      console.log('Correct!');
      iter(rest, index + 1);
    } else {
      console.log(`'${curAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(param, 0);
};
