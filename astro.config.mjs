/**
 * Astro Configuration
 *
 * Main configuration file for the Astro site. Defines build settings, integrations,
 * environment variables schema, image optimization, and markdown processing.
 *
 * Configuration Sections:
 * - Output mode: Static site generation (SSG)
 * - Integrations: MDX for rich content, Sitemap for SEO
 * - Environment variables: Type-safe schema with defaults
 * - Image optimization: Sharp-based processing with responsive sizes
 * - Markdown: Syntax highlighting with Shiki
 *
 * Setup:
 * 1. Site configuration is hardcoded in src/config.ts
 * 2. Run `npm run dev` for development or `npm run build` for production
 *
 * @see https://astro.build/config
 */

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig, envField } from "astro/config";

/**
 * Astro configuration object
 *
 * Defines all build-time settings, integrations, and optimizations for the site.
 *
 * @see https://astro.build/config
 */
export default defineConfig({
  /**
   * Output mode: Static Site Generation (SSG)
   *
   * Generates static HTML files at build time for optimal performance
   * and hosting flexibility. All pages are pre-rendered.
   */
  output: "static",

  /**
   * Astro integrations
   *
   * - MDX: Enables MDX support for rich content authoring with JSX components
   * - Sitemap: Automatically generates sitemap.xml for search engines
   */
  integrations: [mdx(), sitemap()],

  /**
   * Site URL
   *
   * Base URL for the site.
   * Required for:
   * - Sitemap generation
   * - Canonical URLs
   * - Open Graph tags
   * - RSS feeds
   *
   * For GitHub Pages:
   * - Using custom domain: https://garand.dev (no base needed)
   * - Using github.io: https://antonygarand.github.io
   */
  site: "https://garand.dev",

  /**
   * Base path
   *
   * For GitHub Pages, set this to your repository name if not using a custom domain.
   * Skip this if:
   * - You're using a custom domain (like garand.dev)
   * - Your repository name matches the pattern <username>.github.io
   *
   * Examples:
   * - Repository: https://github.com/username/portfolio → base: '/portfolio'
   * - Custom domain: https://example.com → base: undefined
   */
  base: undefined,

  /**
   * Environment variables schema (Astro v5+)
   *
   * Defines type-safe environment variables with validation and defaults.
   * All variables are client-side accessible and public.
   *
   * Note: Site configuration is now hardcoded in src/config.ts.
   * These defaults are maintained for compatibility.
   *
   * Categories:
   * - Site: URL, language, title, description
   * - Author: Name, title, bio, email, location
   * - Social: GitHub, LinkedIn, Twitter, Mastodon, Bluesky
   */
  env: {
    schema: {
      // Site configuration
      SITE_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://garand.dev",
      }),
      SITE_LANGUAGE: envField.string({
        context: "client",
        access: "public",
        default: "en",
      }),
      SITE_TITLE: envField.string({
        context: "client",
        access: "public",
        default: "Antony Garand's site",
      }),
      SITE_DESCRIPTION: envField.string({
        context: "client",
        access: "public",
        default: "Software thinkerer of all scales, from startups to Amazon!",
      }),

      // Author information
      SITE_AUTHOR_NAME: envField.string({
        context: "client",
        access: "public",
        default: "Antony Garand",
      }),
      SITE_AUTHOR_TITLE: envField.string({
        context: "client",
        access: "public",
        default: "Senior Software Engineer",
      }),
      SITE_AUTHOR_BIO: envField.string({
        context: "client",
        access: "public",
        default: "Software thinkerer of all scales, from startups to Amazon!",
      }),
      SITE_AUTHOR_EMAIL: envField.string({
        context: "client",
        access: "public",
        default: "hello@garand.dev",
      }),
      SITE_AUTHOR_LOCATION: envField.string({
        context: "client",
        access: "public",
        default: "Quebec, Canada",
      }),

      // Social media links (empty string = hidden)
      SOCIAL_GITHUB: envField.string({
        context: "client",
        access: "public",
        default: "https://github.com/AntonyGarand",
      }),
      SOCIAL_LINKEDIN: envField.string({
        context: "client",
        access: "public",
        default: "https://linkedin.com/in/AntonyGarand",
      }),
      SOCIAL_TWITTER: envField.string({
        context: "client",
        access: "public",
        default: "https://twitter.com/antogarand",
      }),
      SOCIAL_MASTODON: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
      SOCIAL_BLUESKY: envField.string({
        context: "client",
        access: "public",
        default: "",
      }),
    },
  },

  /**
   * Image optimization configuration
   *
   * Uses Astro's built-in Sharp-based image service for automatic optimization.
   *
   * Features:
   * - Automatic format conversion (AVIF, WebP, PNG, JPEG)
   * - Responsive image generation with srcset
   * - Build-time optimization for static images
   * - Memory-safe processing with pixel limits
   *
   * The limitInputPixels setting prevents memory issues when processing
   * very large images (~16K x 16K pixels maximum).
   */
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Limit concurrent image processing to avoid memory issues
        limitInputPixels: 268402689, // ~16K x 16K pixels
      },
    },
    // Remote image patterns (currently empty - add patterns as needed)
    remotePatterns: [],
  },

  /**
   * Markdown configuration
   *
   * Configures markdown processing and syntax highlighting.
   *
   * Shiki Configuration:
   * - Theme: GitHub Dark for consistent code highlighting
   * - Wrap: Enables line wrapping for long code lines
   */
  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: true,
    },
  },
  redirects: {
    // Links from my old site
    "/projects/pattern-brush": "/pattern-brush/index.html",
    "/projects/metaballs": "/metaballs/index.html",
    "/projects/metaballs/gallery": "/metaballs/gallery.html",
    "/projects/sailing": "/sailing/index.html",
  },
});
