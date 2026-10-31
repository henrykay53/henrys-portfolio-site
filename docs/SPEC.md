# Portfolio — Project Specification

Living document. Records approved decisions, content rules and progress.
Branch: `redesign` (cut from `staging`). `master` and `staging` untouched until approved.

## 1. Positioning (approved)

- **Name / title:** Henry Kolawole — Software Engineer.
- **Audience:** hiring managers and recruiters at remote-first companies. Goal: full-time remote role.
- **Availability:** "Open to opportunities" (full-time, remote).
- **Core message:** ships across the whole product (iOS/Android app, operations dashboard,
  website, API) at PeekRide, a rideshare startup live in metro Atlanta. Cares about the
  fixes users never notice: payments that don't fail silently, pages that render before the
  JavaScript arrives, screens that pass contrast checks.

## 2. Design direction (approved: Concept A, "Keynote")

Apple-inspired, premium, minimal. The work is the product.

| Token | Light | Dark |
|---|---|---|
| Background | `#FBFBFD` | `#000000` |
| Surface (cards) | `#F2F2F5` | `#161618` |
| Text | `#1D1D1F` | `#F5F5F7` |
| Secondary text | `#6E6E73` | `#A1A1A6` |
| Hairline | `#D2D2D7` | `#2C2C2E` |
| Accent | `#3B2DD6` | `#8B83FF` |

- Accent indigo matches the CV header so CV and site read as one identity.
- **Type:** Inter Tight (display, tight tracking) + Inter (body), via `next/font` (self-hosted, no layout shift).
- **Layout:** 1120px content width, 8px spacing grid, large rounded surfaces (28px).
- **Imagery:** real screenshots in device frames (phone / browser).
- **Motion:** fade-and-rise on scroll (CSS + IntersectionObserver, no animation library).
  Fully disabled under `prefers-reduced-motion`.
- **Metrics:** borrowed from Concept C — before → after figures are the primary evidence.
- **Mobile:** visuals stack above text; floating bottom nav for thumb reach.

## 3. Information architecture

- `/` — Hero · Selected work · Experience · Skills · About · Contact
- `/work/peekride`, `/work/kayglo-citadel`, `/work/e-consultants` — case studies
- `/henry-kolawole-cv.pdf` — CV download
- `/api/contact` — contact endpoint (unused since the form was removed, 2026-10-31)
- `sitemap.xml`, `robots.txt`, OG images, JSON-LD (`Person`)

## 4. Content rules (mandatory)

1. Every claim must trace to the CV or to a verified commit/file in the project repos.
2. Numbers the CV marks "estimated" stay marked as estimates.
3. **Never publish:** production transaction amounts or record IDs, internal ticket IDs,
   vendor costs, analytics/ads account IDs, exploitable detail of security bugs, unreleased
   features, client-private findings, or invented/placeholder reviews and stats.
4. Security fixes are described as classes of bug fixed, not as exploit recipes.
5. No code-repository links (all project repos are private).
6. Banned phrasing: "passionate", "tech enthusiast", "results-driven", "love solving problems".

### Verification notes (from codebase review, 2026-10-30)

- E-Consultants is a **fumigation & pest control** company (not "corporate site").
- E-Consultants "Lighthouse 100 SEO / 94 a11y" — **no evidence found**; not published
  unless re-measured.
- Kayglo "every enquiry reaches WhatsApp" — partly; WhatsApp-default change is uncommitted.
  Published wording: every lead gets a reference and a WhatsApp hand-off.
- Kayglo coverage is "13 states + FCT".
- PeekRide "Manage Account 4 tabs → 1 page" is accurate; rating + stats are on the driver
  *profile* page.
- Left out pending confirmation: "Name Your Price", busy-driver dispatch, counter-offer fare fix.

## 5. Technical decisions

- **Next.js 16 App Router, React 19, TypeScript, Tailwind v4** — existing stack, kept.
  Static generation for every page; the only server code is `/api/contact`.
- **Removed:** framer-motion, MDX/blog stack, shadcn CLI/radix, cva, clsx, tailwind-merge,
  gray-matter, `git` npm package. CSS transitions cover all motion needs.
- **Kept:** `next-themes` (no-flash theme switching), `lucide-react` (tree-shaken icons).
- **Content** lives in typed modules under `content/`, separate from presentation.
- **Contact form:** server route sends via Resend's HTTP API (no SDK). Validation, honeypot,
  minimum fill time, per-IP rate limit, plain-text email only. If `RESEND_API_KEY` is not set
  or sending fails, the UI offers a pre-filled `mailto:` so no message is lost.
- **Hosting:** unchanged for now (Netlify). Site URL from `NEXT_PUBLIC_SITE_URL`.

### Environment variables

| Name | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | recommended | Canonical URL for metadata/sitemap (default `https://hnrykola.netlify.app`) |
| `RESEND_API_KEY` | for form email | Server-only. Enables sending |
| `CONTACT_TO_EMAIL` | optional | Inbox (default `henrykay53@gmail.com`) |
| `CONTACT_FROM_EMAIL` | optional | Verified sender (default `Portfolio <onboarding@resend.dev>`) |

## 6. Progress

- [x] Discovery, codebase verification, positioning
- [x] Design direction approved (A)
- [x] Assets: screenshots captured, CV added
- [x] Build: design tokens, layout, home sections, case-study pages
- [x] Contact API (validation, honeypot, min fill time, rate limit, origin check, mailto fallback)
- [x] SEO: metadata, OG images (bundled Inter Tight), sitemap, robots, JSON-LD, canonical URLs
- [x] Security headers incl. CSP
- [x] QA: production build; Playwright functional suite (38 checks pass); desktop/mobile, light/dark,
      no console errors; Lighthouse: home 97/100/100/100, case studies 100/100/100/100
- [x] Independent audit (2026-10-30) and fixes: hero hierarchy + proof strip, PeekRide case study
      shortened (4 chapters + "Also shipped"), independent client work added to Experience,
      stronger Kayglo headline metric, mobile clipping/overlap fixes, large Twitter cards,
      placeholder contrast, rate-limit IP source, CSP
- [x] Contact form removed from the Contact section at Henry's request (2026-10-31);
      contact is email (with copy), LinkedIn, GitHub and CV
- [ ] Waiting on Henry: items in section 7
- [ ] Deployment (instructions in README)

## 7. Open questions for Henry

- PeekRide screenshots currently show a test account ("Test Rider", $0). Better: realistic seeded
  data, plus screens that show the work (decline-reason prompt, shared table with fake data,
  light vs dark theme).
- Time zone / location line for remote hiring (e.g. "Based in …, UTC+1").
- Suwk / Lytical percentages come from the CV but have no measurement behind them on record.
  Keep, mark as estimates, or replace with concrete facts?
- Are "Name Your Price" and busy-driver dispatch released?
- Portrait removed at Henry's request (2026-10-31); About is text only.
- Audit items deferred: tokenised type scale (≈15 arbitrary sizes), theme toggle state announcement.
