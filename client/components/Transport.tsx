"use client";

import React from "react";
import { ArrowUpRight, CircleDot, TrainFront } from "lucide-react";

export default function Transport() {
  return (
    <section className="relative bg-[#f5f2ea] text-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <span className="text-xs tracking-widest text-neutral-500 uppercase">01 / Transport</span>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.9] mt-2">
              PRIVATE
              <br />
              TRAN<span className="text-orange-600">SPORT</span>
            </h2>
          </div>
          <div className="lg:text-right">
            <p className="text-neutral-600 text-sm max-w-xs leading-relaxed">
              We don&apos;t do queues. One call, we pull up. Fixed fare, no haggling, flight tracked.
            </p>
            <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-orange-600/10 border border-orange-600/30">
              <span className="text-orange-600 text-xs font-medium">M-Pesa • Cash • Card</span>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Card 1: Airport Pickups */}
          <div className="relative bg-white border border-neutral-200 rounded-2xl p-6 min-h-[320px] flex flex-col justify-between overflow-hidden shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
                <span className="text-[10px] tracking-wider text-neutral-500 border border-neutral-200 rounded-full px-2.5 py-1">
                  MALINDI / MOI INTL
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2">Airport Pickups</h3>
              <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
                We pick you up from Malindi or Moi International in 1 call. Flight delayed? We track it. Landing at 2am? we&apos;re awake. Fixed KES fare to Kilifi, Watamu, Malindi.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-[10px] tracking-wider text-neutral-600 border border-neutral-200 rounded-full px-2.5 py-1">
                  KQ, ET, QR tracked
                </span>
                <span className="text-[10px] tracking-wider text-neutral-600 border border-neutral-200 rounded-full px-2.5 py-1">
                  from KES 1,500
                </span>
              </div>
            </div>

            {/* Route Map Image */}
            <div className="mt-6 h-28 rounded-xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://picsum.photos/seed/coastal-route/600/200"
                alt="Coastal route map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2: Car Hires */}
          <div className="relative bg-neutral-900 text-white rounded-2xl p-6 min-h-[320px] flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-[#ccff00] flex items-center justify-center">
                  <CircleDot size={18} className="text-black" />
                </div>
                <span className="text-[10px] tracking-wider text-neutral-400 border border-neutral-700 rounded-full px-2.5 py-1">
                  ALPHARD • PRADO
                </span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight mb-2">Car Hires</h3>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
                Private tours with pro drivers who know every shortcut from Kilifi to Mombasa, Malindi, Lamu, Watamu. Fuel inclusive options.
              </p>

              {/* Driver options */}
              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <p className="text-xs font-semibold">Alphard</p>
                  <p className="text-[10px] text-neutral-500">7 SEATS</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <p className="text-xs font-semibold">Prado J150</p>
                  <p className="text-[10px] text-neutral-500">8 SEATS</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                  <p className="text-xs font-semibold">Noah</p>
                  <p className="text-[10px] text-neutral-500">8 SEATS</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Train Station Pickups */}
          <div className="relative lg:col-span-2 bg-white border border-neutral-200 rounded-2xl p-6 min-h-[280px] overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
                    <TrainFront size={18} className="text-white" />
                  </div>
                  <span className="text-[10px] tracking-wider text-neutral-500 border border-neutral-200 rounded-full px-2.5 py-1">
                    SGR / MADARAKA EXPRESS
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-2">Train Station Pickups</h3>
                <p className="text-neutral-600 text-sm leading-relaxed max-w-sm">
                  Mombasa SGR Terminus to your Airbnb in 45 mins. We wait at Mombasa or Mariakani. No haggling, fixed fare, M-Pesa on arrival.
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-[10px] tracking-wider text-white bg-orange-600 rounded-full px-2.5 py-1 font-medium">
                    Fixed KES 1,500
                  </span>
                  <span className="text-[10px] tracking-wider text-neutral-600 border border-neutral-200 rounded-full px-2.5 py-1">
                    Platform pickup
                  </span>
                </div>
              </div>

              {/* Live Schedule Widget */}
              <div className="bg-neutral-900 text-white rounded-xl p-4 min-w-[280px]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] tracking-wider text-neutral-400">MOMBASA SGR TERMINUS</span>
                  <span className="flex items-center gap-1.5 text-[10px] text-[#ccff00]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                    LIVE
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2.5">
                    <div>
                      <p className="text-xs font-medium">08:00 Madaraka Express</p>
                      <p className="text-[10px] text-neutral-500">Mombasa → Nairobi</p>
                    </div>
                    <span className="text-[10px] text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">Arrived</span>
                  </div>

                  <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-3 py-2.5">
                    <div>
                      <p className="text-xs font-medium">15:30 Madaraka Express</p>
                      <p className="text-[10px] text-neutral-500">Nairobi → Mombasa</p>
                    </div>
                    <span className="text-[10px] text-yellow-400 bg-yellow-400/10 px-2 py-0.5 rounded-full">Boarding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-neutral-200">
          <span className="text-xs tracking-wider text-neutral-500">
            500+ PICKUPS • 4.9 RATING • UNDER 15MIN RESPONSE
          </span>
          <span className="inline-flex items-center gap-2 bg-orange-600 text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full">
            MALINDI ↔ KILIFI • DAY & NIGHT
          </span>
        </div>

      </div>
    </section>
  );
}
