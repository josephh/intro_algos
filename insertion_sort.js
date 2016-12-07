'use strict'

var assert = require('assert');

module.exports = (inputArray) => {

  // j is the input element index variable, key is the value at array index j and i stores the array index prior to key's index
  let j = 0, i, key;

  assert.equal(Object.prototype.toString.call(inputArray), '[object Array]', 'input parameter should be an object of type array');

  for(j; j < inputArray.length; j += 1) {

    key = Number(inputArray[j])
    i = j - 1

    while(i >= -1 && Number(inputArray[i]) > key) {
      inputArray[i + 1] = inputArray[i]
      i -= 1
    }

    inputArray[i + 1] = key

  }

  return inputArray;

}
