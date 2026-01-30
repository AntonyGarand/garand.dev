/**
 * Site Configuration
 *
 * Centralized configuration for the entire site with hardcoded values.
 * This provides type-safe access throughout the application.
 *
 * Configuration Sections:
 * - Site metadata (URL, language, title, description)
 * - Author information (name, title, bio, email, location)
 * - Social links (GitHub, LinkedIn, Twitter, Mastodon, Bluesky)
 * - Navigation structure
 *
 * @module config
 */

/**
 * Site configuration object
 *
 * Centralized configuration with hardcoded site values.
 * All values are directly configured and type-safe throughout the application.
 *
 * @constant
 */
export const siteConfig = {
  /**
   * Site URL (required for sitemap, canonical URLs, OG tags)
   *
   * The full production URL without trailing slash.
   */
  url: "https://garand.dev",

  /**
   * Site language (ISO 639-1 code)
   *
   * Two-letter language code for HTML lang attribute and SEO.
   */
  language: "en",

  /**
   * Site title
   *
   * Used as fallback when page-specific title is not provided.
   */
  title: "Antony Garand's site",

  /**
   * Site description
   *
   * Default meta description for SEO and social sharing.
   */
  description: "Software thinkerer of all scales, from startups to Amazon!",

  /**
   * Author information
   *
   * Personal details used throughout the site for attribution,
   * contact information, and structured data.
   */
  author: {
    /** Full name */
    name: "Antony Garand",

    /** Professional title or role */
    title: "Senior Software Engineer",

    /** Short biography or professional summary */
    bio: "Software thinkerer of all scales, from startups to Amazon!",

    /** Contact email address */
    email: "hello@garand.dev",

    /** Location (optional, empty string to hide) */
    location: "Quebec, Canada",
  },

  /**
   * Social media links
   *
   * Set to empty string to hide a specific platform.
   * Only configured (non-empty) links will be displayed.
   */
  social: {
    /** GitHub profile URL */
    github: "https://github.com/AntonyGarand",

    /** LinkedIn profile URL */
    linkedin: "https://linkedin.com/in/AntonyGarand",

    /** Twitter/X profile URL */
    twitter: "https://twitter.com/antogarand",

    /** Mastodon profile URL */
    mastodon: "",

    /** Bluesky profile URL */
    bluesky: "",
  },

  /**
   * Navigation links
   *
   * Main site navigation structure. Order determines display order in the nav bar.
   * Add or remove items to customize navigation.
   */
  nav: [
    { label: "Projects", href: "/projects" },
    // { label: 'Decisions', href: '/decisions' },
    { label: "Journey", href: "/journey" },
    { label: "Writing", href: "/writing" },
    // { label: 'Speaking', href: '/speaking' },
    // { label: 'Tools', href: '/uses' },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/**
 * Type export for the entire site configuration
 *
 * Use this type when you need to reference the full config structure.
 */
export type SiteConfig = typeof siteConfig;

/**
 * Type export for social links object
 *
 * Use this type when working specifically with social media links.
 */
export type SocialLinks = typeof siteConfig.social;

/**
 * Type export for a single navigation item
 *
 * Use this type when working with individual nav items.
 */
export type NavItem = (typeof siteConfig.nav)[number];
