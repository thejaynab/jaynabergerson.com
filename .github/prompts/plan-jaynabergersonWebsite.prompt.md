## Plan: Jayna Bergerson UX Portfolio Website

**TL;DR:** Build jaynabergerson.com as an Astro static site deployed to GitHub Pages, optimized for hiring managers and recruiters while serving peer designers. The site features 6–10 case studies with rich visuals, a thought-leadership blog (1–2x/month), Gumroad product integration, and a resources section. Partial branding will be completed as part of the plan. Astro's content collections + Markdown workflow keeps updates simple, with AI-assisted development throughout.

---

### 1. Information Architecture (Sitemap)

**Primary navigation (persistent header):**

| Page | Purpose |
|---|---|
| **Home** | Hero + value prop, featured case studies (3), latest article, social proof, CTA |
| **Work** | Portfolio grid/list of all 6–10 case studies, filterable by category (e.g., Research, Content Strategy, UX/UI Design) |
| **Work/[slug]** | Individual case study pages (dynamic routes from content collection) |
| **About** | Bio, photo, design philosophy, skills, career timeline, downloadable resume PDF |
| **Articles** | Blog listing page with paginated posts, filterable by date and by article category (e.g., AI, UX, Design Tutorials, Research) |
| **Articles/[slug]** | Individual article pages |
| **Resources** | Curated tools, templates, reading lists for designers + Gumroad product cards |
| **Contact** | Contact form (Formspree Forms), email, LinkedIn, calendar link (Calendly) |

**Footer navigation:** Privacy, LinkedIn, resume PDF link, RSS feed

**Key architectural decisions:**
- "Work" (not "Portfolio") — more professional, action-oriented label
- Case studies are first-class content, not buried in subpages
- Resources + Products live together to create a single value hub for peers
- Contact is a full page AND a persistent CTA in the header/footer

---

### 2. Content Strategy by Section

**Home:**
- Hero: Name, title ("UX Designer"), 1-line value proposition, primary CTA ("View My Work"), secondary CTA ("Download Resume")
- 3 featured case study cards with hero images, titles, and 1-line outcomes (e.g., "Increased task completion by 34%")
- Short "About" teaser (2–3 sentences + photo) linking to full About page
- Latest article preview
- Social proof strip: company logos you've worked with, or a short testimonial
- Footer CTA: "Let's connect" with LinkedIn + email

**Work (Portfolio Grid):**
- Card per project: hero image, project title, company/client, your role, 1-line outcome
- Category filter tags (no full search — keep it simple)
- Sort by recency (most recent first)

**Case Study Pages (critical — covered in detail in Section 4):**
- Structured, scannable format optimized for busy hiring managers

**About:**
- Professional headshot
- 2–3 paragraph bio in first person (warm but professional)
- "My Approach" or "Design Philosophy" section
- Skills/tools grid (Figma, research methods, design systems, etc.)
- Career timeline (optional, visual)
- Recommendations from former colleagues/managers
- Downloadable resume (PDF, opens in new tab)
- LinkedIn CTA

**Articles:**
- UX thought leadership: process insights, industry trends, lessons learned
- Target 800–1,500 words per post
- Each post gets: title, date, estimated read time, hero image, tags
- Include CTAs at the end of each post (related case study, contact, or product)

**Resources:**
- Free section: curated tool lists, reading recs, templates
- Paid section: Gumroad product embeds/links (more detail in Section 5)

**Contact:**
- Simple form (Name, Email, Subject, Message) via Formspree (free tier, no backend needed)
- Direct email link as fallback
- LinkedIn profile link (prominent)
- Optional: Calendly embed for scheduling intro calls

---

### 3. Design System & Branding

**Completing your brand identity:**

- **Typography:** Use a system like Inter (sans-serif, highly readable) for body + a display font Playfair Display for headings. Both are free Google Fonts. Two fonts max.
- **Color palette:** Define 5 colors:
  - Primary brand color (something distinctive but professional also on trendy side — e.g., a muted teal, warm coral, or deep purple)
  - Dark neutral (near-black, for text)
  - Light neutral (off-white, for backgrounds)
  - Accent color (for CTAs, links, hover states)
  - Muted/secondary (for tags, borders, subtle UI)
  - Case study background colors (optional: a few soft pastels to differentiate projects visually)
