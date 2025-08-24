// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.


//My solution

//Take in a name (string)
//Return a string stating if this person plays the banjo

//EXAMPLE
// areYouPlayingBanjo("robert") // "robert plays banjo"
// areYouPlayingBanjo("Julia") // "Julia does not play banjo"
// areYouPlayingBanjo("Ron") // "Ron plays banjo"

function areYouPlayingBanjo(name) {
  // Check if the first letter -regargless of case- is an R
  if (name.charAt(0).toLowerCase() === 'r' ){
    // If it is an R, return that they do play the banjo
    return name + " plays banjo";
  }else{
      // If it is not an r return that they do not
      return name + " does not play banjo";
  }
}