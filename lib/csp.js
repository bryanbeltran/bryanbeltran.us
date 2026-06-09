const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://giscus.app https://analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  media-src 'self' blob: data:;
  connect-src 'self' https://analytics.umami.is https://cloud.umami.is https://giscus.app https://api.github.com;
  font-src 'self';
  frame-src https://giscus.app
`

module.exports = ContentSecurityPolicy.replace(/\n/g, '')
