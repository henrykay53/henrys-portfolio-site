export const site = {
  name: "Henry Kolawole",
  title: "Software Engineer",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://hnrykola.netlify.app").replace(/\/$/, ""),
  description:
    "Henry Kolawole is a software engineer working across web, mobile and API at PeekRide, a rideshare startup live in Atlanta. React, Next.js, TypeScript and Flutter.",
  availability: "Open to full-time remote roles",
  email: "henrykay53@gmail.com",
  cv: "/henry-kolawole-cv.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/henry-kolawole-510ab41b4",
    github: "https://github.com/henrykay53",
  },
} as const;

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
] as const;
