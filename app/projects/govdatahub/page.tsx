import { Metadata } from 'next'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

const title = 'GovDataHub — Public Data Service | Bryan Beltrán'
const description =
  'A private prototype for a commercially reusable U.S. Census data service with catalog discovery, normalized queries, caching, provenance, and an accessible explorer.'

const base = genPageMetadata({ title, description })

export const metadata: Metadata = {
  ...base,
  title: { absolute: title },
  openGraph: { ...base.openGraph, title },
  twitter: { ...base.twitter, title },
}

export default function GovDataHubPage() {
  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl py-12">
      <header>
        <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase">
          Selected Project · Private Prototype
        </p>
        <h1>GovDataHub</h1>
        <p className="lead">
          A production-oriented data-as-a-service layer that makes public U.S. Census data easier to
          discover, query, and reuse.
        </p>
        <div className="not-prose flex flex-wrap gap-3">
          <Link
            href="https://www.census.gov/data/developers/data-sets.html"
            className="bg-primary-600 hover:bg-primary-700 focus-visible:ring-primary-500 rounded-md px-4 py-2 font-semibold text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Census Dataset Documentation
          </Link>
          <Link
            href="/projects"
            className="rounded-md border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-gray-600 dark:hover:bg-gray-800"
          >
            All Projects
          </Link>
        </div>
        <p className="not-prose mt-4 text-sm text-gray-500 dark:text-gray-400">
          The implementation repository is private. This page documents the service design and
          public-data reuse model without exposing private source code.
        </p>
      </header>

      <section aria-labelledby="problem">
        <h2 id="problem">The Problem</h2>
        <p>
          Government data is public, but working with it often means jumping between dataset
          portals, learning a new query shape for each source, and losing the context behind a
          result. GovDataHub puts a small, stable contract in front of those differences.
        </p>
      </section>

      <section aria-labelledby="product-slice">
        <h2 id="product-slice">The Product Slice</h2>
        <ul>
          <li>A catalog of ACS, business, and other configured U.S. Census datasets.</li>
          <li>Variable discovery and a query builder for geography, time, and predicates.</li>
          <li>Normalized JSON responses with CSV export and a browser-based explorer.</li>
          <li>Saved queries and repeatable catalog/refresh jobs for a working data workspace.</li>
        </ul>
      </section>

      <section aria-labelledby="engineering-signals">
        <h2 id="engineering-signals">Engineering Signals</h2>
        <ul>
          <li>FastAPI, async SQLAlchemy, Alembic, HTTPX, and Pydantic settings.</li>
          <li>Cache-aware results that retain source URL, fetch time, expiry, and checksum.</li>
          <li>Last-good metadata preservation and partial-failure reporting during refreshes.</li>
          <li>
            Accessible, responsive UI states for loading, errors, empty results, and overflow.
          </li>
        </ul>
      </section>

      <section aria-labelledby="commercial-reuse">
        <h2 id="commercial-reuse">Commercial Reuse</h2>
        <p>
          The service is designed around U.S. Census statistical data, which is generally available
          for commercial reuse. The operational boundary is explicit: keep Census attribution and
          source links, follow API terms and rate limits, avoid implying agency endorsement, and
          review any third-party notices attached to a selected dataset.
        </p>
      </section>

      <section aria-labelledby="current-boundary">
        <h2 id="current-boundary">Current Boundary</h2>
        <p>
          This is a private, working prototype rather than a public hosted endpoint. The next
          product decision is whether a narrowly scoped hosted API or an authenticated team
          workspace creates enough value to justify operating cost and upstream quota.
        </p>
      </section>

      <footer className="not-prose pt-4">
        <Link
          href="/projects"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
        >
          &larr; Back to Projects
        </Link>
      </footer>
    </article>
  )
}
