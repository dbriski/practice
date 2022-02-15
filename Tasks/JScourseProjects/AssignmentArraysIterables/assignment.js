const luckyNumbers = [4, 3, 6, 9, 20]

const filteredNumbers = luckyNumbers.filter(num => num > 5);
console.log(filteredNumbers);

const mappedNumbers = luckyNumbers.map(num => ({number: num}));
console.log(mappedNumbers);

const singleNumber = luckyNumbers.reduce((prevVal, curVal) => prevVal + curVal, 0);
console.log(singleNumber);

// Min Max logic!!
const findMaxMin = (...nums) => {
  let curMax = nums[0];
  let curMin = nums[0];
  for(const num of nums) {
    if(num > curMax) {
      curMax = num;
    } 
    if(num < curMax) {
      curMin = num;
    }
  }
  return [curMax, curMin];
};

console.log(findMaxMin(...luckyNumbers));

const [findMax, findMin] = findMaxMin(...luckyNumbers);
console.log(findMax, findMin)

const numbers = new Set(luckyNumbers);
console.log(numbers);