import { describe, test, expect } from 'vitest'
import { matchBracket } from '@/interview/match-bracket'

describe('括号匹配', () => {
    test('正常情况', () => {
        const str = '{a(b[c]d)e}f'
        const res = matchBracket(str)
        expect(res).toBe(true)
    })

    test('不匹配', () => {
        const str = '{a(b[(c]d)e}f'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })

    test('顺序不一致的', () => {
        const str = '{a(b[c]d}e)f'
        const res = matchBracket(str)
        expect(res).toBe(false)
    })

    test('空字符串', () => {
        const res = matchBracket('')
        expect(res).toBe(true)
    })
})
