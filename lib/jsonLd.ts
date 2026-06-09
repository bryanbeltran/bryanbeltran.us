import siteMetadata from '@/data/siteMetadata'

const sameAs = [siteMetadata.github, siteMetadata.linkedin].filter(Boolean)

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteMetadata.author,
    url: siteMetadata.siteUrl,
    email: siteMetadata.email,
    jobTitle: 'Backend Software Engineer',
    worksFor: { '@type': 'Organization', name: 'Chewy' },
    sameAs,
  }
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteMetadata.title,
    url: siteMetadata.siteUrl,
    description: siteMetadata.description,
    author: { '@type': 'Person', name: siteMetadata.author, url: siteMetadata.siteUrl },
  }
}

export function profilePageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: siteMetadata.author,
      url: `${siteMetadata.siteUrl}/about`,
      email: siteMetadata.email,
      jobTitle: 'Backend Software Engineer',
      worksFor: { '@type': 'Organization', name: 'Chewy' },
      sameAs,
    },
  }
}
