import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Props = {
  params: { slug: string };
};

export default async function BlogPost({ params }: Props) {
  const filePath = path.join(process.cwd(), "content/blog", `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  // Import the MDX file as a React component
  const Post = (await import(`@/content/blog/${params.slug}.mdx`)).default;

  return (
    <article className="max-w-3xl mx-auto p-6 prose prose-invert">
      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-sm text-muted-foreground">{data.date}</p>
      <Post />
    </article>
  );
}
