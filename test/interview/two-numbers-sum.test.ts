import { describe, test, expect } from 'vitest'
import { findTowNumbers1, findTowNumbers2 } from '../../src/interview/two-numbers-sum'

describe('两数之和', () => {
    test('正常情况', () => {
        const arr = [1, 2, 4, 7, 11, 15]
        const res = findTowNumbers2(arr, 15)
        expect(res).toEqual([4, 11])
    })

    test('空数组', () => {
        const res = findTowNumbers2([], 100)
        expect(res).toEqual([])
    })

    test('找不到结果', () => {
        const arr = [1, 2, 4, 7, 11, 15]
        const n = 100
        const res = findTowNumbers2(arr, n)
        expect(res).toEqual([])
    })
})
