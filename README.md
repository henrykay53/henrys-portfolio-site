# henrys-portfolio-site

Personal portfolio of Henry Kolawole, software engineer. Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4.

Design decisions, content rules and progress live in [docs/SPEC.md](docs/SPEC.md).

## Develop

```bash
npm install
cp .env.example .env.local   # optional; the site runs without it
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Where things live

| Path | What |
|---|---|
| `content/` | All copy and data: profile, experience, skills, case studies. Edit text here, not in components. |
| `app/page.tsx` | Home page sections |
| `app/work/[slug]/` | Case-study pages (statically generated from `content/projects.ts`) |
| `app/api/contact/route.ts` | Contact form endpoint (validation, honeypot, rate limit, Resend) |
| `components/` | Shared UI: header, device frames, metrics, contact form |
| `public/work/` | Project screenshots |
| `public/henry-kolawole-cv.pdf` | The downloadable CV. Replace this file to update it. |

To add a case study, add an entry to `projects` in `content/projects.ts` and its images to `public/work/`.
The home page, case-study route, sitemap and OG image pick it up automatically.

## Environment variables

See `.env.example`. All are optional for local development.

- `NEXT_PUBLIC_SITE_URL` sets canonical URLs, the sitemap and OG image URLs. Set it to the real domain in production.
- `RESEND_API_KEY` enables the contact form to send email. It is read only on the server.
  Without it, the form shows a "send from your email app" fallback with the message pre-filled.
- `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` set the recipient and sender.

## Deploy

### Netlify (current host)

1. Push the branch and connect the repo in Netlify (or open the existing site's settings).
2. Netlify detects Next.js and applies its Next.js runtime automatically. Build command: `npm run build`.
3. Under **Site configuration → Environment variables**, add `NEXT_PUBLIC_SITE_URL` and, for the form, `RESEND_API_KEY`.
4. Deploy, then check `/sitemap.xml`, `/robots.txt`, a case-study page, the CV download, and a test message from the form.

### Vercel (alternative)

Import the repo, add the same environment variables, deploy. No configuration file is needed.

### Contact form email (Resend)

1. Create a free account at resend.com **using the inbox you want messages delivered to**.
2. Create an API key and set it as `RESEND_API_KEY` in the host's environment variables.
3. With the default sender `onboarding@resend.dev`, Resend delivers only to the account owner's email.
   To send from your own domain, verify the domain in Resend and set `CONTACT_FROM_EMAIL`.
