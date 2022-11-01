export { createRandomArray } from './mock'


export function getSearchTiming(arr: number[], target: number, fn: (arr: number[], target: number) => void, count?: number) {
  console.log(`—————————————— 性能测试: ${fn.name} ——————————————`)
  console.log(`搜索数据量: ${arr.length / 10000}万`)

  count = count || 1;
  console.log(`搜索次数: ${count}次`)

  console.time('搜索耗时')
  for (let i = 0; i < count; i++) {
    fn(arr, target)
  }
  console.timeEnd('搜索耗时')
}


export function getSortTiming(arr: number[], fn: (arr: number[]) => void, count?: number) {
  console.log(`—————————————— 性能测试: ${fn.name} ——————————————`)
  console.log(`排序数据量: ${arr.length / 10000}万`)

  count = count || 1;
  console.log(`排序次数: ${count}次`)

  console.time('排序耗时')
  for (let i = 0; i < count; i++) {
    fn(arr)
  }
  console.timeEnd('排序耗时')
}
