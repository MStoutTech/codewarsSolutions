// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

//My solution

// Take in an array of numbers, array will have at least 3 numbers
// Return the unique number

//EXAMPLES
// findUniq([1, 1, 1, 2, 1, 1]) // 2
// findUniq([0, 0, 0.55, 0, 0]) // 0.55


function findUniq(arr) {
  //Check if the last index of the first number is 0
  let firstNumber = arr[0]
  if (arr.lastIndexOf(firstNumber) === 0){
    //If it is, that means it is unique and you may return the 1st number
    return firstNumber;
  } else {
    //If not, walk the array until you find the number that is not the first number and return it
    return arr.find(number => number !== firstNumber)
  }
  
}