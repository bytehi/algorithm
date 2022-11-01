import { describe, test, expect } from 'vitest'
import { findContinuousChar1, findContinuousChar2 } from '@/interview/continuous-char'

describe('连续字符和长度', () => {
    test('正常情况', () => {
        const str = 'aabbcccddeeee11223'
        const res = findContinuousChar1(str)
        expect(res).toEqual({ char: 'e', length: 4 })
    })
    test('空字符串', () => {
        const res = findContinuousChar1('')
        expect(res).toEqual({ char: '', length: 0 })
    })
    test('无连续字符', () => {
        const str = 'abc'
        const res = findContinuousChar1(str)
        expect(res).toEqual({ char: 'a', length: 1 })
    })
    test('全部都是连续字符', () => {
        const str = 'aaa'
        const res = findContinuousChar1(str)
        expect(res).toEqual({ char: 'a', length: 3 })
    })
})
