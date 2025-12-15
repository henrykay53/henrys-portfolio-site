"use client";

import { motion, Variants } from "framer-motion";
import { Code, Sparkles, Wrench, Cpu, Layers, Rocket } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const skills = [
  { name: "React", icon: Code },
  { name: "TypeScript", icon: Sparkles },
  { name: "Next.js", icon: Rocket },
  { name: "TailwindCSS", icon: Layers },
  { name: "Zustand", icon: Cpu },
  { name: "Framer Motion", icon: Wrench },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-20 max-w-5xl mx-auto text-center"
    >
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
        className="grid grid-cols-2 sm:grid-cols-3 gap-6"
      >
        {skills.map(({ name, icon: Icon }) => (
          <motion.li
            key={name}
            variants={fadeUp}
            whileHover={{ y: -6, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className="
              group
              flex flex-col items-center justify-center gap-2 p-5
              rounded-xl border
              bg-card/70 backdrop-blur-md
              cursor-default
              transition-all
              hover:bg-card
              hover:shadow-lg
            "
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-primary"
            >
              <Icon className="w-5 h-5" />
            </motion.div>

            <span className="font-medium text-sm md:text-base">
              {name}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

