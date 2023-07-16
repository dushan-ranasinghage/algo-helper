import _algo from '../';

describe('Sorting Tests', () => {
  const arr: number[] = [4, 2, 1, 5, 3, 7, 6];
  const sortedResult: number[] = [1, 2, 3, 4, 5, 6, 7];

  test('Sorting array using bubble sort', () => {
    const sortedArr: number[] = _algo.bubbleSort(arr);
    expect(sortedArr).toEqual(sortedResult);
  });

  test('Sorting array using insertion sort', () => {
    const sortedArr: number[] = _algo.insertionSort(arr);
    expect(sortedArr).toEqual(sortedResult);
  });

  test('Sorting array using selection sort', () => {
    const sortedArr: number[] = _algo.selectionSort(arr);
    expect(sortedArr).toEqual(sortedResult);
  });

  test('Sorting array using quick sort', () => {
    const sortedArr: number[] = _algo.quickSort(arr);
    expect(sortedArr).toEqual(sortedResult);
  });

  test('Sorting array using merge sort', () => {
    const sortedArr: number[] = _algo.mergeSort(arr);
    expect(sortedArr).toEqual(sortedResult);
  });

  test('Sorting array using heap sort', () => {
    const sortedArr: number[] = _algo.heapSort(arr);
    expect(sortedArr).toEqual(sortedResult);
  });
});
