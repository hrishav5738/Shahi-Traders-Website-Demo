"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:p-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <div className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
          </div>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
