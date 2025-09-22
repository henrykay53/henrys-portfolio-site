import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

export default function BlogPost({ params }: Props) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return (
    <article className="max-w-3xl mx-auto p-6 prose prose-invert">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-sm text-muted-foreground">{data.date}</p>
      <MDXRemote source={content} />
    </article>
  );
}
