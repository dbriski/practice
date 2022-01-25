// String: length
function length(name) {
  return name.length;
}
length('bla');

//String: toUpperCase()
function toCase(input) {
  return input.toLowerCase() + '-' + input.toUpperCase();
}
toCase('bla');

// String: charAt()
function shortcut(name1, name2) {
  let char1 = name1.charAt(0);
  let char2 = name2.charAt(0);
  return char1 + char2;
}
shortcut('Lala', 'Land');

//String: trim()
function firstChar(name) {
  let trim = name.trim();
  return trim.charAt(0);
}
firstChar(' Lisa Lisa ');

// String: indexOf()
function indexOfIgnoreCase(name1, name2) {
  let lowChar1 = name1.toLowerCase();
  let lowChar2 = name2.toLowerCase();
  return lowChar1.indexOf(lowChar2);
}
indexOfIgnoreCase('bit', 'IT');

// String: indexOf() with from index
function secondIndexOf(name1, name2) {
  let n1 = name1.indexOf(name2);
  return name1.indexOf(name2, n1 + 1);
}
secondIndexOf('White Rabbit', 'it');

// String: substr()
function firstWord(name) {
  let firstBlank = name.indexOf(' ');
  return name.substr(0, firstBlank);
}
firstWord('Dani je cool');

//String: replace() - NOTE: chaining!
function normalize(date) {
  return date.replace('-', '/').replace('-', '/');
}
normalize('19-01-2021');

// Numbers
function add(num1, num2) {
  return num1 + num2;
}
add(1, 3);

// Fahrenheit
function toFahrenheit(input) {
  return 1.8 * input + 32;
}
toFahrenheit(2);

// Modulo
function onesDigit(number) {
  return number % 10;
}
onesDigit(62);

// Parentheses
function mean(num1, num2) {
  let sum = num1 + num2;
  return sum / 2;
}
mean(1, 2);

// Math
//My example
function hypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}
hypotenuse(3, 4);
//Their solution
function hypotenuse(a, b) {
  let cSquare = Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(cSquare);
}

// min and max
//My example
function midrange(n1,n2,n3) {
  return (Math.min(n1,n2,n3) + Math.max(n1,n2,n3)) / 2;
}
midrange(2,7,4);
//Their solution
function midrange(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  return (min + max) / 2;
}

// Math.PI
function area(n1) {
  return Math.PI * (n1 * n1) ;
 }
 area(4)

// Rounding
function round100(num) {
  return Math.round(num/100)*100;
}
round100(1230);

// Random numbers
function dice() {
  return Math.floor(Math.random() * (7 - 1)) + 1; 
} 
dice()

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// parseInt
// My example
function add(textnum) {
  const operatorPosition = textnum.indexOf('+');
  const num1 = textnum.substr(0, operatorPosition);
  const firstNum = parseInt(num1);
  const num2 = textnum.substr(operatorPosition)  
  const secondNum = parseInt(num2)
  return firstNum + secondNum;
}
add('100+300');
//Their solution
function add(s) {
  let summand1 = parseInt(s, 10);
  let indexPlus = s.indexOf('+');
  let sAfterPlus = s.substr(indexPlus + 1);
  let summand2 = parseInt(sAfterPlus, 10);
  return summand1 + summand2;
}
add('100+300');

// Boolean
function nand(value1, value2) {
  let values = value1 && value2;
  return !values;
}
nand(true, true)

// NOR
function nor(v1, v2) {
  const values = v1 || v2;
  return !values;
}
nor(false, false);

// XOR - Exclusive or
//Conjunctive
function xor(val1, val2) {
  return (val1 || val2) && (!val1 || !val2);
}
// Disjunctive
function xor(val1, val2) {
  return !val1 && val2 || val1 && !val2;
}

// Strict equality
function equals(a, b) {
  return a === b;
}
equals(1,1);

// Three identical values
function equals(a, b, c) {
  return a === b && a === c;
}
equals(1, 2, 1);

// Even numbers
function isEven(a) {
  const result = a % 2;
  return result === 0;
}
isEven(3);

// Strict inequality
function unequal(a, b, c) {
  return a !== b && a !== c && b !== c;
}
unequal(1, 2, 3);

// Compare numbers
function isThreeDigit(num) {
  return num >= 100 && num < 1000;
}
isThreeDigit(199);