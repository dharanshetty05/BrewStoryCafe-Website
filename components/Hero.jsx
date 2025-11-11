"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-[url('/images/hero-cafe.png')] bg-cover bg-center bg-fixed"
    >
      {/* Dimmed overlay for text contrast */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/60"></div>

      {/* Optional warm tint (for café tone) */}
      <div className="absolute inset-0 bg-[#8B5E3C]/20 mix-blend-multiply"></div>


      {/* Text Content */}
      <motion.div
        className="relative z-10 px-6 text-white max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="font-[Caveat] text-2xl text-[#D7BFAE] mb-2 tracking-wide">
          Since 2021
        </p>

        <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          The BrewStory Café
        </h1>

        <p className="text-lg md:text-xl text-[#FBECE0]/95 mb-8 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
          A cozy corner where every cup brews connection, warmth, and stories worth sharing.
        </p>

        <a
          href="https://wa.me/917795116095?text=Hi! I'd like to order from The BrewStory Café."
          target="_blank"
          className="bg-[#C27A48] hover:bg-[#A96539] text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Order a Latte ☕
        </a>

        
      </motion.div>
    </section>
  );
}
