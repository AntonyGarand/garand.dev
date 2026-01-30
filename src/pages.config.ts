/**
 * Page Metadata Configuration
 * 
 * Centralized SEO metadata for all static pages. Single source of truth
 * for titles and descriptions to ensure consistency across the site.
 * 
 * Usage:
 * ```astro
 * ---
 * import BaseLayout from '../layouts/BaseLayout.astro';
 * import SEO from '../components/SEO.astro';
 * import { pagesConfig } from '../pages.config';
 * ---
 * 
 * <BaseLayout>
 *   <SEO 
 *     slot="head"
 *     title={pagesConfig.projects.title}
 *     description={pagesConfig.projects.description}
 *   />
 *   <!-- Page content -->
 * </BaseLayout>
 * ```
 * 
 * @module pages.config
 */

/**
 * Page metadata interface
 */
interface PageMeta {
  /** Page title (used in browser tab and SEO) */
  title: string;
  
  /** Page description (used in meta tags and SEO) */
  description: string;
  
  /** Page heading (displayed as h1, optional - defaults to title) */
  heading?: string;
  
  /** Page intro text (displayed below heading, optional) */
  intro?: string;
}

/**
 * Pages configuration object
 * 
 * Contains metadata for all static pages. Dynamic pages (like individual
 * project or article pages) generate their own metadata from content.
 */
export const pagesConfig = {
  /**
   * Home page (/)
   * Note: Home page uses siteConfig for title/description as it represents the site itself
   */
  home: {
    title: 'Home',
    description: '',
  },
  
  /**
   * Projects listing page (/projects)
   */
  projects: {
    title: 'Projects',
    description: '',
    heading: 'Projects',
    intro: '',
  },
  
  /**
   * Decisions listing page (/decisions)
   */
  decisions: {
    title: 'Decisions - Architectural & Technical Choices',
    description: '',
    heading: 'Decisions',
    intro: '',
  },
  /**
   * Journey timeline page (/journey)
   */
  journey: {
    title: 'Journey - Career Milestones & Learning Timeline',
    description: '',
    heading: 'Journey',
    intro: '',
  },
  
  /**
   * Writing/blog listing page (/writing)
   */
  writing: {
    title: 'Writing - Articles and snippets',
    description: 'Technical and social articles about everything.',
    heading: 'Writing',
    intro: 'Writing about interesting things I see and build.',
  },

  /**
   * Speaking engagements page (/speaking)
   */
  speaking: {
    title: 'Speaking - Talks & Presentations',
    description: '',
    heading: 'Speaking',
    intro: '',
  },
  
  /**
   * Uses/tools page (/uses)
   */
  uses: {
    title: 'Uses - Tools, Stack & Environment',
    description: 'A list of the tools, technologies, and environment I use for development work.',
    heading: 'Setup',
    intro: 'A look at the tools, technologies, and environment that power my development workflow.',
  },
  
  /**
   * Contact page (/contact)
   */
  contact: {
    title: 'Contact - Get in Touch',
    description: 'Get in touch to discuss opportunities, collaborations, or technical challenges.',
    heading: 'Let\'s Talk',
  },
} as const;

/**
 * Type export for the pages configuration
 */
export type PagesConfig = typeof pagesConfig;

/**
 * Type export for a single page metadata
 */
export type PageConfig = PageMeta;
