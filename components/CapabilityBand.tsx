"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, Bolt, MapPin, ShieldCheck } from "lucide-react";
import { useRef } from "react";

const capabilities = [
  { label: "Pre-construction survey", value: "01", icon: MapPin },
  { label: "Electrical execution", value: "02", icon: Bolt },
  { label: "Safety governance", value: "03", icon: ShieldCheck },
  { label: "Handover readiness", value: "04", icon: BadgeCheck }
];

export default function CapabilityBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-20 text-white">
      <motion.div className="absolute inset-y-0 left-0 w-[120%] bg-radial-grid bg-[length:30px_30px] opacity-20" style={{ x }} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-slate-900/80 to-navy" />
      <div className="section-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="eyebrow border-white/20 bg-white/10">Delivery system</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">
              Built like a boardroom promise. Delivered like a field operation.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.label}
                className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/15 text-orange">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <span className="text-4xl font-black text-white/15">{item.value}</span>
                </div>
                <p className="mt-6 font-bold text-slate-100">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
