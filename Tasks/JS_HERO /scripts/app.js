// String: length
function length(name) {
  return name.length;
}
length('bla');

// String: toUpperCase()
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

// String: trim()
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

// String: replace() - NOTE: chaining!
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
function midrange(n1, n2, n3) {
  return (Math.min(n1, n2, n3) + Math.max(n1, n2, n3)) / 2;
}
midrange(2, 7, 4);
//Their solution
function midrange(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  return (min + max) / 2;
}

// Math.PI
function area(n1) {
  return Math.PI * (n1 * n1);
}
area(4);

// Rounding
function round100(num) {
  return Math.round(num / 100) * 100;
}
round100(1230);

// Random numbers
function dice() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
}
dice();

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// parseInt
// My example
function add(textnum) {
  const operatorPosition = textnum.indexOf('+');
  const num1 = textnum.substr(0, operatorPosition);
  const firstNum = parseInt(num1);
  const num2 = textnum.substr(operatorPosition);
  const secondNum = parseInt(num2);
  return firstNum + secondNum;
}
add('100+300');
// Their solution
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
nand(true, true);

// NOR
function nor(v1, v2) {
  const values = v1 || v2;
  return !values;
}
nor(false, false);

// XOR - Exclusive or
// Conjunctive
function xor(val1, val2) {
  return (val1 || val2) && (!val1 || !val2);
}
// Disjunctive
function xor(val1, val2) {
  return (!val1 && val2) || (val1 && !val2);
}

// Strict equality
function equals(a, b) {
  return a === b;
}
equals(1, 1);

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

// if
// My solution
function equals(a, b) {
  if (a === b) {
    return 'EQUAL';
  } else {
    return 'UNEQUAL';
  }
}
// Their solution
function equals(a, b) {
  let result = 'UNEQUAL';
  if (a === b) {
    result = 'EQUAL';
  }
  return result;
}

// Two returns
function repdigit(n) {
  let ones = n % 10;
  let tens = Math.floor(n / 10);
  if (ones === tens) {
    return 'Repdigit!';
  }
  return 'No Repdigit!';
}

// if...else
function addWithSurcharge(a, b) {
  let surcharge = 0;
  if (a <= 10) {
    surcharge += 1;
  } else {
    surcharge += 2;
  }

  if (b <= 10) {
    surcharge += 1;
  } else {
    surcharge += 2;
  }
  return a + b + surcharge;
}

// forEach example
// function addWithSurcharge(a, b) {
//   const numbers = [a, b];
//   let total = 0;
//   numbers.forEach(n => {
//     if (n <= 10){
//       total += 1 + n;
//     } else {
//       total += 2 + n;
//     }
//   })
//   return total;
// }

// else if
function addWithSurcharge(a, b) {
  let surcharge = 0;
  if (a <= 10) {
    surcharge += 1;
  } else if (a > 10 && a <= 20) {
    surcharge += 2;
  } else {
    surcharge += 3;
  }
  if (b <= 10) {
    surcharge += 1;
  } else if (b > 10 && b <= 20) {
    surcharge += 2;
  } else {
    surcharge += 3;
  }
  return a + b + surcharge;
}
// Advanced solution to task
// const addWithSurcharge1 = (...numbers) => {
//   let total = 0;
//   numbers.forEach(num => {
//     if(num <= 10) {
//       total += 1 + num;
//     } else if(num > 10 && num <= 20) {
//       total += 2 + num;
//     } else {
//       total += 3 + num;
//     }
//   })
//   return total;
// }

// console.log(addWithSurcharge1(1, 4, 70, 50, 14));

// Arrays
function toArray(a, b) {
  return [a, b];
}

// Get array elements
// Meh example, only array can be as an argument for this to work
function getFirstElement(arr) {
  return arr[0];
}
// Better way, more dynamic -> rest operator converts arguments into array
const getFirstElement = (...elements) => elements[0];
console.log(getFirstElement(1, 2));

// Set array elements
function setFirstElement(arr, a) {
  arr[0] = a;
  return arr;
}

// Arry: length
function getLastElement(arr) {
  const arrIndex = arr.length - 1;
  return arr[arrIndex];
}

// Sorting arrays
function sortArray(arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  return arr;
}

// Array: shift() and push()
function rotate(arr) {
  const removeEl = arr.shift();
  arr.push(removeEl);
  return arr;
}

// Array: indexOf()
function add(arr, a) {
  if (arr.indexOf(a) === -1) {
    arr.push(a);
    return arr;
  }
  return arr;
}

// Array: concat()
function concatUp(arr1, arr2) {
  if (arr1.length <= arr2.length) {
    return arr1.concat(arr2);
  } else {
    return arr2.concat(arr1);
  }
}

// Array: slice()
function halve(arr) {
  const calcHalveLength = Math.round((arr.length - 1) / 2);
  const oddLength = calcHalveLength + 1;
  if (!(arr.length % 2)) {
    return arr.slice(0, calcHalveLength);
  } else {
    return arr.slice(0, oddLength);
  }
}

// Array: join()
function list(arr) {
  if (arr.length === 0) {
    return '';
  } else if (arr.length === 1) {
    return arr[0];
  }

  const lastWordIndex = arr.length - 1;
  const wordsComma = arr.slice(0, lastWordIndex);
  const lastWord = arr[lastWordIndex];
  return wordsComma.join(', ') + ' and ' + lastWord;
}

// Array of arrays
// My example, but returns only strings
// function flat(loshu) {
//   let arr = [];
//   for(let i = 0; i < loshu.length; i++) {
//     if(loshu[i].length === 0) {
//       break;
//     }
//     const array1 = loshu[i];
//     const array2 = array1.join();
//     arr.splice(i, 0, array2)
//     }
//     return arr;
//   }
// Using reduce()
function flat(a1) {
  const flatened = a1.reduce((flatenedArr, e) => {
    flatenedArr = [...flatenedArr, ...e];
    return flatenedArr;
  }, []);
  return flatened;
}
// Using flat()
function flat(loshu) {
  return loshu.flat();
}
// Using recursion and map for three-dimensional arrays
const flatenRecursively = (arr) => {
  const flatened = [];
  arr.map((e) => {
    if (Array.isArray(e)) {
      flatened.push(...flatenRecursively(e));
    } else {
      flatened.push(e);
    }
  });
  return flatened;
};

// Comments
function median(arr) {
  if(!(Array.isArray(arr))) {
    throw "This isn't array";
  }
  const secondNumIn = Math.round((arr.length - 1) / 2);
  const firstNumIn = secondNumIn - 1;
  if (!(arr.length % 2)) {
    return (arr[firstNumIn] + arr[secondNumIn]) / 2;
  } else {
    return arr[secondNumIn];
  }
}

// undefined
function hello(name) {
  if (!name) {  // or name === undefined but it's not for all falsey 
    return 'Hello world!'
  } else {
    return 'Hello ' + name + '!';
  }
}

// null
function cutComment(name) {
  const indexChar = name.lastIndexOf('/');
  if (indexChar !== -1) {
    return name.substr(indexChar + 1).trim();
  } else {
    return null;
  }
}

// for loop
function addTo(num) {
  let sum = 0;
  for(let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}

// Factorial
function factorial(num) {
  let number = 1;
  if (num < 0) {
    throw 'Please enter a positive number';
  }
  for (let i = 1; i <= num; i++){
    number *= i;
  }
  return number;
}