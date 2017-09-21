import { cons } from 'hexlet-pairs';
import common from '..';
import random from '../utils';

const gameAbout = 'Balance the given number.';

const getCorrectAnswer = (num) => {
  const balance = (arrDigitsOfNum, minDigit, indexMin, maxDigit, indexMax) => {
    const curArrDigitsOfNum = arrDigitsOfNum;
    if ((maxDigit - minDigit) < 2) {
      curArrDigitsOfNum[indexMax] = maxDigit - 1;
      curArrDigitsOfNum[indexMin] = minDigit + 1;
      return getCorrectAnswer(curArrDigitsOfNum.sort((a, b) => a - b).join(''));
    }
    return balance(arrDigitsOfNum, minDigit + 1, indexMin, maxDigit - 1, indexMax);
  };
  const numAsStr = String(num);
  const arrDigitsOfNum = numAsStr.split('').map(item => Number(item));
  const minDigit = Math.min.apply(null, arrDigitsOfNum);
  const maxDigit = Math.max.apply(null, arrDigitsOfNum);
  if ((maxDigit - minDigit) < 2) {
    return num;
  }
  const indexMin = arrDigitsOfNum.indexOf(minDigit);
  const indexMax = arrDigitsOfNum.indexOf(maxDigit);
  return balance(arrDigitsOfNum, minDigit, indexMin, maxDigit, indexMax);
};

const getOptions = () => {
  const num = random();
  const correctAnswer = getCorrectAnswer(num);
  return cons(num, correctAnswer);
};

export default () => common(gameAbout, getOptions);
