import React from 'react';
import { motion } from 'motion/react';
import { FLEET_OPTIONS, SGR_SCHEDULES } from '../../data/transport';

export const TransportSection: React.FC = () => {
  return (
    <section id="transport" className="relative bg-[#0E0E0F] py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        {/* Section Header */}
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="flex gap-6">
            <div className="text-[12px] font-bold tracking-widest opacity-40 mt-2">
              01 / TRANSPORT
            </div>
            <h2 className="font-black tracking-[-0.06em] leading-[0.9] text-[48px] md:text-[84px]">
              PRIVATE
              <br />
              TRANS<span className="text-[#FF5A2C]">PORT</span>
            </h2>
          </div>

          <div className="max-w-[380px] pt-2">
            <p className="text-[18px] leading-[1.4] text-white/60">
              We don't do queues. One call, we pull up. Fixed fare, no haggling, flight tracked.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[11px] font-bold tracking-wide">
              M-Pesa • Cash • Card • Licensed drivers
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid md:grid-cols-12 gap-5 auto-rows-[1fr]">
          {/* Card 1: Airport Pickups (JKIA / Wilson) */}
          <motion.div
            whileHover={{ y: -6 }}
            className="md:col-span-7 group relative rounded-[28px] bg-[#151515] border border-white/[0.07] p-8 md:p-10 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#FF5A2C]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-[#FF5A2C]/30 transition"
            />

            <div className="relative flex justify-between">
              <div className="w-12 h-12 rounded-full bg-[#F5F1EB] text-[#0E0E0F] grid place-items-center text-[18px] font-bold">
                ✈
              </div>
              <span className="h-7 px-3 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold tracking-wide grid place-items-center">
                MBA / UKUNDA
              </span>
            </div>

            <h3 className="relative mt-8 text-[32px] md:text-[44px] font-black tracking-[-0.04em] leading-[0.9]">
              Airport Pickups
            </h3>
            <p className="relative mt-4 max-w-[480px] text-[15px] leading-[1.6] text-white/60">
              We pick you up from the airport in 1 call. Flight delayed? We track it.
              Landing at 2am? We're awake. Fixed KES fare to Kilifi, Mombasa, Diani, Malindi.
            </p>

            <div className="relative mt-8 flex flex-wrap gap-3">
              <div className="h-[36px] px-4 rounded-full bg-[#F5F1EB] text-[#0E0E0F] text-[12px] font-bold grid place-items-center">
                KQ, ET, QR tracked
              </div>
              <div className="h-[36px] px-4 rounded-full border border-white/15 text-[12px] font-bold grid place-items-center">
                From KES 2,500
              </div>
            </div>

            {/* Simulated Live Route Tracker */}
            <div className="relative mt-10 h-[180px] rounded-[20px] bg-gradient-to-br from-[#1E1E1E] to-[#101010] border border-white/[0.06] overflow-hidden flex items-end p-4">
              <div className="w-full">
                <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '86%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-[#FF5A2C]"
                  />
                </div>
                <div className="mt-2 flex justify-between text-[10px] uppercase tracking-widest opacity-50">
                  <span>MBA T1</span>
                  <span>Kilifi 45min</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Car Hires (Alphard / Prado) */}
          <motion.div
            whileHover={{ y: -6 }}
            className="md:col-span-5 group relative rounded-[28px] bg-[#F5F1EB] text-[#0E0E0F] p-8 md:p-10 overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 w-[280px] h-[280px] bg-[#D9FF66] rounded-full blur-[20px] opacity-60"
            />

            <div className="relative flex justify-between">
              <div className="w-12 h-12 rounded-full bg-[#0E0E0F] text-[#F5F1EB] grid place-items-center text-[18px]">
                ◍
              </div>
              <span className="h-7 px-3 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[11px] font-bold tracking-wide grid place-items-center">
                ALPHARD • PRADO
              </span>
            </div>

            <h3 className="relative mt-8 text-[32px] font-black tracking-[-0.04em] leading-[0.9]">
              Car Hires
            </h3>
            <p className="relative mt-3 text-[14px] leading-[1.6] opacity-70">
              Private tours with pro drivers who know every shortcut from Kilifi to Diani,
              Malindi, Watamu, Mombasa. Fuel inclusive options.
            </p>

            <div className="relative mt-8 grid grid-cols-3 gap-2">
              {FLEET_OPTIONS.map((car) => (
                <div
                  key={car.name}
                  className="rounded-[14px] bg-[#0E0E0F]/5 border border-black/5 p-3"
                >
                  <div className="text-[12px] font-black leading-tight">{car.name}</div>
                  <div className="text-[10px] opacity-60 uppercase tracking-wide">
                    {car.seats}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 3: SGR Station Pickups */}
          <motion.div
            whileHover={{ y: -6 }}
            className="md:col-span-12 group relative rounded-[28px] bg-[#2E3A2F] border border-white/[0.06] p-8 md:p-10 overflow-hidden grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center"
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 bottom-0 w-[55%] bg-gradient-to-r from-[#D9FF66]/15 to-transparent pointer-events-none"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#D9FF66] text-[#0E0E0F] grid place-items-center text-[18px] font-bold">
                  ◍◍
                </div>
                <span className="h-7 px-3 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold tracking-wide grid place-items-center">
                  SGR / MADARAKA EXPRESS
                </span>
              </div>

              <h3 className="mt-6 text-[32px] md:text-[44px] font-black tracking-[-0.04em] leading-[0.9]">
                Train Station Pickups
              </h3>
              <p className="mt-4 max-w-[520px] text-[15px] leading-[1.6] text-white/60">
                SGR Mombasa Terminus to your Airbnb in 30 mins. We wait at Mombasa SGR.
                No haggling, fixed fare, M-Pesa on arrival.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[11px] font-bold">
                  Fixed KES 1,500
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold">
                  Platform pickup
                </span>
              </div>
            </div>

            {/* Right Train Timetable Board */}
            <div className="relative">
              <div className="rounded-[20px] bg-[#0E0E0F]/60 backdrop-blur border border-white/10 p-5">
                <div className="flex justify-between text-[11px] tracking-widest opacity-50 uppercase">
                  <span>SGR Mombasa Terminus</span>
                  <span>• Live</span>
                </div>

                <div className="mt-4 space-y-3">
                  {SGR_SCHEDULES.map((schedule) => (
                    <div
                      key={schedule.time}
                      className="flex gap-3 rounded-[12px] bg-white/[0.06] border border-white/[0.06] p-3"
                    >
                      <div className="text-[12px] font-bold">{schedule.time}</div>
                      <div className="flex-1 text-[12px] leading-tight opacity-80">
                        {schedule.train}
                      </div>
                      <div className="text-[10px] px-2 py-1 rounded-full bg-[#D9FF66] text-black font-bold h-fit">
                        {schedule.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Badges */}
        <div className="mt-8 flex flex-wrap gap-3 text-[12px] font-bold tracking-widest uppercase">
          <div className="px-5 py-3 rounded-full bg-white/[0.06] border border-white/10">
            500+ pickups • 4.9 rating • Under 15min response
          </div>
          <div className="px-5 py-3 rounded-full bg-[#FF5A2C] text-white">
            MBA ↔ Kilifi • Day & Night
          </div>
        </div>
      </div>
    </section>
  );
};
