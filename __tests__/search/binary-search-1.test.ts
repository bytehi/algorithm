import { describe, it, expect } from 'vitest'
import { binarySearch1 } from '@/search/binary-search'

describe('插入排序', () => {

  it('正常情况', () => {
    const arr = [1,2,3,4,5,6,7,8,9]
    const res = binarySearch1(arr, 2)
    expect(res).toEqual(1)
  })

  it('有负数', () => {
    const arr = [-3, -2, 1, 2]
    const res = binarySearch1(arr, 2)
    expect(res).toEqual(3)
  })

  it('数组元素都一样', () => {
    const arr = [2, 2, 2, 2]
    const res = binarySearch1(arr, 2)
    expect(res).toEqual(1)
  })

  it('空数组', () => {
    const res = binarySearch1([], 2)
    expect(res).toEqual(-1)
  })
})
