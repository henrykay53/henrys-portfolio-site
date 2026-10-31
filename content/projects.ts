export type Metric = {
  before?: string;
  after: string;
  label: string;
};

export type Visual = {
  kind: "phone" | "browser";
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Shown in the browser frame's address bar. */
  url?: string;
};

export type Chapter = {
  title: string;
  /** Which part of the product this touched, e.g. "Mobile app". */
  area?: string;
  problem: string;
  approach: string[];
  result?: string;
};

export type Project = {
  slug: string;
  name: string;
  kind: string;
  tagline: string;
  summary: string;
  role: string;
  period: string;
  stack: string[];
  links: { label: string; href: string }[];
  metrics: Metric[];
  visuals: Visual[];
  chapters: Chapter[];
  /** Smaller wins, one line each. */
  alsoShipped: string[];
};

export const projects: Project[] = [
  {
    slug: "peekride",
    name: "PeekRide",
    kind: "Rideshare platform · Atlanta, GA",
    tagline: "One account to ride and drive. I work on all four parts of it.",
    summary:
      "PeekRide is a rideshare startup live on the App Store and Google Play in metro Atlanta. I joined in July 2026 as a software engineer on a small team and work across the Flutter app, the Next.js operations dashboard, the marketing website and the Laravel API, from screens to the payment logic behind them.",
    role: "Software Engineer, Frontend & Mobile",
    period: "July 2026 – present",
    stack: [
      "Flutter",
      "Dart",
      "Next.js 15",
      "React 19",
      "TanStack Query",
      "Laravel 11",
      "Stripe",
      "Pusher",
    ],
    links: [
      { label: "App Store", href: "https://apps.apple.com/us/app/peekride/id6757538305" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.peekride" },
    ],
    metrics: [
      { before: "934 kB", after: "510 kB", label: "JavaScript on the dashboard's heaviest page" },
      { before: "35", after: "1", label: "Table implementations, now one shared component on 42 screens" },
      { before: "2.08:1", after: "4.86:1", label: "Worst status-colour contrast in light mode (AA needs 4.5)" },
    ],
    visuals: [
      {
        kind: "phone",
        src: "/work/peekride-driver-home.jpg",
        alt: "PeekRide driver home screen: a dark map of the city with a Driver / Rider switch and a Drive Now button.",
        width: 1206,
        height: 2622,
      },
      {
        kind: "phone",
        src: "/work/peekride-profile.jpg",
        alt: "PeekRide driver profile screen showing the rider rating card and a grid of lifetime highlights.",
        width: 1206,
        height: 2622,
      },
    ],
    alsoShipped: [
      "Rebuilt Manage Account from four tabs into one scrolling page, and gave the driver profile a rating card and lifetime stats.",
      "Built a rich-text editor so ops publish the website's FAQ and legal pages themselves, with the HTML sanitised on save and again on render.",
      "Rewrote account deletion to anonymise personal data across about 80 tables (previously about 25) while keeping trip history intact.",
      "Replaced 36 hard-coded dollar amounts in the dashboard with one currency-aware formatter.",
      "Repaired the Flutter test suite: regenerating stale mocks took failing tests from 169 to 28 and passing tests from 144 to 226.",
      "Translated the marketing website into Spanish with next-intl, and made its animations respect reduced-motion settings.",
    ],
    chapters: [
      {
        title: "Payment failures people can recover from",
        area: "Mobile app · API",
        problem:
          "When a card was declined, riders saw a generic toast and had no idea what to do next. Behind the scenes, the API kept retrying cards the bank had already hard-declined, and payment retries reused the same idempotency key, so a retried capture could never succeed.",
        approach: [
          "Passed the bank's actual decline reason through to the app and replaced the toast with a prompt offering two one-tap fixes: add a different card, or top up Peek Cash.",
          "Stopped retrying hard declines on the server, and made an unpaid balance block new bookings.",
          "Generated a fresh idempotency key for each payment attempt so legitimate retries go through with Stripe.",
        ],
        result: "A failed payment now tells the rider why and gives them a way forward.",
      },
      {
        title: "A dashboard that paints before the JavaScript arrives",
        area: "Admin dashboard",
        problem:
          "The operations dashboard wrapped every page in a client-side mount gate, so the server-rendered HTML was just a spinner until 400–900 kB of JavaScript had downloaded and run. The vehicles page was the worst in the app.",
        approach: [
          "Removed the gate so server-rendered content shows immediately.",
          "Dropped a heavyweight charting dependency from the vehicles page, taking it from 934 kB to 510 kB (−45%).",
          "Fixed a class of bug where server-side query caching could carry data between requests, so each request now gets its own cache.",
        ],
        result: "First paint no longer waits for the bundle, and the heaviest page ships 45% less JavaScript.",
      },
      {
        title: "One table instead of thirty-five",
        area: "Admin dashboard",
        problem:
          "Every list screen had its own hand-built table, each with slightly different search, filtering and export behaviour (or none).",
        approach: [
          "Built one shared data-table component with debounced search, filters and CSV/Excel export.",
          "Sanitised exported cells against spreadsheet formula injection, and lazy-loaded the Excel library so it only downloads when someone exports.",
          "Migrated 42 screens onto it and deleted all 35 bespoke tables.",
        ],
        result: "Ops get the same search, filter and export everywhere, and new screens get them for free.",
      },
      {
        title: "A light theme that passes WCAG AA, and tablets that don't zoom",
        area: "Mobile app",
        problem:
          "The app was designed dark-first. On light-mode phones, status colours measured as low as 2.08:1 against white. On iPads, the screen-scaling library blew text up about 2× on an 820-point iPad and about 2.5× on an iPad Pro.",
        approach: [
          "Measured contrast across the app. The audit flagged 203 failing colour pairs; I fixed 86 in the first pass, starting with status colours (now 4.86–5.56:1), and moved 90 text and 74 background colours onto theme tokens.",
          "Wrote tests that fail if any light-theme text colour drops below 4.5:1, or if the dark theme changes by accident.",
          "Added a System / Light / Dark picker.",
          "Fixed tablet text scaling (about 400 sizes across 30 files) and wrapped 158 screens in a responsive container with a sensible column width.",
        ],
        result: "Readable in both themes, on phones and tablets, with tests guarding the contrast.",
      },
    ],
  },
  {
    slug: "kayglo-citadel",
    name: "Kayglo Citadel",
    kind: "Solar installer website · Nigeria",
    tagline: "A solar company's website, built so no enquiry gets lost.",
    summary:
      "Kayglo Citadel installs solar, inverter and battery systems for homes and businesses across 13 Nigerian states and the FCT. I built their website on my own: service and solution pages, case studies, a generator-cost calculator, and a four-step assessment form that hands every lead to the team.",
    role: "Sole developer, design and build",
    period: "July – October 2026",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "GA4", "Resend", "sharp"],
    links: [{ label: "Live site", href: "https://kayglocitadel.com" }],
    metrics: [
      { after: "4 steps", label: "Assessment form, with GA4 showing exactly where visitors drop out" },
      { before: "8.2 MB", after: "2.9 MB", label: "Customer project photos, with GPS location removed" },
      { after: "10", label: "Analytics events covering every step from first visit to lead" },
    ],
    visuals: [
      {
        kind: "browser",
        src: "/work/kayglo-desktop.jpg",
        alt: "Kayglo Citadel homepage on desktop: the headline 'End the blackouts. Silence the generator.' beside an illustrated map of Nigeria.",
        width: 2880,
        height: 1800,
        url: "kayglocitadel.com",
      },
      {
        kind: "phone",
        src: "/work/kayglo-mobile.jpg",
        alt: "Kayglo Citadel homepage on a phone, with the headline and a full-width 'Get a free quote' button.",
        width: 1170,
        height: 2532,
      },
    ],
    alsoShipped: [
      "Cut the mobile hero copy from 76 to 50 words and its height from 1,523 px to 1,080 px, so the call to action shows sooner.",
      "Fixed a mobile menu that clipped links, using dynamic-viewport sizing, and made it inert when closed so keyboard users can't land inside it.",
      "Built a generator-cost calculator that hands visitors straight into the assessment.",
    ],
    chapters: [
      {
        title: "A form that never says thank you for a lost lead",
        problem:
          "The lead endpoint treated the email provider's response as success without checking it. The provider returns errors instead of throwing them, so a visitor could see “thank you” while their enquiry went nowhere.",
        approach: [
          "Checked the provider's result and returned a real error when delivery fails.",
          "On failure, showed a fallback that keeps every answer the visitor gave and offers to send it by WhatsApp, phone or email instead.",
          "Gave every lead a reference number and a pre-written, sectioned WhatsApp message, so the team can match a chat to a submission.",
          "Opened WhatsApp synchronously inside the submit handler so browsers don't block it as a pop-up, with a keepalive request as a backup.",
        ],
        result: "A failed submission now gives the visitor another way to reach the team, and keeps everything they entered.",
      },
      {
        title: "A four-step assessment you can measure",
        problem: "The business had no way of knowing where interested visitors gave up.",
        approach: [
          "Built a four-step assessment with validation on each step; steps stay mounted so answers survive going back and forth.",
          "Sent a GA4 event for each step, plus calculator, contact and WhatsApp events: 10 in all.",
          "Recorded first- and last-touch attribution (UTM parameters, ad click IDs, visit count) and attached it to every lead.",
          "Added a honeypot field to keep bots out without a CAPTCHA.",
        ],
        result: "GA4 shows exactly which step people drop out at, and each lead arrives with where it came from.",
      },
      {
        title: "Earning trust before launch",
        problem:
          "The first build included placeholder review markup (an aggregate star rating) and testimonials that weren't from real customers. Fake review markup can earn a Google penalty, and it isn't honest.",
        approach: [
          "Removed the hard-coded rating; the review markup now only renders once real reviews are configured.",
          "Hid unverified testimonials behind a “verified” flag.",
          "Fixed an invalid structured-data business type so search engines read the business correctly.",
        ],
      },
      {
        title: "Customer photos without customers' locations",
        problem: "Nine project photos on the site still carried the GPS coordinates of customers' homes in their metadata.",
        approach: [
          "Wrote an image pipeline that rotates, resizes to a 1600 px long edge, watermarks, and strips all metadata.",
        ],
        result: "No location data on any public photo, and the photo set went from 8.2 MB to 2.9 MB.",
      },
    ],
  },
  {
    slug: "e-consultants",
    name: "E-Consultants Global",
    kind: "Pest control company website · Lagos",
    tagline: "A React site that search engines and link previews can actually read.",
    summary:
      "E-Consultants Global Tiija is a licensed fumigation and pest control company in Lagos. I built their first site in 2025 and rewrote it as “2.0” in 2026: service and area pages, a blog, quote and callback forms, and the SEO plumbing a single-page React app usually lacks.",
    role: "Sole developer",
    period: "Aug 2025 – Oct 2026",
    stack: ["React", "Vite", "Tailwind CSS", "React Router", "react-helmet-async", "Netlify", "GA4"],
    links: [{ label: "Live site", href: "https://econsultantsglobaltiija.com.ng" }],
    metrics: [
      { after: "25", label: "Routes prerendered to static HTML, each with its own title and preview" },
      { before: "1.08 MB", after: "189 kB", label: "Largest photo after recompression (−82%)" },
    ],
    visuals: [
      {
        kind: "browser",
        src: "/work/econ-desktop.jpg",
        alt: "E-Consultants Global homepage on desktop: the headline 'Pests gone. Quietly, properly, today.' beside a photo of a uniformed technician.",
        width: 2880,
        height: 1800,
        url: "econsultantsglobaltiija.com.ng",
      },
      {
        kind: "phone",
        src: "/work/econ-mobile.jpg",
        alt: "E-Consultants Global homepage on a phone, with Call and WhatsApp buttons below the headline.",
        width: 1170,
        height: 2532,
      },
    ],
    alsoShipped: [
      "Moved the site to its .com.ng domain with forced 301 redirects, and fixed a sitemap that still pointed at the old address.",
      "Added a live “answering calls now” badge computed in Lagos time from the business hours.",
    ],
    chapters: [
      {
        title: "Link previews that match the page",
        problem:
          "As a client-rendered React app, every page served the same HTML shell. WhatsApp, Facebook and LinkedIn don't run JavaScript, so every shared link previewed as the homepage.",
        approach: [
          "Added a server-render build step that prerenders all 25 routes to static HTML, each with its own title, description, canonical URL and Open Graph tags.",
          "Found and fixed a bug where tags marked as priority were silently dropped, which had removed canonical and og:url tags from every page.",
          "Wrote pages as flat files so the host doesn't redirect /about to /about/, and replaced soft 404s with a real 404 page.",
        ],
        result: "Each shared link now shows the right page, and every route has a correct canonical URL.",
      },
      {
        title: "One source of truth for the business",
        problem: "Routes, sitemap and business details were maintained in separate places and could drift apart.",
        approach: [
          "Generated the sitemap and robots.txt from the same route list the app uses.",
          "Moved the business details into one config, matched to the Google Business Profile, which feeds the pages and the PestControlService structured data.",
          "Escaped the JSON-LD so content can't break out of its script tag.",
        ],
      },
      {
        title: "Lighter pages, and leads that reach the team",
        problem: "Photos were straight off the camera, and leads depended on a WhatsApp pop-up that browsers can block.",
        approach: [
          "Recompressed images (for example 1.08 MB → 189 kB and 785 kB → 163 kB), lazy-loaded routes and split vendor bundles.",
          "Made the quote and callback forms submit to Netlify Forms (with a honeypot) before opening WhatsApp, so a blocked pop-up doesn't lose the lead.",
          "Added GA4 events for every call, email and WhatsApp tap, tagged with which button was used.",
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
