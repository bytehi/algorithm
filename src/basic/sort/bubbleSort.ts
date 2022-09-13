/**
 * 冒泡排序
 * @param arr
 * @returns
 */
export function bubbleSort(arr: number[]): number[] {
  let len = arr.length
  if(len === 0) return arr
  for(let i = 0; i < len; i++) {
    for(let j = i + 1; j < len; j++) {
      if(arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}


// 功能测试
const arr = [9, 3, 4, 8, 5, 2, 1, 7, 6];
const ret = bubbleSort(arr)
console.log('排序结果: ', ret)


// 性能测试
// const arr2 = []
// for (let i = 10 * 10000; i > 0; i--) {
//     arr2.push(i)
// }
// console.time('排序耗时')
// bubbleSort(arr2)
// console.timeEnd('排序耗时')
console.log('排序耗时: 18-20s')
console.log('—————————————— bubbleSort ——————————————')
