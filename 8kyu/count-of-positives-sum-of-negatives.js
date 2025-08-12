// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


//My solution

function countPositivesSumNegatives(input) {
  let arr = [];
  if (!input || input == [] || input == [0,0] || input == [0] || !input.find(x => x >0) || !input.find(x => x<0)){
    return [];
  }
  arr.push(input.filter((num) => num > 0).length)
  let negatives =input.filter((num) => num < 0)
  let last = negatives.reduce((a,c) => a + c, 0)
  arr.push(last)
  return arr
}