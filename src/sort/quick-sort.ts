/**
 * 快速排序
 *
 * 思想：二分法
 *
 * 时间复杂度:
 *  平均：O(nlogn)
 *  最好：O(nlogn)
 *  最坏：O(n2)
 *
 * 空间复杂度: O(logn)
 *
 * 排序方式: in-place(占用常数内存，不占用额外内存)
 * 排序方式: out-place(占用额外内存)
 *
 * 稳定性: 稳定(排序后2个相等键值的顺序和排序之前它们的顺序相同)
 * 稳定性: 不稳定(排序后2个相等键值的顺序和排序之前它们的顺序不相同)
 *
 */


/**
 * 快速排序
 * @description 使用splice
 * @param arr
 * @returns
 */
export function quickSort1(arr: number[]): number[] {
  const len = arr.length
  if (len === 0) return arr

  const midIndex = Math.floor(len / 2)
  const midValue = arr.splice(midIndex, 1)[0]

  const left: number[] = []
  const right: number[] = []

  // 注意：这里不用直接用 length ，而是用 arr.length 。因为 arr 已经被 splice 给修改了
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i]
    if (n < midValue) {
      left.push(n)
    } else {
      right.push(n)
    }
  }

  return quickSort1(left).concat([midValue], quickSort1(right))
}


/**
 * 快速排序
 * @description 使用slice
 * @param arr
 * @returns
 */
export function quickSort2(arr: number[]): number[] {
  const len = arr.length
  if (len === 0) return arr

  const midIndex = Math.floor(len / 2)
  const midValue = arr.slice(midIndex, midIndex + 1)[0]

  const left: number[] = []
  const right: number[] = []

  for (let i = 0; i < len; i++) {
    if (i !== midIndex) {
      const n = arr[i]
      if (n < midValue) {
        left.push(n)
      } else {
        right.push(n)
      }
    }
  }
  return quickSort2(left).concat([midValue], quickSort2(right))
}
