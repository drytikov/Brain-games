import readlineSync from 'readline-sync';
import even from './games/even';
import calc from './games/calc';
import balance from './games/balance';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';

console.log('Welcome to the Brain Games!');
console.log('');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('');
console.log('1. Brain Even');
console.log('2. Brain Calc');
console.log('3. Brain Balance');
console.log('4. Brain GCD');
console.log('5. Brain Prime');
console.log('6. Brain Progression');
const choose = () => {
  const game =
    readlineSync.question('Type the number of the game that you want to play: ');
  switch (game) {
    case '1':
      return even();
    case '2':
      return calc();
    case '3':
      return balance();
    case '4':
      return gcd();
    case '5':
      return prime();
    case '6':
      return progression();
    default:
      console.log('Incorrect number!!!');
      return choose();
  }
};
export default choose;
