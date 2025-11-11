"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Smooth scroll helper
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "menu", "gallery", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-[#3E2E26]/95 backdrop-blur-xl shadow-md border-b border-[#C27A48]/30 z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-8 md:px-12 py-4">
        {/* Brand Name */}
        <motion.h1
          className="text-2xl font-bold text-[#FBECE0] cursor-pointer tracking-wide relative group"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollTo("hero")}
        >
          <span className="relative z-10 drop-shadow-sm">The BrewStory Café</span>
          <motion.span
            layoutId="glow"
            className="absolute inset-0 bg-[#C27A48]/30 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </motion.h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-base font-medium">
          {["about", "menu", "gallery", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={`relative transition font-medium ${
                activeSection === section
                  ? "text-[#C27A48]"
                  : "text-[#FBECE0] hover:text-[#C27A48]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-[#C27A48] rounded-full"
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-3xl text-[#FBECE0] transition-transform duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#3E2E26]/98 backdrop-blur-lg border-t border-[#C27A48]/40 py-5 shadow-lg px-8 text-left space-y-4"
        >
          {["about", "menu", "gallery", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={`block text-lg font-medium transition w-full text-left ${
                activeSection === section
                  ? "text-[#C27A48]"
                  : "text-[#FBECE0] hover:text-[#C27A48]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
