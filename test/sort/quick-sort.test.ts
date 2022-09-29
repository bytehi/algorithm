import { describe, test, expect } from 'vitest'
import { quickSort1, quickSort2 } from '../../src/sort/quick-sort'

describe('快速排序', () => {
  test('正常情况', () => {
    const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = quickSort2(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  test('有负数', () => {
    const arr = [-2, 2, -3, 1]
    const res = quickSort2(arr)
    expect(res).toEqual([-3, -2, 1, 2])
  })
  test('数组元素都一样', () => {
    const arr = [2, 2, 2, 2]
    const res = quickSort2(arr)
    expect(res).toEqual([2, 2, 2, 2])
  })
  test('空数组', () => {
    const res = quickSort2([])
    expect(res).toEqual([])
  })
})
