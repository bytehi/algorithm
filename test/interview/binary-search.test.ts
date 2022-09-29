import { describe, test, expect } from 'vitest'
import { binarySearch1, binarySearch2 } from '../../src/interview/binary-search'

describe('二分查找', () => {
    test('正常情况', () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 40
        const index = binarySearch1(arr, target)
        expect(index).toBe(3)
    })

    test('空数组', () => {
        expect(binarySearch1([], 100)).toBe(-1)
    })

    test('找不到 target', () => {
        const arr = [10, 20, 30, 40, 50]
        const target = 400
        const index = binarySearch1(arr, target)
        expect(index).toBe(-1)
    })
})
