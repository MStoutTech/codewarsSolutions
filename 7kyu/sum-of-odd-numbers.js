// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8



//MY solution

function rowSumOddNumbers(n) {
	// TODO
  //calculate what number the row will start with
//   let rowStart = 1;
//   let evenNumber =2;
//   if (n > 1){
//     for (let i = 2; i <= n; i++){
//       rowStart += evenNumber;
//       evenNumber += 2;
//     }
//   }
//   //add odd numbers n amount of times
//   let row = [rowStart];
//   for (let i = 1; i < n ; i++ ){
//     rowStart += 2;
//     row.push(rowStart)
//   }
//   return row.reduce((a,c)=>a +c, 0)
  
  return n**3;
}