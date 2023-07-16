/**
 * @file insertion.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

/**
 * Insertion sort algorithm
 * 
 * @name insertionSort
 * @since  1.0.0
 * @access  public
 *
 * @property {T[]} arr Any type of array.
 */
function insertionSort<T>(arr: T[]): T[] {
    const length = arr.length;
  
    for (let i = 1; i < length; i++) {
      const current = arr[i];
      let j = i - 1;
  
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
  
      arr[j + 1] = current;
    }
  
    return arr;
  }

export default insertionSort;