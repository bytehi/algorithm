/**
 * 归并排序
 */

export function mergeSort(arr: number[]): number[] {
  const len = arr.length
  if (len < 2) return arr

  let midIndex = Math.floor(len / 2)
  let left = arr.slice(0, midIndex)
  let right = arr.slice(midIndex)

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]): number[] {
  let result: any[] = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }
  return result;
}


const arr = [9, 3, 4, 8, 5, 2, 1, 7, 6];
const ret = mergeSort(arr)
console.log('排序结果: ', ret)
console.log('—————————————— mergeSort ——————————————')
