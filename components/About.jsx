"use client";

import { motion } from "framer-motion";
import { Coffee, Croissant, Heart } from "lucide-react"; // built-in icons (no extra images)

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#FFF9F5] text-[#3E2E26] px-6 md:px-20 overflow-hidden"
    >
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FBECE0]/60 via-transparent to-[#FFF9F5]/80 pointer-events-none -z-10"></div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center relative"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Decorative soft glow */}
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#C27A48]/10 rounded-full blur-3xl"></div>

          <img
            src="/images/about-cafe.png"
            alt="Inside The BrewStory Café"
            className="rounded-3xl shadow-xl w-full md:w-4/5 object-cover border border-[#EAD7C5]/50"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-[Caveat] text-2xl text-[#C27A48] mb-3">Our Story</p>

          <h2 className="text-4xl font-bold mb-6 text-[#8B5E3C] font-playfair">
            About The BrewStory Café
          </h2>

          <p className="text-[17px] leading-8 mb-5 text-[#3E2E26]/90">
            At <strong>The BrewStory Café</strong>, every cup tells a story. From
            our handcrafted lattes to freshly baked pastries, every creation is
            made with care, warmth, and a hint of art. We’re not just a café — we’re
            a cozy space where conversations and creativity flow.
          </p>

          <p className="text-[17px] leading-8 mb-6 text-[#3E2E26]/85">
            Inspired by the warmth of community and the aroma of freshly ground
            beans, we designed The BrewStory to be your corner of calm. Whether
            you come to work, meet, or relax — every sip feels like home.
          </p>

          <motion.p
            className="text-lg font-semibold text-[#C27A48] italic mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            “A story in every brew, a smile in every visit.”
          </motion.p>
        </motion.div>
      </div>

      {/* Values Row */}
      <motion.div
        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Value 1 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C27A48]/10 border border-[#C27A48]/30 mb-4">
            <Coffee className="w-8 h-8 text-[#C27A48]" />
          </div>
          <h3 className="text-xl font-semibold text-[#8B5E3C] mb-1">Freshly Brewed</h3>
          <p className="text-sm text-[#3E2E26]/80 max-w-[250px]">
            Every cup is brewed fresh with love and premium beans.
          </p>
        </div>

        {/* Value 2 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C27A48]/10 border border-[#C27A48]/30 mb-4">
            <Croissant className="w-8 h-8 text-[#C27A48]" />
          </div>
          <h3 className="text-xl font-semibold text-[#8B5E3C] mb-1">Baked With Care</h3>
          <p className="text-sm text-[#3E2E26]/80 max-w-[250px]">
            From buttery croissants to rich brownies, always handmade daily.
          </p>
        </div>

        {/* Value 3 */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#C27A48]/10 border border-[#C27A48]/30 mb-4">
            <Heart className="w-8 h-8 text-[#C27A48]" />
          </div>
          <h3 className="text-xl font-semibold text-[#8B5E3C] mb-1">Made With Love</h3>
          <p className="text-sm text-[#3E2E26]/80 max-w-[250px]">
            Our secret ingredient is care — in every dish, drink, and detail.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
