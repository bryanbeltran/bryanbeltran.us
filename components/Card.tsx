import Image from './Image'
import Link from './Link'
import { cn } from './lib/utils'

interface CardProps {
  title: string
  description: string
  href?: string
  repoHref?: string
  detailsHref?: string
  imgSrc?: string
  status?: string
  highlights?: string[]
  featured?: boolean
  headingLevel?: 'h2' | 'h3'
}

const Card = ({
  title,
  description,
  imgSrc,
  href,
  repoHref,
  detailsHref,
  status,
  highlights,
  featured = false,
  headingLevel = 'h2',
}: CardProps) => {
  const Heading = headingLevel

  return (
    <article
      className={cn(
        'h-full overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60',
        featured && 'border-primary-500/70 shadow-sm'
      )}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`} className="block">
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        {featured && (
          <p className="text-primary-600 dark:text-primary-400 mb-2 text-xs font-semibold tracking-wide uppercase">
            Flagship Project
          </p>
        )}
        <Heading className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="hover:text-primary-500 dark:hover:text-primary-400"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </Heading>
        {status && (
          <span className="text-primary-500 dark:text-primary-400 mb-2 block text-sm font-semibold">
            {status}
          </span>
        )}
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-gray-700 dark:text-gray-300">
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
        {(href || repoHref || detailsHref) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {detailsHref && (
              <Link
                href={detailsHref}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                aria-label={`Read case study for ${title}`}
              >
                Case Study &rarr;
              </Link>
            )}
            {href && (
              <Link
                href={href}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                aria-label={`${repoHref ? 'Live demo for' : 'Link to'} ${title}`}
              >
                {repoHref ? 'Live demo' : 'Learn more'} &rarr;
              </Link>
            )}
            {repoHref && (
              <Link
                href={repoHref}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                aria-label={`GitHub repo for ${title}`}
              >
                GitHub Repo &rarr;
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default Card
