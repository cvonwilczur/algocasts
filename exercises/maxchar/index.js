// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// this technique answers what the most common character in a string is
// is string A an anagram of string B
// does the string repeat characters in it?
function maxChar(str) {
  // take the string and convert it into an object, keys are chars and vals are #s
  const chars = {};
  let highest = '';
  let comparison = 0;
  // create a character map object
  for (let char of str) {
    if (!chars[char]) {
      chars[char] = 1;
    } else {
      chars[char]++;
    }
  }
  // iterate through the object to determine highest key
  for (let prop in chars) {
    if (chars[prop] > comparison) {
      highest = prop;
      comparison = chars[prop];
    }
  }
  return highest;
}

module.exports = maxChar;
