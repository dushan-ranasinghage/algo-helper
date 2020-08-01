"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function bubbleSort(inputArr) {
  var len = inputArr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        var tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

function insertionSort(inputArr) {
  var length = inputArr.length;
  for (var i = 1; i < length; i++) {
    var key = inputArr[i];
    var j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

function selectionSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    var min = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      var tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
};

function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
      //middle element
  i = left,
      //left pointer
  j = right; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j); //sawpping two elements
      i++;
      j--;
    }
  }
  return i;
};

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
};

// Merge the two arrays: left and right
function merge(left, right) {
  var resultArray = [],
      leftIndex = 0,
      rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  var middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  var left = unsortedArray.slice(0, middle);
  var right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
};

var array_length = void 0;
/* to create MAX  array */
function heapSort(input) {

  array_length = input.length;
  var i = void 0;
  for (i = Math.floor(array_length / 2); i >= 0; i -= 1) {
    heapRoot(input, i);
  }

  for (i = input.length - 1; i > 0; i--) {
    swap(input, 0, i);
    array_length--;

    heapRoot(input, 0);
  }
  return input;
}

function heapRoot(input, i) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < array_length && input[left] > input[max]) {
    max = left;
  }

  if (right < array_length && input[right] > input[max]) {
    max = right;
  }

  if (max != i) {
    swap(input, i, max);
    heapRoot(input, max);
  }
}

function sort() {}

sort.__proto__.bubbleSort = function (arr) {
  return bubbleSort(arr);
};
sort.__proto__.insertionSort = function (arr) {
  return insertionSort(arr);
};
sort.__proto__.selectionSort = function (arr) {
  return selectionSort(arr);
};
sort.__proto__.quickSort = function (arr, l, r) {
  return quickSort(arr, l, r);
};
sort.__proto__.mergeSort = function (arr) {
  return mergeSort(arr);
};
sort.__proto__.heapSort = function (arr) {
  return heapSort(arr);
};
// Export sorting object
exports.default = sort;