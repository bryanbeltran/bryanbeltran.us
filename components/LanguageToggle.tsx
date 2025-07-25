'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageToggle() {
  const pathname = usePathname()
  const isSpanish = pathname.startsWith('/translation/es')

  const altPath = isSpanish
    ? pathname.replace('/translation/es', '/translation')
    : pathname.replace('/translation', '/translation/es')

  return (
    <Link
      href={altPath}
      className="absolute top-4 right-4 text-sm text-blue-600 hover:underline"
      aria-label={`Switch to ${isSpanish ? 'English' : 'Spanish'}`}
    >
      {isSpanish ? 'View in English' : 'Ver en Español'}
    </Link>
  )
}
