"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <section id="projects" className="p-12 bg-muted/30">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-8"
      >
        Selected Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ProjectCard
          title="Smart Data Table"
          description="A customizable and accessible React data table with sorting, filtering, and pagination."
          codeUrl="https://github.com/hnry/smart-datatable"
          demoUrl="https://smart-datatable-demo.vercel.app"
        />
        {/* Add more ProjectCards here */}
      </div>
    </section>
  );
}
