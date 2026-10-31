import Link from "next/link";
import { ArrowDownToLine, ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { certifications, education, experience, principles, skills } from "@/content/profile";
import { ProjectPanel } from "@/components/project-panel";
import { CopyEmail } from "@/components/copy-email";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

function SectionHeading({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <div data-reveal className="mb-10 flex max-w-3xl flex-col gap-4 md:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="display text-4xl md:text-6xl text-balance">
        {title}
      </h2>
      {intro && <p className="text-lg leading-relaxed text-muted text-pretty">{intro}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section aria-labelledby="hero-title" className="container-page pb-16 pt-16 md:pb-24 md:pt-28">
      <div className="flex max-w-4xl flex-col gap-7">
        <p className="hero-rise inline-flex w-fit items-center gap-2 rounded-full border border-hairline px-3 py-1 text-[13px] text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full rounded-full bg-positive opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex size-2 rounded-full bg-positive" />
          </span>
          {site.availability}
        </p>

        <h1 id="hero-title" className="display flex flex-col gap-3 text-balance md:gap-4">
          <span className="text-5xl sm:text-7xl lg:text-[5.75rem]">{site.name}.</span>
          <span className="text-[1.75rem] leading-[1.1] text-muted sm:text-4xl lg:text-[3.25rem]">
            Software engineer across web, mobile and the API behind them.
          </span>
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-muted text-pretty md:text-xl">
          At <strong className="font-medium text-fg">PeekRide</strong>, a rideshare startup live in Atlanta, I work on the
          app, the operations dashboard, the website and the API, from screens to the payment logic behind them.
        </p>

        <div className="hero-rise flex flex-wrap items-center gap-3 [--d:120ms]">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            See the work
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href={site.cv}
            download
            className="inline-flex items-center gap-2 rounded-full border border-hairline px-6 py-3 text-[15px] font-medium transition-colors hover:bg-surface"
          >
            Download CV
            <ArrowDownToLine className="size-4" aria-hidden="true" />
            <span className="sr-only">(PDF)</span>
          </a>
          <div className="ml-1 hidden items-center gap-1 sm:flex">
            <SocialLink href={site.links.linkedin} label="LinkedIn">
              <LinkedInIcon className="size-[18px]" />
            </SocialLink>
            <SocialLink href={site.links.github} label="GitHub">
              <GitHubIcon className="size-[18px]" />
            </SocialLink>
          </div>
        </div>
      </div>

      <dl className="hero-rise mt-14 grid max-w-4xl gap-6 border-t border-hairline pt-6 [--d:200ms] sm:grid-cols-3 md:mt-20">
        {heroProof.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <dt className="order-last text-[13px] leading-snug text-muted">{item.label}</dt>
            <dd className="display text-[1.75rem]">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

const heroProof = [
  { value: "−45%", label: "JavaScript on PeekRide's heaviest dashboard page" },
  { value: "35 → 1", label: "Tables replaced by one shared component on 42 screens" },
  { value: "WCAG AA", label: "Light theme for the PeekRide app, with contrast tests" },
];

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="grid size-11 place-items-center rounded-full text-muted transition-colors hover:bg-surface hover:text-fg"
    >
      {children}
      <span className="sr-only">{label} (opens in a new tab)</span>
    </a>
  );
}

function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="container-page py-16 md:py-24">
      <SectionHeading
        id="work-title"
        eyebrow="Selected work"
        title="Three products in production."
        intro="Each case study covers what was wrong, what I changed and what it measurably did."
      />
      <div className="flex flex-col gap-6 md:gap-8">
        {projects.map((p, i) => (
          <ProjectPanel key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="container-page py-16 md:py-24">
      <SectionHeading id="experience-title" eyebrow="Experience" title="Three years of shipping interfaces." />
      <ol className="flex flex-col">
        {experience.map((role) => (
          <li
            key={role.company}
            data-reveal
            className="grid gap-4 border-t border-hairline py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-12"
          >
            <div className="flex flex-col gap-1">
              <h3 className="display text-2xl">{role.company}</h3>
              <p className="text-[15px]">{role.title}</p>
              <p className="text-[13px] text-muted">
                {role.period}
                {role.context && <> · {role.context}</>}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {role.groups.map((g, i) => (
                <div key={g.label ?? i} className="flex flex-col gap-3">
                  {g.label && <p className="eyebrow">{g.label}</p>}
                  <ul className="flex flex-col gap-2.5">
                    {g.points.map((pt) => (
                      <li key={pt} className="relative pl-5 leading-relaxed text-pretty before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-hairline">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {role.links?.map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex w-fit items-center gap-1.5 text-[15px] font-medium text-accent hover:underline">
                  {l.label}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ))}
              {role.caseStudy && (
                <Link href={role.caseStudy} className="inline-flex w-fit items-center gap-1.5 text-[15px] font-medium text-accent hover:underline">
                  Read the {role.company} case study
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="container-page py-16 md:py-24">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="The tools I use in production."
        intro="Grouped by where I use them day to day."
      />
      <div data-reveal className="grid gap-px overflow-hidden rounded-panel border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((s) => (
          <div key={s.group} className="flex flex-col gap-3 bg-bg p-6">
            <h3 className="eyebrow">{s.group}</h3>
            <ul className="flex flex-col gap-1.5 text-[15px]">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col justify-end bg-bg p-6">
          <a href={site.cv} download className="group inline-flex items-center gap-1.5 text-[15px] font-medium text-accent">
            Full detail in my CV
            <ArrowDownToLine className="size-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            <span className="sr-only">(PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="container-page py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div data-reveal className="flex flex-col gap-5 lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="display text-4xl md:text-6xl text-balance">
            From Figma files to payment logic.
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          <div data-reveal className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted text-pretty">
              <p>
                I studied Computer Science at the University of Ilorin and started in 2023 at Lytical Technology, turning
                Figma designs into React and Tailwind interfaces. I then built learning products for Suwk as a contractor,
                and in 2026 joined PeekRide, where my work now runs from Flutter screens to the Laravel code that charges
                the card.
              </p>
              <p>
                I also build websites for small businesses in Nigeria, where a lead that silently fails to arrive is
                money lost. That taught me to treat reliability as a feature, not an afterthought.
              </p>
            </div>
          </div>

          <div data-reveal className="flex flex-col">
            <h3 className="eyebrow mb-4">How I work</h3>
            {principles.map((p) => (
              <div key={p.title} className="grid gap-1 border-t border-hairline py-4 sm:grid-cols-[13rem_1fr] sm:gap-6">
                <p className="font-display text-[17px] font-semibold tracking-tight">{p.title}</p>
                <p className="text-[15px] leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </div>

          <dl data-reveal className="grid gap-6 border-t border-hairline pt-6 text-[15px] sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <dt className="eyebrow">Education</dt>
              <dd>
                {education.degree}
                <span className="block text-muted">
                  {education.school} · {education.period}
                </span>
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="eyebrow">Certification</dt>
              {certifications.map((c) => (
                <dd key={c.name}>
                  {c.name}
                  <span className="block text-muted">{c.issuer}</span>
                </dd>
              ))}
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="container-page py-16 md:py-24">
      <div data-reveal className="grid gap-10 rounded-panel bg-surface p-6 sm:p-10 lg:grid-cols-2 lg:items-end lg:gap-16 lg:p-14">
        <div className="flex flex-col gap-6">
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="display text-4xl md:text-6xl">
            Let&apos;s talk.
          </h2>
          <p className="text-lg leading-relaxed text-muted text-pretty">
            I&apos;m looking for a full-time remote role on a product team. Email is the quickest way to reach me.
          </p>
        </div>

        <ul className="flex flex-col gap-1 text-[15px]">
          <li className="flex items-center justify-between gap-2 rounded-xl bg-bg py-1.5 pl-4 pr-1.5">
            <a href={`mailto:${site.email}`} className="truncate font-medium hover:text-accent">
              {site.email}
            </a>
            <CopyEmail email={site.email} />
          </li>
          <ContactRow href={site.links.linkedin} label="LinkedIn" external />
          <ContactRow href={site.links.github} label="GitHub" external />
          <ContactRow href={site.cv} label="CV (PDF)" download />
        </ul>
      </div>
    </section>
  );
}

function ContactRow({ href, label, external, download }: { href: string; label: string; external?: boolean; download?: boolean }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
        className="flex items-center justify-between rounded-xl px-4 py-3 transition-colors hover:bg-bg"
      >
        <span className="font-medium">{label}</span>
        {download ? (
          <ArrowDownToLine className="size-4 text-muted" aria-hidden="true" />
        ) : (
          <ArrowUpRight className="size-4 text-muted" aria-hidden="true" />
        )}
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    </li>
  );
}
