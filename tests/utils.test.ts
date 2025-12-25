import { describe, it, expect } from 'vitest'
import { cn } from '@/components/lib/utils'

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    const condition = false
    expect(cn('foo', condition && 'bar', 'baz')).toBe('foo baz')
  })

  it('merges tailwind classes correctly', () => {
    expect(cn('p-4 p-6')).toBe('p-6') // p-6 should override p-4
  })

  it('handles empty input', () => {
    expect(cn()).toBe('')
  })
})
