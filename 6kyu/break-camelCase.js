// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""



//My Solution

function solution(string) {
  let arr = string.split("");
  let addSpaces = [];
  arr.forEach((elem) => {
    if (elem.charCodeAt() >= 65 && elem.charCodeAt() < 91){
      addSpaces.push(" ");
      addSpaces.push(elem);
    } else {
      addSpaces.push(elem)
    }
  })
  return addSpaces.join("");
}