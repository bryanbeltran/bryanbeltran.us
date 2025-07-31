import { Card, CardContent, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl space-y-24 px-4 py-12">
      {/* Hero Section */}
      <section className="mx-auto max-w-xl scroll-mt-20 space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Bryan Beltran</h1>
        <p className="text-muted-foreground text-base leading-relaxed text-balance">
          Backend Engineer & Translator — building tools for focus, planning, and local impact.
        </p>
      </section>

      {/* About Preview */}
      <section className="scroll-mt-20 space-y-2 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="text-muted-foreground leading-relaxed text-balance">
          I’m a backend software engineer with 7 years of experience in Customer Care tech. I build
          tools that improve workflows and user experience — and I run a side business offering
          Spanish-English translation for schools and clinics. Most of my personal projects are
          currently in development.
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
            <CardContent className="space-y-2 p-4">
              <CardTitle className="leading-snug">SeedStarter</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                A USDA zone-aware garden planner with frost date mapping.
              </p>
              <p className="text-muted-foreground text-xs">In development – GitHub only</p>
              <Link
                href="https://github.com/bbeltran/seedstarter"
                className="text-primary text-sm hover:underline"
              >
                View on GitHub
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-muted/40 ring-border hover:ring-primary rounded-xl shadow-sm ring-1 transition hover:ring-2">
            <CardContent className="space-y-2 p-4">
              <CardTitle className="leading-snug">ZipperMerge Simulator</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                Simulates traffic flow with zipper merging and roundabout behavior.
              </p>
              <p className="text-muted-foreground text-xs">In development – GitHub only</p>
              <Link
                href="https://github.com/bbeltran/zippermerge"
                className="text-primary text-sm hover:underline"
              >
                View on GitHub
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-muted/40 ring-border hover:ring-primary rounded-xl shadow-sm ring-1 transition hover:ring-2">
            <CardContent className="space-y-2 p-4">
              <CardTitle className="leading-snug">Mitten Index</CardTitle>
              <p className="text-muted-foreground text-sm leading-relaxed text-balance">
                A cold-weather comfort score based on local weather and wind chill.
              </p>
              <p className="text-muted-foreground text-xs">In development – GitHub only</p>
              <Link
                href="https://github.com/bbeltran/mitten-index"
                className="text-primary text-sm hover:underline"
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

      {/* Translation Services Preview */}
      <section className="bg-muted/60 mt-4 scroll-mt-20 space-y-2 rounded-xl p-6">
        <h2 className="text-2xl font-semibold tracking-tight">🌐 Translation Services</h2>
        <p className="text-muted-foreground leading-relaxed text-balance">
          Need Spanish-English translation? I offer fast, affordable, culturally fluent services for
          Minnesota schools, clinics, and nonprofits.
        </p>
        <Link
          href="/translation"
          className="text-primary font-medium underline underline-offset-4 hover:opacity-90"
        >
          Explore Services →
        </Link>
      </section>

      {/* Blog Teaser */}
      <section className="scroll-mt-20 space-y-4 pt-8">
        <h2 className="text-2xl font-semibold tracking-tight">From the Blog</h2>
        <p className="text-muted-foreground leading-relaxed text-balance">
          Notes on tools I’m building, translating, and exploring. Posts coming soon.
        </p>

        <div className="space-y-2">
          <div>
            <h3 className="text-lg font-medium">
              <Link
                href="/blog/building-a-translation-service"
                className="text-primary underline underline-offset-4 hover:opacity-90"
              >
                Building a One-Person Translation Service
              </Link>
            </h3>
            <p className="text-muted-foreground text-sm text-balance">
              How I set up my translation side business with modern tools and minimal overhead.
            </p>
          </div>
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
          <Link href="mailto:bryan@bryanbeltran.us" className="hover:underline">
            Email
          </Link>
          <Link href="https://github.com/bbeltran" className="hover:underline">
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
