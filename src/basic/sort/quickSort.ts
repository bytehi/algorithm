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
 * 快速排序 使用splice
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

// 功能测试
const arr1 = [9, 3, 4, 8, 5, 2, 1, 7, 6];
console.log('排序结果: ', quickSort1(arr1))


// 性能测试
const arr = []
for (let i = 10 * 10000; i > 0; i--) {
    arr.push(i)
}
console.time('排序耗时')
quickSort1(arr) // 55ms
console.timeEnd('排序耗时')
console.log('—————————————— quickSort1 ——————————————')



/**
 * 快速排序 slice
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

// 功能测试
const arr3 = [9, 3, 4, 8, 5, 2, 1, 7, 6];
console.log('排序结果: ', quickSort2(arr3))


// 性能测试
const arr4 = []
for (let i = 10 * 10000; i > 0; i--) {
  arr4.push(i)
}
console.time('排序耗时')
quickSort2(arr4) // 55ms
console.timeEnd('排序耗时')
console.log('—————————————— quickSort2 ——————————————')
