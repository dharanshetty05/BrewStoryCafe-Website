"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      src: "/images/gallery1.png",
      caption: "Perfect latte to start your morning",
    },
    {
      src: "/images/gallery2.png",
      caption: "Fresh bakes served daily",
    },
    {
      src: "/images/gallery3.png",
      caption: "A space to relax, work, and connect",
    },
    {
      src: "/images/gallery4.png",
      caption: "Evenings that feel just right",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="gallery"
      className="relative py-24 bg-[#FFF9F5] text-center text-[#3E2E26] px-6 md:px-20"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-3 text-[#8B5E3C] font-playfair">
        See What You’re Missing
      </h2>

      <p className="text-[#6B4F3F] mb-12">
        A glimpse into the moments our customers love every day.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.caption}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Caption */}
            <p className="absolute bottom-0 left-0 w-full text-center text-white text-sm py-2 opacity-0 group-hover:opacity-100 transition">
              {img.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Conversion CTA */}
      <div className="mt-14">
        <p className="text-[#3E2E26]/80 mb-4">
          Looks good? It tastes even better.
        </p>

        <a
          href="https://wa.me/917795116095"
          target="_blank"
          className="bg-[#C27A48] hover:bg-[#A96539] text-white px-8 py-3 rounded-full shadow-lg transition-all"
        >
          Order Now on WhatsApp ☕
        </a>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-[90vw] max-h-[80vh] rounded-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}