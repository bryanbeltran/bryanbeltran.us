import { genPageMetadata } from 'app/seo'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

export const metadata: Metadata = genPageMetadata({ title: 'Contact | Bryan Beltran' })

export default function Contact() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-gray-100">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Let's build something impactful together. I specialize in backend development, but I am
          always open to opportunities learn something new or to collaborate on projects that are
          meaningful and impactful.
        </p>
      </div>

      <div className="pt-8">
        <div className="mb-6 flex flex-col items-start space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4">
          <a
            href={`mailto:${siteMetadata.email}`}
            className="bg-primary-600 hover:bg-primary-700 focus:ring-primary-400 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus:ring-primary-300 inline-block rounded px-5 py-2 font-semibold text-white shadow transition focus:ring-2 focus:ring-offset-2 focus:outline-none"
            aria-label="Email Bryan Beltran"
          >
            Email Me
          </a>
          <a
            href={siteMetadata.linkedin}
            className="inline-block rounded border border-gray-300 px-5 py-2 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
          >
            Connect on LinkedIn
          </a>
          <a
            href={siteMetadata.github}
            className="inline-block rounded border border-gray-300 px-5 py-2 font-semibold text-gray-700 transition hover:bg-gray-100 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View GitHub Profile"
          >
            View GitHub
          </a>
        </div>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          I typically respond within 24 hours. Email is best for project inquiries.
          <br />
          References available upon request.
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Your information will never be shared.
        </p>
      </div>
    </div>
  )
}
