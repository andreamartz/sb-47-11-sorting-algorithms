// Input(s): an array of numbers (arr)
// Return: the array with values sorted from smallest to largest

// Approach: Sort the array in place. Iterate through the array multiple times, each time checking each number to see if it should switch places with the number after it.

// Strategy:
// 
function bubbleSort(arr) {
  let count = 0;
  for (i = 0; i < arr.length; i++) {
    // set/reset swapped to be false;
    let swapped = false;
    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // use destructuring to swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}

console.log(bubbleSort([23,80,27,42,3,9,30]));

module.exports = bubbleSort;