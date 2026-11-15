"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  copy?: string;
  centered?: boolean;
  inverse?: boolean;
}

export default function SectionHeading({ eyebrow, title, copy, centered = false, inverse = false }: SectionHeadingProps) {
  return (
    <motion.div
      className={centered ? "mx-auto max-w-3xl text-center" : ""}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2 className={`section-title ${centered ? "mx-auto" : ""} ${inverse ? "!text-white" : ""}`}>{title}</h2>
      {copy ? (
        <p className={`section-copy ${centered ? "mx-auto" : ""} ${inverse ? "!text-slate-300" : ""}`}>{copy}</p>
      ) : null}
    </motion.div>
  );
}
