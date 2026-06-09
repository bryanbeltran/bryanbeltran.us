const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://giscus.app;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  media-src 'self' blob: data:;
  connect-src 'self' https://vitals.vercel-insights.com https://giscus.app https://api.github.com;
  font-src 'self';
  frame-src https://giscus.app
`

module.exports = ContentSecurityPolicy.replace(/\n/g, '')
