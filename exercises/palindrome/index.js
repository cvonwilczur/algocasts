// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // declare an empty string that will be the reversed string
  let reversed = '';
  // loop through the string, punching chars into new string
  for (let char of str) {
    reversed = char + reversed;
  }
  // compare new string to old string, if equals true, else false
  if (reversed === str) {
    return true
  } else {
    return false
  }
}

module.exports = palindrome;

function palindromeOne(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

function palindromeTwo(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  })
}
