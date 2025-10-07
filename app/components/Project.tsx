"use client";

import { motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  const projectDetails = [
    {
      id: 1,
      title: "Smart Data Table",
      description:
        "A customizable and accessible React data table with sorting, filtering, and pagination.",
      codeUrl: "https://github.com/hnry/smart-datatable",
      demoUrl: "https://smart-datatable-demo.vercel.app",
      image: "/econ.png",
    },
    {
      id: 2,
      title: "Referral System UI",
      description:
        "A clean, multi-step referral system built with React and TailwindCSS for tracking user referrals.",
      codeUrl: "https://github.com/hnry/referral-system-ui",
      demoUrl: "https://referral-ui-demo.vercel.app",
      image: "/suwk.png",
    },
    {
      id: 3,
      title: "Scholarship Application Flow",
      description:
        "A responsive multi-step scholarship registration form with OTP verification and API integration.",
      codeUrl: "https://github.com/hnry/scholarship-form",
      demoUrl: "https://scholarship-demo.vercel.app",
      image: "/suwkWeb.png",
    },
  ];

  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-b from-background to-muted/30">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-14 tracking-tight"
      >
        Selected Projects
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {projectDetails.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </motion.div>
    </section>
  );
}
