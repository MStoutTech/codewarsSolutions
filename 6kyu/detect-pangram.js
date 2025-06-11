// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//my solution

function isPangram(string){
  let lowerCase = string.toLowerCase();
  return lowerCase.includes("a") 
  && lowerCase.includes("b")
  && lowerCase.includes("c")
  && lowerCase.includes("d")
  && lowerCase.includes("e")
  && lowerCase.includes("f")
  && lowerCase.includes("g")
  && lowerCase.includes("h")
  && lowerCase.includes("i")
  && lowerCase.includes("j")
  && lowerCase.includes("k")
  && lowerCase.includes("l")
  && lowerCase.includes("m")
  && lowerCase.includes("n")
  && lowerCase.includes("o")
  && lowerCase.includes("p")
  && lowerCase.includes("q")
  && lowerCase.includes("r")
  && lowerCase.includes("s")
  && lowerCase.includes("t")
  && lowerCase.includes("u")
  && lowerCase.includes("v")
  && lowerCase.includes("w")
  && lowerCase.includes("x")
  && lowerCase.includes("y")
  && lowerCase.includes("z");
}