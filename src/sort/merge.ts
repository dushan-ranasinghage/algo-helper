/**
 * @file merge.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

function mergeSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge<T>(left: T[], right: T[]): T[] {
    const merged: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    while (leftIndex < left.length) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }
  
    while (rightIndex < right.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  
    return merged;
  }

export default mergeSort;