// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//My solution
//Take in a string of only alphabets and numeric digits
//Return the count of discinct characters that occur more than once in the string (case insensitive)

//EXAMPLES
// duplicateCount("aabbcde") // 2
// duplicateCount("aA11") // 2

function duplicateCount(text){
  //make text all lowercase to remove case sensitivity
  text = text.toLowerCase();
  //count instances of each character and store in an object
  let obj = text.split('').reduce((acc, letter) => (acc[letter] ? acc[letter] += 1 : acc[letter]=1, acc), {})
  console.log(obj)
  //count how many of the characters appear more than once
  let count = 0;
  for (let letter in obj){
    if (obj[letter] >= 2){
      count += 1;
    }
  }
  return count;
}