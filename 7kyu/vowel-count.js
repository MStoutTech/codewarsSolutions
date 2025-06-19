// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


//My solution

function getCount(str) {
  let arr = str.split("");
  return arr.reduce((a, letter)=> a + (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u" ? 1:0), 0);
}