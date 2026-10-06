"use client";

import React from "react";
import { Plane, Train, Car, ShieldCheck, Clock, MapPin } from "lucide-react";

export default function Transport() {
  return (
    <section id="transport" className="relative bg-black text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-800 pb-8">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              01 / Transport
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mt-2">
              PRIVATE TRANSPORT
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-xs text-neutral-400 leading-relaxed uppercase tracking-wider">
              We don&apos;t do queues. One call, we pull up. Fixed fare, no haggling, flight tracked.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-300">
                M-Pesa
              </span>
              <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-300">
                Cash
              </span>
              <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-neutral-300">
                Card
              </span>
              <span className="text-[10px] font-mono bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-[#ccff00]">
                Licensed drivers
              </span>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Airport Pickups */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-neutral-700 transition-all">
            <div className="absolute top-6 right-6 text-[10px] font-mono bg-neutral-800/80 text-neutral-300 px-3 py-1 rounded-full uppercase tracking-widest">
              MBA / Vipingo Ridge
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#ccff00]">
                <Plane size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Airport Pickups</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                We pick you up from Moi International Airport (MBA) or Vipingo Ridge airstrip in 1 call. Flight delayed? We track it. Landing at 2am? We&apos;re awake. Fixed fare to Kilifi, Watamu, and Malindi.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono text-neutral-400">KQ, ET, QR tracked</span>
              </div>
              <span className="text-xs font-mono font-bold text-[#ccff00]">
                From KES 3,500
              </span>
            </div>
          </div>

          {/* Card 2: Car Hires */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-neutral-700 transition-all">
            <div className="absolute top-6 right-6 text-[10px] font-mono bg-[#ccff00] text-black font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
              ALPHARD • PRADO
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center text-[#ccff00]">
                <Car size={24} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">Car Hires</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Private coastal tours with pro drivers who know every shortcut from Kilifi to Mombasa CBD, Watamu Marine Park, and Lamu connections. Fuel inclusive options available.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-neutral-800/80 text-center">
              <div className="bg-neutral-900/90 border border-neutral-800 py-2 rounded px-1">
                <p className="text-xs font-bold text-white">Alphard</p>
                <p className="text-[10px] text-neutral-500 uppercase font-mono">7 Seater</p>
              </div>
              <div className="bg-neutral-900/90 border border-neutral-800 py-2 rounded px-1">
                <p className="text-xs font-bold text-white">Prado J150</p>
                <p className="text-[10px] text-neutral-500 uppercase font-mono">4x4 Offroad</p>
              </div>
              <div className="bg-neutral-900/90 border border-neutral-800 py-2 rounded px-1">
                <p className="text-xs font-bold text-white">Noah</p>
                <p className="text-[10px] text-neutral-500 uppercase font-mono">8 Seater</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Wide Card: Train Station Pickups */}
        <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-[#ccff00]">
                <Train size={20} />
              </div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest bg-neutral-900 px-3 py-1 rounded border border-neutral-800">
                SGR / Madaraka Express
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Train Station Pickups</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Mombasa SGR Terminus (Miritini) to your Kilifi Airbnb or hotel in ~60 mins. We wait at the station exit. No haggling, fixed fare, M-Pesa on arrival.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <span className="bg-[#ccff00] text-black font-semibold text-xs px-3 py-1.5 rounded uppercase font-mono">
                Fixed KES 4,500
              </span>
              <span className="text-xs text-neutral-400 font-mono flex items-center space-x-1">
                <MapPin size={14} className="text-[#ccff00]" />
                <span>Platform pickup guaranteed</span>
              </span>
            </div>
          </div>

          {/* SGR Schedule Mini Tracker Box */}
          <div className="w-full lg:w-auto bg-black/60 border border-neutral-800 rounded-xl p-4 sm:p-5 space-y-3 min-w-[320px]">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pb-2 border-b border-neutral-800">
              <span>MOMBASA TERMINUS (MIRITINI)</span>
              <span className="text-emerald-400 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>LIVE</span>
              </span>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white">08:00 Madaraka Express • Nairobi → Mombasa</p>
                  <p className="text-[10px] text-neutral-500 font-mono">Morning Arrival</p>
                </div>
                <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] px-2 py-0.5 rounded font-mono">
                  Arrived
                </span>
              </div>

              <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-900">
                <div>
                  <p className="font-bold text-white">15:30 Madaraka Express • Mombasa → Nairobi</p>
                  <p className="text-[10px] text-neutral-500 font-mono">Afternoon Departure</p>
                </div>
                <span className="bg-yellow-950 text-yellow-400 border border-yellow-800 text-[10px] px-2 py-0.5 rounded font-mono">
                  Boarding
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Statistics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-neutral-900 text-xs font-mono text-neutral-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={16} className="text-[#ccff00]" />
            <span>500+ COAST PICKUPS COMPLETED</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-[#ccff00]" />
            <span>AVERAGE 15MIN RESPONSE TIME</span>
          </div>
          <div className="text-right sm:text-right text-[#ccff00] font-bold">
            MBA ⇄ KILIFI • DAY & NIGHT SERVICE
          </div>
        </div>

      </div>
    </section>
  );
}