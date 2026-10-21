export type ProjectTier = 'flagship' | 'selected' | 'other'

export interface Project {
  title: string
  description: string
  href?: string
  repoHref?: string
  detailsHref?: string
  status?: 'In Progress' | 'Launched' | 'Paused'
  tier: ProjectTier
  highlights?: string[]
}

const projectsData: Project[] = [
  {
    title: 'SeedStarter',
    description:
      'Production-style frost-aware garden planner with climate-backed schedules and exports.',
    href: 'https://seed-starter.vercel.app',
    repoHref: 'https://github.com/bryanbeltran/seed-starter',
    detailsHref: '/projects/seedstarter',
    status: 'Launched',
    tier: 'flagship',
    highlights: [
      '88 crops and 2,000 varieties with season-aware planting timelines.',
      'NOAA climate percentiles and fallback resolution for roughly 33,000 US ZIP codes.',
      'OpenAPI docs, golden climate evaluations, ADRs, and production smoke tests.',
    ],
  },
  {
    title: 'Room for Words',
    description:
      'Calm, local-first literacy companion for K–2 learners practicing decoding and phonics fluency.',
    href: 'https://roomforwords.com',
    status: 'Launched',
    tier: 'selected',
    highlights: [
      'Brief practice rounds for regular-word decoding, grapheme–phoneme patterns, and comfortable fluency.',
      'Teacher catalog, adult-managed learner tools, and privacy-preserving local practice boundaries.',
      'Buildless web app with accessible interactions and a D1-backed worker API for optional sync.',
    ],
  },
  {
    title: 'Voiceprint',
    description:
      'Local-first personal voice compiler that turns interviews and writing samples into inspectable, versioned instructions for AI tools.',
    href: 'https://github.com/bryanbeltran/voiceprint',
    status: 'In Progress',
    tier: 'selected',
    highlights: [
      'Guided interview and corpus modes produce an inspectable canonical writing profile.',
      'Deterministic adapters export portable instructions for Codex, Claude, ChatGPT, Cursor, and Markdown.',
      'Local persistence, version history, diffing, and blind A/B evaluation keep the workflow user-owned.',
    ],
  },
  {
    title: 'Math Garden',
    description:
      'Production-oriented, accessible K–5 math practice platform with teacher-authored game versions and anonymous learner play.',
    status: 'In Progress',
    tier: 'selected',
    highlights: [
      'Eight playable templates with deterministic sessions, feedback, hints, and refresh recovery.',
      'Teacher review, publication, immutable versions, rollback, assignments, and a curated library.',
      'Minnesota K–5 standards coverage with explicit accessibility, privacy, and content-review boundaries.',
    ],
  },
  {
    title: 'Room for Math',
    description:
      'Buildless teacher-facing library of ready-to-use K–5 math games with local custom-game creation.',
    status: 'In Progress',
    tier: 'selected',
    highlights: [
      '57 preloaded games spanning Kindergarten through Grade 5 and Minnesota’s 2022 math strands.',
      'Search and filters with teacher guidance, detail views, and short playable previews.',
      'Device-local custom-game builder with a responsive, dependency-free browser runtime.',
    ],
  },
  {
    title: 'Browser Listener',
    description:
      'Local-first MV3 Chrome extension for recording authorized browser sessions into portable, redacted bug-reproduction and evidence bundles. No upload or telemetry.',
    href: 'https://github.com/bryanbeltran/browser-listener',
    status: 'In Progress',
    tier: 'selected',
  },
  {
    title: 'Wiggum',
    description:
      'Auditable Python harness for autonomous software iteration with isolated worktrees, validation gates, review, and evidence.',
    href: 'https://github.com/bryanbeltran/wiggum',
    status: 'In Progress',
    tier: 'selected',
  },
  {
    title: 'The Gathering Project',
    description: 'Website for a nonprofit organization. Built with Next.js and hosted on Vercel.',
    href: 'https://www.thegatheringproject.us',
    repoHref: 'https://github.com/bryanbeltran/thegatheringproject.us',
    status: 'Launched',
    tier: 'other',
  },
  {
    title: 'GovDataHub',
    description:
      'Private prototype for a commercially reusable Census data service with catalog discovery, normalized queries, caching, and provenance.',
    detailsHref: '/projects/govdatahub',
    status: 'In Progress',
    tier: 'selected',
    highlights: [
      'FastAPI facade over ACS, business, and other U.S. Census datasets.',
      'Variable discovery, normalized queries, saved requests, and CSV/JSON export.',
      'Source URLs, fetch times, cache state, and checksums travel with every result.',
    ],
  },
  {
    title: 'Anchor',
    description:
      'ADHD-focused homepage PWA — one task, optional focus note, and a 25-minute countdown. Installable, local-only, no accounts.',
    href: 'https://github.com/bryanbeltran/anchor',
    status: 'Paused',
    tier: 'other',
  },
  {
    title: 'TrafficSim',
    description:
      'Traffic behavior simulator for zipper merges and roundabouts — modeling real driver hesitation, not ideal theory.',
    href: 'https://github.com/bryanbeltran/traffic-sim',
    status: 'In Progress',
    tier: 'other',
  },
]

export function formatProjectStatus(status?: Project['status']) {
  if (!status) return undefined
  if (status === 'In Progress') return 'In development'
  return status
}

export const flagshipProjects = projectsData.filter(({ tier }) => tier === 'flagship')
export const selectedProjects = projectsData.filter(({ tier }) => tier === 'selected')
export const otherProjects = projectsData.filter(({ tier }) => tier === 'other')

export default projectsData
