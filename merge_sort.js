'use strict';

var assert = require('assert');

/**
 * Recursive function to divide an array into 2 sorted subarrays and merge them
 * (with help from an auxiliary method).
 * The initial call to this function will be of the form
 *         mergeSort(Array, 1, Array.length)
 * @param {Array} arr - the sequence containing (integer) items for merging.
 * @param {Number} p - an index into the array (start).
 * @param {Number} r - an index into the array (end).
 */
function mergeSort(arr, p, r) {

    /**
    * Divides an n-element sequence into 2 sub-sequences, which are assumed to
    * be already sorted and merges them.
    * @param {Array} arr - the sequence containing 2 sorted subsequences
    *   for merging.
    * @param {Number} p - an index into the array, such that p <= q < r.
    *   arr[p..q] is assumed to be sorted.
    * @param {Number} q - an index into the array, such that p <= q < r.
    * @param {Number} r - an index into the array, such that p <= q < r.
    *   arr[q+1..r] is assumed to be sorted.
    */
    function mergeHelper(arr, p, q, r) {
      // the length of the subarrays
      let newLeftArr = arr.slice(p - 1, q),
        newRightArr = arr.slice(q, r),
        i = 0,
        j = 0;
      /*
       * 'Sentinel values' (in this case infinity) are added to the end of each
       * array to guarantee the greater than or lesser than operand returns the
       * correct result.  It also avoids having to check for empty array or an
       * index out of bounds, although it does preclude Inifinity being part of
       * the values to sort.
       */
      newLeftArr.push(Infinity);
      newRightArr.push(Infinity);
      for (let k = p - 1; k < r; k++) {
        if (Number(newLeftArr[i]) <= Number(newRightArr[j])) {
          arr[k] = newLeftArr[i];
          i += 1;
        } else {
          arr[k] = newRightArr[j]
          j += 1;
        }
      }
    }

    if (p < r) {
      // recursion begins here: whittle down the lists to just 2 elements
      let q = Math.floor((p + r) / 2);
      // get the first half of the array (the array upper bound now replaced by q)
      mergeSort(arr, p, q);
      // get the second half of the array (the lower bound now q + 1)
      mergeSort(arr, q + 1, r);
      // finally put the 2 sorted arrays together
      mergeHelper(arr, p, q, r);
    }

    return arr;

}

module.exports = {
  mergeSort
};
