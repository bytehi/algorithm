import { describe, test, expect } from 'vitest'
import { insertSort } from '../../src/sort/insert-sort'

describe('插入排序', () => {
  test('正常情况', () => {
    const arr = [1, 6, 2, 7, 3, 8, 4, 9, 5]
    const res = insertSort(arr)
    expect(res).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
