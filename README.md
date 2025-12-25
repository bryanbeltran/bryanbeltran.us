# Bryan Beltran's Personal Blog & Portfolio

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
- **Optional integrations**: analytics (Umami, Plausible, GA), comments (Giscus, Disqus), newsletter (Mailchimp, Beehiiv), search (Kbar, Algolia)

---

## Quick Start

1. **Clone your fork**

   ```bash
   git clone https://github.com/bryanbeltran/bryanbeltran.us.git
   cd bryanbeltran.us
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
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
  description: 'Personal blog, dev portfolio, and tool-building lab by Bryan Beltran.',
  siteUrl: 'https://bryanbeltran.us',
  author: 'Bryan Beltran',
  // ...social links, analytics, comment, newsletter config
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
name: 'Bryan Beltran'
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
# Analytics (optional)
NEXT_UMAMI_ID=your_umami_website_id

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

When you're ready:

1. Set your production `siteUrl` in `data/siteMetadata.js`
2. Push your changes to GitHub
3. Connect your repo to Vercel (or Netlify/GitHub Pages)
4. Configure environment variables (for analytics, comments, newsletters, etc.)
5. Trigger a deploy — your site will be live at your custom domain

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

MIT © Bryan Beltran  
Original work © Timothy Lin (timlrx) under MIT license.

---

> Crafted with ❤ by Bryan Beltran. Feel free to explore the code, contribute, or get in touch!
