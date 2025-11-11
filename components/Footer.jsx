"use client";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

export default function Footer() {
  // helper function for smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#8B5E3C] text-[#FFF9F5] py-14 mt-24 border-t border-[#D7BFAE]/50 overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute -top-10 left-0 right-0 h-20 bg-gradient-to-b from-[#FBECE0]/40 to-transparent opacity-80 pointer-events-none"></div>

      {/* Decorative blur lights */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#C27A48]/20 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-[#3E2E26]/40 rounded-full blur-3xl opacity-50"></div>

      <motion.div
        className="container mx-auto text-center space-y-6 relative z-10 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Logo Icon */}
        <motion.div
          className="flex justify-center items-center gap-2 text-[#FBECE0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Coffee className="w-6 h-6 text-[#D7BFAE]" />
          <span className="text-xl font-semibold tracking-wide">
            The BrewStory Café
          </span>
        </motion.div>

        {/* Tagline */}
        <p className="max-w-lg mx-auto text-sm text-[#FBECE0]/90 leading-relaxed">
          Handcrafted coffee, homemade pastries, and heartwarming conversations.  
          Visit us and make your story brew.
        </p>

        {/* Navigation Links */}
        <div className="flex justify-center gap-6 mt-2 text-sm tracking-wide">
          {["about", "menu", "gallery", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="hover:text-[#D7BFAE] transition"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#D7BFAE]/40 my-6 w-3/4 mx-auto"></div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-[#FBECE0]/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-[#D7BFAE]">
            The BrewStory Café
          </span>{" "}
          | Crafted with ☕ by{" "}
          <span className="font-semibold text-[#D7BFAE]">Dharan Shetty</span>
        </motion.p>

        {/* Hire CTA */}
        <p className="text-xs text-[#FBECE0]/70 mt-2">
          Want a website like this?{" "}
          <a
            href="https://wa.me/917795116095?text=Hi! I'd like to discuss a custom website project."
            target="_blank"
            className="text-[#D7BFAE] underline hover:text-white transition"
          >
            Let’s build yours →
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
