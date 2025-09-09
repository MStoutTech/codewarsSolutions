// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


//My solution

// Take in two integers, the first will always be smaller than the second
// Return an array of all numbers between and including the arguments

//EXAMPLES
// between(1, 4) // [1, 2, 3, 4]
// between(2, 8) // [2, 3, 4, 5, 6, 7, 8]

function between(a, b) {
  // create an empty array to store the numbers
  let arr = [];
  
  // use a loop to push each number to the array using the arguments as the bounds
  for (let i = a; i <= b; i++){
    arr.push(i);
  }
  
  return arr;
}