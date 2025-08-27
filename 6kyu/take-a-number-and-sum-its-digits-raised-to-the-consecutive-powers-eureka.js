// The number 898989 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number: 89=81+9289 = 8^1 + 9^289=81+92

// The next number in having this property is 135135135:

// See this property again: 135=11+32+53135 = 1^1 + 3^2 + 5^3135=11+32+53
// Task

// We need a function to collect these numbers, that may receive two integers aaa, bbb that defines the range [a,b][a, b][a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.
// Examples

// Let's see some cases (input -> output):

// 1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]

// If there are no numbers of this kind in the range [a,b][a, b][a,b] the function should output an empty list.

// 90, 100 --> []

// Enjoy it!!

//My solution

// Take in two integers to define an inclusive range of numbers
// Return an array of numbers in that range that meet the condition - the sum of the number's digits to the consecutive powers is the same as the number

//EXAMPLES
// sumDigPow(1, 10) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// sumDigPow(1, 100) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// sumDigPow(90, 50) // [135]
// sumDigPow(90, 100) // []

//Create a function just for finding the sum of the digits raised to a consecutive power
function sumConsecPow(num){
  const numArr = num.toString().split('');
  let sum = 0;
  numArr.forEach((elem, index) => {
    sum += elem ** (index + 1);
  });
  return sum;
}

function sumDigPow(a, b) {
  // Create an array to store the result
  const result = []
  // Loop through numbers in the given range testing them against the sumConsecPow function and push to result array if they match the condition.
  for (let i = a; i <= b; i++){
    if (sumConsecPow(i) === i ){
      result.push(i);
    }
  }
  return result;
}