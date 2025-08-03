// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"

// NOTE: All numbers will be whole numbers greater than 0.

//My solution

function expandedForm(num) {
  let numbersArray = num.toString().split('')
  let expandedNumbers = [];
  let zeros = numbersArray.length-1;
  for (let i = 0; i < numbersArray.length; i++){
    expandedNumbers.push(numbersArray[i] + "0".repeat(zeros));
    zeros--;
  }

  return expandedNumbers.map(n=> Number(n)).filter((n)=> n>0).join(" + ");
}