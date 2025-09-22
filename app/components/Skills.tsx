"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="p-12 max-w-4xl mx-auto">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-8"
      >
        Skills & Tools
      </motion.h2>
      <motion.ul
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center"
      >
        <li className="p-4 border rounded-lg bg-card">React</li>
        <li className="p-4 border rounded-lg bg-card">TypeScript</li>
        <li className="p-4 border rounded-lg bg-card">Next.js</li>
        <li className="p-4 border rounded-lg bg-card">TailwindCSS</li>
        <li className="p-4 border rounded-lg bg-card">Zustand</li>
        <li className="p-4 border rounded-lg bg-card">Framer Motion</li>
      </motion.ul>
    </section>
  );
}
