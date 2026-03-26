"use client";

import { motion } from "framer-motion";
import { Coffee, Croissant, Heart } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#FFF9F5] text-[#3E2E26] px-6 md:px-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Image */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about-cafe.png"
            alt="Inside The BrewStory Café"
            className="rounded-3xl shadow-xl w-full md:w-4/5 object-cover border border-[#EAD7C5]/50"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Eyebrow */}
          <p className="text-sm text-[#C27A48] mb-2 tracking-wide">
            Why People Love BrewStory
          </p>

          {/* Heading */}
          <h2 className="text-4xl font-bold mb-6 text-[#8B5E3C] font-playfair leading-tight">
            More Than Just Coffee.
            <br />
            <span className="text-[#C27A48]">It’s Your Daily Escape.</span>
          </h2>

          {/* Stronger Copy */}
          <p className="text-[17px] leading-8 mb-5 text-[#3E2E26]/90">
            At <strong>The BrewStory Café</strong>, we focus on what actually
            matters — great coffee, fresh food, and a space that makes you want
            to stay a little longer.
          </p>

          <p className="text-[17px] leading-8 mb-6 text-[#3E2E26]/85">
            Whether you're catching up with friends, working on your laptop, or
            just taking a break — this is where good moments happen, every single
            day.
          </p>

          {/* Micro Trust Row */}
          <div className="flex flex-wrap gap-4 text-sm text-[#6B4F3F]">
            <span>✔ 500+ Happy Customers</span>
            <span>✔ Freshly Made Daily</span>
            <span>✔ Cozy Work-Friendly Space</span>
          </div>
        </motion.div>
      </div>

      {/* Value Cards */}
      <motion.div
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Card */}
        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center border border-[#EAD7C5]/40">
          <Coffee className="w-8 h-8 text-[#C27A48] mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1 text-[#8B5E3C]">
            Fresh Coffee, Always
          </h3>
          <p className="text-sm text-[#3E2E26]/80">
            Brewed daily using carefully selected beans for consistent taste.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center border border-[#EAD7C5]/40">
          <Croissant className="w-8 h-8 text-[#C27A48] mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1 text-[#8B5E3C]">
            Fresh Bakes
          </h3>
          <p className="text-sm text-[#3E2E26]/80">
            Handmade pastries and desserts prepared fresh every day.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all text-center border border-[#EAD7C5]/40">
          <Heart className="w-8 h-8 text-[#C27A48] mx-auto mb-3" />
          <h3 className="text-lg font-semibold mb-1 text-[#8B5E3C]">
            Space You’ll Love
          </h3>
          <p className="text-sm text-[#3E2E26]/80">
            A calm, cozy environment perfect for work, meetings, or relaxing.
          </p>
        </div>
      </motion.div>
    </section>
  );
}