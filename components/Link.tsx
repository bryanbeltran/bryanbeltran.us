import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/components/lib/utils'

type CustomLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
  }

const CustomLink = ({ href, children, className, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')
  const mergedClassName = cn('break-words', className)

  if (isInternalLink) {
    return (
      <Link href={href} className={mergedClassName} {...rest}>
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} className={mergedClassName} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <a href={href} className={mergedClassName} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  )
}

export default CustomLink
