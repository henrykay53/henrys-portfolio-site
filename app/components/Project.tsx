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
      title: "Fumigation & Pest Control Website",
      description:
        "A marketing-focused website built to boost brand awareness and support ad campaigns for a fumigation company. SEO-optimized and integrated with Google Analytics for data-driven marketing insights.",
      stack: ["Next.js", "React", "TailwindCSS", "Google Analytics"],
      codeUrl: "#",
      demoUrl: "https://econsultantsglobaltiija.com.ng/",
      image: "/econ.png",
    },
    {
      id: 2,
      title: "SUWK LMS",
      description:
        "A learning management system designed to make skill acquisition accessible for blue-collar professionals. Features authentication, personalized dashboards, and downloadable course certifications.",
      stack: ["Next.js", "React", "TailwindCSS", "Zustand", "shadcn/ui"],
      codeUrl: "#",
      demoUrl: "https://app.suwkafrica.com/",
      image: "/suwk.png",
    },

     {
      id: 3,
      title: "Insure9ja",
      description:
        "Insure9ja is a web platform that helps users learn about insurance products and apply for them through a simple, guided experience. It combines product education, FAQs, and objection-handling content to address common concerns before starting the application process. Users complete a streamlined multi-step form that collects essential information and sends structured application data directly to the client for internal processing.",
      stack: [ "Typescript", "React", "TailwindCSS", "shadcn/ui", "FramerMotion"],
      codeUrl: "#",
      demoUrl: "https://www.insure9ja.com/",
      image: "/insure9ja.png",
    },
    {
      id: 4,
      title: "SUWK Website",
      description:
        "The main entry point into the SUWK ecosystem — introducing users to its mission of making practical education accessible. Integrates Flutterwave for seamless course purchases and optimized for speed and scalability.",
      stack: ["Next.js", "React", "TailwindCSS", "shadcn/ui", "Flutterwave API"],
      codeUrl: "#",
      demoUrl: "https://www.suwkafrica.com/",
      image: "/suwkWeb.png",
    }
  ];

  return (
    <section
      id="projects"
      className="px-6 py-20 bg-gradient-to-b from-background to-muted/30"
    >
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
