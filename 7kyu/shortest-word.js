// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//My solution

// Take in a string with mulitple words
// Return a number - the length of the shortest word (or words)

//EXAMPLES
// findShort("Let's travel abroad shall we") // 2
// findShort("turns out random test cases are easier than writing out basic ones") // 3

function findShort(s){
  //Split the string into an array using the spaces as breaks for each element
  let arr = s.split(' ')
  //Make a variable to store the short number
  let shortNum = arr[0].length;
  //Iterate over the array and store the shortest length
  arr.forEach(elem => {
    if(elem.length < shortNum){
      shortNum = elem.length
    }
  })
  
  return shortNum;
  
}