"use strict";

function bubbleSort(inputArr){
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

function insertionSort(inputArr){
  let length = inputArr.length;
  for (let i = 1; i < length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && inputArr[j] > key) {
      inputArr[j + 1] = inputArr[j];
      j = j - 1;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

function selectionSort(arr){
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  return arr;
};

function swap(items, leftIndex, rightIndex){
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
};

function partition(items, left, right){
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
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

function quickSort(items, left, right){
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
function merge(left, right){
  let resultArray = [],
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
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
};

// Merge Sort Implentation (Recursion)
function mergeSort(unsortedArray){
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right));
};

let array_length;
/* to create MAX  array */ 
function heapSort(input){
    
  array_length = input.length;
  let i
  for (i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
      heapRoot(input, i);
    }

  for (i = input.length - 1; i > 0; i--) {
      swap(input, 0, i);
      array_length--;
    
    
      heapRoot(input, 0);
  }
  return input
}

function heapRoot(input, i){
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heapRoot(input, max);
    }
}

function sort() {}

sort.__proto__.bubbleSort = function(arr){
  return bubbleSort(arr);
}
sort.__proto__.insertionSort = function(arr){
  return insertionSort(arr);
}
sort.__proto__.selectionSort = function(arr){
  return selectionSort(arr);
}
sort.__proto__.quickSort = function(arr, l, r){
  return quickSort(arr, l, r);
}
sort.__proto__.mergeSort = function(arr){
  return mergeSort(arr);
}
sort.__proto__.heapSort = function(arr){
  return heapSort(arr);
}
  // Export sorting object
export default sort
