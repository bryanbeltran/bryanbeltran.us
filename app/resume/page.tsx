import { Metadata } from 'next'
import resumeData from '@/data/resumeData'

export const metadata: Metadata = {
  title: 'Resume | Bryan Beltrán',
  description: 'The resume of Bryan Beltrán, backend software engineer.',
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">{resumeData.name}</h1>
      <p className="text-muted-foreground mb-6 text-lg">{resumeData.title}</p>
      <p className="mb-10 text-sm text-gray-700 dark:text-gray-300">{resumeData.summary}</p>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Skills</h2>
        {Object.entries(resumeData.skills).map(([category, skills], i) => (
          <p key={i} className="mb-1 text-sm text-gray-800 dark:text-gray-200">
            <strong>{category}:</strong> {skills.join(', ')}
          </p>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Experience</h2>
        {resumeData.experience.map((role, idx) => (
          <div key={idx} className="mb-6">
            <div className="flex justify-between">
              <h3 className="font-medium">
                {role.title} — {role.company}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">{role.date}</span>
            </div>
            <p className="text-muted-foreground mb-1 text-sm">{role.location}</p>
            <ul className="mt-2 list-inside list-disc text-sm text-gray-800 dark:text-gray-200">
              {role.bullets.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Projects</h2>
        <p className="text-muted-foreground mb-4 text-sm">
          Personal projects in progress. Details and source code available at{' '}
          <a
            href="https://bryanbeltran.us/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            bryanbeltran.us/projects
          </a>
          .
        </p>
        <ul className="list-inside list-disc text-sm text-gray-800 dark:text-gray-200">
          {resumeData.projects.map((project, i) => (
            <li key={i}>
              <strong>{project.name}</strong> – {project.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Education</h2>
        <div className="text-sm text-gray-800 dark:text-gray-200">
          {resumeData.education.degree}, {resumeData.education.school} —{' '}
          {resumeData.education.location}, {resumeData.education.date}
        </div>
      </section>
    </div>
  )
}
