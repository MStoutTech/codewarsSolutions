//In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.


//My solution

//Take in a number, it can be positive, negative, integer or float
//Return boolean (true or false) if the number is even or not. Decimal parts non equal to zero will be considered uneven.

//EXAMPLE
// testEven(0)// true
// testEven(0.5)// false
// testEven(-4)// true
// testEven(1)// false

function testEven(n) {
    //If statement to check for decimal parts not equal to zero
    if (n % 1 !== 0){
      return false;
    }else{
    //Check if there is a remainder when dividing by 2 to know if number is even
      return n % 2 === 0;
    }
    
}