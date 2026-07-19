import { Metadata } from 'next'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { filterPublishedPosts } from '@/lib/blog'

const POSTS_PER_PAGE = 5

const blogTitle = 'Blog — Software Engineering & Side Projects | Bryan Beltrán'
const blogDescription =
  'Notes on system design, observability, side projects, and tools — by Bryan Beltrán.'

const base = genPageMetadata({
  title: blogTitle,
  description: blogDescription,
})

export const metadata: Metadata = {
  ...base,
  title: { absolute: blogTitle },
  openGraph: { ...base.openGraph, title: blogTitle },
  twitter: { ...base.twitter, title: blogTitle },
}

export default async function BlogPage() {
  const posts = allCoreContent(sortPosts(filterPublishedPosts(allBlogs)))
  const pageNumber = 1
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber)
  const pagination = {
    currentPage: pageNumber,
    totalPages,
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Writing About Building Things"
    />
  )
}
