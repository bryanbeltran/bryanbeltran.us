import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl
  const today = new Date().toISOString().split('T')[0]

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const staticRoutes = ['', 'blog', 'projects', 'tags', 'about', 'resume', 'contact'].map(
    (route) => ({
      url: route ? `${siteUrl}/${route}` : siteUrl,
      lastModified: today,
    })
  )

  const tagRoutes = Object.keys(tagData as Record<string, number>).map((tag) => ({
    url: `${siteUrl}/tags/${encodeURI(tag)}`,
    lastModified: today,
  }))

  return [...staticRoutes, ...tagRoutes, ...blogRoutes]
}
