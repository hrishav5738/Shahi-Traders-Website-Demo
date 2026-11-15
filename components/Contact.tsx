"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { contactItems } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-24 dark:bg-slate-900">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Plan your next infrastructure project with a focused execution partner."
          copy="This UI demo uses placeholder contact details and a frontend-only form."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                className="glass-card flex items-center gap-4 p-5"
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/12 text-orange">
                  <item.icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-sm font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </span>
                  <span className="mt-1 block font-black text-slate-950 dark:text-white">{item.value}</span>
                </span>
              </motion.div>
            ))}
            <div className="relative h-72 overflow-hidden rounded-[1.5rem] bg-navy p-6 text-white">
              <div className="absolute inset-0 bg-radial-grid bg-[length:22px_22px] opacity-25" />
              <div className="relative z-10">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange">Map placeholder</p>
                <h3 className="mt-3 text-2xl font-black">Uttar Pradesh Project Base</h3>
              </div>
              <div className="absolute bottom-8 left-1/2 h-28 w-28 -translate-x-1/2 rounded-full border border-orange/40 bg-orange/20">
                <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange shadow-glow" />
              </div>
            </div>
          </div>

          <motion.form
            className="glass-card grid gap-5 p-6 sm:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Name
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/10 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                Phone
                <input
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/10 dark:border-slate-700 dark:bg-slate-950"
                  placeholder="+91"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/10 dark:border-slate-700 dark:bg-slate-950"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
              Project Requirement
              <textarea
                rows={6}
                className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/10 dark:border-slate-700 dark:bg-slate-950"
                placeholder="Tell us about the project scope"
              />
            </label>
            <button type="button" className="primary-button w-fit">
              Send Enquiry <Send className="h-5 w-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
