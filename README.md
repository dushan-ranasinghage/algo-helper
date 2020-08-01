# algo-helper

"algo-helper" is a javascript algorithms library which allows you to use various kind of sorting and searching algorithms in your project very easily. Our next version will be mainly focusing on Graphs.

## Installation

Using npm:
```shell
$ npm i -g npm
$ npm i algo-helper
```
Note: add `--save` if you are using npm < 5.0.0

## How to import?

ES6:
```js
// Load the build.
import { sort, search } from 'algo-helper'

let arr = [3,4,7,1,78,54,23]
// Use sort method.
let sortedArray = sort.bubbleSort(arr)

// Use search method.
let index = search.linearSearch(arr,7)
```

In Node.js:
```js
// Load the build.
var { sort, search } = require('algo-helper');

var arr = [3,4,7,1,78,54,23]
// Use sort method.
var sortedArray = sort.bubbleSort(arr)

// Use search method.
var index = search.linearSearch(arr,7)
```

## Example

How to use 'sort' in ES6?

```
import { sort } from 'algo-helper'

const arr = [3,2,34,65,1,8,54]

// How to use bubble sort
let bubbleSortedArr = sort.bubbleSort(arr)
// console.log(bubbleSortedArr) 
// [1, 2, 3, 8, 34, 54, 65]

// How to use insertion sort
let insertionSortedArr = sort.insertionSort(arr) 

// How to use selection sort
let selectionSortedArr = sort.selectionSort(arr) 

// How to use quick sort
/**
 * @param {array} [array=[]] The array to inspect.
 * @param {number1} [number] The number selected from left
 * @param {number2} [number] The number selected from right
 * sort.quickSort(array, number1, number2) 
 */
let quickSortedArr = sort.quickSort(arr, 1, 5) 

// How to use merge sort
let mergeSortedArr = sort.mergeSort(arr) 

// How to use heap sort
let heapSortedArr = sort.heapSort(arr)

```

How to use 'search' in ES6?

In searching, you can give the input array as an unsorted array. If the number you are looking for is not available in the array, the output will be -1. Otherwise, you will get the index of the number you have entered.
```
import { search } from 'algo-helper'

const arr = [3,2,34,65,1,8,54]

// How to use linear search
/**
 * @param {array} [array=[]] The array which is not sorted
 * @param {number1} [number] The number to find
 * sort.quickSort(array, number1, number2) 
 */
let foundIndexLs = search.linearSearch(arr,1)

// How to use binary search
/**
 * @param {number} [number] The number to find
 * @param {arr} [array=[]] The array which is not sorted
 * sort.quickSort(array, number1, number2) 
 */
let foundIndexBs = search.binarySearch(34,arr)
```
## Why algo-helper?

Algo-helper makes JavaScript easier by taking the hassle out of working with algorithms.<br>
Algo-helper’s modular methods are great for:

 * Searching in arrays
 * Sorting arrays
 * Create Graphs/ Linked list (next version)
 * Graph search (next version)

## Author

**Dushan Ranasinghe** - *Full Stack Javascript Developer* 

Feel free to visit my Github account: [dushanranasinghe](https://github.com/dushanrandika/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

