// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


//My solution

//Accept a string of characters
//Return an object literal with each character as the key and the count as the value

//EXAMPLE
//count("aba")//{'a':2, 'b':1}
//count("count me"){'c':1, 'o':1, 'u':1, 'n':1, 't':1, ' ':1, 'm':1, 'e':1}


function count(string) {
  // Split the string into an array
  let arr = string.split('');
  // Reduce the string into an object,
  let obj = arr.reduce((acc, character)=> {
    //using a conditional for if there are new keys, 
    //start the count as one, 
    //if it is a repeated character, add 1 to the count
    (acc[character] ? acc[character] += 1 : acc[character] =1 )
    return acc
  }, {})
  
  
  //Return the object
  return obj;
}