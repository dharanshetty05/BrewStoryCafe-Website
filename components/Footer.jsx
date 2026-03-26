"use client";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8B5E3C] text-[#FFF9F5] py-16 mt-24 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-6 text-center space-y-8">

        {/* PRIMARY FINAL CTA */}
        <div>
          <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-3">
            Craving Coffee Right Now?
          </h3>

          <p className="text-[#FBECE0]/90 mb-5">
            Order in seconds or visit us today — your perfect cup is waiting.
          </p>

          <a
            href="https://wa.me/917795116095"
            target="_blank"
            className="bg-[#C27A48] hover:bg-[#A96539] text-white px-8 py-3 rounded-full shadow-lg transition-all"
          >
            Order on WhatsApp ☕
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D7BFAE]/30 w-3/4 mx-auto"></div>

        {/* Branding */}
        <div className="flex justify-center items-center gap-2">
          <Coffee className="w-5 h-5 text-[#D7BFAE]" />
          <span className="text-lg font-semibold">
            The BrewStory Café
          </span>
        </div>

        <p className="text-sm text-[#FBECE0]/80 max-w-md mx-auto">
          Fresh coffee, warm vibes, and a place you’ll always come back to.
        </p>

        {/* AGENCY CTA (UPGRADED) */}
        <div className="mt-6">
          <p className="text-sm text-[#FBECE0]/70 mb-2">
            This isn’t just a demo — it’s built to convert.
          </p>

          <a
            href="https://wa.me/917795116095?text=Hi! I want a website like this for my business."
            target="_blank"
            className="text-[#D7BFAE] font-medium underline hover:text-white transition"
          >
            Get a website like this →
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-[#FBECE0]/60 mt-6">
          © {new Date().getFullYear()} The BrewStory Café
        </p>
      </div>
    </footer>
  );
}