"use client";

import React, { useState } from "react";
import { Sparkles, Truck, Clock, Check, ShieldCheck, RefreshCw } from "lucide-react";

export default function Laundry() {
  const [deliveryMode, setDeliveryMode] = useState<"dropoff" | "pickup">("dropoff");

  const services = [
    {
      title: "Standard Laundry",
      price: "250",
      unit: "KES/kg",
      desc: "Wash + fold, 24hr turnaround",
      tag: "ECO DETERGENT",
    },
    {
      title: "Beddings & Duvets",
      price: "600–1,200",
      unit: "KES/piece",
      desc: "Deep clean, sun-dried coastal freshness",
      tag: "HEAVY DUTY",
    },
    {
      title: "Delicate & Specialty",
      price: "400",
      unit: "KES/kg",
      desc: "Suits, silk, linen, traditional attire",
      tag: "HAND WASH",
    },
    {
      title: "Shoe Cleaning",
      price: "500",
      unit: "KES/pair",
      desc: "Sneakers to leather boots revitalized",
      tag: "DEEP CARE",
    },
    {
      title: "Ironing Only",
      price: "200",
      unit: "KES/kg",
      desc: "Pressed in 4hrs, hotel-crisp finish",
      tag: "EXPRESS",
    },
    {
      title: "Express 6hr Rush",
      price: "+50%",
      unit: "rush fee",
      desc: "Drop by 9am, ready by 3pm sharp",
      tag: "PRIORITY",
    },
  ];

  return (
    <section id="laundry" className="relative bg-[#F4F1EA] text-neutral-900 py-24 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-neutral-300 pb-8">
          <div>
            <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
              03 / LAUNDRY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 mt-2">
              ALWAYS <span className="text-[#E63946]">FRESH</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-xs text-neutral-600 leading-relaxed uppercase tracking-wider">
              Tourists drop bags. We return them crisp. 24hr turnaround in Kilifi, Watamu & environs. Hotel-grade press, eco wash.
            </p>
          </div>
        </div>

        {/* Interactive Controls & Mode Toggle */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="inline-flex bg-neutral-200/80 p-1 rounded-full border border-neutral-300">
            <button
              onClick={() => setDeliveryMode("dropoff")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase transition-all ${
                deliveryMode === "dropoff"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Drop-off • Active
            </button>
            <button
              onClick={() => setDeliveryMode("pickup")}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase transition-all ${
                deliveryMode === "pickup"
                  ? "bg-neutral-900 text-white shadow-sm"
                  : "text-neutral-600 hover:text-neutral-900"
              }`}
            >
              Pickup & Delivery +200 KES
            </button>
          </div>

          <div className="text-xs font-mono text-neutral-600 bg-white px-3.5 py-2 rounded-full border border-neutral-200 shadow-sm flex items-center space-x-1.5">
            <Check size={14} className="text-emerald-600" />
            <span>
              {deliveryMode === "dropoff"
                ? "Drop-off mode — bring to Kilifi Hub base"
                : "Pickup active — we collect from your Airbnb / Hotel"}
            </span>
          </div>
        </div>

        {/* Main Content Grid: Services List + Visual Hub Card */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Services Left Grid (2 cols within 2 grid slots) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200/80 rounded-2xl p-5 flex flex-col justify-between shadow-sm hover:border-neutral-300 transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono bg-neutral-100 text-neutral-600 px-2 py-0.5 rounded border border-neutral-200 uppercase">
                      {item.tag}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 mt-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-neutral-400 block">{item.unit}</span>
                    <span className="text-xl font-black text-neutral-900 tracking-tight">{item.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Preview Card: Zai Fresh Lab Station UI */}
          <div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[420px]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ccff00]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-neutral-800 pb-4 relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                ZAI FRESH LAB • KILIFI
              </span>
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            </div>

            {/* Simulated Washing Machine Graphic Interface */}
            <div className="py-8 flex flex-col items-center justify-center relative z-10 space-y-4">
              <div className="w-36 h-36 rounded-full border-4 border-neutral-800 bg-neutral-900/80 flex items-center justify-center relative shadow-inner">
                <div className="w-28 h-28 rounded-full border border-neutral-700/60 flex items-center justify-center animate-spin duration-1000">
                  <div className="w-2 h-2 bg-[#ccff00] rounded-full absolute top-2" />
                </div>
                <div className="absolute text-center">
                  <RefreshCw size={24} className="text-[#ccff00] mx-auto opacity-80 mb-1 animate-spin" />
                  <span className="text-[10px] font-mono text-neutral-400">ECO WASH</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-[10px] font-mono text-neutral-400">
                <span>24HR TURN</span>
                <span>•</span>
                <span>ECO DETERGENT</span>
                <span>•</span>
                <span>40°C</span>
              </div>
            </div>

            {/* Bottom active status badge */}
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 relative z-10 flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-[#ccff00] text-black flex items-center justify-center shrink-0 font-bold">
                <Check size={16} />
              </div>
              <div className="text-xs">
                <p className="font-bold text-white">Status: Ready for Drop-off</p>
                <p className="text-[10px] text-neutral-400 font-mono">Open Daily • 8AM - 8PM</p>
              </div>
            </div>

          </div>

        </div>

        {/* Footer Guarantee Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-300 text-xs font-mono text-neutral-600">
          <div className="flex items-center space-x-2">
            <ShieldCheck size={16} className="text-[#E63946]" />
            <span>100% GARMENT CARE GUARANTEE & STAIN REMOVAL</span>
          </div>
          <div className="text-right sm:text-right text-neutral-900 font-bold">
            M-PESA / CASH / CARD ACCEPTED ON DELIVERY
          </div>
        </div>

      </div>
    </section>
  );
}