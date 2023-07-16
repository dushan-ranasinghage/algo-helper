/**
 * @file quick.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

function quickSort<T>(arr: T[]): T[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];
  
    const less: T[] = [];
    const equal: T[] = [];
    const greater: T[] = [];
  
    for (const element of arr) {
      if (element < pivot) {
        less.push(element);
      } else if (element === pivot) {
        equal.push(element);
      } else {
        greater.push(element);
      }
    }
  
    return [...quickSort(less), ...equal, ...quickSort(greater)];
  }

export default quickSort;