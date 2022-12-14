import { describe, test, expect } from 'vitest'
import { MyQueue } from '@/interview/queue-with-list'

describe('链表实现队列', () => {
    test('add and length', () => {
        const q = new MyQueue()
        expect(q.length).toBe(0)

        q.add(100)
        q.add(200)
        q.add(300)
        expect(q.length).toBe(3)
    })
    test('delete', () => {
        const q = new MyQueue()
        expect(q.delete()).toBeNull()

        q.add(100)
        q.add(200)
        q.add(300)
        expect(q.delete()).toBe(100)
        expect(q.delete()).toBe(200)
        expect(q.delete()).toBe(300)
        expect(q.delete()).toBeNull()
    })
})
