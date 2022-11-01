import { removeDuplicates } from '@/leetcode/array/26-removeDuplicates'

// 功能测试
console.log('removeDuplicates: ', removeDuplicates([1, 1, 2]))
console.log('removeDuplicates: ', removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
console.log('—————————————— removeDuplicates ——————————————')

describe('删除有序数组中的重复项', () => {
  it('正常情况', () => {
    const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const res = removeDuplicates(arr)
    expect(res).toEqual(5) // 返回数组长度
  })

  it('空数组', () => {
    const res = removeDuplicates([])
    expect(res).toEqual(0)
  })

  it('只有一个元素', () => {
    const arr = [1]
    const res = removeDuplicates(arr)
    expect(res).toEqual(1)
  })
})
