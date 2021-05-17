function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idxOfMin = i;
    // start j at i + 1 because 
    //   - the indices less than i have been sorted AND
    //   - the element at idx i is the one to compare to
    for (let j = i + 1; j < arr.length; j++) {
      // if the element at index j is smaller than the one at index smIdx, set smIdx equal to j
      if (arr[j] < arr[idxOfMin]) idxOfMin = j;
    }
    // swap elements if necessary
    if (i !== idxOfMin) [arr[i], arr[idxOfMin]] = [arr[idxOfMin], arr[i]];
  }
  return arr;
}

console.log(selectionSort([12,16,7,2,19,6,46]));

module.exports = selectionSort;