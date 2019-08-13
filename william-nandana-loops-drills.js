'use strict';

function max(numbers) {
  let maxNumber = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
    i++;
  }
  return maxNumber;
}
  
console.log(max([1,2,3,4,5]));
    
    
  
function min(numbers) {
  let minNumber = numbers[0];
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] < minNumber) {
      minNumber = numbers[i];
    }
    i++;
  }
  return minNumber;
}
  
console.log(min([1,2,3,4,5]));

function average(numbers) {
  let sum = 0;
  numbers.forEach(item => sum += item);
  return sum / numbers.length;
}
console.log(average([1,2,3,4,5]));