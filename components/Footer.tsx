import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { navItems, services, projects } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="section-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_0.8fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-black">M/S SHAHI TRADERS</h2>
            <p className="mt-5 max-w-md leading-8 text-slate-300">
              Electrical pole installation, highway lighting, street lighting, and power infrastructure execution for
              modern India.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#home"
                  aria-label="Social link"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-orange hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title="Quick Links" items={navItems} />
          <FooterColumn title="Services" items={services.slice(0, 5).map((service) => service.title)} />
          <FooterColumn title="Projects" items={projects.map((project) => project.title)} />
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-slate-400 sm:flex-row">
          <p>Copyright 2026 M/S SHAHI TRADERS. All rights reserved.</p>
          <p>UI demo only. No backend or database implemented.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-black text-white">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().split(" ")[0]}`} className="text-sm text-slate-300 transition hover:text-orange">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
