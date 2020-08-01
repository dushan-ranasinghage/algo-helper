"use strict";
import sort from './sorting'

function linearSearch(data, searchQuery) {
    var answer = -1
    for (var i = 0, len = data.length; i < len; i++) {
      if (data[i] === searchQuery) {
        answer = i;
      }
    }
    return answer;
  }

// arrA = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
// arrB = ['a','b','c','d','e','f','g','h','i','j','k'],
// arrC = [{ name: 'Adam' },{ name: 'Jay' },{ name: 'Kyle' }, { name: 'Scott' }];
// member must be 'name' when you are using an array like arrc
function binarySearch(key, arr, member) {
    let sortedArray = sort.mergeSort(arr);

    let low  = 0,
        high = sortedArray.length - 1,
        mid, value;
    
    while (low <= high) {
        mid = low + (high - low) / 2;
        if ((mid % 1) > 0) { mid = Math.ceil(mid); }
        
        // allows for searching an array of objects
        if (member > '') value = sortedArray[mid][member];
        else value = sortedArray[mid];
        
        if (key < value) { high = mid - 1; }
        else if (key > value) { low = mid + 1; }
        else { return mid; }
    }
    
    return null;
}

function search() {}

search.__proto__.linearSearch = function(arr, searchQuery){
    return linearSearch(arr, searchQuery);
  }
search.__proto__.binarySearch = function(key, arr, member){
    return binarySearch(key, arr, member);
  }

// Export searching object
export default search;
