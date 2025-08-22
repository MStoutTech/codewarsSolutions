// The museum of incredibly dull things

// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.
// Task

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.
// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]



//My solution

// Take in an array of integers
// Return the same array with only the lowest number removed
// Empty array imput should return an empty array
// If there are multiple elements with the same value, remove the one with the lowest index

//EXAMPLES
// removeSmallest([])// []
// removeSmallest([1, 2, 3, 4, 5])// [2, 3, 4, 5]
// removeSmallest([2, 2, 1, 2, 1])// 

function removeSmallest(numbers) {
  //use a conditional for the case of an empty array or single element in the array
  if (numbers == [] || numbers.length === 1){
    return [];
  }else{
  //find the smallest number
    let smallestNum = Math.min(...numbers)
  //find the index of that smallest number
    let removeIndex = numbers.indexOf(smallestNum)
  //make a new array to not mutate the original array
    let remainingNum = [];
    //remove the number at the index of the smallest number when pushing to the new array
    for (let i = 0; i < numbers.length; i++){
      if (i !== removeIndex){
        remainingNum.push(numbers[i])
      }
    }
  //return the new array
  return remainingNum;
  }
  
}