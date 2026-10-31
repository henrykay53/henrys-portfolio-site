import Image from "next/image";
import type { Visual } from "@/content/projects";

type FrameProps = {
  visual: Visual;
  /** Thinner bezel for small inset phones. */
  small?: boolean;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** A phone silhouette: the screenshot is cropped to the device's screen ratio. */
export function PhoneFrame({ visual, sizes, priority, small, className = "" }: FrameProps) {
  const outer = small ? "rounded-[1.6rem] p-[0.3rem]" : "rounded-[2.6rem] p-[0.55rem]";
  const inner = small ? "rounded-[1.3rem]" : "rounded-[2.1rem]";
  return (
    <div className={`relative bg-frame shadow-[0_30px_60px_-30px_rgba(0,0,0,0.45)] ${outer} ${className}`}>
      <div className={`relative aspect-[1206/2622] overflow-hidden bg-black ${inner}`}>
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

/** A minimal browser window with traffic lights and an address bar. */
export function BrowserFrame({ visual, sizes, priority, className = "" }: FrameProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-hairline bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-hairline px-4 py-2.5" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        {visual.url && (
          <div className="mx-auto max-w-[60%] truncate rounded-md bg-bg px-3 py-0.5 text-center text-[11px] text-muted">
            {visual.url}
          </div>
        )}
        <div className="w-[42px]" />
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={visual.src}
          alt={visual.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
