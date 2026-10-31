import { ArrowRight } from "lucide-react";
import type { Metric } from "@/content/projects";

export function MetricList({ metrics, compact = false }: { metrics: Metric[]; compact?: boolean }) {
  return (
    <dl className={`grid gap-x-8 gap-y-6 ${compact ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col gap-1.5 border-t border-hairline pt-4">
          <dt className="order-last text-[13px] leading-snug text-muted">{m.label}</dt>
          <dd className="flex flex-col gap-0.5">
            {m.before ? (
              <span className="flex items-center gap-1.5 text-[13px] text-muted">
                <span className="sr-only">From</span>
                <span className="line-through decoration-1">{m.before}</span>
                <ArrowRight className="size-3.5" aria-hidden="true" />
                <span className="sr-only">to</span>
              </span>
            ) : (
              // Keeps numbers aligned with siblings that show a "before" line.
              <span className="hidden text-[13px] sm:block" aria-hidden="true">&nbsp;</span>
            )}
            <span className="display text-[2rem] md:text-[2.5rem]">{m.after}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
