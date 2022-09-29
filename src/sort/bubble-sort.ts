import { testSort, testSortTiming, testSortCountTiming } from "../utils/test"

/**
 * 冒泡排序
 * @param arr
 * @returns
 */
export function bubbleSort(arr: number[]): number[] {
  let len = arr.length
  if (len === 0) return arr

  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

testSort(bubbleSort)
testSortTiming(bubbleSort)
// testSortCountTiming(bubbleSort)
