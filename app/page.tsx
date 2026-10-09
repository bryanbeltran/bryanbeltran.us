import { Metadata } from 'next'
import Link from '@/components/Link'
import Card from '@/components/Card'
import JsonLd from '@/components/JsonLd'
import { flagshipProjects, formatProjectStatus, selectedProjects } from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import { allBlogs } from 'contentlayer/generated'
import { sortPosts } from 'pliny/utils/contentlayer'
import { filterPublishedPosts } from '@/lib/blog'
import { personJsonLd, webSiteJsonLd } from '@/lib/jsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Bryan Beltrán — Software Engineer II' },
  description: siteMetadata.description,
  openGraph: {
    title: 'Bryan Beltrán — Software Engineer II',
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bryan Beltrán — Software Engineer II',
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
}

export default function Home() {
  const featuredPost = sortPosts(
    filterPublishedPosts(allBlogs).filter((post) =>
      post.tags?.some((tag) => tag === 'engineering' || tag === 'observability')
    )
  )[0]

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
            Software Engineer II at Chewy — event-driven systems, observability, and developer
            tooling
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/resume"
              className="bg-primary-600 hover:bg-primary-700 focus-visible:ring-primary-500 rounded-md px-4 py-2 font-semibold text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              View Resume
            </Link>
            <Link
              href="/projects"
              className="rounded-md border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-gray-600 dark:hover:bg-gray-800"
            >
              Explore Selected Work
            </Link>
          </div>
        </section>

        <section className="space-y-2 py-8 md:py-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            About
          </h2>
          <p className="leading-relaxed text-gray-600 dark:text-gray-400">
            I work on Chewy&apos;s Agent Experience team, building systems for customer care across
            chat, phone, and email. I was recently admitted to Georgia Tech&apos;s Master of Science
            in Computer Science program and will begin in Spring 2027, following the Machine
            Learning track. Side projects solve problems in my own life and give me room to learn.
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
            Selected Work
          </h2>
          <div className="space-y-6">
            {flagshipProjects.map(
              ({ title, description, href, repoHref, detailsHref, status, highlights }) => (
                <Card
                  key={title}
                  title={title}
                  description={description}
                  href={href}
                  repoHref={repoHref}
                  detailsHref={detailsHref}
                  highlights={highlights}
                  featured
                  headingLevel="h3"
                  status={formatProjectStatus(status)}
                />
              )
            )}
            <div className="grid gap-6 md:grid-cols-2">
              {selectedProjects.map(
                ({ title, description, href, repoHref, detailsHref, status, highlights }) => (
                  <Card
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    repoHref={repoHref}
                    detailsHref={detailsHref}
                    highlights={highlights}
                    headingLevel="h3"
                    status={formatProjectStatus(status)}
                  />
                )
              )}
            </div>
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

          {featuredPost && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {featuredPost.title}
                </Link>
              </h3>
              {featuredPost.summary && (
                <p className="text-gray-600 dark:text-gray-400">{featuredPost.summary}</p>
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
