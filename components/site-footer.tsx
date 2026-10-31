import { site } from "@/content/site";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="border-t border-hairline pb-28 pt-10 md:pb-10">
      <div className="container-page flex flex-col gap-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js and TypeScript.
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-fg">
              {site.email}
            </a>
          </li>
          <li>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-fg"
            >
              <LinkedInIcon className="size-4" />
              <span className="sr-only">LinkedIn (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-colors hover:text-fg"
            >
              <GitHubIcon className="size-4" />
              <span className="sr-only">GitHub (opens in a new tab)</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
