"use client";

import { motion, Variants } from "framer-motion";
import { Code, Sparkles, Wrench, Cpu, Layers, Rocket } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const skills = [
  { name: "React", icon: <Code className="w-5 h-5" /> },
  { name: "TypeScript", icon: <Sparkles className="w-5 h-5" /> },
  { name: "Next.js", icon: <Rocket className="w-5 h-5" /> },
  { name: "TailwindCSS", icon: <Layers className="w-5 h-5" /> },
  { name: "Zustand", icon: <Cpu className="w-5 h-5" /> },
  { name: "Framer Motion", icon: <Wrench className="w-5 h-5" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 max-w-5xl mx-auto text-center">
      {/* Header */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-4xl font-bold mb-14 tracking-tight"
      >
        Skills & Tools
      </motion.h2>

      {/* Skill Grid */}
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6"
      >
        {skills.map((skill, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            whileHover={{
              y: -6,
              scale: 1.05,
              backgroundColor: "hsl(var(--card))",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl border bg-card/70 backdrop-blur-md cursor-default transition-all"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-primary"
            >
              {skill.icon}
            </motion.div>
            <span className="font-medium text-sm md:text-base">
              {skill.name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
