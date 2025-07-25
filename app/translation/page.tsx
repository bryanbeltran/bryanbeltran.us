import { Metadata } from 'next'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'

export const metadata: Metadata = {
  title: 'Translation Services – English ↔ Spanish',
  description: 'Bilingual translation for businesses using AI and human proofreading.',
}

export default function TranslationPage() {
  return (
    <SectionContainer>
      <PageTitle>Translation Services · Servicios de Traducción</PageTitle>

      <div className="mt-8 grid grid-cols-1 gap-8 text-lg leading-relaxed md:grid-cols-2">
        {/* ENGLISH */}
        <div>
          <h2 className="mb-2 text-2xl font-semibold">📦 Services</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Starter Pack:</strong> 5 marketing assets – $250
            </li>
            <li>
              <strong>Website Package:</strong> Up to 10 pages – $700–$1,200
            </li>
            <li>
              <strong>HR & Internal Docs:</strong> Onboarding kit – $800
            </li>
            <li>
              <strong>Monthly Retainer:</strong> 5,000 words/month – $600
            </li>
          </ul>

          <h2 className="mt-8 mb-2 text-2xl font-semibold">⚙️ How It Works</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>You send your documents or links</li>
            <li>I generate an AI-assisted translation</li>
            <li>I review, proofread, and localize it manually</li>
            <li>You receive a polished bilingual document</li>
          </ol>

          <h2 className="mt-8 mb-2 text-2xl font-semibold">🎯 Why Work With Me?</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Faster and more affordable than agencies</li>
            <li>Human-reviewed for accuracy and tone</li>
            <li>Specialized in community-facing materials</li>
          </ul>

          <h2 className="mt-8 mb-2 text-2xl font-semibold">📩 Let’s Work Together</h2>
          <p>
            Email me at{' '}
            <a href="mailto:bryan@bryanbeltran.us" className="text-blue-600 underline">
              bryan@bryanbeltran.us
            </a>
            <br />
            Ask for a free sample translation or quote.
          </p>
        </div>

        {/* ESPAÑOL */}
        <div>
          <h2 className="mb-2 text-2xl font-semibold">📦 Servicios</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Paquete Inicial:</strong> 5 piezas de marketing – $250
            </li>
            <li>
              <strong>Sitios Web:</strong> Hasta 10 páginas – $700–$1,200
            </li>
            <li>
              <strong>Documentos Internos:</strong> Manual + señalización – $800
            </li>
            <li>
              <strong>Mensualidad:</strong> Hasta 5,000 palabras – $600
            </li>
          </ul>

          <h2 className="mt-8 mb-2 text-2xl font-semibold">⚙️ ¿Cómo Funciona?</h2>
          <ol className="list-inside list-decimal space-y-2">
            <li>Me envías los documentos o enlaces</li>
            <li>Hago una traducción asistida por IA</li>
            <li>Reviso y corrijo manualmente el contenido</li>
            <li>Recibes el documento bilingüe final</li>
          </ol>

          <h2 className="mt-8 mb-2 text-2xl font-semibold">🎯 ¿Por Qué Conmigo?</h2>
          <ul className="list-inside list-disc space-y-2">
            <li>Más rápido y económico que una agencia</li>
            <li>Revisión humana garantiza precisión y tono</li>
            <li>Especialista en materiales comunitarios</li>
          </ul>

          <h2 className="mt-8 mb-2 text-2xl font-semibold">📩 Trabajemos Juntos</h2>
          <p>
            Escríbeme a{' '}
            <a href="mailto:bryan@bryanbeltran.us" className="text-blue-600 underline">
              bryan@bryanbeltran.us
            </a>
            <br />
            Solicita una muestra gratuita o una cotización.
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}
