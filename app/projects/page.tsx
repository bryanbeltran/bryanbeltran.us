import {
  flagshipProjects,
  formatProjectStatus,
  otherProjects,
  selectedProjects,
  type Project,
} from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'

const projectsTitle = 'Selected Engineering Projects — Bryan Beltrán'
const projectsDescription =
  'Selected engineering work in public data, climate data, platform tooling, browser automation, and developer utilities by Bryan Beltrán.'

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

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Card
      title={project.title}
      description={project.description}
      href={project.href}
      repoHref={project.repoHref}
      detailsHref={project.detailsHref}
      highlights={project.highlights}
      featured={featured}
      headingLevel="h3"
      status={formatProjectStatus(project.status)}
    />
  )
}

export default function Projects() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          One flagship project, selected engineering work, and smaller experiments.
        </p>
      </div>

      <div className="container space-y-12 py-12">
        <section aria-labelledby="flagship-project">
          <h2 id="flagship-project" className="mb-4 text-2xl font-bold tracking-tight">
            Flagship Project
          </h2>
          <div className="grid">
            {flagshipProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
        </section>

        <section aria-labelledby="selected-projects">
          <h2 id="selected-projects" className="mb-4 text-2xl font-bold tracking-tight">
            Selected Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section aria-labelledby="other-experiments">
          <h2 id="other-experiments" className="mb-4 text-2xl font-bold tracking-tight">
            Other Experiments
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
