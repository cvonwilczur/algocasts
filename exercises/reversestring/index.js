// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // convert string into an array
  const arr = str.split('');
  // declare an empty array
  const reversedArr = [];
  // loop through the str by str.length, popping letters
  for(i = arr.length; i >= 0; i--){
    // in loop, save letters into array
    reversedArr.push(arr[i]);
  }
  // return array
  return reversedArr.join('');
}

module.exports = reverse;


function reverseOne(str) {
  // turn str into an array
  const arr = str.split('');
  // call reverse method on array
  arr.reverse();
  // join arr back together
  arr.join('');
  // return str as result
  return arr;
}

function reverseTwo(str) {
  // make an empty string called reversed
  let reversed = '';
  // for each character in the provided string
  for (let char of str) {
    reversed = char + reversed;
  }
  // return
  return reversed;
}

function reverseThree(str) {
  // turn string into array, use reduce helper
  return str.split('').reduce((reversed, character)=>{
    return character + reversed;
  }, '')
}
