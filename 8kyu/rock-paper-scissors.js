// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

//My solution

//Take in two strings, they will be "rock", "paper", or "scissors"
//Return a string stating who won, or if they are the same strings, that it is a draw.

//EXAMPLES
// rps("scissors", "paper") // "Player 1 won!"
// rps("scissors", "rock") // "Player 2 won!"
// rps("paper", "paper") // "Draw!"

const rps = (p1, p2) => {
  // Use a conditional for each case
  switch (true) {
      case p1 === "scissors" && p2 === "paper":
      case p1 === "paper" && p2 === "rock":
      case p1 === "rock" && p2 === "scissors":
        return "Player 1 won!"
        break;
      case p1 === p2:
        return "Draw!"
        break;
      default:
        return "Player 2 won!"
  }
};