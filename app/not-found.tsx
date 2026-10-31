import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-start justify-center gap-6 py-24">
      <p className="eyebrow">404</p>
      <h1 className="display text-5xl md:text-7xl">This page doesn&apos;t exist.</h1>
      <p className="text-lg text-muted">The link may be old, or the address may have a typo.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[15px] font-medium text-accent-fg transition-opacity hover:opacity-90"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to the homepage
      </Link>
    </section>
  );
}
