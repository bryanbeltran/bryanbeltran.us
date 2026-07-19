// src/data/projectsData.ts

export interface Project {
  title: string
  description: string
  href?: string
  status?: 'In Progress' | 'Launched' | 'Paused'
}

const projectsData: Project[] = [
  {
    title: 'SeedStarter',
    description:
      'Frost-aware garden planner with a live demo — ZIP-based zone lookup, planting timelines, and calendar export.',
    href: 'https://github.com/bryanbeltran/seed-starter',
    status: 'Launched',
  },
  {
    title: 'Browser Listener',
    description:
      'MV3 extension with user-consented capture, CDP network/console, per-frame content scripts, redaction before persistence, and local ZIP export with HAR + offline HTML report. No upload, no telemetry.',
    href: 'https://github.com/bryanbeltran/browser-listener',
    status: 'In Progress',
  },
  {
    title: 'The Gathering Project',
    description: 'Website for a nonprofit organization. Built with Next.js and hosted on Vercel.',
    href: 'https://github.com/bryanbeltran/thegatheringproject.us',
    status: 'Launched',
  },
  {
    title: 'GovDataHub',
    description: 'FastAPI backend for aggregating and querying government datasets.',
    href: 'https://github.com/bryanbeltran/govdatahub',
    status: 'Paused',
  },
]

export default projectsData
