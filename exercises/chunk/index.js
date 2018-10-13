// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // declare an empty parent array
  const parentArray = [];
  let index = 0;
  // divide number of elements in array by size, producing n
  // loop n times, for each loop creating an array and adding it to parent array
  while (index < array.length) {
  parentArray.push(array.slice(index, index+size))
  index += size;
  }
  // within each array, splice the parameter array to create sub-arrays

  return parentArray;
}

module.exports = chunk;

function chunk2(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length-1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }

    return chunked;
  }

}
