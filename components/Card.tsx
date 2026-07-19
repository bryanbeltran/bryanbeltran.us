import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  href?: string
  repoHref?: string
  imgSrc?: string
  status?: string // Added status prop
}

const Card = ({ title, description, imgSrc, href, repoHref, status }: CardProps) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-md border-2 border-gray-200/60 dark:border-gray-700/60`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
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
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {status && (
          <div className="text-primary-500 dark:text-primary-400 mb-2 text-sm font-semibold">
            {status}
          </div>
        )}
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {(href || repoHref) && (
          <div className="flex flex-wrap gap-x-4 gap-y-1">
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
                GitHub &rarr;
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
)

export default Card
