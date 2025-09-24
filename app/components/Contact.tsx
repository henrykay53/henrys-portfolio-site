"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <section id="contact" className="p-12 bg-muted/30">
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-semibold text-center mb-6"
      >
        Get In Touch
      </motion.h2>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-muted-foreground mb-8"
      >
        I’m currently open to remote opportunities worldwide. Let’s connect!
      </motion.p>
      <div className="flex justify-center gap-6">
        <Button asChild>
          <a href="mailto:henrykay53@gmail.com">Email Me</a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://www.linkedin.com/in/henry-kolawole-510ab41b4" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="https://github.com/henrykay53" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
      </div>
    </section>
  );
}
