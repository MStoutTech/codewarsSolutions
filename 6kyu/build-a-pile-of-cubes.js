// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3 n3, the cube above will have volume of (n−1)3 (n-1)^3 (n−1)3 and so on until the top which will have a volume of 13 1^3 13.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+(n−2)3+...+13=m n^3 + (n-1)^3 + (n-2)^3 + ... + 1^3 = m n3+(n−1)3+(n−2)3+...+13=m if such a n exists or -1 if there is no such n.
// Examples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1


//My solution

//  Take in an integer
// Return an integer of the number of cubes that fit the situation OR -1 if there is not an answer

//EXAMPLES
// findNb(1071225) // 45
// findNb(91716553919377) // -1

function findNb(m) {
  // Do a loop using the formula until it matches m.
  // If there is no match to m and the answer becomes larger than m, then return -1
  let n = 1;
  let result = 0;
  while (result < m){
    result += n**3
    if (result === m){
      return n;
    }else{
    n++
    }
  } 
  
    return (-1);
}