// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).
// Examples

// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]



//My solution

// Take in two parameters, both positive integers
// Return an array of integers - showing n multiples of x

//EXAMPLES
// countBy(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// countBy(2, 5) // [2, 4, 6, 8, 10]

function countBy(x, n) {
  //create the empty array that will return the result
  let z = [];
  
  //use a loop with a condition up to n, push the multiple of x * iterator to the result array
  for (let i = 1; i <= n; i++){
    z.push(x * i)
  }

  return z;
}