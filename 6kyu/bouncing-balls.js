// A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.

// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

// His mother looks out of a window 1.5 meters from the ground.

// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
// Three conditions must be met for a valid experiment:

//     Float parameter "h" in meters must be greater than 0
//     Float parameter "bounce" must be greater than 0 and less than 1
//     Float parameter "window" must be less than h.

// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// Note:

// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
// Examples:

// - h = 3, bounce = 0.66, window = 1.5, result is 3

// - h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).




//My solution

// Take in 3 floats - 
//h for height of the floor child is playing, 
//bounce is the fraction of the initial height the ball will rebound, 
//window is the height of the window the mother is looking out from
// Return the number of times the mother will see the ball passing in front of her window -an integer - if none, return -1

//EXAMPLES
//bouncingBall(3.0, 0.66, 1.5) // 3
//bouncingBall(3.0, 1.0, 1.5) // -1

function bouncingBall(h,  bounce,  window) {
  // Test for validity of the first conditions that must be met with an if statement
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  
  // Create a variable for bounce count
  let bounceCount = 0;
  
  // Use a loop to count how many times the ball passes the window.
  // Update the height after each bounce
  // The condition to evaluate is when the height is no longer greater than the window height
  
  while (h > window){
    //Add one for the ball falling
    bounceCount += 1;
    h *= bounce;
      if (h > window){
        //if the ball passes the window on the bounce up, add another to the bounce count
        bounceCount += 1;
      }
  }
  return bounceCount;
}