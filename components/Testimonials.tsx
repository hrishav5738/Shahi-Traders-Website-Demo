"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950">
      <div className="section-shell">
        <SectionHeading
          centered
          eyebrow="Testimonials"
          title="Trusted by teams that need dependable site execution."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.author}
              className="glass-card p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Quote className="h-10 w-10 text-orange" />
              <p className="mt-6 text-lg leading-8 text-slate-700 dark:text-slate-200">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-8 border-t border-slate-200 pt-5 dark:border-slate-700">
                <p className="font-black text-slate-950 dark:text-white">{testimonial.author}</p>
                <p className="mt-1 text-sm font-semibold text-orange">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
