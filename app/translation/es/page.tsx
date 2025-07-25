import { Metadata } from 'next'
import Head from 'next/head'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import LanguageToggle from '@/components/LanguageToggle'

export const metadata: Metadata = {
  title:
    'Traducción Español ↔ Inglés para Organizaciones de Minnesota | Fluidez Nativa y Precios Claros',
  description:
    'Servicios de traducción Español ↔ Inglés rápidos y accesibles para organizaciones en Minnesota. Fluidez nativa. Precios claros para escuelas, clínicas y organizaciones sin fines de lucro.',
  openGraph: {
    title:
      'Traducción Español ↔ Inglés para Organizaciones de Minnesota | Fluidez Nativa y Precios Claros',
    description:
      'Traducciones con fluidez cultural para manuales de RRHH, contenido de marketing y comunicaciones escolares. Fluidez nativa. Precios claros. Con base en las Ciudades Gemelas.',
    url: 'https://bryanbeltran.us/translation',
    siteName: 'bryanbeltran.us',
    images: [
      {
        url: 'https://bryanbeltran.us/static/images/translation-og.png',
        width: 1200,
        height: 630,
        alt: 'Traductor Español ↔ Inglés en Minnesota – Servicios Bilingües para Escuelas y Negocios',
      },
    ],
    locale: 'es_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traducción Español ↔ Inglés – Fluidez Nativa para Organizaciones de Minnesota',
    description:
      'Traducción rápida y precisa para escuelas, clínicas y empresas en Minnesota. Fluidez nativa. Precios claros y entrega profesional.',
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
              name: 'Traducción Bryan Beltran',
              image: 'https://bryanbeltran.us/static/images/translation-og.png',
              url: 'https://bryanbeltran.us/translation',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ciudades Gemelas',
                addressRegion: 'MN',
                addressCountry: 'US',
              },
              areaServed: 'US',
              description:
                'Servicios de traducción Español ↔ Inglés rápidos y accesibles para escuelas, clínicas y pequeñas empresas en Minnesota. Fluidez nativa. Precios claros.',
              serviceType: 'Traducción',
              availableLanguage: ['Español', 'Inglés'],
              priceRange: '$75–$900',
              priceCurrency: 'USD',
              email: 'bryan.beltran@mnsu.edu',
            }),
          }}
        />
      </Head>

      <PageTitle>Servicios de Traducción Español ↔ Inglés</PageTitle>
      <p className="mt-2 text-base text-gray-600">
        Traducción rápida y asequible para escuelas, clínicas y empresas en Minnesota. Fluidez
        nativa. Precios claros. Entrega rápida.
      </p>

      <div className="mt-8 space-y-12 text-lg leading-relaxed">
        <section>
          <h2 className="mb-2 text-2xl font-semibold">Servicios</h2>
          <p className="mb-4">
            Precios transparentes para traducciones escritas de alta calidad. Las tarifas estándar
            se aplican a la mayoría de los proyectos. Para contenido sensible o altamente matizado,
            hay una opción premium que no utiliza herramientas de IA en ninguna etapa del proceso.
          </p>
          <p className="mb-6 text-sm text-gray-600 italic">
            Escuelas públicas K–12, organizaciones sin fines de lucro 501(c)(3), y clínicas
            comunitarias reciben un 10% de descuento en todos los servicios.
          </p>
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold">Servicio el Mismo Día</dt>
              <dd className="ml-4">Hasta 800 palabras – $75 tarifa fija</dd>
            </div>
            <div>
              <dt className="font-semibold">Paquete Inicial</dt>
              <dd className="ml-4">
                Hasta 2,500 palabras de contenido de marketing (ej. página principal, volantes,
                correos, menús) – $250 tarifa fija
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Retención Mensual</dt>
              <dd className="ml-4">Hasta 5,000 palabras/mes – $500</dd>
            </div>
            <div>
              <dt className="font-semibold">Paquete Web</dt>
              <dd className="ml-4">Hasta 10 páginas totalmente localizadas – $600–$900</dd>
            </div>
            <div>
              <dt className="font-semibold">Documentos Profesionales</dt>
              <dd className="ml-4">
                Manuales de RRHH, políticas internas y documentos legales – $0.15–$0.22/palabra
                (mínimo $200)
              </dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Proyectos Comunes</h2>
          <ul className="list-inside list-disc space-y-1">
            <li>Cartas para padres, boletines y anuncios escolares</li>
            <li>Manuales de RRHH, paquetes de orientación y señalización laboral</li>
            <li>Formularios clínicos, instrucciones para pacientes y materiales informativos</li>
            <li>Menús, volantes, publicaciones en redes sociales y materiales para eventos</li>
            <li>Contenido web, preguntas frecuentes y formularios de solicitud</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Cómo Funciona</h2>
          <p>
            Usted envía sus documentos o enlaces junto con su preferencia de entrega y nivel de
            servicio. Confirmo disponibilidad o sugiero una alternativa. Una vez confirmado,
            traduzco y adapto su contenido según el público, tono e intención. Algunas traducciones
            pueden usar herramientas de IA para el borrador inicial, a menos que se indique lo
            contrario. Usted recibirá un documento limpio, listo para usar en español, inglés o
            ambos. Cada proyecto incluye una ronda de revisiones.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Preguntas Frecuentes</h2>

          <details className="mb-4">
            <summary className="mb-4 cursor-pointer font-medium">
              ¿Ofrece traducción certificada o notariada?
            </summary>
            <p className="mb-4">
              Por el momento no. Me enfoco en traducción escrita para uso interno y público. Si su
              documento requiere certificación o notarización, puedo referirle a alguien que lo
              ofrezca.
            </p>
          </details>

          <details className="mb-4">
            <summary className="mb-4 cursor-pointer font-medium">
              ¿Puede traducir PDFs escaneados o fotos?
            </summary>
            <p className="mb-4">
              Sí. Puedo trabajar con la mayoría de los formatos de archivo, incluyendo documentos
              escaneados, capturas de pantalla e imágenes. Si el archivo es especialmente complejo,
              confirmaré la entrega y el precio después de revisarlo.
            </p>
          </details>

          <details className="mb-4">
            <summary className="mb-4 cursor-pointer font-medium">
              ¿Ofrece servicios de interpretación?
            </summary>
            <p className="mb-4">No. Me especializo únicamente en traducción escrita.</p>
          </details>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Sobre el Traductor</h2>
          <p>
            Soy desarrollador de software y traductor bilingüe, con fluidez nativa en inglés y
            español. Trabajo entre idiomas desde hace más de una década, comenzando como adolescente
            al interpretar para mi familia y comunidad en clínicas, escuelas y juzgados.
          </p>
          <p className="mt-4">
            Actualmente me dedico exclusivamente a la traducción escrita. Ayudo a organizaciones a
            producir documentos precisos y culturalmente apropiados de forma rápida y profesional.
            No ofrezco interpretación, pero me especializo en traducción receptiva y de alta
            calidad.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-2xl font-semibold">Contacto</h2>
          <p className="mb-4">
            ¿Tiene un documento en mente? Ofrezco traducciones de muestra gratis (hasta 100
            palabras) y cotizaciones rápidas.
          </p>
          <a
            href="mailto:bryan.beltran@mnsu.edu?subject=Solicitud%20de%20Traducción"
            className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            aria-label="Solicite una cotización de traducción por correo electrónico"
          >
            Solicitar Cotización
          </a>
        </section>
      </div>
    </SectionContainer>
  )
}
