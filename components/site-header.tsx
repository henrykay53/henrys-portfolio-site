import Link from "next/link";
import { ArrowDownToLine } from "lucide-react";
import { nav, site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-hairline/60 bg-bg/80 backdrop-blur-xl backdrop-saturate-150">
        <div className="container-page flex h-14 items-center justify-between gap-6">
          <Link href="/" className="font-display text-[15px] font-semibold tracking-tight">
            {site.name}
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-7 text-[13px]">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition-colors hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <ThemeToggle />
            <a
              href={site.cv}
              download
              className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-fg px-3.5 py-1.5 text-[13px] font-medium text-bg transition-opacity hover:opacity-85"
            >
              CV
              <ArrowDownToLine className="size-3.5" aria-hidden="true" />
              <span className="sr-only">(PDF download)</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile: section links live in a floating bar within thumb reach. */}
      <nav
        aria-label="Sections"
        className="fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 flex justify-center px-4 md:hidden"
      >
        <ul className="flex items-center gap-0.5 rounded-full border border-hairline/70 bg-bg/85 p-1 text-[13px] font-medium shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] backdrop-blur-xl backdrop-saturate-150">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-full px-3.5 py-2 text-muted transition-colors active:bg-surface hover:text-fg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
