import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";
import { ProjectVisual } from "@/components/project-panel";
import { MetricList } from "@/components/metrics";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  const title = `${project.name} case study`;
  return {
    title,
    description: project.tagline + " " + project.summary.split(". ")[0] + ".",
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { type: "article", title: `${title} · ${site.name}`, url: `/work/${project.slug}` },
    twitter: { card: "summary_large_image", title: `${title} · ${site.name}` },
  };
}

export default async function CaseStudy({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article aria-labelledby="case-title">
      <header className="container-page pb-16 pt-10 md:pb-20 md:pt-14">
        <Link
          href="/#work"
          className="hero-rise inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-fg"
        >
          <ArrowLeft className="size-3.5" aria-hidden="true" />
          All work
        </Link>

        <div className="mt-10 flex max-w-4xl flex-col gap-6 md:mt-16">
          <p className="eyebrow hero-rise [--d:60ms]">{project.kind}</p>
          <h1 id="case-title" className="display hero-rise text-5xl [--d:120ms] sm:text-6xl md:text-8xl">
            {project.name}
          </h1>
          <p className="hero-rise text-xl leading-relaxed text-muted text-pretty [--d:200ms] md:text-2xl">
            {project.tagline}
          </p>
        </div>

        <dl className="hero-rise mt-12 grid gap-6 border-t border-hairline pt-6 text-[15px] [--d:280ms] sm:grid-cols-2 lg:grid-cols-4">
          <Meta label="Role">{project.role}</Meta>
          <Meta label="Timeline">{project.period}</Meta>
          <Meta label="Stack">{project.stack.join(", ")}</Meta>
          <Meta label="Links">
            <ul className="flex flex-col gap-1">
              {project.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Meta>
        </dl>
      </header>

      <div className="container-page">
        <div className="hero-rise rounded-panel bg-surface px-6 py-12 [--d:360ms] sm:px-12 md:py-20">
          <div className="mx-auto max-w-3xl">
            <ProjectVisual project={project} priority />
          </div>
        </div>
      </div>

      <section aria-labelledby="overview-title" className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          <h2 id="overview-title" data-reveal className="display text-3xl md:text-4xl">
            Overview
          </h2>
          <div className="flex flex-col gap-12">
            <p data-reveal className="text-xl leading-relaxed text-pretty md:text-2xl">
              {project.summary}
            </p>
            <div data-reveal>
              <h3 className="eyebrow mb-4">Outcomes</h3>
              <MetricList metrics={project.metrics} compact={project.metrics.length < 3} />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="chapters-title" className="container-page pb-16 md:pb-20">
        <h2 id="chapters-title" className="sr-only">
          What I worked on
        </h2>
        <ol className="flex flex-col">
          {project.chapters.map((c, i) => (
            <li
              key={c.title}
              data-reveal
              className="grid gap-6 border-t border-hairline py-12 md:py-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16"
            >
              <div className="flex flex-col gap-3">
                <p className="eyebrow tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                  {c.area && <> · {c.area}</>}
                </p>
                <h3 className="display text-2xl md:text-3xl text-balance">{c.title}</h3>
              </div>
              <div className="flex flex-col gap-6 text-[17px] leading-relaxed">
                <div>
                  <p className="eyebrow mb-2">The problem</p>
                  <p className="text-pretty">{c.problem}</p>
                </div>
                <div>
                  <p className="eyebrow mb-2">What I did</p>
                  <ul className="flex flex-col gap-2.5">
                    {c.approach.map((a) => (
                      <li
                        key={a}
                        className="relative pl-5 text-pretty before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-accent"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                {c.result && (
                  <p className="rounded-2xl bg-surface px-5 py-4 text-pretty">
                    <span className="font-semibold">Result: </span>
                    {c.result}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {project.alsoShipped.length > 0 && (
        <section aria-labelledby="also-title" className="container-page pb-20 md:pb-24">
          <div data-reveal className="grid gap-6 border-t border-hairline pt-12 md:pt-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
            <h2 id="also-title" className="display text-2xl md:text-3xl">
              Also shipped
            </h2>
            <ul className="flex flex-col gap-3 text-[17px] leading-relaxed">
              {project.alsoShipped.map((item) => (
                <li
                  key={item}
                  className="relative pl-5 text-pretty before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-hairline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <nav aria-label="Next case study" className="container-page pb-24">
        <Link
          href={`/work/${next.slug}`}
          data-reveal
          className="group flex flex-col gap-3 rounded-panel bg-surface p-8 transition-colors hover:bg-surface-2 sm:p-12"
        >
          <span className="eyebrow">Next case study</span>
          <span className="display flex items-center gap-3 text-4xl md:text-6xl">
            {next.name}
            <ArrowRight className="size-8 transition-transform group-hover:translate-x-1 md:size-10" aria-hidden="true" />
          </span>
          <span className="text-muted">{next.tagline}</span>
        </Link>
      </nav>
    </article>
  );
}

function Meta({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <dt className="eyebrow">{label}</dt>
      <dd className="leading-relaxed">{children}</dd>
    </div>
  );
}
