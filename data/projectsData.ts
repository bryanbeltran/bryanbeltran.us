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
    title: 'Browser Listener',
    description:
      'Privacy-first MV3 extension for consent-gated, local-only Facebook session capture — posts, comments, reactions, and people exported as a structured ZIP. No upload, no telemetry.',
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
    description: 'FastAPI backend for aggregating and querying government datasets.',
    href: 'https://github.com/bryanbeltran/govdatahub',
    status: 'Paused',
    tier: 'other',
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
  if (status === 'In Progress') return 'In development – GitHub only'
  return status
}

export const flagshipProjects = projectsData.filter(({ tier }) => tier === 'flagship')
export const selectedProjects = projectsData.filter(({ tier }) => tier === 'selected')
export const otherProjects = projectsData.filter(({ tier }) => tier === 'other')

export default projectsData
