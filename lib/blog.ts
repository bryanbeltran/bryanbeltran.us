import type { Blog } from 'contentlayer/generated'

/** Published posts in production; all posts in dev for draft preview. */
export function filterPublishedPosts(posts: Blog[]): Blog[] {
  if (process.env.NODE_ENV !== 'production') {
    return posts
  }
  return posts.filter((post) => post.draft !== true)
}
