'use strict';

var assert = require('assert');

/**
 * Merge-sort is a recursive algorithm, which uses a helper merge function, which .
 * When the sequence has length 1 there's no more sorting to be done, so the recursion bottoms out.
 */
function mergeSort(arr, p, r) {

    /**
    * Divides an n-element sequence into 2 subsequences (assumed to be already sorted) and merges them.
    * @param {Array} arr - the sequence containing 2 sorted subsequences for merging.
    * @param p - an index into the array, such that p <= q < r. arr[p..q] is assumed to be sorted.
    * @param q - an index into the array, such that p <= q < r.
    * @param r - an index into the array, such that p <= q < r. arr[q+1..r] is assumed to be sorted.
    */
    function mergeHelper(arr, p, q, r) {
      // the length of the subarrays
      let newLeftArr = arr.slice(arr[p], arr[q]),
      newRightArr = arr.slice(p + 1, r),
      i = 0,
      j = 0;
      for (let k = p; k < r; k++) {
        if (newLeftArr[i] <= newRightArr[j]) {
          arr[k] = newLeftArr[i];
          i += 1;
        } else {
          arr[k] = newRightArr[j]
          j += 1;
        }
      }
    }

    if (p < r) {
      let q = (p + r) / 2;
      mergeHelper(arr, p, q);
      mergeHelper(arr, q + 1, r);
      mergeSort(arr, p, q, r);
    }

}

module.exports = {
  mergeSort
};
