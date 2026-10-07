/** @type {import('pliny/comments').GiscusConfig['giscusConfig']} */
const giscusConfig = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
  repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
  mapping: 'pathname',
  reactions: '1',
  metadata: '0',
  theme: 'light',
  darkTheme: 'transparent_dark',
  themeURL: '',
  lang: 'en',
}

const hasGiscusConfig = [
  giscusConfig.repo,
  giscusConfig.repositoryId,
  giscusConfig.category,
  giscusConfig.categoryId,
].every(Boolean)

/** @type {import('pliny/comments').CommentsConfig | undefined} */
const comments = hasGiscusConfig ? { provider: 'giscus', giscusConfig } : undefined

/** @type {import('pliny/config').PlinyConfig } */
const siteMetadata = {
  title: 'bryanbeltran.us',
  author: 'Bryan Beltrán',
  headerTitle: 'bryanbeltran.us',
  description:
    'Software Engineer II at Chewy building event-driven customer-care systems, observability tooling, and developer utilities.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://bryanbeltran.us',
  siteRepo: 'https://github.com/bryanbeltran/bryanbeltran.us',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: '',
  email: 'bryan.beltran@mnsu.edu',
  github: 'https://github.com/bryanbeltran',
  facebook: '',
  youtube: '',
  linkedin: 'https://www.linkedin.com/in/bryan-beltran',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  locale: 'en-US',
  stickyNav: false,
  // Newsletter disabled by default. On Vercel, set provider (e.g. 'buttondown') and restore app/api/newsletter/route.ts.
  newsletter: {
    provider: '',
  },
  comments,
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
