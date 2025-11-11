"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const images = [
    { src: "/images/gallery1.png", caption: "Morning Latte Art" },
    { src: "/images/gallery2.png", caption: "Freshly Baked Croissants" },
    { src: "/images/gallery3.png", caption: "Café Conversations" },
    { src: "/images/gallery4.png", caption: "Brew Moments" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative py-24 bg-[#FFF9F5] text-center text-[#3E2E26] px-6 md:px-20 overflow-hidden"
    >
      {/* Warm sunlight background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBECE0]/40 via-[#FFF9F5]/60 to-[#FFF9F5]/90 pointer-events-none"></div>

      {/* Decorative sunlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FBECE0]/50 blur-3xl rounded-full opacity-50 pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-14 text-[#8B5E3C] relative z-10 font-playfair"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Café Moments
      </motion.h2>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="relative group cursor-pointer rounded-3xl overflow-hidden bg-[#FFF9F5] border border-[#EAD7C5]/80 shadow-sm hover:shadow-md transition-all duration-300"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-[#3E2E26]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Caption */}
            <p className="absolute bottom-0 left-0 w-full text-center bg-gradient-to-t from-[#3E2E26]/80 to-transparent text-[#FFF9F5] text-sm py-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.caption}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-[#1c1c1c]/85 backdrop-blur-md flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={selectedImage}
                alt="Full view"
                className="max-w-[90vw] max-h-[80vh] rounded-3xl shadow-2xl border border-[#EAD7C5]/40"
              />

              {/* Close button */}
              <button
                className="absolute top-3 right-3 bg-[#FFF9F5]/90 text-[#3E2E26] font-bold rounded-full w-8 h-8 hover:bg-[#EAD7C5] transition"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section tagline */}
      <motion.p
        className="mt-12 text-[#3E2E26]/70 text-sm italic relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        * Moments brewed with joy and shared with love *
      </motion.p>
    </section>
  );
}
