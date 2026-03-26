"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-[#FFF9F5] text-[#3E2E26] px-6 md:px-20 text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4 text-[#8B5E3C] font-playfair">
        Ready for Your Next Coffee Break?
      </h2>

      <p className="text-[#6B4F3F] mb-10 max-w-xl mx-auto">
        Drop by today or order your favorite drink in minutes. We’re open and
        serving fresh all day.
      </p>

      {/* PRIMARY CTA (moved up) */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
        <a
          href="https://wa.me/917795116095?text=Hi! I’d like to order from The BrewStory Café."
          target="_blank"
          className="bg-[#C27A48] hover:bg-[#A96539] text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
        >
          Order on WhatsApp ☕
        </a>

        <a
          href="tel:+919876543210"
          className="border border-[#C27A48] text-[#C27A48] px-8 py-3 rounded-full hover:bg-[#C27A48]/10 transition-all"
        >
          Call Now
        </a>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        <div className="bg-white border border-[#EAD7C5] rounded-2xl p-6 shadow-sm">
          <MapPin className="w-6 h-6 text-[#C27A48] mx-auto mb-2" />
          <p className="font-semibold text-[#8B5E3C]">Location</p>
          <p className="text-sm text-[#3E2E26]/80 mt-1">
            Church Street, Bangalore
          </p>
        </div>

        <div className="bg-white border border-[#EAD7C5] rounded-2xl p-6 shadow-sm">
          <Phone className="w-6 h-6 text-[#C27A48] mx-auto mb-2" />
          <p className="font-semibold text-[#8B5E3C]">Phone</p>
          <p className="text-sm text-[#3E2E26]/80 mt-1">
            +91 98765 43210
          </p>
        </div>

        <div className="bg-white border border-[#EAD7C5] rounded-2xl p-6 shadow-sm">
          <Clock className="w-6 h-6 text-[#C27A48] mx-auto mb-2" />
          <p className="font-semibold text-[#8B5E3C]">Open Today</p>
          <p className="text-sm text-[#3E2E26]/80 mt-1">
            9:00 AM – 10:00 PM
          </p>
        </div>
      </div>

      {/* Map (de-emphasized) */}
      <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-[#EAD7C5]/60 shadow-md mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4453785330874!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f4a00a7f%3A0x6d1e3e450d6813b9!2sChurch%20Street!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
          width="100%"
          height="250"
          loading="lazy"
          className="border-0"
        ></iframe>
      </div>

      {/* Secondary CTA */}
      <p className="text-sm text-[#3E2E26]/70">
        Tables fill up fast during evenings — plan your visit early.
      </p>
    </section>
  );
}

