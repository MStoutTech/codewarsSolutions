// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false




//My solution

function XO(str) {
    //code here
    const arr = str.split("");
    let exes = arr.reduce((count, x) => count + (x.toLowerCase() === "x" ? 1 : 0), 0);
    let ohs = arr.reduce((count, o) => count + (o.toLowerCase() === "o" ? 1 : 0), 0);
    return exes === ohs;
}