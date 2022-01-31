// |1| True, but it is only function
// function largerNum (a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// |1| Program with User Input
// let num1 = prompt('Input the First integer', '0');
// let num2 = prompt('Input the Second integer', '0');

// function larger() {
//   if (parseInt(num1) > parseInt(num2)) {
//     alert('The larger of ' + num1 + ' and ' + num2 + ' is ' + num1 + '.');
//   } else if (parseInt(num1) < parseInt(num2)) {
//     alert('The larger of ' + num1 + ' and ' + num2 + ' is ' + num2 + '.');
//   } else {
//     alert('The values ' + num1 + ' and ' + num2 + ' are equal.');
//   }
// }

// larger();

// |2| Program with User Input, my way
// let num1 = prompt('Input the First integer', '0');
// let num2 = prompt('Input the Second integer', '0');
// let num3 = prompt('Input the Third integer', '0');

// function numberSign() {
//   let numbers = [num1, num2, num3];
//   for (const num of numbers) {
//     if (Math.sign(num) === -1) {
//       return alert('The sign is -');
//     } else {
//       return alert('The sign is +');
//     }
//   }
// }
// numberSign();

//|3|
// Bubblesort
let numbers = [1, 3, 6, 9, 4];

function sort(guzica) {
  for (let i = 0; i < guzica.length; i++) {
    console.log('Outer:', guzica)
    for (let j = 0; j < guzica.length - i - 1; j++) {
      console.log(guzica)
      if (guzica[j + 1] > guzica[j]) {
        [guzica[j + 1], guzica[j]] = [guzica[j], guzica[j + 1]];
      }
    }
  }
  return guzica;
}

console.log(sort(numbers));


