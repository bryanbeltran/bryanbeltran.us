import { Metadata } from 'next'
import Head from 'next/head'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import LanguageToggle from '@/components/LanguageToggle'

export const metadata: Metadata = {
  title: 'Spanish ↔ English Translation for Minnesota Orgs | Native Fluency & Clear Pricing',
  description:
    'Fast, affordable Spanish ↔ English translation for Minnesota organizations. Native fluency. Clear pricing for schools, clinics, and nonprofits.',
  openGraph: {
    title:
      'Spanish ↔ English Translation for Minnesota Organizations | Native Fluency & Clear Pricing',
    description:
      'Culturally fluent Spanish translation services for HR manuals, marketing content, and school communications. Native fluency. Clear pricing. Based in the Twin Cities.',
    url: 'https://bryanbeltran.us/translation',
    siteName: 'bryanbeltran.us',
    images: [
      {
        url: 'https://bryanbeltran.us/static/images/translation-og.png',
        width: 1200,
        height: 630,
        alt: 'Spanish ↔ English Translator in Minnesota – Bilingual Services for Schools & Businesses',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spanish ↔ English Translation – Native Fluency for Minnesota Orgs',
    description:
      'Fast, accurate translation for Minnesota schools, clinics, and businesses. Native fluency. Clear pricing and professional turnaround.',
    images: ['https://bryanbeltran.us/static/images/translation-og.png'],
    creator: '@yourhandle',
  },
}

export default function TranslationPage() {
  return (
    <SectionContainer>
      <LanguageToggle />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Bryan Beltran Translation',
              image: 'https://bryanbeltran.us/static/images/translation-og.png',
              url: 'https://bryanbeltran.us/translation',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Twin Cities',
                addressRegion: 'MN',
                addressCountry: 'US',
              },
              areaServed: 'US',
              description:
                'Affordable, fast Spanish ↔ English translation services for Minnesota schools, clinics, and small businesses. Native fluency. Clear pricing.',
              serviceType: 'Translation',
              availableLanguage: ['English', 'Spanish'],
              priceRange: '$75–$900',
              priceCurrency: 'USD',
              email: 'bryan.beltran@mnsu.edu',
            }),
          }}
        />
      </Head>

      <PageTitle>Spanish ↔ English Translation Services</PageTitle>
      <p className="mt-2 text-base text-gray-600">
        Fast, affordable translation for schools, clinics, and businesses in Minnesota. Native
        fluency. Clear pricing. Quick turnaround.
      </p>

      <div className="mt-8 space-y-12 text-lg leading-relaxed">
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Services</h2>
          <p className="mb-4">
            Transparent pricing for high-quality written translation. Standard rates apply to most
            projects. For sensitive or highly nuanced content, a premium option is available that
            does not use AI at any stage of the translation process.
          </p>
          <p className="mb-6 text-sm text-gray-600 italic">
            K–12 public schools, 501(c)(3) nonprofits, and community clinics receive 10% off all
            translation services.
          </p>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold">Same-Day Service</dt>
              <dd className="ml-4">Up to 800 words – $75 flat</dd>
            </div>
            <div>
              <dt className="font-semibold">Starter Pack</dt>
              <dd className="ml-4">
                Up to 2,500 words of marketing content (e.g., homepage, flyers, emails, menus) –
                $250 flat
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Monthly Retainer</dt>
              <dd className="ml-4">Up to 5,000 words/month – $500</dd>
            </div>
            <div>
              <dt className="font-semibold">Website Package</dt>
              <dd className="ml-4">Up to 10 fully localized pages – $600–$900</dd>
            </div>
            <div>
              <dt className="font-semibold">Professional Documents</dt>
              <dd className="ml-4">
                HR manuals, internal policies, and legal documents – $0.15–$0.22/word (minimum $200)
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Common Projects</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>Parent letters, newsletters, and school announcements</li>
            <li>HR manuals, onboarding packets, and workplace signage</li>
            <li>Clinic forms, patient instructions, and outreach materials</li>
            <li>Menus, flyers, social media posts, and event handouts</li>
            <li>Website content, FAQs, and application forms</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">How It Works</h2>
          <p>
            You send your documents or links along with your preferred turnaround and service tier.
            I’ll confirm availability or suggest an alternative. Once confirmed, I translate and
            adapt your content to match audience, tone, and intent. Some translations may use AI
            tools for initial drafting, unless otherwise requested or required by the content.
            You’ll receive a clean, ready-to-use document in English, Spanish, or both. Every
            project includes one round of revisions.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Frequently Asked Questions</h2>

          <details className="mb-4">
            <summary className="mb-4 cursor-pointer font-medium">
              Do you offer certified or notarized translation?
            </summary>
            <p className="mb-4">
              Not currently. I focus on written translation for internal and public-facing use. If
              your document requires certification or notarization, I can help refer you to someone
              who offers it.
            </p>
          </details>

          <details className="mb-4">
            <summary className="mb-4 cursor-pointer font-medium">
              Can you translate scanned PDFs or photos?
            </summary>
            <p className="mb-4">
              Yes. I can work from most file types including scanned documents, screenshots, and
              images. If the file is especially complex, I’ll confirm turnaround and pricing after
              review.
            </p>
          </details>

          <details className="mb-4">
            <summary className="mb-4 cursor-pointer font-medium">
              Do you offer interpretation?
            </summary>
            <p className="mb-4">No. I specialize in written translation only.</p>
          </details>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">About the Translator</h2>
          <p>
            I’m a bilingual software developer and translator with native fluency in both English
            and Spanish. I’ve worked across languages for over a decade, starting as a teen
            interpreting for family and community members in clinics, schools, and courtrooms.
          </p>
          <p className="mt-4">
            Today, I focus exclusively on written translation. I help organizations produce
            accurate, culturally fluent documents—quickly and professionally. I don’t offer
            interpretation, but I specialize in responsive, high-quality translation of written
            content.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Contact</h2>
          <p className="mb-4">
            Have a document in mind? I offer free sample translations (up to 100 words) and fast
            quotes.
          </p>
          <a
            href="mailto:bryan.beltran@mnsu.edu?subject=Translation%20Request"
            className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            aria-label="Request a translation quote via email"
          >
            Request a Quote
          </a>
        </section>
      </div>
    </SectionContainer>
  )
}
