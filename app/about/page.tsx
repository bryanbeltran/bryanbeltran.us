import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import JsonLd from '@/components/JsonLd'
import { profilePageJsonLd } from '@/lib/jsonLd'

const aboutTitle = 'About Bryan Beltrán — Chewy, Customer Care & Agent Experience'
const aboutDescription =
  "About Bryan Beltrán — software engineer on Chewy's Agent Experience team, building customer care systems for chat, phone, and email."

const base = genPageMetadata({
  title: aboutTitle,
  description: aboutDescription,
})

export const metadata = {
  ...base,
  title: { absolute: aboutTitle },
  openGraph: { ...base.openGraph, title: aboutTitle },
  twitter: { ...base.twitter, title: aboutTitle },
}

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <JsonLd data={profilePageJsonLd()} />
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
