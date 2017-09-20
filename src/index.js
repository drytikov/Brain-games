import readlineSync from 'readline-sync';

export const random = () => Math.floor(Math.random() * 100);
export const info = about => console.log(about);
export const common = (curInfo, numOfGames, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  info(curInfo);
  console.log('');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('');
  const firstQuestion = question();
  const firstCorrectAnswer = correctAnswer(...firstQuestion);
  const iter = (curQuestion, curCorrectAnswer, index) => {
    if (index === numOfGames) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    console.log(`Question: ${curQuestion.join(' ')}`);
    const curAnswer = readlineSync.question('Your answer: ');
    if (curCorrectAnswer === curAnswer) {
      console.log('Correct!');
      const nextQuestion = question();
      const nextCorrectAnswer = correctAnswer(...nextQuestion);
      iter(nextQuestion, nextCorrectAnswer, index + 1);
    } else {
      console.log(`'${curAnswer}' is wrong answer ;(. Correct answer was '${curCorrectAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
    }
  };
  iter(firstQuestion, firstCorrectAnswer, 0);
};
