// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"



//My solution

function dnaStrand(dna){
  function complimentarySymbol(symbol){
    if (symbol === "A"){
      return "T"
    } else if (symbol === "T"){
      return "A"
    } else if (symbol === "C"){
      return "G"
    }else if (symbol === "G"){
      return "C"
    }
  }
  return dna.split('').map(l => complimentarySymbol(l)).join('');
}