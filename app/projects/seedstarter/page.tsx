import { Metadata } from 'next'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'

const title = 'SeedStarter — Flagship Project | Bryan Beltrán'
const description =
  'A climate-backed planting planner with crop coverage, frost evaluation, schedule exports, and production-focused reliability work.'

const base = genPageMetadata({ title, description })

export const metadata: Metadata = {
  ...base,
  title: { absolute: title },
  openGraph: { ...base.openGraph, title },
  twitter: { ...base.twitter, title },
}

export default function SeedStarterPage() {
  return (
    <article className="prose dark:prose-invert mx-auto max-w-3xl py-12">
      <header>
        <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase">
          Flagship Project
        </p>
        <h1>SeedStarter</h1>
        <p className="lead">
          A frost-aware garden planner that turns a ZIP code, season, crops, and varieties into a
          schedule users can export and follow.
        </p>
        <div className="not-prose flex flex-wrap gap-3">
          <Link
            href="https://seed-starter.vercel.app"
            className="bg-primary-600 hover:bg-primary-700 focus-visible:ring-primary-500 rounded-md px-4 py-2 font-semibold text-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Open Live Demo
          </Link>
          <Link
            href="https://github.com/bryanbeltran/seed-starter"
            className="rounded-md border border-gray-300 px-4 py-2 font-semibold hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none dark:border-gray-600 dark:hover:bg-gray-800"
          >
            View GitHub Repo
          </Link>
        </div>
      </header>

      <section aria-labelledby="scope">
        <h2 id="scope">Scope</h2>
        <p>
          SeedStarter solves a recurring planning problem: planting dates depend on location, frost
          risk, crop timing, and variety data. The app combines those inputs into a schedule instead
          of asking users to maintain a collection of manual reminders.
        </p>
      </section>

      <section aria-labelledby="engineering-signals">
        <h2 id="engineering-signals">Engineering Signals</h2>
        <ul>
          <li>88 crops and 2,000 varieties across a season-aware planning flow.</li>
          <li>NOAA GHCN climate percentiles for roughly 33,000 US ZIP codes.</li>
          <li>Fallback resolution from climate data to station, regional, and zone estimates.</li>
          <li>Saved plans, calendar/CSV/print exports, OpenAPI documentation, and a live demo.</li>
        </ul>
      </section>

      <section aria-labelledby="correctness">
        <h2 id="correctness">Correctness and Operations</h2>
        <p>
          The project treats climate data as an evaluated dependency. Golden ZIP fixtures, drift
          checks, timing audits, migrations, production smoke tests, ADRs, and CI gates protect the
          schedule model as data and product scope change.
        </p>
        <p>
          The interesting engineering work is not only the UI. It is defining fallbacks, making
          uncertainty visible, preserving plan meaning across seasons, and deciding which features
          not to build yet.
        </p>
      </section>

      <section aria-labelledby="stack">
        <h2 id="stack">Stack and Further Evidence</h2>
        <p>
          Next.js, TypeScript, PostgreSQL/sql.js, climate data pipelines, Vitest, Playwright, and
          Vercel. The repository contains the architecture decisions, data-source notes, evaluation
          scripts, API documentation, and deployment checklist.
        </p>
        <ul>
          <li>
            <Link href="https://seed-starter.vercel.app/coverage">Coverage dashboard</Link>
          </li>
          <li>
            <Link href="https://seed-starter.vercel.app/docs">Interactive API docs</Link>
          </li>
          <li>
            <Link href="https://github.com/bryanbeltran/seed-starter/tree/main/docs/adrs">
              Architecture decisions
            </Link>
          </li>
        </ul>
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
