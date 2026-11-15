"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { MouseEvent } from "react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const rotateXBase = useMotionValue(0);
  const rotateYBase = useMotionValue(0);
  const rotateX = useSpring(rotateXBase, { stiffness: 180, damping: 18 });
  const rotateY = useSpring(rotateYBase, { stiffness: 180, damping: 18 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX}% ${glowY}%, rgba(249,115,22,0.28), transparent 34%)`;

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const px = x / rect.width;
    const py = y / rect.height;

    rotateXBase.set((0.5 - py) * 10);
    rotateYBase.set((px - 0.5) * 12);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };

  const onMouseLeave = () => {
    rotateXBase.set(0);
    rotateYBase.set(0);
    glowX.set(50);
    glowY.set(50);
  };

  return (
    <motion.article
      className="perspective-1200 group relative min-h-[500px] overflow-hidden rounded-[2rem]"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      <Image
        src={project.image}
        alt={`${project.title} infrastructure project`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-slate-950/10" />
      <motion.div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100" style={{ background: glow }} />
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/15" />
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-slate-950 shadow-xl backdrop-blur">
        <MapPin className="h-4 w-4 text-orange" />
        {project.location}
      </div>
      <div className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition group-hover:scale-110 group-hover:bg-orange">
        <ArrowUpRight className="h-5 w-5" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-orange">{project.type}</p>
        <h3 className="mt-3 text-3xl font-black text-white sm:text-4xl">{project.title}</h3>
        <p className="mt-5 max-w-xl leading-7 text-slate-200">{project.scope}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.meta.map((item) => (
            <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-slate-200 backdrop-blur">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-7 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">
          <div className="flex items-center justify-between text-sm font-bold text-white">
            <span>Execution confidence</span>
            <span className="text-orange">{project.progress}%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-orange to-amber-300"
              initial={{ width: 0 }}
              whileInView={{ width: `${project.progress}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + index * 0.1, duration: 1 }}
            />
          </div>
        </div>

        <button type="button" className="mt-6 secondary-button px-5 py-2.5">
          View Details <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}
