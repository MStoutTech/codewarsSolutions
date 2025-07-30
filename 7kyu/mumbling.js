// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.


//My solution

function accum(s) {
	// your code
  let mumble = s.split('').map((letter, index) => {
    let word = letter.toUpperCase() 
    for (let i = 1; i <= index; i++){
      word += letter.toLowerCase()
    }
    return word
    })
    return mumble.join('-');
}