"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Coffee, Croissant, Sandwich, IceCream } from "lucide-react";

export default function Menu() {
  const menuItems = [
    {
      name: "Cappuccino",
      price: "₹180",
      desc: "Rich espresso balanced with steamed milk and foam.",
      type: "Coffee",
      tag: "Popular",
      icon: <Coffee className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Caramel Latte",
      price: "₹200",
      desc: "Espresso, caramel syrup & frothy milk in harmony.",
      type: "Coffee",
      tag: "Recommended",
      icon: <Coffee className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Cold Brew",
      price: "₹220",
      desc: "Slow-brewed for a naturally smooth, bold taste.",
      type: "Coffee",
      icon: <Coffee className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Blueberry Muffin",
      price: "₹150",
      desc: "Soft, fluffy muffin bursting with blueberry flavor.",
      type: "Pastries",
      icon: <IceCream className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Butter Croissant",
      price: "₹130",
      desc: "Crispy golden layers of buttery perfection.",
      type: "Pastries",
      tag: "Best Seller",
      icon: <Croissant className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Chocolate Brownie",
      price: "₹160",
      desc: "Fudgy brownie topped with melted dark chocolate.",
      type: "Pastries",
      icon: <IceCream className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Club Sandwich",
      price: "₹240",
      desc: "Triple-layer sandwich filled with veggies & cheese.",
      type: "Snacks",
      icon: <Sandwich className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Pasta Alfredo",
      price: "₹280",
      desc: "Creamy white sauce pasta cooked with herbs.",
      type: "Snacks",
      tag: "Chef’s Pick",
      icon: <Sandwich className="w-6 h-6 text-[#8B5E3C]" />,
    },
  ];

  const categories = ["All", "Coffee", "Pastries", "Snacks"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.type === activeCategory);

  return (
    <section
      id="menu"
      className="py-24 bg-[#FFF9F5] text-[#3E2E26] text-center px-6 md:px-20"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 text-[#8B5E3C] font-playfair">
        What You’ll Love Here
      </h2>

      <p className="text-[#6B4F3F] mb-10">
        Our most loved drinks & bites, crafted fresh every day.
      </p>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full border transition-all ${
              activeCategory === cat
                ? "bg-[#C27A48] text-white border-[#C27A48]"
                : "border-[#EAD7C5] hover:bg-[#C27A48]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.name}
              layout
              className="bg-white border border-[#EAD7C5] p-6 rounded-2xl hover:shadow-lg transition-all flex flex-col"
            >
              {/* Tag */}
              {item.tag && (
                <span className="text-xs bg-[#C27A48] text-white px-3 py-1 rounded-full w-fit mb-3">
                  {item.tag}
                </span>
              )}

              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-[#C27A48]/10">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#8B5E3C]">
                  {item.name}
                </h3>
              </div>

              <p className="text-sm text-[#3E2E26]/80 mb-4">
                {item.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-[#C27A48] font-semibold">
                  {item.price}
                </span>

                <a
                  href="https://wa.me/917795116095"
                  target="_blank"
                  className="text-sm text-[#8B5E3C] underline hover:text-[#C27A48]"
                >
                  Order →
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <div className="mt-14">
        <a
          href="https://wa.me/917795116095"
          target="_blank"
          className="bg-[#C27A48] hover:bg-[#A96539] text-white px-8 py-3 rounded-full shadow-lg transition-all"
        >
          Order Your Favorite Now ☕
        </a>
      </div>
    </section>
  );
}