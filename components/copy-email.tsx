"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-bg hover:text-fg"
      aria-label={copied ? "Email address copied" : "Copy email address"}
    >
      {copied ? <Check className="size-4 text-positive" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
      <span role="status" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
