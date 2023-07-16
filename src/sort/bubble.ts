/**
 * @file bubble.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

function bubbleSort<T>(arr: T[]): T[] {
    const length = arr.length;
  
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  
    return arr;
  }

export default bubbleSort;