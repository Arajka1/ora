# Watch Shop Demo

A minimal demo of a watch shop using Next.js + Tailwind + Netlify CMS (git-backed). This is an MVP scaffold to start with.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run local dev:

   ```bash
   npm run dev
   ```

3. Netlify CMS: Deploy to Netlify and enable Identity + Git Gateway (or use GitHub OAuth). The CMS will be available at `/admin`.

## Notes

- Product content lives in `content/products/*.md` and uses frontmatter fields.
- Images are referenced from `/foto/` (existing folder in this workspace). You can move images into `public/products/` if you prefer to centralize them.
- For contact-to-buy, the product page shows a "Contact to Buy" button; you can replace it with a simple modal or contact form.

If you want, I can:

- Add filters & search (client-side) for brand, price, color.
- Set up a Contact form and Email notifications.
- Configure Netlify deploy and link to GitHub repository.

Tell me which of the above you'd like next and I will proceed.
