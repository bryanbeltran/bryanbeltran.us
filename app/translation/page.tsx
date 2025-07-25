import { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'

export const metadata: Metadata = {
  title: 'Translation Services – English ↔ Spanish',
  description:
    'Native bilingual translator for small businesses, schools, clinics, and nonprofits. Affordable, fast, and human-reviewed English ↔ Spanish translation.',
  openGraph: {
    title: 'Translation Services – English ↔ Spanish',
    description:
      'Human-reviewed Spanish ↔ English translation for small businesses, schools, and clinics. Fast turnaround, affordable rates, native fluency.',
    url: 'https://bryanbeltran.us/translation',
    siteName: 'bryanbeltran.us',
    images: [
      {
        url: 'https://bryanbeltran.us/static/images/translation-og.png',
        width: 1200,
        height: 630,
        alt: 'English ↔ Spanish Translation Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Translation Services – English ↔ Spanish',
    description:
      'Fast, bilingual translation with native fluency and human review. Ideal for small businesses, clinics, and nonprofits.',
    images: ['https://bryanbeltran.us/static/images/translation-og.png'],
    creator: '@yourhandle', // Optional: replace or remove
  },
}

export default function TranslationPage() {
  return (
    <SectionContainer>
      <PageTitle>Translation Services – English ↔ Spanish</PageTitle>
      <p className="mt-2 text-base text-gray-600">
        Fast, affordable translation for businesses and organizations. Native fluency.
        Human-reviewed bilingual output.
      </p>

      <div className="mt-8 space-y-12 text-lg leading-relaxed">
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Services</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Same-Day Service:</strong> Up to 800 words – $75 flat
            </li>
            <li>
              <strong>Starter Pack:</strong> 5 marketing pieces (flyer, email, post, menu, bio) –
              $250 flat
            </li>
            <li>
              <strong>Monthly Retainer:</strong> Up to 5,000 words/month – $500
            </li>
            <li>
              <strong>Website Package:</strong> Up to 10 fully localized pages – $600–$900
            </li>
            <li>
              <strong>HR & Internal Docs:</strong> Employee manual + onboarding signage – $850 flat
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">How It Works</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>You send your documents or links</li>
            <li>I generate an AI-assisted translation</li>
            <li>I proofread and localize the output manually</li>
            <li>You receive a clean, client-ready document in English, Spanish, or both</li>
          </ol>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Why Work With Me</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Same-day turnaround available for short content</li>
            <li>Faster and more affordable than agencies</li>
            <li>Human-reviewed for clarity, tone, and cultural accuracy</li>
            <li>Ideal for small businesses, clinics, schools, and nonprofits</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">About the Translator</h2>
          <p>
            I’m a bilingual software developer and translator based in Minnesota, with native
            proficiency in both English and Spanish. I earned a minor in Spanish from Minnesota
            State University, Mankato, and have worked across languages for over a decade. As a
            teen, I often served as an interpreter for family and community members in clinics,
            schools, and courtrooms—experiences that shaped my attention to nuance, clarity, and
            tone.
          </p>
          <p className="mt-4">
            Today, I focus exclusively on written translation. I help businesses, clinics,
            nonprofits, and schools produce accurate, culturally fluent documents—using a workflow
            that blends modern AI tools with careful human proofreading. I do not offer
            interpretation, but I specialize in fast, high-quality translation of text-based
            content.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
          <p className="mb-4">
            Have a document in mind? I offer free sample translations and fast quotes.
          </p>
          <a
            href="mailto:bryan.beltran@mnsu.edu?subject=Translation%20Request"
            className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            Request a Quote
          </a>
        </section>
      </div>
    </SectionContainer>
  )
}
