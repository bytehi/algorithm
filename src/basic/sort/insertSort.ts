

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

// 功能测试
const arr = [9, 3, 4, 8, 5, 2, 1, 7, 6];
const ret = insertSort(arr)
console.log('排序结果: ', ret)


// // 性能测试
// const arr2 = []
// for (let i = 10 * 10000; i > 0; i--) {
//   arr2.push(i)
// }
// console.time('排序耗时')
// insertSort(arr2)
// console.timeEnd('排序耗时')
console.log('排序耗时: 6-7s')
console.log('—————————————— insertSort ——————————————')
