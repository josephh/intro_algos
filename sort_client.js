'use strict';

var insertionSort = require('./insertion_sort.js'),
  mergeSort = require('./merge_sort.js');

let a = [3,4,123,3,423423,54,-1,23,20,0,0,213], aSorted = insertionSort(a);

console.log(aSorted)
