"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center space-y-8 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold tracking-tight"
      >
        HNRY — Frontend Engineer crafting systems that scale beautifully
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
      >
        I build performant, maintainable interfaces with React, TypeScript, and modern 
        engineering practices — combining precision, accessibility, and design intent.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex gap-6 justify-center"
      >
        <Button asChild size="lg" className="px-8">
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" asChild size="lg" className="px-8">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
}
