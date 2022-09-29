import { describe, test, expect } from 'vitest'
import { findPalindromeNumbers1, findPalindromeNumbers2, findPalindromeNumbers3 } from '../../src/interview/palindrome-number'

describe('对称数', () => {
    test('正常情况', () => {
        const numbers = findPalindromeNumbers3(200)
        expect(numbers.length).toBe(28)
    })
    test('max 小于等于 0', () => {
        const numbers = findPalindromeNumbers3(0)
        expect(numbers).toEqual([])
    })
})
