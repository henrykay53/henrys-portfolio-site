import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.mdx?$/, ""),
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
    };
  });

  return (
    <main id="blog" className="max-w-full mx-auto px-5 py-10">
      <h1 className="text-3xl text-center font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.slug} className="border-b border-muted pb-4">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-sm text-muted-foreground">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
