"use client";

import { motion } from "framer-motion";
import { Clock3, Star, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A120D] text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/cafe-hero.jpg"
          alt="Cafe"
          className="w-full h-full object-cover opacity-35 scale-105"
        />
      </div>

      {/* Cinematic Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(194,122,72,0.28),transparent_45%)]" />

      {/* Ambient Glow */}
      <div className="absolute top-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#C27A48]/20 blur-3xl" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            {/* Trust Bar */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm">
                <Star className="w-4 h-4 text-[#D6A77A]" />
                Rated 4.9 by 500+ locals
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-sm">
                <Clock3 className="w-4 h-4 text-[#D6A77A]" />
                Open till 11 PM
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl leading-[0.95] font-bold tracking-tight mb-6">
              Coffee That
              <br />
              Feels Like Your
              <br />
              <span className="text-[#D6A77A]">
                Favorite Ritual
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#E7D9CF]/85 leading-relaxed max-w-xl mb-8">
              Freshly brewed coffee, buttery snacks, and a warm atmosphere
              designed for slow mornings, deep conversations, and late-night cravings.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="https://wa.me/917795116095?text=Hi! I'd like to order from The BrewStory Café."
                target="_blank"
                className="bg-[#C27A48] hover:bg-[#A96539] text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-[0_10px_40px_rgba(194,122,72,0.35)] hover:scale-[1.02]"
              >
                Order on WhatsApp
              </a>

              <a
                href="#menu"
                className="bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 px-8 py-4 rounded-2xl transition-all duration-300"
              >
                Explore Menu
              </a>
            </div>

            {/* Bottom Trust */}
            <div className="flex flex-wrap gap-6 text-sm text-[#D8CCC3]">
              <div>✔ Fresh Ingredients</div>
              <div>✔ Fast Delivery</div>
              <div>✔ Cozy Ambience</div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="hidden lg:flex justify-center relative"
          >
            <div className="relative">
              <img
                src="/images/coffee-cup.png"
                alt="Coffee"
                className="w-[500px] drop-shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
              />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-[-40px] bg-white text-black rounded-3xl p-5 shadow-2xl w-[240px]">
                <div className="text-sm text-gray-500 mb-1">
                  Best Seller
                </div>

                <div className="text-2xl font-bold mb-2">
                  Caramel Latte
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  Rich espresso with silky caramel cream.
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-semibold">₹249</span>

                  <button className="bg-black text-white px-4 py-2 rounded-xl text-sm">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}