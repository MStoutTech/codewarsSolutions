// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.


//MY solution

function findAverage(array) {
  // your code here
  if (!array.length >= 1){
    return 0;
  }else {
    let total= array.reduce((acc, curr) => acc + curr, 0); 
  return total/ array.length;
    }
}