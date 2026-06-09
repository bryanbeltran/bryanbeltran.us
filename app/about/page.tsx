import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import JsonLd from '@/components/JsonLd'
import { profilePageJsonLd } from '@/lib/jsonLd'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    'About Bryan Beltran — backend software engineer building scalable customer care systems at Chewy and personal tools on the side.',
})

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
