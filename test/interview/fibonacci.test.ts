import { describe, test, expect } from 'vitest'
import { fibonacci } from '../../src/interview/fibonacci'

describe('斐波那契数列', () => {
    test('0 和 1', () => {
        expect(fibonacci(0)).toBe(0)
        expect(fibonacci(1)).toBe(1)
    })
    test('正常情况', () => {
        expect(fibonacci(2)).toBe(1)
        expect(fibonacci(3)).toBe(2)
        expect(fibonacci(6)).toBe(8)
    })
    test('n 小于 0', () => {
        expect(fibonacci(-1)).toBe(0)
    })
})
