"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-slate-50 py-24 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-orange/10 to-transparent" />
      <div className="section-shell relative z-10">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured projects"
            title="Infrastructure work shaped by location, safety, and timelines."
            copy="A premium project showcase for major road, lighting, and power corridors."
          />
          <a href="#contact" className="light-button w-fit">
            Start a Project
          </a>
        </div>
        <div className="mt-10 grid gap-3 rounded-[1.5rem] border border-slate-200/80 bg-white/70 p-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:grid-cols-3">
          {[
            ["Corridor-ready", "Execution"],
            ["Zero-compromise", "Safety"],
            ["Milestone-led", "Delivery"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl bg-slate-950 px-5 py-4 text-white dark:bg-white/10">
              <p className="text-lg font-black">{value}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-orange">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
