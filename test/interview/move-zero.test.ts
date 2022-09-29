import { describe, test, expect } from 'vitest'
import { moveZero1, moveZero2 } from '../../src/interview/move-zero'

describe('移动 0 到数组末尾', () => {
    test('正常情况', () => {
        const arr = [1, 0, 3, 4, 0, 0, 0, 11, 0]
        moveZero2(arr)
        expect(arr).toEqual([1, 3, 4, 11, 0, 0, 0, 0, 0])
    })
    test('没有 0', () => {
        const arr = [1, 3, 4, 11]
        moveZero2(arr)
        expect(arr).toEqual([1, 3, 4, 11])
    })
    test('全是 0', () => {
        const arr = [0, 0, 0, 0, 0]
        moveZero2(arr)
        expect(arr).toEqual([0, 0, 0, 0, 0])
    })
})
