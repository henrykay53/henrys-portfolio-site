"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export default function BlogList({ posts }: { posts: Post[] }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main id="blog" className="px-6 py-20 max-w-6xl mx-auto">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
      >
        Blog
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <motion.div
            key={post.slug}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group rounded-2xl border bg-card/70 backdrop-blur-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-muted-foreground mb-3">{post.date}</p>
              <p className="text-muted-foreground/80 leading-relaxed text-sm">
                {post.excerpt}
              </p>
            </div>

            {/* ✅ Wrap Read more in a Link */}
            <Link
              href={`/blog/${post.slug}`}
              className="mt-5 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span>Read more</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
