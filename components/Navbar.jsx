"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["hero", "about", "menu", "testimonials", "gallery", "contact"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled
          ? "bg-[#3E2E26]/95 backdrop-blur-xl shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12">

        {/* Logo */}
        <h1
          onClick={() => scrollTo("hero")}
          className="text-lg md:text-xl font-semibold text-[#FBECE0] cursor-pointer"
        >
          BrewStory
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          {["about", "menu", "gallery", "contact", "testimonials"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className={`transition ${
                activeSection === section
                  ? "text-[#C27A48]"
                  : "text-[#FBECE0] hover:text-[#C27A48]"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          {/* PRIMARY CTA */}
          <a
            href="https://wa.me/917795116095"
            target="_blank"
            className="bg-[#C27A48] hover:bg-[#A96539] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md transition"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-[#FBECE0]"
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
          className="md:hidden bg-[#3E2E26]/95 backdrop-blur-lg px-6 py-6 space-y-5"
        >
          {["about", "menu", "gallery", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="block w-full text-left text-[#FBECE0] text-lg"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}

          {/* Mobile CTA */}
          <a
            href="https://wa.me/917795116095"
            target="_blank"
            className="block text-center bg-[#C27A48] text-white py-3 rounded-full font-medium"
          >
            Order on WhatsApp ☕
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}