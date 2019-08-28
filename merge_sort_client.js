'use strict';

var m = require('./merge_sort.js');


let input = process.argv[2] && process.argv[2].split(',') || null

if(!input) {
  console.log(`invoke merge sort with a numeric, comma-separated input,
    for example:
    node merge_sort_client 3,4,123,3,423423,54,-1,23,20,0,0,213,3476,-123,-23,8762349,99238123,-312,1,433`)
} else {
  console.log(`merged array? ${m.mergeSort(input, 1, input.length)}`);
}
