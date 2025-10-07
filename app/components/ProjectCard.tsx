"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  codeUrl: string;
  demoUrl?: string;
  image?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectCard({
  title,
  description,
  codeUrl,
  demoUrl,
  image,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="rounded-2xl border bg-card/70 backdrop-blur-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {image && (
        <motion.div
          className="relative w-full h-48 overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </motion.div>
      )}

      <div className="p-6">
        <motion.h3
          className="font-semibold text-lg"
          whileHover={{ color: "hsl(var(--primary))" }}
        >
          {title}
        </motion.h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex gap-3">
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button asChild size="sm" variant="outline" className="flex items-center gap-1">
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
                Code
              </a>
            </Button>
          </motion.div>

          {demoUrl && (
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button asChild size="sm" className="flex items-center gap-1">
                <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Demo
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
