'use strict'

var assert = require('assert');

// j is the input element index variable, key is the int at array index j and i stores the array index prior to key's index 
let j = 0, i, key;

module.exports = (inputArray) => {
  assert.equal(Object.prototype.toString.call(inputArray), '[object Array]', 'input parameter should be an object of type array');
  for(j; j < inputArray.length; j += 1) {
    key = Number(inputArray[j]) // zero-based  
    i = j - 1  

    while(i > 0 && Number(inputArray[i]) > key) { 
      inputArray[i + 1] = inputArray[i] // shuffle 
      i -= 1 // move the index variable towards the front 
    }

    inputArray[i + 1] = key // shuffle the key (or leave it in place)

  }

  return inputArray;

}

