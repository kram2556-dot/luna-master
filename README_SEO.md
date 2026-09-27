# SEO checklist

## Implemented

- Arabic document language and RTL direction.
- SEO title and meta description targeting bridal, event, and editorial makeup in Cairo.
- `keywords`, `author`, `robots`, and theme-color metadata.
- Canonical URL configured for the expected Cloudflare Pages project URL.
- Open Graph and Twitter Card metadata with the hero image.
- JSON-LD `BeautySalon` schema with contact details and social profiles.
- `robots.txt` allowing crawling and pointing to the current sitemap.
- Clean `sitemap.xml` with the canonical homepage only. Hash-based sections are intentionally excluded because they are not separate indexable URLs.
- Descriptive alt text on the major visual assets.

## Before production launch

1. Replace `https://luna-beauty-studio-portfolio.pages.dev/` in `index.html`, `robots.txt`, and `sitemap.xml` with the final custom domain.
2. Replace the placeholder WhatsApp number, email, and social handles with the real business details.
3. Add the final branded social-share image if available; the current Open Graph image is the supplied Unsplash hero.
4. Verify the live sitemap in Google Search Console and request indexing after the final domain is connected.
5. Run Lighthouse/PageSpeed after deployment and convert remote images to optimized local WebP/AVIF files if performance needs improvement.
