import { createRandomArray, getSearchTiming } from '@/utils/index'
/**
 * 二分查找法
 * @description 方案1 循环
 * @param arr
 * @param target
 */
export function binarySearch1(arr: number[], target: number): number {
  const len = arr.length
  if (len === 0) return -1
  let startIndex = 0 // 起始位置
  let endIndex = len - 1 // 结束位置

  while(startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2)
    const midValue = arr[midIndex]
    if (target < midValue) {
      // 目标值较小，则继续在左侧查找
      endIndex = midIndex - 1
    } else if (target > midValue) {
      // 目标值较大，则继续在右侧查找
      startIndex = midIndex + 1
    } else {
      // 相等，返回
      return midIndex
    }
  }
  return -1
}


/**
 * 二分查找法
 * @description 方案2 递归
 * @param arr
 * @param target
 * @param startIndex
 * @param endIndex
 * @returns
 */
export function binarySearch2(arr: number[], target: number, startIndex?:number, endIndex?:number): number {
  const length = arr.length
  if (length === 0) return -1

  // 开始和结束的范围
  if (startIndex == null) startIndex = 0
  if (endIndex == null) endIndex = length - 1

  // 如果 start 和 end 相遇，则结束
  if (startIndex > endIndex) return -1

  // 中间位置
  const midIndex = Math.floor((startIndex + endIndex) / 2)
  const midValue = arr[midIndex]

  if (target < midValue) {
    // 目标值较小，则继续在左侧查找
    return binarySearch2(arr, target, startIndex, midIndex - 1)
  } else if (target > midValue) {
    // 目标值较大，则继续在右侧查找
    return binarySearch2(arr, target, midIndex + 1, endIndex)
  } else {
    // 相等，返回
    return midIndex
  }
}


const arr = createRandomArray(100 * 10000)
getSearchTiming(arr, 999, binarySearch1)

