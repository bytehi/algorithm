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


// 功能测试
const arr = [9, 3, 4, 8, 5, 2, 1, 7, 6];
console.log('选择排序: ', selectionSort(arr))


// // 性能测试
// const arr2 = []
// for (let i = 10 * 10000; i > 0; i--) {
//     arr2.push(i)
// }
// console.time('排序耗时')
// selectionSort(arr2) // 4s
// console.timeEnd('排序耗时')
console.log('排序耗时: 4-6s')
console.log('—————————————— selectionSort ——————————————')
