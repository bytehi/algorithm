import { describe, it, expect, bench } from 'vitest'
import { insertSort } from '@/sort/insert-sort'

describe('插入排序', () => {

  it('正常情况', () => {
    const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = insertSort(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('有负数', () => {
    const arr = [-2, 2, -3, 1]
    const res = insertSort(arr)
    expect(res).toEqual([-3, -2, 1, 2])
  })

  it('数组元素都一样', () => {
    const arr = [2, 2, 2, 2]
    const res = insertSort(arr)
    expect(res).toEqual([2, 2, 2, 2])
  })

  it('空数组', () => {
    const res = insertSort([])
    expect(res).toEqual([])
  })
})
