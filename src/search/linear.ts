/**
 * @file linear.ts
 * @description 
 * @author Dushan Ranasinghage
 * @copyright Copyright 2023 Dushan Ranasinghage, Alright Reserved.
 */

/**
 * Linear search algorithm
 * 
 * @name linearSearch
 * @since  1.0.0
 * @access  public
 *
 * @property {T[]} arr Any type of array.
 * @property {T} target Target element.
 */
function linearSearch<T>(arr: T[], target: T): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Return the index of the found element
      }
    }
    return -1; // Return -1 if the element is not found
  }

export default linearSearch;