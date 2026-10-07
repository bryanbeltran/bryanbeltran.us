import { afterEach, describe, expect, it, vi } from 'vitest'

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

describe('site metadata integrations', () => {
  it('disables Giscus when required settings are missing', async () => {
    vi.stubEnv('NEXT_PUBLIC_GISCUS_REPO', '')
    vi.stubEnv('NEXT_PUBLIC_GISCUS_REPOSITORY_ID', '')
    vi.stubEnv('NEXT_PUBLIC_GISCUS_CATEGORY', '')
    vi.stubEnv('NEXT_PUBLIC_GISCUS_CATEGORY_ID', '')

    const { default: siteMetadata } = await import('@/data/siteMetadata')

    expect(siteMetadata.comments).toBeUndefined()
  })

  it('enables Giscus only when all required settings are present', async () => {
    vi.stubEnv('NEXT_PUBLIC_GISCUS_REPO', 'owner/repo')
    vi.stubEnv('NEXT_PUBLIC_GISCUS_REPOSITORY_ID', 'repository-id')
    vi.stubEnv('NEXT_PUBLIC_GISCUS_CATEGORY', 'Announcements')
    vi.stubEnv('NEXT_PUBLIC_GISCUS_CATEGORY_ID', 'category-id')

    const { default: siteMetadata } = await import('@/data/siteMetadata')

    expect(siteMetadata.comments).toMatchObject({
      provider: 'giscus',
      giscusConfig: {
        repo: 'owner/repo',
        repositoryId: 'repository-id',
        category: 'Announcements',
        categoryId: 'category-id',
      },
    })
  })
})
