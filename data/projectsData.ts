interface Project {
  title: string
  description: string
  href?: string
}

const projectsData: Project[] = [
  {
    title: 'SeedStarter',
    description:
      'A hyperlocal garden scheduler that helps plan planting dates based on USDA zone and frost data.',
    href: 'https://github.com/bryanbeltran/seed-starter',
  },
  {
    title: 'TrafficSim',
    description:
      'A backend simulation engine that models zipper merges and roundabout behavior to study traffic flow efficiency.',
    href: 'https://github.com/bryanbeltran/traffic-sim', // placeholder, you can rename the repo if you want
  },
  {
    title: 'Mitten Index',
    description:
      'A cold-weather scoring app that combines local weather data and heuristics to rate outdoor readiness.',
    href: 'https://github.com/bryanbeltran/mitten-index', // placeholder, ready to use
  },
]

export default projectsData
