"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-white py-24 dark:bg-slate-900">
      <div className="section-shell">
        <SectionHeading
          centered
          eyebrow="Gallery"
          title="Field-ready visuals with a modern project archive feel."
          copy="A frontend-only masonry gallery with hover zoom and a polished lightbox interaction."
        />
        <div className="masonry mt-14">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image}
              type="button"
              onClick={() => setActive(image)}
              className="masonry-item group relative block w-full overflow-hidden rounded-[1.5rem] bg-slate-200 text-left"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Image
                src={image}
                alt={`Infrastructure gallery ${index + 1}`}
                width={900}
                height={index % 2 === 0 ? 680 : 980}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-slate-950/90 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              aria-label="Close gallery image"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem]"
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.94 }}
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={active} alt="Selected infrastructure gallery image" fill sizes="95vw" className="object-cover" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
