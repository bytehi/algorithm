import { describe, test, expect } from 'vitest'
import { rotate1, rotate2 } from '@/interview/array-rotate'

describe('数组旋转', () => {
    test('正常情况', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 3

        const res = rotate2(arr, k)
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]) // 断言
    })

    test('数组为空', () => {
        const res = rotate2([], 3)
        expect(res).toEqual([]) // 断言
    })

    test('k 是负值', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = -3

        const res = rotate2(arr, k)
        expect(res).toEqual([5, 6, 7, 1, 2, 3, 4]) // 断言
    })

    test('k 是 0',  () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 0

        const res = rotate2(arr, k)
        expect(res).toEqual(arr) // 断言
    })

    test('k 不是数字', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7]
        const k = 'abc'

        // @ts-ignore
        const res = rotate2(arr, k)
        expect(res).toEqual(arr) // 断言
    })
})
