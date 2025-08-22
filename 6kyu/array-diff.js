// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
// Examples

// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].


//My solution

// Take in two arrays
// Return array a after removing from it any elements that exist in array b (preserve the order of elements)

//EXAMPLE
// arrayDiff([1, 2], [1]) // [2]
// arrayDiff([1, 2, 2, 2, 3], [2]) // [1, 3]

function arrayDiff(a, b) {
  //Loop through each element of array b
  //use a while loop to remove all of the matching elements in a
  
  b.forEach((elem) => {
    while (a.includes(elem)){
      a.splice(a.indexOf(elem), 1)
    }
  })
  
  
  return a;
}