'use strict';

var insertionSort = require('./insertion_sort.js'),
  mergeSort = require('./merge_sort.js');

let input = process.argv[2].split(',')
let a = input.slice(0, input.length / 2)
console.log(`a? ${a}`)
let b = input.slice(input.length / 2, input.length)
console.log(`b? ${b}`)

console.log(`a sorted? ${insertionSort(a)}`)
console.log(`b sorted? ${insertionSort(b)}`)
