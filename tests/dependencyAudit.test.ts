import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

describe('dependency security overrides', () => {
  it('keeps the Vite peer resolution on a patched 7.3 release', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(process.cwd(), 'package.json'), 'utf8')
    ) as { pnpm?: { overrides?: Record<string, string> } }
    const lockfile = readFileSync(
      resolve(process.cwd(), 'pnpm-lock.yaml'),
      'utf8'
    )

    expect(packageJson.pnpm?.overrides?.vite).toBe('7.3.7')
    expect(lockfile).toContain('vite@7.3.7:')
    expect(lockfile).not.toMatch(/\bvite@7\.3\.[0-6](?:[:(]|$)/)
  })
})
