export type Role = {
  company: string;
  title: string;
  period: string;
  context?: string;
  caseStudy?: string;
  links?: { label: string; href: string }[];
  groups: { label?: string; points: string[] }[];
};

export const experience: Role[] = [
  {
    company: "PeekRide",
    title: "Software Engineer, Frontend & Mobile",
    period: "07/2026 – Present",
    context: "Remote · Rideshare startup, Atlanta, GA",
    caseStudy: "/work/peekride",
    groups: [
      {
        label: "Mobile app · Flutter",
        points: [
          "Rebuilt Manage Account from four tabs into one page, and gave the driver profile a rating card and lifetime stats.",
          "Shipped a light theme measured against WCAG AA, and fixed text that rendered at up to 2.5× size on iPads.",
          "Turned silent payment failures into recoverable ones: riders see the bank's real decline reason and a one-tap fix.",
        ],
      },
      {
        label: "Admin dashboard · Next.js, React 19, TanStack Query",
        points: [
          "Removed a loading gate that held back first paint until up to 900 kB of JS had loaded; cut the heaviest page's JS by 45%.",
          "Replaced 35 one-off tables with one shared table on 42 screens, with search, filters and CSV/Excel export.",
          "Gave ops a rich-text editor to publish the website's FAQ and legal pages themselves.",
        ],
      },
      {
        label: "API · Laravel, Stripe",
        points: [
          "Fixed payment retries and stopped retrying hard-declined cards; rewrote account deletion to anonymise data across about 80 tables.",
        ],
      },
    ],
  },
  {
    company: "Independent",
    title: "Client websites",
    period: "08/2025 – Present",
    context: "Small businesses in Nigeria",
    links: [
      { label: "Kayglo Citadel case study", href: "/work/kayglo-citadel" },
      { label: "E-Consultants case study", href: "/work/e-consultants" },
    ],
    groups: [
      {
        points: [
          "Kayglo Citadel (solar installer): built the site solo in Next.js 16 with a four-step assessment, GA4 tracking for each step, and a fallback so a failed submission never loses the visitor's answers.",
          "E-Consultants Global (pest control): built the site in 2025 and rewrote it in 2026 with 25 prerendered routes, so every page has correct titles, previews and canonical URLs.",
        ],
      },
    ],
  },
  {
    company: "Suwk Technologies",
    title: "React Developer (Contract)",
    period: "04/2025 – 10/2025",
    context: "Vocational training, Africa",
    groups: [
      {
        points: [
          "Built an LMS as a Progressive Web App that reached 1,000+ learners, cutting device-related drop-offs by an estimated 40%.",
          "Built a scholarship application portal used by hundreds of applicants, cutting manual processing by 50%.",
          "Cut feature development time by 30% with reusable UI components and shared Zustand state.",
        ],
      },
    ],
  },
  {
    company: "Lytical Technology",
    title: "React Developer",
    period: "07/2023 – 04/2025",
    groups: [
      {
        points: [
          "Reduced design-to-development discrepancies by 40% by turning Figma designs into pixel-accurate React and Tailwind interfaces.",
          "Reduced UI bugs by 20–30% through code reviews with senior engineers, and led the team's adoption of CI/CD.",
        ],
      },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Dart", "PHP", "HTML", "CSS"] },
  { group: "Web", items: ["React 19", "Next.js (App Router)", "Tailwind CSS", "shadcn/ui", "Ant Design", "Framer Motion"] },
  { group: "Mobile", items: ["Flutter", "iOS & Android", "Theming", "Tablet layouts", "Google Maps", "Push notifications"] },
  { group: "State & data", items: ["TanStack Query", "Zustand", "React Hook Form", "REST APIs", "Pusher"] },
  { group: "Backend", items: ["Laravel", "PostgreSQL", "Stripe"] },
  { group: "Quality", items: ["Accessibility (WCAG)", "Performance", "SEO", "i18n", "PWA", "Vitest", "Mockito"] },
  { group: "Delivery", items: ["Git", "CI/CD", "Vercel", "Netlify", "AWS Amplify", "Figma", "AI-assisted development"] },
];

export const education = {
  degree: "B.Sc., Computer Science",
  school: "University of Ilorin",
  period: "2018 – 2022",
};

export const certifications = [{ name: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy" }];

/** How I work, each point grounded in shipped work. */
export const principles = [
  {
    title: "Measure first",
    body: "Contrast ratios, bundle sizes, image weights. I fix what the numbers show and quote the before and after.",
  },
  {
    title: "Fail loudly, recover gracefully",
    body: "A payment that fails silently or a form that says thanks for a lost lead is worse than a crash. Errors should reach the user with a way forward.",
  },
  {
    title: "Leave a guard behind",
    body: "When I fix a class of bug, I add the test or the shared component that stops it coming back.",
  },
];
