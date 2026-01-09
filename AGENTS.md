# 缘知随心庭 (fine.niceshare.site)

## WHAT: Project Overview

This is a **static documentation/blog website** built with modern web technologies:

- **Framework**: [Astro](https://astro.build/) v5.12+ (Static Site Generator)
- **Theme**: [Starlight](https://starlight.astro.build/) (Documentation theme with built-in search, navigation, i18n)
- **Components**: [Svelte](https://svelte.dev/) v5.20+ (UI components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4.1+ (Utility-first CSS)
- **Content**: Markdown & [MDX](https://mdxjs.com/) (Content format)
- **Language**: TypeScript
- **Package Manager**: pnpm

### Project Structure

```
/src
  /assets          → Static assets (images, styles)
  /components      → Svelte & Astro components (.svelte, .astro)
  /content/docs    → Content organized by category (MDX files)
    /explore       → Philosophy & life exploration
    /self-hosted   → Self-hosting guides
    /automation    → Automation & AI content
    /projects      → Project portfolio
    /thinking      → Thinking models
    /books         → Book notes
    /music         → Music recommendations
    /articles      → Technical articles (e.g., BlueOS development)
  /pages           → Route pages
  /configs         → Configuration files
/public            → Public static files (favicons, manifest)
/dist              → Build output (gitignored)
```

## WHY: Project Purpose

A personal blog platform focused on:
- Technical knowledge sharing (BlueOS, AI, automation, web development)
- Philosophy and thinking methodologies
- Music appreciation
- Self-hosted solutions and passive income building

Target audience: Chinese-speaking developers and knowledge seekers.

## HOW: Working with This Project

### Development

```bash
pnpm dev          # Start dev server on port 6969
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm check        # Run Astro type checking
```

### Making Changes

1. **Adding Content**: Create/edit `.mdx` files in `/src/content/docs/{category}/`
2. **Modifying Components**: Edit `.astro` or `.svelte` files in `/src/components/`
3. **Configuration**: Main config is in `astro.config.mjs`
4. **Styling**: Use Tailwind utility classes or edit `/src/assets/styles/`

### Before Submitting

- Run `pnpm check` to verify TypeScript types
- Test the build with `pnpm build` to ensure no build errors
- Preview changes locally with `pnpm preview`

---

**Note**: This project uses **progressive disclosure**. If you need specific information about:
- Site configuration and SEO setup → see `astro.config.mjs`
- Deployment process → see `deploy.sh`
- Content structure and frontmatter → check existing MDX files in `/src/content/docs/`
