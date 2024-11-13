'use strict';

const num1 = parseInt(prompt('Anna ensimmäinen numero:'));
const num2 = parseInt(prompt('Anna toinen numero:'));
const num3 = parseInt(prompt('Anna kolmas numero:'));
const num4 = parseInt(prompt('Anna neljäs numero:'));

const numbers = [num1, num2, num3, num4];

numbers.sort((a, b) => b - a);

console.log("Lajitellut numerot laskevassa järjestyksessä:", numbers);
