import { ogImage, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.title}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: site.availability,
    title: site.name,
    subtitle: "Software engineer across web, mobile and the API behind them.",
  });
}
