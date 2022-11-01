
function random() {
  return Math.random() > 0.5 ? -1 : 1
}

// 创建随机数组
export function createRandomArray(num: number): number[] {
  let i = 0;
  let arr = []
  while (i < num) {
    arr[i] = i + 1
    i++
  }
  return arr.sort(random)
}
