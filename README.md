# Bryan Beltrán — Software Engineering Portfolio

Personal site, engineering portfolio, and technical notes for Bryan Beltrán, Software Engineer II at Chewy.

[Live site](https://bryanbeltran.us) · [Site CI](https://github.com/bryanbeltran/bryanbeltran.us/actions/workflows/ci.yml) · [CodeQL](https://github.com/bryanbeltran/bryanbeltran.us/actions/workflows/codeql.yml)

Built with Next.js 15 App Router, TypeScript, Tailwind CSS, MDX, and Contentlayer. This repository demonstrates:

- Static rendering with production metadata, sitemap, RSS, JSON-LD, and security headers
- CI validation with ESLint, Vitest, dependency audit gates, and CodeQL
- Technical writing and curated project evidence instead of a generic project gallery

## Selected work

- [SeedStarter](https://github.com/bryanbeltran/seed-starter) — climate-backed planting planner with production evaluation gates, OpenAPI docs, and a live demo
- [Browser Listener](https://github.com/bryanbeltran/browser-listener) — privacy-first Chrome MV3 capture and local export pipeline
- [Wiggum](https://github.com/bryanbeltran/wiggum) — auditable Python harness for isolated, validated software iteration

The site started from [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog); original attribution and license remain intact.

---

## Quick Start

1. **Clone your fork**

   ```bash
   git clone https://github.com/bryanbeltran/bryanbeltran.us.git
   cd bryanbeltran.us
   ```

2. **Install dependencies** (requires [pnpm](https://pnpm.io/) 9 via Corepack)

   ```bash
   corepack enable
   pnpm install --frozen-lockfile
   ```

3. **Run the development server**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view.

4. **Start writing!**
   - Add blog posts as `.mdx` files under `data/blog/`
   - Update projects in `data/projectsData.ts`
   - Personalize site metadata in `data/siteMetadata.js`
   - Configure author info in `data/authors/default.mdx`

---

## Configuration

### Site Metadata

Edit `data/siteMetadata.js`:

```js
const siteMetadata = {
  title: 'bryanbeltran.us',
  description:
    'Software Engineer II at Chewy building event-driven customer-care systems, observability tooling, and developer utilities.',
  siteUrl: 'https://bryanbeltran.us',
  author: 'Bryan Beltrán',
  // ...social links, comment, newsletter config
}
```

### Navigation Links

Edit `data/headerNavLinks.ts`:

```ts
export const headerNavLinks = [
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
]
```

### Projects Showcase

Edit `data/projectsData.ts`:

```ts
interface Project {
  title: string
  description: string
  href?: string
  repoHref?: string
  detailsHref?: string
  tier: 'flagship' | 'selected' | 'other'
  status?: 'In Progress' | 'Launched' | 'Paused'
}

const projectsData: Project[] = [
  {
    title: 'SeedStarter',
    description:
      'Frost-aware garden planner with a live demo — ZIP-based zone lookup, planting timelines, and calendar export.',
    href: 'https://seed-starter.vercel.app',
    repoHref: 'https://github.com/bryanbeltran/seed-starter',
    detailsHref: '/projects/seedstarter',
    tier: 'flagship',
    status: 'Launched',
  },
  {
    title: 'Browser Listener',
    description:
      'Privacy-first MV3 extension for consent-gated, local-only Facebook session capture.',
    href: 'https://github.com/bryanbeltran/browser-listener',
    tier: 'selected',
    status: 'In Progress',
  },
  {
    title: 'Wiggum',
    description: 'Auditable Python harness for isolated, validated software iteration.',
    href: 'https://github.com/bryanbeltran/wiggum',
    tier: 'selected',
    status: 'In Progress',
  },
]

export default projectsData
```

### Verification

```bash
pnpm lint
pnpm test -- --run
pnpm run audit:ci
pnpm build
```

### Author Profile

Edit `data/authors/default.mdx`:

```md
---
name: 'Bryan Beltrán'
avatar: '/static/images/avatar.png'
occupation: 'Software Engineer II'
company: 'Chewy'
email: 'bryan.beltran@mnsu.edu'
github: 'bryanbeltran'
linkedin: 'bryan-beltran'
---

I'm a software engineer building systems that support large-scale customer care operations.
```

---

## Environment Variables

Create a `.env.local` file in the root directory with the following variables (see `.env.example` for reference):

```bash
# Comments - Giscus (optional)
NEXT_PUBLIC_GISCUS_REPO=your_username/your_repo
NEXT_PUBLIC_GISCUS_REPOSITORY_ID=your_repository_id
NEXT_PUBLIC_GISCUS_CATEGORY=your_category
NEXT_PUBLIC_GISCUS_CATEGORY_ID=your_category_id

# Base path (optional, for subdirectory deployments)
BASE_PATH=
```

---

## Deployment

Deploys to **[Vercel](https://vercel.com)** on push to `main`.

1. Import the repo in Vercel (or connect via the GitHub integration)
2. Set **Framework Preset** to Next.js and **Package Manager** to pnpm
3. Build command: `pnpm build` (default)
4. Add environment variables from `.env.example` in the Vercel dashboard
5. Set your custom domain (`bryanbeltran.us`) in Vercel → Project Settings → Domains

**Newsletter:** Disabled by default (`newsletter.provider` is empty). To enable on Vercel, set a provider in `data/siteMetadata.js`, add `BUTTONDOWN_API_KEY` in Vercel env vars, and restore `app/api/newsletter/route.ts`.

**Generated files:** `app/tag-data.json` and `public/search.json` are produced by Contentlayer during `pnpm dev` / `pnpm build` and are not committed.

---

## SEO & Analytics

### Google Search Console

1. Add `https://bryanbeltran.us` at [Google Search Console](https://search.google.com/search-console)
2. Verify via DNS (recommended on Vercel) or HTML tag
3. Submit sitemap: `https://bryanbeltran.us/sitemap.xml`
4. Re-run `/seo-analysis` after data accumulates (~3 days) for query-level recommendations

### Vercel Analytics

Analytics is integrated via `@vercel/analytics` in `app/layout.tsx`. No env vars required.

1. Open your project in the [Vercel dashboard](https://vercel.com)
2. Go to **Analytics** and enable it for the project
3. Deploy to production — page views appear in the Analytics tab

Optional Giscus comment vars are listed in `.env.example`.

---

## Folder Structure

```
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable React components
├── data/                 # Site data: metadata, authors, nav links, projects, blog posts
│   └── blog/             # MDX blog posts
├── public/               # Static assets: images, favicons
├── css/                  # Tailwind & CSS configs
├── contentlayer.config.ts
├── next.config.js
└── README.md
```

---

## License

MIT © Bryan Beltrán  
Original work © Timothy Lin (timlrx) under MIT license.

---

> Crafted with ❤ by Bryan Beltrán. Feel free to explore the code, contribute, or get in touch!
