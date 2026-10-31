import { ogImage, ogSize } from "@/lib/og";
import { getProject, projects } from "@/content/projects";
import { site } from "@/content/site";

export const alt = `Case study card from ${site.name}'s portfolio`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)!;
  return ogImage({ eyebrow: `Case study · ${site.name}`, title: project.name, subtitle: project.tagline });
}
