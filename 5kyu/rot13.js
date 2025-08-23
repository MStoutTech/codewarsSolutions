// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".


//My solution

//Take in a string
//Return a string that has been ciphered - each letter is replaced by the letter in the alphabet 13 letters after it
//Special characters are returned as they are

//EXAMPLES
// rot13("test") // "grfg"
// rot13("Test!") // "Grfg!"

function rot13(message){
  //Create an array to store the letters and their index
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 
  const cipher = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"]
  //Split the message argument string into an array
  let messageArr = message.split("")
  
  //Map the message array to a new array using conditionals
  let cipheredMessage = messageArr.map(elem =>{
    //If the element in the array is a special character, leave it as is
    if (!alphabet.includes(elem.toLowerCase())){
      return elem;
    }else{//If the element in the array is a letter, find the correct corresponding cipher to replace it
      //Take into account case of the letter
      if (elem == elem.toLowerCase()){
          return cipher[alphabet.indexOf(elem)]        
      } else {
          return cipher[alphabet.indexOf(elem.toLowerCase())].toUpperCase()
      }
    }
  })
  
  return cipheredMessage.join("");

}