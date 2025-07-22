/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'bryanbeltran.us',
  author: 'Bryan Beltran',
  headerTitle: 'bryanbeltran.us',
  description: 'Personal blog, dev portfolio, and tool-building lab by Bryan Beltran.',
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
  analytics: {
    umamiAnalytics: {
      umamiWebsiteId: process.env.NEXT_UMAMI_ID,
    },
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
