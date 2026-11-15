"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Building2, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    return scrollY.on("change", (latest) => setScrolled(latest > 40));
  }, [scrollY]);

  const goTo = (item: string) => {
    setOpen(false);
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled ? "bg-navy/90 shadow-2xl shadow-slate-950/20 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <button onClick={() => goTo("Home")} className="flex items-center gap-3 text-left text-white" type="button">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange shadow-glow">
            <Building2 className="h-6 w-6" />
          </span>
          <span>
            <span className="block text-sm font-black tracking-wide sm:text-base">M/S SHAHI TRADERS</span>
            <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-300">
              Infrastructure
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => goTo(item)}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button type="button" onClick={() => goTo("Contact")} className="primary-button px-5 py-2.5">
            Get a Quote
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/10 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-navy/95 p-5 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-black tracking-wide text-white">M/S SHAHI TRADERS</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-10 grid gap-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => goTo(item)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-lg font-bold text-white"
                >
                  {item}
                </button>
              ))}
              <button type="button" onClick={() => setDark((value) => !value)} className="primary-button mt-2">
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                Toggle Mode
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
