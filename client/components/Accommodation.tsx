"use client";

import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

export default function Accommodation() {
  const stays = [
    {
      badge: "Superhost",
      rating: "4.96",
      title: "Zai Kilifi Creekside Villa",
      type: "4BR • 8 guests",
      location: "Kilifi Creek, Bofa Rd",
      price: "KES 14,000",
      features: ["WiFi • 100Mbps", "Kitchen", "Pool Access"],
    },
    {
      badge: null,
      rating: "4.89",
      title: "Zai Nyali Beach Loft",
      type: "2BR • 4 guests",
      location: "Nyali, Mombasa",
      price: "KES 8,500",
      features: ["WiFi • 100Mbps", "Kitchen", "Beachfront"],
    },
    {
      badge: "Coastal Pick",
      rating: "4.92",
      title: "Zai Watamu Ocean Breeze",
      type: "1BR • 2 guests",
      location: "Watamu Marine Park",
      price: "KES 6,000",
      features: ["WiFi • 100Mbps", "Kitchen", "AC"],
    },
    {
      badge: "Superhost",
      rating: "4.98",
      title: "Zai Vipingo Ridge Villa",
      type: "3BR • 6 guests",
      location: "Vipingo Ridge Golf Estate",
      price: "KES 16,500",
      features: ["WiFi • 100Mbps", "Kitchen", "Golf View"],
    },
    {
      badge: null,
      rating: "4.85",
      title: "Zai Mombasa CBD Suite",
      type: "2BR • 4 guests",
      location: "Mombasa Island",
      price: "KES 7,500",
      features: ["WiFi • 100Mbps", "Kitchen", "Parking"],
    },
    {
      badge: "Heritage Stay",
      rating: "4.94",
      title: "Zai Lamu Heritage Haven",
      type: "3BR • 6 guests",
      location: "Lamu Old Town",
      price: "KES 11,000",
      features: ["WiFi • 50Mbps", "Kitchen", "Rooftop Deck"],
    },
  ];

  return (
    <section id="accommodation" className="relative bg-[#F4F1EA] text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              02 / STAYS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 mt-2">
              STAYS THAT <br className="hidden sm:block" />
              FEEL LIKE <span className="text-[#E63946]">HOME</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-xs text-neutral-600 leading-relaxed uppercase tracking-wider">
              Curated coastal stays near Kilifi Creek, Mombasa beaches, and Lamu heritage sites. Self check-in, fast Wi-Fi, full kitchens. Perfect for remote work, getaways, or soft landings.
            </p>
          </div>
        </div>

        {/* Grid of Stays (2 rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stays.map((stay, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200/80 rounded-3xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
            >
              {/* Card Top / Image Dark Thumbnail Box */}
              <div className="relative w-full h-48 rounded-2xl bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-800 p-4 flex flex-col justify-between overflow-hidden mb-5">
                
                {/* Ambient glow effect inside card thumbnail */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,57,70,0.15),transparent_50%)] pointer-events-none" />

                {/* Top Badges */}
                <div className="flex items-center justify-between relative z-10">
                  {stay.badge ? (
                    <span className="bg-[#ccff00] text-black text-[10px] font-mono font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {stay.badge}
                    </span>
                  ) : (
                    <span />
                  )}

                  <span className="bg-neutral-900/90 border border-neutral-800 text-neutral-200 text-[10px] font-mono px-2 py-1 rounded-full flex items-center space-x-1">
                    <Star size={10} className="text-[#ccff00] fill-[#ccff00]" />
                    <span className="text-white">{stay.rating}</span>
                  </span>
                </div>

                {/* Bottom Card Meta inside thumbnail */}
                <div className="flex items-end justify-between relative z-10">
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{stay.type}</p>
                    <h3 className="text-lg font-bold text-white tracking-tight">{stay.title}</h3>
                  </div>
                  <Link
                    href="#cta"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#ccff00] hover:text-black text-white flex items-center justify-center transition-colors"
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Card Footer Info on White Background */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between text-xs text-neutral-600 font-mono">
                  <span>{stay.location}</span>
                  <div className="text-right">
                    <span className="text-[10px] text-neutral-400 uppercase block">From</span>
                    <span className="text-sm font-extrabold text-neutral-900">{stay.price} <span className="text-[10px] text-neutral-500 font-normal">/night</span></span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {stay.features.map((feat, fIdx) => (
                    <span key={fIdx} className="text-[10px] font-mono bg-neutral-100 border border-neutral-200 px-2 py-1 rounded text-neutral-700">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}