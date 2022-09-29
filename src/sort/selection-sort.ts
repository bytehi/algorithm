import { testSort, testSortTiming, testSortCountTiming } from "../utils/test"

/**
 * 选择排序
 * @param arr
 * @returns
 */
export function selectionSort(arr: number[]): number[] {
  let len = arr.length,
    minIndex,
    current

  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    current = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = current;
  }
  return arr;
}

testSort(selectionSort)
testSortTiming(selectionSort)
// testSortCountTiming(selectionSort)
