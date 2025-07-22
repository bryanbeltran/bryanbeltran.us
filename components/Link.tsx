import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'

type CustomLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
  }

const CustomLink = ({ href, children, ...rest }: CustomLinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href} {...rest} className="break-words">
        {children}
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest} className="break-words">
        {children}
      </a>
    )
  }

  return (
    <a href={href} {...rest} className="break-words" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default CustomLink
