import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { BrowserFrame, PhoneFrame } from "./frames";
import { MetricList } from "./metrics";

export function ProjectVisual({ project, priority }: { project: Project; priority?: boolean }) {
  const [primary, secondary] = project.visuals;

  if (primary.kind === "phone") {
    // Two phones, slightly offset.
    return (
      <div className="flex items-end justify-center gap-4 sm:gap-6">
        <PhoneFrame visual={primary} sizes="(min-width: 1024px) 240px, 40vw" priority={priority} className="w-[42%] max-w-[240px]" />
        {secondary && (
          <PhoneFrame visual={secondary} sizes="(min-width: 1024px) 240px, 40vw" className="w-[42%] max-w-[240px] sm:-translate-y-8" />
        )}
      </div>
    );
  }

  // Browser with a phone overlapping its corner.
  return (
    <div className="relative pb-6 pr-[12%]">
      <BrowserFrame visual={primary} sizes="(min-width: 1024px) 560px, 90vw" priority={priority} />
      {secondary && (
        <div className="absolute bottom-0 right-0 w-[24%] max-w-[150px]">
          <PhoneFrame visual={secondary} sizes="(min-width: 1024px) 150px, 25vw" small />
        </div>
      )}
    </div>
  );
}

export function ProjectPanel({ project, index }: { project: Project; index: number }) {
  return (
    <article
      data-reveal
      className="group relative overflow-hidden rounded-panel bg-surface"
      aria-labelledby={`project-${project.slug}`}
    >
      <div className="grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:p-14">
        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
          <ProjectVisual project={project} />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="eyebrow">{project.kind}</p>
            <h3 id={`project-${project.slug}`} className="display text-[2.25rem] md:text-5xl">
              {project.name}
            </h3>
            <p className="text-lg leading-relaxed text-muted text-pretty">{project.tagline}</p>
          </div>

          <MetricList metrics={project.metrics.slice(0, 2)} compact />

          <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.stack.slice(0, 5).map((s) => (
              <li key={s} className="rounded-full border border-hairline px-2.5 py-1 text-xs text-muted">
                {s}
              </li>
            ))}
          </ul>

          <Link
            href={`/work/${project.slug}`}
            className="inline-flex w-fit items-center gap-1.5 text-[15px] font-medium text-accent after:absolute after:inset-0 after:content-['']"
          >
            Read the case study
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            <span className="sr-only">: {project.name}</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
