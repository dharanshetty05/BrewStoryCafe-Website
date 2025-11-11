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
      icon: <Coffee className="w-6 h-6 text-[#8B5E3C]" />,
    },
    {
      name: "Caramel Latte",
      price: "₹200",
      desc: "Espresso, caramel syrup & frothy milk in harmony.",
      type: "Coffee",
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
      className="py-24 bg-[#FFF9F5] text-[#3E2E26] text-center px-6 md:px-20 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-10 text-[#8B5E3C] font-playfair"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Menu
      </motion.h2>

      {/* Category Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2.5 rounded-full border transition-all duration-300 text-sm md:text-base ${
              activeCategory === cat
                ? "bg-[#C27A48] text-white border-[#C27A48] shadow-lg"
                : "bg-[#FFF9F5] border-[#EAD7C5] text-[#3E2E26] hover:bg-[#C27A48]/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Menu Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <AnimatePresence mode="wait">
          {filteredItems.map((item) => (
            <motion.div
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFFFFF]/90 border border-[#EAD7C5] p-6 rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-[#C27A48]/10 border border-[#C27A48]/30">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#8B5E3C]">
                  {item.name}
                </h3>
              </div>
              <p className="text-[15px] text-[#3E2E26]/80 mb-4 leading-relaxed">
                {item.desc}
              </p>
              <p className="text-[#C27A48] font-semibold mt-auto">{item.price}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Section Note */}
      <motion.p
        className="mt-12 text-[#3E2E26]/70 text-sm italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        * All our drinks and pastries are freshly prepared on order *
      </motion.p>
    </section>
  );
}
