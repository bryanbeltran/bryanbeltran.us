# Bryan Beltrán's Personal Blog & Portfolio

> **Forked from** [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

This is my customized fork of **timlrx/tailwind-nextjs-starter-blog**, now tailored as my own personal website, blog, and developer portfolio.  
Built with Next.js 15's App Router, Tailwind CSS, MDX, and Contentlayer, it features:

- **MDX-powered blog** with syntax highlighting, math support, and custom components
- **Light & dark themes**, auto-detected or user-selectable
- **Server Components** & **Incremental Static Regeneration** for top performance
- **Simple content management** via Markdown/MDX files under `data/blog/`
- **Projects showcase** powered by a data file at `data/projectsData.ts`
- **Author profile** configured in `data/authors/default.mdx`
- **Custom navigation** in `data/headerNavLinks.ts`
- **SEO-ready** with RSS feed, sitemap, and built-in metadata helpers
- **Optional integrations**: comments (Giscus), newsletter (Buttondown), search (Kbar)
- **Analytics**: [Vercel Analytics](https://vercel.com/docs/analytics) (built-in, no env vars)

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
    'Portfolio, resume, and writing by Bryan Beltrán. Backend engineer building tools, side projects, and technical notes.',
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
  status?: 'In Progress' | 'Launched' | 'Paused'
}

const projectsData: Project[] = [
  {
    title: 'SeedStarter',
    description:
      'A garden planning tool that shows ideal planting windows based on your USDA zone and frost data.',
    href: 'https://github.com/bryanbeltran/seed-starter',
    status: 'In Progress',
  },
  {
    title: 'The Gathering Project',
    description: 'Website for a nonprofit organization. Built with Next.js and hosted on Vercel.',
    href: 'https://github.com/bryanbeltran/thegatheringproject.us',
    status: 'Launched',
  },
  {
    title: 'Mitten Index',
    description:
      'A cold-weather readiness score that combines forecast data with heuristics to help you decide how bundled up to get.',
    href: 'https://github.com/bryanbeltran/mitten-index',
    status: 'In Progress',
  },
]

export default projectsData
```

### Author Profile

Edit `data/authors/default.mdx`:

```md
---
name: 'Bryan Beltrán'
avatar: '/static/images/avatar.png'
occupation: 'Software Developer'
company: 'Chewy.com'
email: 'bryan.beltran@mnsu.edu'
github: 'bryanbeltran'
linkedin: 'bryan-beltran'
---

I'm a backend software developer building systems that support large-scale customer care operations.
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
