import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

const projectsTitle = 'Side Projects — Bryan Beltrán'
const projectsDescription =
  'Side projects in web development, platform tooling, and developer utilities by Bryan Beltrán.'

const base = genPageMetadata({
  title: projectsTitle,
  description: projectsDescription,
})

export const metadata: Metadata = {
  ...base,
  title: { absolute: projectsTitle },
  openGraph: { ...base.openGraph, title: projectsTitle },
  twitter: { ...base.twitter, title: projectsTitle },
}

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Side projects and experiments in web development, platform tooling, and developer
          utilities.
        </p>
      </div>

      <div className="container py-12">
        <div className="-m-4 flex flex-wrap">
          {projectsData.map(({ title, description, href, repoHref, status }) => (
            <Card
              key={title}
              title={title}
              description={description}
              href={href}
              repoHref={repoHref}
              status={status}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
