"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white pt-28 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-between border-b border-neutral-900">
      {/* Top Main Grid Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center my-auto">
        
        {/* Left Side: Massive ZAI Line-Art Branding */}
        <div className="relative flex items-center justify-start py-10">
          <h1 className="text-[12vw] sm:text-[140px] md:text-[180px] lg:text-[210px] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700 select-none">
            ZAI
          </h1>
        </div>

        {/* Right Side: Headline, Copy & CTAs */}
        <div className="flex flex-col justify-center space-y-6 lg:pl-10">
          {/* Subtle top border accent line matching design */}
          <div className="w-full h-[1px] bg-neutral-800 hidden lg:block" />

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            TOURS <br />
            & STAYS
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            One call. Three solutions. Transport, stays, laundry — sorted.
          </p>
          <p className="text-neutral-500 text-xs tracking-wider uppercase">
            We run the errands, you run the trip.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#transport"
              className="inline-flex items-center space-x-2 border border-neutral-700 hover:border-neutral-400 text-white px-6 py-3 text-xs tracking-widest uppercase rounded transition-colors"
            >
              <span>Explore Services</span>
              <ArrowDown size={14} />
            </Link>

            <Link
              href="#accommodation"
              className="inline-flex items-center space-x-2 bg-white text-black hover:bg-neutral-200 px-6 py-3 text-xs font-medium tracking-widest uppercase rounded transition-colors"
            >
              <span>View Stays</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 tracking-widest uppercase pt-6 border-t border-neutral-900 gap-4">
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