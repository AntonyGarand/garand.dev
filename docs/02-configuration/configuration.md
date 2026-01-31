# Configuration

All site configuration is managed in `src/config.ts`.

## Site Configuration

Edit `src/config.ts` to personalize your site:

### Site Settings

| Property      | Description                             |
| ------------- | --------------------------------------- |
| `url`         | Production URL (for sitemap, OG tags)   |
| `language`    | ISO 639-1 code (e.g., `en`, `id`, `de`) |
| `title`       | Site title for SEO                      |
| `description` | Default meta description                |

### Author Information

| Property          | Description                          |
| ----------------- | ------------------------------------ |
| `author.name`     | Your full name                       |
| `author.title`    | Your job title                       |
| `author.bio`      | Short professional bio               |
| `author.email`    | Contact email                        |
| `author.location` | Your location (empty string to hide) |

### Social Links

Leave empty string to hide a platform from your site.

| Property          | Description           |
| ----------------- | --------------------- |
| `social.github`   | GitHub profile URL    |
| `social.linkedin` | LinkedIn profile URL  |
| `social.twitter`  | Twitter/X profile URL |
| `social.mastodon` | Mastodon profile URL  |
| `social.bluesky`  | Bluesky profile URL   |

### Example Configuration

```typescript
// src/config.ts
export const siteConfig = {
  url: "https://johndoe.dev",
  language: "en",
  title: "John Doe's site",
  description: "Building distributed systems at scale.",

  author: {
    name: "John Doe",
    title: "Staff Software Engineer",
    bio: "Building distributed systems at scale.",
    email: "hello@johndoe.dev",
    location: "San Francisco, CA",
  },

  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    mastodon: "",
    bluesky: "",
  },
  // ...
};
```

## Navigation

Navigation links are configured in `src/config.ts`:

```typescript
nav: [
  { label: 'Projects', href: '/projects' },
  { label: 'Decisions', href: '/decisions' },
  { label: 'Journey', href: '/journey' },
  { label: 'Writing', href: '/writing' },
  { label: 'Speaking', href: '/speaking' },
  { label: 'Uses', href: '/uses' },
  { label: 'Contact', href: '/contact' },
],
```

The "Home" link is automatically added. To remove a section, delete its entry from the array.

## Page Metadata

SEO metadata for static pages is centralized in `src/pages.config.ts`. Edit this file to customize page titles, descriptions, headings, and intro text:

```typescript
// src/pages.config.ts
export const pagesConfig = {
  projects: {
    title: "Projects - Case Studies",
    description: "Detailed case studies showcasing...",
    heading: "Projects",
    intro: "Case studies that demonstrate...",
  },
  // ... other pages
};
```

**Available pages:** `home`, `projects`, `decisions`, `journey`, `writing`, `speaking`, `uses`, `contact`

**Fields:**

- `title` — Browser tab and SEO title
- `description` — Meta description for SEO
- `heading` — Page h1 heading (optional, defaults to title)
- `intro` — Intro paragraph below heading (optional)

## Favicon Setup

Replace these files in `public/` with your own:

| File                   | Size     | Purpose                        |
| ---------------------- | -------- | ------------------------------ |
| `favicon.svg`          | -        | Main favicon (modern browsers) |
| `favicon-32x32.png`    | 32×32    | PNG fallback                   |
| `favicon-16x16.png`    | 16×16    | PNG fallback                   |
| `favicon-192x192.png`  | 192×192  | Android Chrome                 |
| `favicon-512x512.png`  | 512×512  | PWA icon                       |
| `apple-touch-icon.png` | 180×180  | iOS icon                       |
| `og-image.png`         | 1200×630 | Social sharing image           |

After replacing, update `public/site.webmanifest`:

```json
{
  "name": "Your Site Name",
  "short_name": "Short Name",
  "description": "Your site description",
  "theme_color": "#0a0a0a",
  "background_color": "#0a0a0a",
  "display": "standalone"
}
```

**Tip:** Use [RealFaviconGenerator](https://realfavicongenerator.net/) to generate all sizes from a single image.

## Code Syntax Highlighting

Configure in `astro.config.mjs`:

```javascript
markdown: {
  shikiConfig: {
    theme: 'github-dark',  // Change theme here
    wrap: true
  }
}
```

Available themes: `github-dark`, `github-light`, `dracula`, `nord`, `one-dark-pro`, etc.

See [Shiki themes](https://shiki.style/themes) for all options.

## Pagination

Article pagination is configured in `src/pages/writing/[...page].astro`:

```typescript
const postsPerPage = 5; // Change this value
```

**Note:** Update both instances in the file for pagination statistics to display correctly.
