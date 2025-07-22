import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects | Bryan Beltran' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            My Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A showcase of my side projects and experiments in web development, data visualization,
            and simulation.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map(({ title, description, href }) => (
              <Card key={title} title={title} description={description} href={href} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
