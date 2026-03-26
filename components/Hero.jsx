"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center bg-[url('/images/hero-cafe.png')] bg-cover bg-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Warm tone */}
      <div className="absolute inset-0 bg-[#8B5E3C]/30 mix-blend-multiply"></div>

      <motion.div
        className="relative z-10 px-6 text-white max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Trust Eyebrow */}
        <p className="text-sm md:text-base text-[#E6CFC3] mb-3 tracking-wide">
          ⭐ Loved by 500+ coffee lovers in town
        </p>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight mb-4">
          Your Go-To Spot for
          <br />
          <span className="text-[#D7BFAE]">Perfect Coffee Vibes</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#FBECE0]/90 mb-8 leading-relaxed">
          Freshly brewed coffee, handcrafted bites, and a space you'll want to
          come back to every day.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/917795116095?text=Hi! I'd like to order from The BrewStory Café."
            target="_blank"
            className="bg-[#C27A48] hover:bg-[#A96539] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Order on WhatsApp ☕
          </a>

          <a
            href="#menu"
            className="border border-white/60 hover:border-white text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/10"
          >
            View Menu
          </a>
        </div>

        {/* Mini Trust Row */}
        <div className="mt-8 text-sm text-[#EADFD8] flex flex-wrap justify-center gap-4">
          <span>✔ Freshly Brewed Daily</span>
          <span>✔ Cozy Ambience</span>
          <span>✔ Fast Service</span>
        </div>
      </motion.div>
    </section>
  );
}