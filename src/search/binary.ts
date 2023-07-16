/**
 * @file binary.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

function binarySearch<T>(arr: T[], target: T): number {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid; // Return the index of the found element
      } else if (arr[mid] < target) {
        left = mid + 1; // Search the right half of the array
      } else {
        right = mid - 1; // Search the left half of the array
      }
    }
  
    return -1; // Return -1 if the element is not found
  }

export default binarySearch;