- **Logo:** Your name set in your heading font is sufficient. No need for a complex mark — clean typography signals design confidence. Current logo available at https://jaynabergerson.com/wp-content/uploads/2026/02/jb-logo-website-v2@2x.png. Current logo is for reference only and can be updated as part of the branding process.
- **Imagery:** Use a consistent style for case study hero images (e.g., device mockups, abstract shapes, or real photos). For blog posts, use custom illustrations or relevant stock photos with a consistent filter or color overlay to maintain visual cohesion.

**Layout principles:**
- Max content width: ~720px for text, ~1200px for grids/hero
- Generous whitespace (min 24px between sections, 48–64px between page sections)
- Consistent 8px spacing grid
- Responsive: mobile-first, breakpoints at 640px / 1024px

**Navigation:**
- Sticky header with logo (name) left, nav links right
- Mobile: hamburger menu or bottom nav
- Active state indicator on current page
- Header CTA button: "Let's Talk" or "Get in Touch" (always visible)

**Accessibility (WCAG 2.1 AA):**
- Color contrast ratio ≥ 4.5:1 for text
- Focus-visible outlines on all interactive elements
- Semantic HTML (`<main>`, `<nav>`, `<article>`, `<section>`)
- Alt text on all images
- Skip-to-content link
- Reduced motion support via `prefers-reduced-motion`

**Astro theme recommendation:** Start from scratch with a minimal setup rather than a heavy theme — gives you full control and keeps the codebase simple. Use Astro's built-in component system. If you want a starting point, [Astro Nano](https://github.com/markhorn-dev/astro-nano) is a clean, minimal portfolio theme you could fork and customize.

---

### 4. Case Study Best Practices

Each case study page should follow this structure (optimized for hiring managers who skim):

1. **Hero banner:** Project title, company, your role, timeline, hero image/mockup
2. **TL;DR / Impact summary:** 2–3 bullet points with measurable outcomes at the very top (e.g., "Reduced onboarding time by 40%," "Shipped to 2M+ users")
3. **The Challenge:** What problem were you solving? Business context, user pain points (3–5 sentences)
4. **Your Role & Team:** Who you worked with, what you specifically owned
5. **Process:** 
   - Discovery/Research → Key insights
   - Ideation/Design → Sketches, wireframes, explorations (show messy work too)
   - Testing/Iteration → Usability findings, pivots
   - Final Design → High-fidelity screens, prototypes, design system contributions
6. **Outcome & Impact:** Quantified results, business impact, what shipped
7. **Reflection:** What you learned, what you'd do differently
8. **Navigation:** "Next case study" / "Previous case study" links at the bottom

**Presentation tips:**
- Lead with outcomes, not process (recruiters read top-down and may stop early)
- Use annotated screenshots — call out specific design decisions
- Include before/after comparisons where applicable
- Keep text scannable: short paragraphs, bullet lists, bold key phrases
- Image optimization: use Astro's built-in `<Image />` component for automatic WebP conversion and lazy loading
- For confidential work: describe the problem/approach generically, show anonymized wireframes, focus on methodology

**Content collection schema (Astro):**
Define a `work` collection in `src/content/config.ts` with fields: `title`, `company`, `role`, `date`, `tags`, `heroImage`, `summary`, `featured` (boolean), `order` (number for sorting).

---

### 5. Gumroad Integration

**Approach:** Keep it lightweight — no ecommerce complexity on your site.

- **Resources page:** Display product cards (image, title, price, short description) that link out to your Gumroad product pages. This is the simplest, most maintainable approach.
- **Product data:** Store as a content collection (`src/content/products/`) or a simple JSON/YAML data file. Each entry: `title`, `description`, `price`, `image`, `gumroadUrl`, `category`.
- **Optional enhancement:** Use Gumroad's overlay script (`<script src="https://gumroad.com/js/gumroad.js"></script>`) so purchases happen in a modal without leaving your site. Add `class="gumroad-button"` and `data-gumroad-product-id="xxx"` to your buy buttons.
- **No Gumroad embed widgets** — they look generic. Custom-styled cards linking to Gumroad look far more professional.

---

### 6. SEO & Recruiter Discoverability

