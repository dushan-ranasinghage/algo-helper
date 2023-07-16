/**
 * @file selection.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

/**
 * Selection sort algorithm
 * 
 * @name selectionSort
 * @since  1.0.0
 * @access  public
 *
 * @property {T[]} arr Any type of array.
 */
function selectionSort<T>(arr: T[]): T[] {
    const length = arr.length;
  
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap elements
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  
    return arr;
  }

export default selectionSort;