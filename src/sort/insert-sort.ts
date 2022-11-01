/**
 * 插入排序
 * @param arr
 */
export function insertSort(arr: number[]): number[] {
  let current,
    preIndex,
    len = arr.length

  for (let i = 1; i < len; i++) {
    current = arr[i]
    preIndex = i - 1

    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex --
    }
    arr[preIndex + 1] = current
  }
  return arr
}
