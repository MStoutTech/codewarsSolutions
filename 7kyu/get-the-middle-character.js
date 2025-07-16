// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

//     If the string's length is odd, return the middle character.
//     If the string's length is even, return the middle 2 characters.

// Examples:

// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"



//My solution

function getMiddle(s) {
  //Code goes here!
    let result = "";
    if ( s.length < 3 ){
      result = s
    } else if ( s.length % 2 === 0 ){
      result = s.charAt((s.length / 2) - 1) + s.charAt(s.length / 2)
    } else {
      result = s.charAt(Math.ceil(s.length/2)-1)
    }
    return result;
}