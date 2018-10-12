// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // turn number into string
  let numberString = n.toString();
  let reversed = '';
  //use a for loop to reverse order of string
  for (let char of numberString) {
    console.log(char)

    reversed = char + reversed;
  }
  // use conditional to check if n was negative and add -
  // use parseInt to convert back into a number
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
