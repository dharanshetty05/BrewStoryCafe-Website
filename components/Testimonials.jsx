"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rohit Sharma",
      text: "Probably the best cappuccino I’ve had in Bangalore. The vibe is super chill and I end up staying way longer than planned.",
    },
    {
      name: "Ananya Mehta",
      text: "Came here once, now it’s my regular spot. Great coffee, quick service, and perfect for working on my laptop.",
    },
    {
      name: "Karthik R",
      text: "Tried their cold brew and brownie — both were amazing. Easily one of the most underrated cafés around.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-white text-[#3E2E26] px-6 md:px-20 text-center"
    >
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold mb-4 text-[#8B5E3C] font-playfair"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Loved by People Who’ve Been Here
      </motion.h2>

      <p className="text-[#6B4F3F] mb-12 max-w-xl mx-auto">
        Don’t just take our word for it — here’s what our customers say.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-[#FFF9F5] border border-[#EAD7C5] rounded-2xl p-6 text-left shadow-sm hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-3 text-[#C27A48]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C27A48]" />
              ))}
            </div>

            {/* Text */}
            <p className="text-sm text-[#3E2E26]/85 leading-relaxed mb-4">
              “{t.text}”
            </p>

            {/* Name */}
            <p className="font-semibold text-[#8B5E3C] text-sm">
              — {t.name}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Trust Line */}
      <p className="mt-12 text-sm text-[#3E2E26]/70">
        ⭐ Rated 4.8 by 500+ happy customers
      </p>
    </section>
  );
}