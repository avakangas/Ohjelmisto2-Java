'use strict'

function even (arr) {
  const evenNumbers = [];
  for (let numero of arr) {
    if (numero % 2 === 0){
      evenNumbers.push(numero);
    }
  }
  return evenNumbers;
}

const numerot = [4,5,6,8,4,,1,,124,353,345,2,543,5,54];
const parillisetNumerot = even(numerot);

console.log(numerot);
console.log(parillisetNumerot);