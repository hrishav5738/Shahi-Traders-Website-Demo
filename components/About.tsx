"use client";

import { motion } from "framer-motion";
import { Cable, CheckCircle2, CircuitBoard } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      <div className="section-shell grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="About the company"
            title="Built for demanding electrical and civil infrastructure sites."
            copy="M/S SHAHI TRADERS brings field-first execution to public infrastructure projects, combining electrical installation expertise with civil coordination, quality controls, and responsive project management."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Road lighting corridors", "Pole erection and alignment", "Power asset maintenance", "Safety-led site execution"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-bold text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="h-5 w-5 flex-none text-orange" />
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <motion.div
          className="relative min-h-[440px]"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-orange/20 via-sky-400/15 to-emerald-400/10 blur-2xl" />
          <div className="glass-card relative overflow-hidden p-6">
            <div className="rounded-[1.5rem] bg-navy p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Execution map</p>
                  <h3 className="mt-2 text-2xl font-black">Infrastructure Workflows</h3>
                </div>
                <CircuitBoard className="h-9 w-9 text-orange" />
              </div>
              <div className="mt-8 grid gap-4">
                {[72, 86, 64].map((width, index) => (
                  <div key={width} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-orange/15 text-orange">
                        <Cable className="h-5 w-5" />
                      </span>
                      <div className="h-3 flex-1 rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-orange"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${width}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + index * 0.12, duration: 0.9 }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-shell mt-14">
        <div className="grid gap-5 md:grid-cols-3">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              className="glass-card p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/12 text-orange">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
