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
const userName = readlineSync.question('May I have your name?: ');
console.log(colors.cyan(`Hello, ${userName}!`));
console.log('');
export default () => {
  const games = [even, calc, balance, gcd, prime, progression];
  const descriptions = ['Is even?', 'Calculator', 'Balance', 'GCD', 'Is prime', 'Fill the progression'];
  const choosenIndex = readlineSync.keyInSelect(descriptions, 'Choose the game');
  if (choosenIndex < 0) {
    console.log(colors.cyan(`Goodbye, ${userName}!`));
  } else {
    const gameName = games[choosenIndex];
    gameName(userName);
  }
};
