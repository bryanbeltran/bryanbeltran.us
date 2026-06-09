import contentSecurityPolicy from '@/lib/csp'

export default function Head() {
  return <meta httpEquiv="Content-Security-Policy" content={contentSecurityPolicy} />
}
