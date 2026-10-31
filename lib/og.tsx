import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card: dark, typographic, with the accent bar. */
export async function ogImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  // Inter Tight SemiBold (SIL Open Font License), so the card matches the site's display type.
  const font = await readFile(path.join(process.cwd(), "assets/fonts/InterTight-SemiBold.ttf"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#000000",
          color: "#F5F5F7",
          fontFamily: "Inter Tight",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#A1A1A6" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#8B83FF" }} />
          {eyebrow}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, letterSpacing: -4, lineHeight: 1 }}>{title}</div>
          <div style={{ fontSize: 34, color: "#A1A1A6", lineHeight: 1.3, maxWidth: 980 }}>{subtitle}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Inter Tight", data: font, weight: 600, style: "normal" }] },
  );
}
