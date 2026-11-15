"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import Stats from "@/components/Stats";

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 800], [0, 110]);
  const contentY = useTransform(scrollY, [0, 800], [0, -36]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y: backgroundY,
          backgroundImage:
            "linear-gradient(90deg, rgba(2,6,23,0.96), rgba(15,23,42,0.78), rgba(15,23,42,0.40)), url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=2200&q=85')"
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 21% 20%, rgba(249,115,22,0.24), transparent 24rem), radial-gradient(circle at 76% 30%, rgba(14,165,233,0.14), transparent 28rem)"
        }}
      />
      <div className="noise-overlay absolute inset-0 opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-navy to-transparent" />
      <motion.div
        className="absolute left-1/2 top-28 hidden h-px w-[34rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-orange/80 to-transparent lg:block"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      />

      <motion.div
        className="section-shell relative z-10 flex min-h-screen items-center pb-16 pt-28"
        style={{ y: contentY }}
      >
        <div className="max-w-4xl">
          <motion.div
            className="eyebrow border-white/20 bg-white/10 text-orange"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShieldCheck className="h-4 w-4" /> Certified infrastructure execution
          </motion.div>
          <motion.h1
            className="mt-7 max-w-5xl text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
          >
            Powering India&apos;s <span className="text-orange">Infrastructure</span>
          </motion.h1>
          <motion.p
            className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            M/S SHAHI TRADERS specializes in electrical pole installation, highway lighting, street lighting, and power
            infrastructure projects.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            <a href="#projects" className="primary-button">
              Explore Projects <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="secondary-button">
              Contact Us <PhoneCall className="h-5 w-5" />
            </a>
          </motion.div>
          <motion.div
            className="mt-12 max-w-4xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36 }}
          >
            <Stats />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
