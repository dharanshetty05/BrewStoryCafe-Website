"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#FFF9F5] text-[#3E2E26] text-center px-6 md:px-20 overflow-hidden"
    >
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FBECE0]/60 via-[#FFF9F5]/80 to-[#FFF9F5]/90 pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#C27A48]/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#FBECE0]/50 rounded-full blur-3xl opacity-40"></div>

      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold mb-8 text-[#8B5E3C] relative z-10 font-playfair"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Visit Us
      </motion.h2>

      <motion.p
        className="text-lg mb-12 text-[#3E2E26]/80 relative z-10 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Step into <strong>The BrewStory Café</strong> — where every aroma feels like home.  
        Drop by or message us to reserve your favorite spot!
      </motion.p>

      {/* Info Cards */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-8 mb-20 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Address */}
        <div className="bg-white/80 backdrop-blur-md border border-[#EAD7C5] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all w-full md:w-1/3 flex flex-col items-center">
          <MapPin className="w-8 h-8 text-[#C27A48] mb-2" />
          <p className="font-semibold text-[#8B5E3C] text-lg">Address</p>
          <p className="text-[#3E2E26]/80 mt-1 text-sm">
            45 Church Street, MG Road, Bangalore
          </p>
        </div>

        {/* Phone */}
        <div className="bg-white/80 backdrop-blur-md border border-[#EAD7C5] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all w-full md:w-1/3 flex flex-col items-center">
          <Phone className="w-8 h-8 text-[#C27A48] mb-2" />
          <p className="font-semibold text-[#8B5E3C] text-lg">Call Us</p>
          <p className="text-[#3E2E26]/80 mt-1 text-sm">+91 98765 43210</p>
        </div>

        {/* Timings */}
        <div className="bg-white/80 backdrop-blur-md border border-[#EAD7C5] rounded-3xl p-8 shadow-md hover:shadow-lg transition-all w-full md:w-1/3 flex flex-col items-center">
          <Clock className="w-8 h-8 text-[#C27A48] mb-2" />
          <p className="font-semibold text-[#8B5E3C] text-lg">Hours</p>
          <p className="text-[#3E2E26]/80 mt-1 text-sm">
            Mon–Sun: 9:00 AM – 10:00 PM
          </p>
        </div>
      </motion.div>

      {/* Google Map */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#EAD7C5]/70"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4453785330874!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4a00a7f%3A0x6d1e3e450d6813b9!2sChurch%20Street!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="border-0"
        ></iframe>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        className="mt-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a
          href="https://wa.me/917795116095?text=Hi! I’d like to book a table at The BrewStory Café."
          target="_blank"
          className="bg-[#C27A48] hover:bg-[#A96539] text-white font-semibold px-10 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          Book a Table ☕
        </a>
      </motion.div>

      {/* Small closing line */}
      <motion.p
        className="mt-10 text-sm text-[#3E2E26]/70 italic relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        * We’re brewing happiness, one cup at a time. *
      </motion.p>
    </section>
  );
}
