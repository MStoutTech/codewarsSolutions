// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

//My solution

// Take in three numbers: distance in mi, car's mpg, and gallons of fuel left
// Return true or false (will you make it to the pump?)

//EXAMPLES
// zeroFuel(50, 25, 2) // true
// zeroFuel(100, 50, 1) // false

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // Calculate how far your car can go on how much fuel you have
  let carFuelDistance = fuelLeft * mpg;
  
  // is the carFuelDistance equal to or greater than the distance to the pump
  return carFuelDistance >= distanceToPump ? true : false;
};