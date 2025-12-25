import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl space-y-24 px-4 py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-xl scroll-mt-20 space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Bryan Beltran</h1>
        <p className="text-muted-foreground text-base leading-relaxed text-balance">
          Backend Engineer — building tools for personal use.
        </p>
      </section>

      {/* About Preview */}
      <section className="scroll-mt-20 space-y-2 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="text-muted-foreground leading-relaxed text-balance">
          I'm a backend software engineer. I build software that enables great customer experiences
          and performs at scale. My personal projects are currently in development, but each is
          something that fills a need in my life or brings me joy while allowing me to learn.
        </p>
        <Link
          href="/about"
          className="text-primary font-medium underline underline-offset-4 hover:opacity-90"
        >
          More about me →
        </Link>
      </section>

      {/* Projects Section */}
      <section className="scroll-mt-20 space-y-6 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">What I’m Building</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card className="bg-muted/40 ring-border hover:ring-primary rounded-xl shadow-sm ring-1 transition hover:ring-2">
            <CardContent className="flex h-full flex-col space-y-2 p-4">
              <CardTitle className="leading-snug">SeedStarter</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                A garden planning tool that shows ideal planting windows based on your USDA zone and
                frost data. Built for backyard growers who want timing they can trust.
              </p>
              <p className="text-muted-foreground text-xs">In development – GitHub only</p>
              <Link
                href="https://github.com/bryanbeltran/seed-starter"
                className="text-primary mt-auto text-sm hover:underline"
              >
                View on GitHub
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-muted/40 ring-border hover:ring-primary rounded-xl shadow-sm ring-1 transition hover:ring-2">
            <CardContent className="flex h-full flex-col space-y-2 p-4">
              <CardTitle className="leading-snug">The Gathering Project</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                Website for a nonprofit organization built with Next.js.
              </p>
              <p className="text-muted-foreground text-xs">Launched</p>
              <Link
                href="https://github.com/bryanbeltran/thegatheringproject.us"
                className="text-primary mt-auto text-sm hover:underline"
              >
                View on GitHub
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-muted/40 ring-border hover:ring-primary rounded-xl shadow-sm ring-1 transition hover:ring-2">
            <CardContent className="flex h-full flex-col space-y-2 p-4">
              <CardTitle className="leading-snug">Mitten Index</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                A cold-weather readiness score that combines forecast data with heuristics to help
                you decide how bundled up to get.
              </p>
              <p className="text-muted-foreground text-xs">In development – GitHub only</p>
              <Link
                href="https://github.com/bryanbeltran/mitten-index"
                className="text-primary mt-auto text-sm hover:underline"
              >
                View on GitHub
              </Link>
            </CardContent>
          </Card>
        </div>
        <Link
          href="/projects"
          className="text-primary font-medium underline underline-offset-4 hover:opacity-90"
        >
          See all projects →
        </Link>
      </section>

      {/* Blog Teaser */}
      <section className="scroll-mt-20 space-y-4 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">From the Blog</h2>
        <p className="text-muted-foreground leading-relaxed text-balance">
          Notes on tools I'm building and exploring.
        </p>

        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-medium">
              <Link
                href="/blog/seedstarter-garden-planner"
                className="text-primary underline underline-offset-4 hover:opacity-90"
              >
                Planning Gardens with Zone-Aware Scheduling
              </Link>
            </h3>
            <p className="text-muted-foreground text-sm text-balance">
              Behind the scenes of SeedStarter — syncing planting tasks to frost dates with USDA
              zones.
            </p>
          </div>
        </div>

        <Link
          href="/blog"
          className="text-primary font-medium underline underline-offset-4 hover:opacity-90"
        >
          Visit Blog →
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-muted-foreground border-t pt-16 text-center text-sm">
        <p>© {new Date().getFullYear()} Bryan Beltran</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="mailto:bryan.beltran@mnsu.edu" className="hover:underline">
            Email
          </Link>
          <Link href="https://github.com/bryanbeltran" className="hover:underline">
            GitHub
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
      </footer>
    </main>
  )
}