**Technical SEO:**
- Astro generates static HTML by default — excellent for SEO
- Add `<title>` and `<meta name="description">` to every page (use Astro layouts)
- Create a `BaseHead.astro` component with Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) and Twitter card meta
- Generate a `sitemap.xml` using `@astrojs/sitemap`
- Add a `robots.txt` allowing all crawlers
- Use canonical URLs on all pages
- Structured data (JSON-LD): Add `Person` schema on the home/about page, `Article` schema on blog posts

**Content SEO:**
- Page titles: "[Page] | Jayna Bergerson — UX Designer"
- Case study titles should include the company/domain: "Redesigning the Onboarding Flow for [Company]"
- Blog posts should target long-tail UX keywords naturally
- Alt text on all images (descriptive, not keyword-stuffed)

**Recruiter discoverability:**
- LinkedIn is your primary discovery channel — make sure your LinkedIn links to your site and vice versa
- Add your website URL to LinkedIn, Dribbble, Behance, ADPList, etc.
- Include a downloadable, ATS-friendly PDF resume (not just the web version)
- Use your full name consistently across all platforms
- Add an RSS feed (`@astrojs/rss`) so content can be syndicated

**Performance (also an SEO factor):**
- Astro ships zero JS by default — leverage this
- Use `<Image />` for all images (automatic optimization)
- Lazy load below-fold images
- Target Lighthouse scores: 95+ across all categories

---

### 7. Development Workflow

**Project structure:**
```
jaynabergerson.com/
├── src/
│   ├── components/       # Reusable Astro components (Header, Footer, Card, etc.)
│   ├── content/
│   │   ├── work/         # Case study Markdown files
│   │   ├── articles/     # Blog post Markdown files
│   │   └── config.ts     # Content collection schemas
│   ├── layouts/          # BaseLayout.astro, ArticleLayout.astro, CaseStudyLayout.astro
│   ├── pages/            # Route pages (index, work, about, articles, resources, contact)
│   └── styles/           # Global CSS / design tokens
├── public/               # Static assets (images, resume PDF, favicon)
├── astro.config.mjs
└── package.json
```

**Tech stack:**
- **Astro v5** (latest stable) as SSG
- **Content Collections** for case studies and blog posts (type-safe Markdown)
- **Vanilla CSS** (or Tailwind CSS if you prefer utility classes — Astro has a first-party Tailwind integration)
- **Formspree** for the contact form (free tier, no backend)
- **GitHub Pages** for hosting (via `@astrojs/github-pages` or manual GitHub Actions)

**Deployment (GitHub Actions):**
- Create `.github/workflows/deploy.yml` that builds Astro and deploys to GitHub Pages on push to `main`
- Astro has an [official GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/) — follow it exactly
- Set custom domain `jaynabergerson.com` in GitHub Pages settings + add CNAME DNS record
- Works fine with a private repo

**Content update workflow:**
1. Write/edit a Markdown file in `src/content/work/` or `src/content/articles/`
2. Add images to `public/images/` (or `src/assets/` for optimized images)
3. Preview locally: `npm run dev`
4. Commit and push to `main` — site auto-deploys in ~2 minutes
5. Use Copilot in VS Code for writing Markdown, generating component code, debugging

**AI-assisted development tips:**
- Use Copilot to scaffold Astro components, write CSS, generate content collection schemas
- Use Copilot Chat to debug build errors, ask about Astro APIs, generate alt text for images
- Use Claude for content editing — refining case study copy, blog posts, meta descriptions

---

### 8. Additional Recommendations

