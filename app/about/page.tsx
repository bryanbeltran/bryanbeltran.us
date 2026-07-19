import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import JsonLd from '@/components/JsonLd'
import { profilePageJsonLd } from '@/lib/jsonLd'

const aboutTitle = 'About Bryan Beltrán — Backend Engineer at Chewy'
const aboutDescription =
  'About Bryan Beltrán — backend software engineer building scalable customer care systems at Chewy and personal tools on the side.'

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
