// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//My solution

function solution(str, ending){
  // TODO: complete
  const length = str.length-ending.length;
  return str.split('').slice(length).join('') === ending;
}