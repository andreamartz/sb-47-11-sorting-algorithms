// Visit each element in the array.
// At each stop, determine if the element should be moved left. If so, to which spot?
  // - compare the element to the one to the left.

// All the elements between the spot to move to and the current spot must be moved right by 1.
// Place the element in the correct location

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currVal = arr[i];
    // use var instead of let in order to have access to j after the loop ends
    for (var j = i - 1; j >= 0 && currVal < arr[j]; j--) {
      // copy the value of arr[j] one position to the right of j
      arr[j + 1] = arr[j];
    }
    // j has now been decremented by 1, so put currVal at idx j + 1, not j
    arr[j + 1] = currVal; 
  }
  return arr;
}

console.log(insertionSort([12,16,7,2,19,6,46]));

module.exports = insertionSort;