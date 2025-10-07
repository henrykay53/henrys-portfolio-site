import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogPostContent from "./BlogPostContent";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return (
    <BlogPostContent
      slug={params.slug}
      title={data.title}
      date={data.date}
    />
  );
}
