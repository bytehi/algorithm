import { twoSum1 } from '@/leetcode/array/1-twoSum'

describe('两数之和', () => {
  it('正常情况', () => {
    const arr = [1, 2, 4, 7, 11, 15]
    const res = twoSum1(arr, 15)
    expect(res).toEqual([2, 4])
  })

  it('空数组', () => {
    const res = twoSum1([], 100)
    expect(res).toEqual(null)
  })

  it('找不到结果', () => {
    const arr = [1, 2, 4, 7, 11, 15]
    const n = 100
    const res = twoSum1(arr, n)
    expect(res).toEqual(null)
  })
})
