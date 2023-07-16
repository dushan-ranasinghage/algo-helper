/**
 * @file heap.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

function heapSort<T>(arr: T[]): T[] {
    buildMaxHeap(arr);
  
    for (let i = arr.length - 1; i > 0; i--) {
      // Swap root (maximum value) with the last element
      [arr[0], arr[i]] = [arr[i], arr[0]];
      // Heapify the reduced heap
      heapify(arr, i, 0);
    }
  
    return arr;
  }
  
  function buildMaxHeap<T>(arr: T[]): void {
    const length = arr.length;
    const startIndex = Math.floor(length / 2) - 1;
  
    for (let i = startIndex; i >= 0; i--) {
      heapify(arr, length, i);
    }
  }
  
  function heapify<T>(arr: T[], length: number, rootIndex: number): void {
    let largestIndex = rootIndex;
    const leftChildIndex = 2 * rootIndex + 1;
    const rightChildIndex = 2 * rootIndex + 2;
  
    if (leftChildIndex < length && arr[leftChildIndex] > arr[largestIndex]) {
      largestIndex = leftChildIndex;
    }
  
    if (rightChildIndex < length && arr[rightChildIndex] > arr[largestIndex]) {
      largestIndex = rightChildIndex;
    }
  
    if (largestIndex !== rootIndex) {
      // Swap root with the largest element
      [arr[rootIndex], arr[largestIndex]] = [arr[largestIndex], arr[rootIndex]];
      // Recursively heapify the affected sub-tree
      heapify(arr, length, largestIndex);
    }
  }

export default heapSort;