import { describe, test, expect } from 'vitest'
import { switchLetterCase1, switchLetterCase2 } from '../../src/interview/switch-letter-case'

describe('切换字母大小写', () => {
    test('正常', () => {
        const str = '100aBcD$#xYz'
        const res = switchLetterCase2(str)
        expect(res).toBe('100AbCd$#XyZ')
    })
    test('空字符串', () => {
        const res = switchLetterCase2('')
        expect(res).toBe('')
    })
    test('非字母', () => {
        const res = switchLetterCase2('100$%你好')
        expect(res).toBe('100$%你好')
    })
})
