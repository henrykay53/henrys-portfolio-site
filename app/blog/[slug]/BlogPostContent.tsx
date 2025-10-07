"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Props = {
  slug: string;
  title: string;
  date: string;
};

export default function BlogPostContent({ slug, title, date }: Props) {
  const [Post, setPost] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    import(`@/content/blog/${slug}.mdx`)
      .then((mod) => setPost(() => mod.default))
      .catch((err) => console.error("Error loading MDX:", err));
  }, [slug]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 py-20 prose prose-neutral dark:prose-invert"
    >
      {/* 🧭 Back Button */}
      <motion.button
        onClick={() => router.back()}
        whileHover={{ x: -4 }}
        className="mb-8 flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </motion.button>

      {/* 📰 Post Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">{date}</p>
      </header>

      {/* 📄 Post Content */}
      {Post ? <Post /> : <p className="text-muted-foreground">Loading post...</p>}
    </motion.article>
  );
}
