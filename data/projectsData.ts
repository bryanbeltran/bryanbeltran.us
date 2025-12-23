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
      'A garden planning tool that shows ideal planting windows based on your USDA zone and frost data. Built for backyard growers who want timing they can trust.',
    href: 'https://github.com/bryanbeltran/seed-starter',
    status: 'In Progress',
  },
  {
    title: 'The Gathering Project',
    description: 'Website for a nonprofit organization. Built with Next.js and hosted on Vercel.',
    href: 'https://github.com/bryanbeltran/thegatheringproject.us',
    status: 'Launched',
  },
  {
    title: 'Mitten Index',
    description:
      'A cold-weather readiness score that combines forecast data with heuristics to help you decide how bundled up to get.',
    href: 'https://github.com/bryanbeltran/mitten-index',
    status: 'In Progress',
  },
]

export default projectsData
