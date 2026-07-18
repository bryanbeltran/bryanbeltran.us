import { Metadata } from 'next'
import Link from '@/components/Link'
import Card from '@/components/Card'
import JsonLd from '@/components/JsonLd'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import { sortPosts } from 'pliny/utils/contentlayer'
import { filterPublishedPosts } from '@/lib/blog'
import { personJsonLd, webSiteJsonLd } from '@/lib/jsonLd'

const homeDescription =
  'Portfolio, resume, and writing by Bryan Beltrán. Backend engineer building tools, side projects, and technical notes.'

export const metadata: Metadata = {
  title: { absolute: 'Bryan Beltrán — Backend Software Engineer' },
  description: homeDescription,
  openGraph: {
    title: 'Bryan Beltrán — Backend Software Engineer',
    description: homeDescription,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Beltrán — Backend Software Engineer',
    description: homeDescription,
    images: [siteMetadata.socialBanner],
  },
}

function formatProjectStatus(status?: string) {
  if (!status) return null
  if (status === 'In Progress') return 'In development – GitHub only'
  if (status === 'Launched') return 'Launched'
  return status
}

export default function Home() {
  const latestPost = sortPosts(filterPublishedPosts(allBlogs))[0]

  return (
    <>
      <JsonLd data={personJsonLd()} />
      <JsonLd data={webSiteJsonLd()} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <section className="space-y-2 pt-6 pb-8 text-center md:space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
            Bryan Beltrán
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Backend Engineer — building tools for personal use.
          </p>
        </section>

        <section className="space-y-2 py-8 md:py-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            About
          </h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            I build software that enables great customer experiences and performs at scale. My
            personal projects are currently in development, but each is something that fills a need
            in my life or brings me joy while allowing me to learn.
          </p>
          <Link
            href="/about"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium"
          >
            More about me &rarr;
          </Link>
        </section>

        <section className="py-8 md:py-10">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            What I’m Building
          </h2>
          <div className="-m-4 flex flex-wrap">
            {projectsData.map(({ title, description, href, status }) => (
              <Card
                key={title}
                title={title}
                description={description}
                href={href}
                status={formatProjectStatus(status) ?? undefined}
              />
            ))}
          </div>
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-4 inline-block text-base font-medium"
          >
            See all projects &rarr;
          </Link>
        </section>

        <section className="space-y-4 py-8 md:py-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            From the Blog
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Notes on tools I'm building and exploring.
          </p>

          {latestPost && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                <Link
                  href={`/blog/${latestPost.slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {latestPost.title}
                </Link>
              </h3>
              {latestPost.summary && (
                <p className="text-gray-600 dark:text-gray-400">{latestPost.summary}</p>
              )}
            </div>
          )}

          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-block text-base font-medium"
          >
            Visit Blog &rarr;
          </Link>
        </section>
      </div>
    </>
  )
}
