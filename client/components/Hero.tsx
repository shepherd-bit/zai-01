"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Tours",
    description: "Guided experiences across Kilifi, Mombasa & Lamu",
    image: "https://picsum.photos/seed/tours/400/300",
    rotation: -12,
    zIndex: 1,
  },
  {
    title: "Stays",
    description: "Handpicked Airbnb properties for every budget",
    image: "https://picsum.photos/seed/stays/400/300",
    rotation: 0,
    zIndex: 2,
  },
  {
    title: "Laundry",
    description: "Fast, reliable laundry & dry cleaning services",
    image: "https://picsum.photos/seed/laundry/400/300",
    rotation: 12,
    zIndex: 3,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between border-b border-neutral-900 overflow-hidden">
      {/* Top Main Grid Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">

        {/* Left Side: Fanned Cards with ZAI Overlay */}
        <div className="relative flex items-center justify-center py-10" style={{ minHeight: "480px" }}>
          {/* Fanned Cards */}
          <div className="relative flex items-center justify-center w-full max-w-md" style={{ minHeight: "400px" }}>
            {services.map((service, i) => (
              <div
                key={service.title}
                className="absolute w-56 sm:w-64 md:w-72 transition-all duration-500 ease-out hover:!scale-110 hover:!z-50"
                style={{
                  transform: `rotate(${service.rotation}deg) translateX(${(i - 1) * 120}px)`,
                  zIndex: service.zIndex,
                }}
              >
                <div className="bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl shadow-black/60">
                  {/* Card Image */}
                  <div className="relative h-36 sm:h-40 md:h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-1">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ZAI Overlay Text */}
          <h1 className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
            <span className="flex">
              {["Z", "A", "I"].map((letter, i) => (
                <span
                  key={i}
                  className="text-[16vw] sm:text-[180px] md:text-[220px] lg:text-[260px] font-black tracking-tighter leading-none text-white/90 pointer-events-auto cursor-default transition-all duration-300 ease-out hover:text-white hover:scale-110 hover:-translate-y-4 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  {letter}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Right Side: Headline, Copy & CTAs */}
        <div className="flex flex-col justify-center space-y-6 lg:pl-10">
          {/* Subtle top border accent line matching design */}
          <div className="w-full h-[1px] bg-neutral-800 hidden lg:block" />

          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white leading-[1.1]">
            TOURS <br />
            & STAYS
          </h2>

          <p className="text-neutral-400 text-base sm:text-lg max-w-md leading-relaxed">
            One call. Three solutions. Transport, stays, laundry — sorted.
          </p>
          <p className="text-neutral-500 text-sm tracking-wider uppercase">
            We run the errands, you run the trip.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#transport"
              className="inline-flex items-center space-x-2 border border-neutral-700 hover:border-neutral-400 text-white px-8 py-4 text-sm tracking-widest uppercase rounded transition-colors"
            >
              <span>Explore Services</span>
              <ArrowDown size={18} />
            </Link>

            <Link
              href="#accommodation"
              className="inline-flex items-center space-x-2 bg-white text-black hover:bg-neutral-200 px-8 py-4 text-sm font-medium tracking-widest uppercase rounded transition-colors"
            >
              <span>View Stays</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-sm text-neutral-500 tracking-widest uppercase pt-6 border-t border-neutral-900 gap-4">
        <div className="flex items-center space-x-2">
          <span>— BASED IN KILIFI</span>
        </div>

        <div className="flex items-center space-x-2">
          <span>WHATSAPP 24/7</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
        </div>

        <div>
          <span>KILIFI . MOMBASA . LAMU</span>
        </div>
      </div>
    </section>
  );
}
