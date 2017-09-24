import readlineSync from 'readline-sync';
import colors from 'colors';
import even from './games/even';
import calc from './games/calc';
import balance from './games/balance';
import gcd from './games/gcd';
import prime from './games/prime';
import progression from './games/progression';

console.log(colors.blue('Welcome to the Brain Games!'));
console.log('');
const name = readlineSync.question('May I have your name?: ');
console.log(colors.cyan(`Hello, ${name}!`));
console.log('');
const choose = () => {
  console.log('');
  console.log('1. Brain Even');
  console.log('2. Brain Calc');
  console.log('3. Brain Balance');
  console.log('4. Brain GCD');
  console.log('5. Brain Prime');
  console.log('6. Brain Progression');
  console.log('');
  const game =
    readlineSync.question('Type the number of the game that you want to play: ');
  console.log('');
  switch (game) {
    case '1':
      return even(name);
    case '2':
      return calc(name);
    case '3':
      return balance(name);
    case '4':
      return gcd(name);
    case '5':
      return prime(name);
    case '6':
      return progression(name);
    default:
      console.log(colors.red('Game with this number does not exist!'));
      return choose();
  }
};
export default choose;
