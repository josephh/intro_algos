'use strict'

// j is the input element index variable, key is the int at array index j and i stores the array index prior to key's index 
let j = 1, i, key, inputArray = process.argv[2] ? process.argv[2].split(',') : null;

if(!inputArray) {
  console.log('please provide a comma-separated list of numbers, either without spaces or in quotes')
  process.exit(1)
}

for(j; j < inputArray.length; j += 1) {
/** 
 The for loop has an invariant - that the sub-array is sorted - and that must hold prior to the first loop iteration 
 and after each iteration. 
*/
  key = Number(inputArray[j]) // zero-based  
  i = j - 1  

  while(i > 0 && Number(inputArray[i]) > key) { 
    inputArray[i + 1] = inputArray[i] // shuffle 
    i -= 1 // move the index variable towards the front 
  }

  inputArray[i + 1] = key // shuffle the key (or leave it in place)

}

console.log('sorted list: ' + inputArray)
