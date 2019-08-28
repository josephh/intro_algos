'use strict'

var assert = require('assert');

module.exports = (inputArray) => {

  /**
   *  j is the array index variable used to find n
   *  n is the value being sorted in the outer loop iteration(s)
   *  i is the array index variable used to traverse back to the array start
   **/
  let j = 0, i, n;

  assert.equal(Object.prototype.toString.call(inputArray),
    '[object Array]',
    'input parameter should be an object of type array');

  for(j; j < inputArray.length; j += 1) {

    n = Number(inputArray[j])
    i = j - 1

    while(i >= -1 && Number(inputArray[i]) > n) {
      inputArray[i + 1] = inputArray[i]
      i -= 1
    }

    inputArray[i + 1] = n

  }

  return inputArray;

}
