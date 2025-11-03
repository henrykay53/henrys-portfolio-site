"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <Image
          src="/image.jpg"
          alt="HNRY"
          width={500}
          height={380}
          className="rounded-2xl object-cover shadow-lg"
        />
      </motion.div>

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-muted-foreground leading-relaxed">
      I’m HNRY — a frontend engineer passionate about building interfaces that balance performance, scalability, and great user experience.
        </p>
        <p className="text-muted-foreground leading-relaxed">
    I work primarily with React, Next.js, TypeScript, and TailwindCSS, crafting clean, maintainable code and accessible designs. Beyond implementing features, I care deeply about structure, clarity, and how users feel when interacting with products.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          I’m currently open to opportunities where I can contribute to ambitious projects, grow alongside strong engineering teams, and build software that makes a meaningful impact.
        </p>
      </motion.div>
    </section>
  );
}
