import React from 'react';
import { motion } from 'motion/react';
import { STAYS_DATA } from '../../data/stays';
import { CONTACT_INFO } from '../../data/navigation';

export const StaysSection: React.FC = () => {
  return (
    <section id="stays" className="relative bg-[#F5F1EB] text-[#0E0E0F] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-wrap gap-6 justify-between items-end">
          <div className="flex gap-6">
            <div className="text-[12px] font-bold tracking-widest opacity-40 mt-3">
              02 / STAYS
            </div>
            <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[48px] md:text-[84px]">
              STAYS THAT
              <br />
              FEEL LIKE <span className="text-[#FF5A2C]">HOME</span>
            </h2>
          </div>

          <div className="max-w-[360px] text-[15px] leading-[1.5] opacity-60">
            Curated Airbnbs within 15min of JKIA & SGR. Self check-in, fast WiFi, full kitchens.
            Perfect for layovers, project stays, or soft landings.
          </div>
        </div>

        {/* Stays Grid */}
        <div className="mt-14 grid md:grid-cols-12 gap-5">
          {STAYS_DATA.map((stay, idx) => {
            const isWideCard = idx === 0 || idx === 5;
            return (
              <motion.div
                key={stay.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: idx * 0.07 }}
                whileHover={{ y: -6 }}
                className={`${
                  isWideCard ? 'md:col-span-8' : 'md:col-span-4'
                } group relative rounded-[28px] bg-white border border-black/[0.06] p-4 overflow-hidden shadow-sm`}
              >
                {/* Visual Thumbnail Area with Ambient Architectural Gradient */}
                <div className="relative aspect-[1.6/1] rounded-[20px] overflow-hidden bg-[#0E0E0F]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `radial-gradient(120% 120% at ${20 + idx * 12}% ${
                        30 + idx * 8
                      }%, #FF5A2C 0%, #2E3A2F 35%, #0E0E0F 70%)`,
                    }}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.55))]"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {stay.tag && (
                      <span className="px-3 py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[11px] font-bold tracking-wide">
                        {stay.tag}
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-white/90 text-[#0E0E0F] text-[11px] font-bold">
                      ★ {stay.rating}
                    </span>
                  </div>

                  {/* Bottom Overlay Title Info */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="text-white">
                      <div className="text-[13px] opacity-70 tracking-wide">{stay.type}</div>
                      <div className="text-[18px] font-black tracking-tight leading-none mt-1">
                        {stay.name}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white text-black grid place-items-center font-bold">
                      ↗
                    </div>
                  </div>

                  {/* Geometric Graphic Emblem */}
                  <div
                    aria-hidden="true"
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-[72px] h-[72px] rounded-full border border-white/15 grid place-items-center"
                  >
                    <div className="w-[48px] h-[48px] rounded-full border border-white/20 grid place-items-center text-white/40 text-[16px]">
                      ✦
                    </div>
                  </div>
                </div>

                {/* Card Meta & Nightly Rate */}
                <div className="px-2 pt-4 pb-2 flex justify-between items-center">
                  <div>
                    <div className="text-[12px] opacity-50 tracking-wide">{stay.location}</div>
                    <div className="mt-2 flex flex-wrap gap-2 text-[10px] font-bold tracking-wide">
                      {stay.amenities?.map((amenity) => (
                        <span
                          key={amenity}
                          className="px-2 py-1 rounded-full bg-black/[0.06] text-[#0E0E0F]"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] uppercase tracking-widest opacity-40 font-bold">
                      From
                    </div>
                    <div className="font-black text-[20px] tracking-tight">
                      KES {stay.price}
                      <span className="text-[11px] font-bold opacity-40">/night</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="mt-10 flex flex-wrap gap-4 items-center justify-between">
          <a
            href={CONTACT_INFO.socials.airbnb}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 h-[56px] px-8 rounded-full bg-[#0E0E0F] text-[#F5F1EB] font-bold text-[14px] hover:bg-black transition"
          >
            <span>View all on Airbnb</span>
            <span className="w-7 h-7 rounded-full bg-[#FF5A2C] text-white grid place-items-center">
              →
            </span>
          </a>

          <div className="text-[12px] tracking-wide opacity-60 max-w-[420px]">
            All listings are Airbnb Superhost track, verified by Zai team. Instant book • Self
            check-in • M-Pesa accepted • Invoice available.
          </div>
        </div>
      </div>
    </section>
  );
};
