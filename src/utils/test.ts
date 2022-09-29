const DATA_COUNT = 1 * 10000
const SORT_COUNT = 1 * 10000
const SEARCH_COUNT = 1 * 10000

const arr = createData(DATA_COUNT)
const sortedArr = arr.sort((a, b) => a - b)
const target = arr[DATA_COUNT / 20]


export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}


// 生成数据
export function createData(num: number): number[] {
  let i = 0;
  let arr = []
  while (i < DATA_COUNT) {
    arr[i] = random(0, num)
    i++
  }
  return Array.from(new Set(arr))
}


export function testSearch(fn: any) {
  console.log(`—————————————— 功能测试: ${fn.name} ——————————————`)
  console.log('搜索目标: ', target, '搜索位置: ', sortedArr.indexOf(target), '搜索结果: ', fn(sortedArr, target))
}


// 搜索耗时
export function testSearchTiming(fn: any) {
  console.log(`—————————————— 性能测试: ${fn.name} ——————————————`)
  console.log(`搜索数据量: ${sortedArr.length / 10000}万`)
  console.time(`搜索耗时`)

  fn(arr, target)

  console.timeEnd(`搜索耗时`) // 17ms
}


// 搜索次数耗时
export function testSearchCountTiming(fn: any) {
  console.log(`—————————————— 性能测试: ${fn.name} ——————————————`)
  console.log(`搜索数据量: ${sortedArr.length / 10000}万`)
  console.log(`搜索次数: ${SEARCH_COUNT / 10000}万`)
  console.time('搜索耗时')

  for (let i = 0; i < SEARCH_COUNT; i++) {
    fn(sortedArr, target)
  }

  console.timeEnd('搜索耗时')
}


// 排序结果
export function testSort(fn: any) {
  console.log(`—————————————— 功能测试: ${fn.name} ——————————————`)
  console.log('排序结果: ', fn(arr, target))
}


// 排序耗时
export function testSortTiming(fn: any) {
  console.log(`—————————————— 性能测试: ${fn.name} ——————————————`)
  console.log(`排序数据量: ${arr.length / 10000}万`)
  console.time(`排序耗时`)

  fn(arr)

  console.timeEnd('排序耗时')
}


// 排序次数耗时
export function testSortCountTiming(fn: any) {
  console.log(`—————————————— 性能测试: ${fn.name} ——————————————`)
  console.log(`排序数据量: ${arr.length / 10000}万`)
  console.log(`排序次数: ${SORT_COUNT / 10000}万`)
  console.time(`排序耗时`)

  for (let i = 0; i < SORT_COUNT; i++) {
    fn(arr)
  }

  console.timeEnd('排序耗时')
}
