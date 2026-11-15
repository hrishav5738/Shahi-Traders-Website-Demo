"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/data";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      className="group premium-surface relative overflow-hidden rounded-[1.75rem] p-6"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange/70 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange/12 blur-2xl transition group-hover:bg-orange/24" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-navy text-orange shadow-lg shadow-slate-950/10 dark:bg-white/10">
        <service.icon className="h-7 w-7" />
        </div>
        <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 opacity-0 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 dark:border-white/10 dark:bg-white/10 dark:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <h3 className="relative mt-7 text-xl font-black text-slate-950 dark:text-white">{service.title}</h3>
      <p className="relative mt-3 leading-7 text-slate-600 dark:text-slate-300">{service.description}</p>
      <div className="relative mt-8 flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-orange via-orange/30 to-transparent" />
        <span className="text-xs font-black uppercase tracking-[0.2em] text-orange">Scope ready</span>
      </div>
    </motion.article>
  );
}
