Here is the **corrected version** of your README. The issue was with the extra set of backticks in the line:

``````markdown
`````bash
git clone ...
```` ← ❌ too many backticks
`````
``````

You should use **three backticks** consistently. Here's the fully fixed and copy-paste–ready version:

````markdown
# Bryan Beltran’s Personal Blog & Portfolio

> **Forked from** [timlrx/tailwind-nextjs-starter-blog](https://github.com/timlrx/tailwind-nextjs-starter-blog)

This is my customized fork of **timlrx/tailwind-nextjs-starter-blog**, now tailored as my own personal website, blog, and developer portfolio.  
Built with Next.js 15’s App Router, Tailwind CSS, MDX, and Contentlayer, it features:

- **MDX-powered blog** with syntax highlighting, math support, and custom components
- **Light & dark themes**, auto-detected or user-selectable
- **Server Components** & **Incremental Static Regeneration** for top performance
- **Simple content management** via Markdown/MDX files under `content/blog/`
- **Projects showcase** powered by a data file at `data/projectsData.ts`
- **Author profile** configured in `data/authors/default.md`
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
````

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
   - Add blog posts as `.mdx` files under `content/blog/`
   - Update projects in `data/projectsData.ts`
   - Personalize site metadata in `data/siteMetadata.ts`
   - Configure author info in `data/authors/default.md`

---

## Configuration

### Site Metadata

Edit `data/siteMetadata.ts`:

```ts
export const siteMetadata = {
  title: 'Bryan Beltran',
  description: 'Software developer blog & portfolio',
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
}

const projectsData: Project[] = [
  {
    title: 'SeedStarter',
    description: 'A hyperlocal garden scheduler based on USDA zones and frost dates.',
    href: 'https://github.com/bryanbeltran/seedstarter',
  },
  {
    title: 'ZipperMerge & Roundabout Simulator',
    description: 'Backend simulation of traffic flow, modeling zipper merges and roundabouts.',
    href: 'https://github.com/bryanbeltran/zipper-merge-simulator',
  },
  {
    title: 'Mitten Index',
    description:
      'A cold-weather scoring app using local weather heuristics to recommend outdoor activity readiness.',
    href: 'https://github.com/bryanbeltran/mitten-index',
  },
]

export default projectsData
```

### Author Profile

Edit `data/authors/default.md`:

```md
---
name: 'Bryan Beltran'
avatar: '/static/images/avatar.png'
occupation: 'Backend Software Developer'
company: 'My Company'
email: 'bryan.beltran@mnsu.edu'
github: 'bryanbeltran'
linkedin: 'bryan-beltran'
---

A full-stack dev focused on building tools for educators and data-driven applications.
```

---

## Deployment

When you’re ready:

1. Set your production `siteUrl` in `data/siteMetadata.ts`
2. Push your changes to GitHub
3. Connect your repo to Vercel (or Netlify/GitHub Pages)
4. Configure environment variables (for analytics, comments, newsletters, etc.)
5. Trigger a deploy — your site will be live at your custom domain

---

## Folder Structure

```
├── app/                  # Next.js App Router pages & layouts
├── components/           # Reusable React components
├── content/              # MDX blog posts
│   └── blog/
├── data/                 # Site data: metadata, authors, nav links, projects
├── public/               # Static assets: images, favicons
├── styles/               # Tailwind & CSS configs
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

```

```

```

```
