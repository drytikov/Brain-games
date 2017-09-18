import readlineSync from 'readline-sync';

export default () => {
  const number = Math.floor(Math.random() * 1000);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);
  console.log('');
  const iter = (curNumber, index) => {
    if (index === 3) {
      console.log(`Congratulations, ${actual}!`);
      return;
    }
    console.log(`Question: ${curNumber}`);
    const curAnswer = readlineSync.question('Your answer: ');
    const isEvenCorrect = curNumber % 2 === 0 && curAnswer === 'yes';
    const isOddNumberCorrect = curNumber % 2 !== 0 && curAnswer === 'no';
    if (isEvenCorrect || isOddNumberCorrect) {
      console.log('Correct!');
      iter(Math.floor(Math.random() * 1000), index + 1);
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
      console.log(`Let's try again, ${actual}!`);
    }
  };
  return iter(number, 0);
};
