"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

type ProjectCardProps = {
  title: string;
  description: string;
  codeUrl: string;
  demoUrl?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectCard({ title, description, codeUrl, demoUrl }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-2xl border p-6 shadow-sm bg-card hover:shadow-md transition"
    >
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-muted-foreground mt-2">{description}</p>
      <div className="mt-4 flex gap-4">
        <Button asChild size="sm">
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">Code</a>
        </Button>
        {demoUrl && (
          <Button asChild size="sm" variant="outline">
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}
