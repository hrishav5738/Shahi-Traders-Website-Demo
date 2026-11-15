"use client";

import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 dark:bg-slate-900">
      <div className="section-shell">
        <SectionHeading
          centered
          eyebrow="Services"
          title="End-to-end capabilities for public power infrastructure."
          copy="From survey and installation to lighting systems and maintenance, the demo showcases a complete service portfolio for infrastructure-focused clients."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
