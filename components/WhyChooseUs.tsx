"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { whyChoose } from "@/lib/data";

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white">
      <div className="absolute inset-0 bg-radial-grid bg-[length:26px_26px] opacity-20" />
      <div className="section-shell relative z-10">
        <SectionHeading
          centered
          inverse
          eyebrow="Why choose us"
          title="Premium execution discipline for high-visibility infrastructure."
          copy="Every project is approached with clarity of scope, field safety, and a sharp eye for durable outcomes."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => (
            <motion.article
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-orange/15 text-orange">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-black">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
