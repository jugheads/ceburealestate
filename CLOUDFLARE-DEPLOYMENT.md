# Cloudflare deployment settings

This project is configured as a static Astro site.

For Cloudflare Pages Git integration:

- Build command: `bun run build`
- Build output directory: `dist`
- Root directory: `/`
- Remove any custom deploy command that runs `npx wrangler deploy`.

The Wrangler command in the supplied build log is attempting to configure/deploy an Astro Worker. That is a different deployment target from this static Pages setup. Do not mix the two workflows.

Approved and published Markdown articles are included in the build. Hub pages are derived automatically from each article's `hub` frontmatter value.
