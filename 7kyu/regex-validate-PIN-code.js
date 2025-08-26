// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false



//My solution

function validatePIN (pin) {
  console.log(pin.length)
  console.log(Number("1234"))
  switch(true){
    case Number(pin) === NaN:
    case Math.ceil(Number(pin)) !== Number(pin):
    case Number(pin) < 0:
    case pin.length !== 4 && pin.length !== 6:
    case pin.includes(".") || pin.includes (" ") || pin.includes("\n") || pin.includes("+"):
        return false;
        break;
    default:
        return true;
        break;
  }
}