- **Analytics:** Add [Plausible](https://plausible.io) or [Fathom](https://usefathom.com) (privacy-friendly, no cookie banner needed) to track which case studies get the most views
- **404 page:** Create a custom `src/pages/404.astro` with navigation back to key pages
- **Favicon & social image:** Create a favicon set (use realfavicongenerator.net) and a default OG image (1200×630px) for social sharing
- **Dark mode:** Consider adding a light/dark toggle — signals design thoughtfulness. Astro + CSS custom properties makes this straightforward
- **Print stylesheet:** Add a print-friendly CSS for the resume/about page (recruiters sometimes print)
- **Page transitions:** Astro v5 supports View Transitions natively — subtle fade transitions between pages feel polished
- **Content backups:** Since it's a private GitHub repo, your content is versioned and backed up automatically
- **Legal:** Add a minimal privacy policy page if using analytics or contact forms

---


### 9. Workflow and Content Management

**Goal:** Add new articles or case studies quickly and safely, without risk of breaking the site.

**Content templates:**
- Create a `_templates/` folder at the project root with starter Markdown files: `case-study-template.md` and `article-template.md`
- Each template includes all required frontmatter fields pre-filled with placeholder values and inline comments explaining each field
- To create new content: duplicate the template, rename, fill in, and move to the appropriate `src/content/` subfolder

**Frontmatter validation (Astro Zod schemas):**
- Define strict schemas in `src/content/config.ts` using Zod for both `work` and `articles` collections
- Required fields are enforced at build time — if you forget a `title`, `date`, or `heroImage`, the build fails with a clear error message instead of silently publishing broken content
- Use `z.enum()` for tags/categories so only valid values are accepted (prevents typos like "Reserach")
- Use `z.coerce.date()` for dates to accept flexible formats

**Example schema (case studies):**
```ts
const work = defineCollection({
  schema: z.object({
    title: z.string(),
    company: z.string(),
    role: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.enum(["Research", "Content Strategy", "UX/UI Design"])),
    heroImage: z.string(),
    summary: z.string().max(160), // also used as meta description
    featured: z.boolean().default(false),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});
```

**Draft workflow:**
- Add a `draft: true` field to frontmatter — filter drafts out of production listings but show them in `dev` mode
- This lets you work on a case study over multiple sessions without publishing half-finished content

**Image organization:**
- Use a consistent naming convention: `src/assets/images/work/{slug}/hero.jpg`, `src/assets/images/work/{slug}/process-01.jpg`, etc.
- Keep images in `src/assets/` (not `public/`) so Astro can optimize them automatically
- Blog post images: `src/assets/images/articles/{slug}/`

**Content checklist (before publishing):**
1. All frontmatter fields filled (build will catch missing required fields)
2. Hero image added and path correct
3. Alt text on every image in the Markdown body
4. Internal links work (`/work/project-slug`, not full URLs)
5. Run `npm run build` locally — confirms no schema errors, no broken image paths
6. Preview with `npm run preview` to check the production build visually

**Safe deployment pattern:**
- Work on a feature branch for large content changes (new case study with many images)
- Push to `main` for small updates (typo fixes, new blog posts) — auto-deploys in ~2 minutes
- GitHub Actions will fail the deploy if the build fails, so broken content never goes live

**Quick-add cheat sheet:**
| Task | Steps |
|---|---|
| New blog post | Copy `_templates/article-template.md` → `src/content/articles/my-post.md` → fill in → push |
| New case study | Copy `_templates/case-study-template.md` → `src/content/work/project-slug.md` → add images to `src/assets/images/work/project-slug/` → fill in → push |
| Update resume | Replace `public/jayna-bergerson-resume.pdf` → push |
| Edit existing content | Open the `.md` file → edit → push |

---

### Verification

- [ ] Build locally with `npm run dev` and test all pages
- [ ] Run Lighthouse audit — target 95+ on Performance, Accessibility, SEO, Best Practices
- [ ] Test on mobile (Chrome DevTools device emulation + real device)
- [ ] Verify all links work (case studies, external, Gumroad, LinkedIn)
- [ ] Test contact form submission via Formspree
- [ ] Validate HTML with W3C validator
- [ ] Check OG tags with opengraph.xyz
- [ ] Verify custom domain DNS + HTTPS on GitHub Pages
- [ ] Have 2–3 peers review for content/design feedback

---

### Key Decisions

- **Astro over Next.js/Gatsby:** Zero-JS default, simpler mental model, content collections are purpose-built for this use case
- **Vanilla CSS (or Tailwind) over CSS-in-JS:** Static site doesn't need runtime styling
- **Formspree over custom backend:** No server to maintain, generous free tier
- **Gumroad links over embedded store:** Simpler to maintain, more professional appearance
- **Custom build over heavy theme:** Full control, cleaner code, easier to maintain with AI assistance
- **GitHub Pages over Vercel/Netlify:** Meets your requirement; free for private repos; Astro has first-party support
