// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



//My solution

//Accept a string of words
//Return the string with each word reversed
//reverseWords("This is an example!") //"sihT si na !elpmaxe"
//reverseWords("double spaces")// "elbuod secaps"
function reverseWords(str) {
  // Split the string into an array of words
  let arr = str.split(" ")
  // Iterate through the array and split, reverse, join each word
  let reversedWords = arr.map((word) => word.split("").reverse().join(""))
  // Join the array again in order to return a single string 
  return reversedWords.join(" ")
}