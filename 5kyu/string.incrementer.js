
// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

//My solution

// Take in a string
// Return a string with the number at the end incremented by 1

//EXAMPLES
// incrementString(foo) // foo1
// incrementString(foobar24) // foobar25
// incrementString(foo099) // foo100

function incrementString (strng) {
  //If the string does not end with a number, return the string with 1 appended to the end
  if (!"0123456789".includes(strng[strng.length-1])){
    return strng + "1";
  }
  //Split the string into an array
  //From the end of the array, find how many elements are numbers and store in a variable
  let array = strng.split('')
  let placeValue = 0;
  let i = array.length -1;
  while ("0123456789".includes(array[i])){
    placeValue += 1;
    i--
  }
  //Use splice to keep the beginning string array and create a second array with the numbers that were removed
  let numArray = array.splice(i+1, placeValue)

  //Join the second array to make one number, increment it by one and be sure to pad it with zeros matching the places of the stored variable
  let toAdd =(Number(numArray.join('')) +1).toString().padStart(placeValue, "0")
  //Return the joined string array and concat the incremented number
  return array.join('') + toAdd;
}