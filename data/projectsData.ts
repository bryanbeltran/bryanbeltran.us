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
    title: 'GovDataHub',
    description:
      'A project for collecting, organizing, and exploring government data in one place.',
    href: 'https://github.com/bryanbeltran/govdatahub',
    status: 'In Progress',
  },
  {
    title: 'Browser Listener',
    description:
      'A browser listener utility for observing page activity and experimenting with browser events.',
    href: 'https://github.com/bryanbeltran/browser-listener',
    status: 'In Progress',
  },
  {
    title: 'The Gathering Project',
    description: 'Website for a nonprofit organization. Built with Next.js and hosted on Vercel.',
    href: 'https://github.com/bryanbeltran/thegatheringproject.us',
    status: 'Launched',
  },
]

export default projectsData
