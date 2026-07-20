// src/data/projectsData.ts

export interface Project {
  title: string
  description: string
  href?: string
  repoHref?: string
  status?: 'In Progress' | 'Launched' | 'Paused'
}

const projectsData: Project[] = [
  {
    title: 'SeedStarter',
    description:
      'Frost-aware garden planner with a live demo — ZIP-based zone lookup, planting timelines, and calendar export.',
    href: 'https://seed-starter.vercel.app',
    repoHref: 'https://github.com/bryanbeltran/seed-starter',
    status: 'Launched',
  },
  {
    title: 'Browser Listener',
    description:
      'Privacy-first MV3 extension for consent-gated, local-only Facebook session capture — posts, comments, reactions, and people exported as a structured ZIP. No upload, no telemetry.',
    href: 'https://github.com/bryanbeltran/browser-listener',
    status: 'In Progress',
  },
  {
    title: 'The Gathering Project',
    description: 'Website for a nonprofit organization. Built with Next.js and hosted on Vercel.',
    href: 'https://www.thegatheringproject.us',
    repoHref: 'https://github.com/bryanbeltran/thegatheringproject.us',
    status: 'Launched',
  },
  {
    title: 'GovDataHub',
    description: 'FastAPI backend for aggregating and querying government datasets.',
    href: 'https://github.com/bryanbeltran/govdatahub',
    status: 'Paused',
  },
  {
    title: 'Anchor',
    description:
      'ADHD-focused homepage PWA — one task, optional focus note, and a 25-minute countdown. Installable, local-only, no accounts.',
    href: 'https://github.com/bryanbeltran/anchor',
    status: 'Paused',
  },
  {
    title: 'TrafficSim',
    description:
      'Traffic behavior simulator for zipper merges and roundabouts — modeling real driver hesitation, not ideal theory.',
    href: 'https://github.com/bryanbeltran/traffic-sim',
    status: 'In Progress',
  },
]

export default projectsData
