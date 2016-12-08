'use strict';

var m = require('./merge_sort.js');

let input = process.argv[2].split(',')

console.log(`merged array? ${m.mergeSort(input, 1, input.length)}`);
