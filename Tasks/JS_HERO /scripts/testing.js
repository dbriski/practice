function mean(numbers) {
  let sum = 0;
  for(const num of numbers) {
    sum += num;
  }
  return sum/(numbers.length);
}

console.log(mean([1, 2, 3]));