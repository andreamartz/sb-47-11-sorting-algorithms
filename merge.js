
function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  // while we haven't reached the end of either arr1 or arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // At this point, we've reached the end of one of the two arrays.
  // For the one we are still in the middle of, the corresponding code that follows will run.
  // Only ONE of the following loops will run!
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while(j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  // Break up the array into halves until you can compare one value with another.

  // BASE CASE:
  if (arr.length <= 1) return arr;

  // RECURSIVE CASE:
  const mid = Math.floor((arr.length)/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  // Once you have smaller sorted arrays, merge those with other sorted pairs until you are back at the full length of the array.
  // Once the array is merged back together, return the merged (and sorted!) array
  return merge(left, right);
}

// console.log(merge([3, 5, 9], [2,6,7]));

module.exports = {merge, mergeSort};