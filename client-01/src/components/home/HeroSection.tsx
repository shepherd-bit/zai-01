import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { RouteMapCard } from './RouteMapCard';
import { MarqueeTicker } from './MarqueeTicker';
import { CONTACT_INFO } from '../../data/navigation';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section ref={heroRef} className="relative">
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto max-w-[1600px] px-6 md:px-10 pt-10 md:pt-16 pb-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10"
      >
        {/* Left Typography & Hero Copy */}
        <div>
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[11px] tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D9FF66] animate-pulse" />
            <span>Based in Athi River • Live at JKIA • SGR • Nairobi</span>
          </div>

          {/* Main Hero Header */}
          <h1 className="mt-6 font-black tracking-[-0.06em] leading-[0.86] text-[14vw] lg:text-[8.5vw] xl:text-[118px]">
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              YOUR TRIP,
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
              className="block text-[#FF5A2C]"
            >
              HANDLED IN
            </motion.span>
            <motion.span
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              ONE CALL.
              <span className="align-super text-[0.22em] ml-3 tracking-[0.2em] font-bold opacity-40">
                ↗
              </span>
            </motion.span>
          </h1>

          {/* Value Prop & Primary Actions */}
          <div className="mt-8 max-w-[560px] flex gap-6">
            <div className="hidden md:block w-[1px] bg-white/15 self-stretch" />
            <div>
              <p className="text-[18px] md:text-[20px] leading-[1.35] tracking-[-0.02em] text-white/70">
                Private transport, curated Airbnbs, and crisp laundry. One number does it all.
                We pull up, you check in, your clothes come back fresh.
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="h-[52px] px-7 rounded-full bg-[#FF5A2C] text-white font-bold text-[14px] inline-flex items-center gap-2 hover:bg-[#ff6a40] transition shadow-lg shadow-[#FF5A2C]/20"
                >
                  <span>Call Now — {CONTACT_INFO.displayPhone}</span>
                  <span className="opacity-60">→</span>
                </a>

                <a
                  href="#stays"
                  className="h-[52px] px-7 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur font-bold text-[14px] inline-flex items-center gap-2 hover:bg-white/[0.08] transition"
                >
                  <span>View Stays</span>
                  <span className="w-6 h-6 rounded-full bg-white text-black grid place-items-center text-[12px] font-bold">
                    ↗
                  </span>
                </a>
              </div>

              {/* Social Proof */}
              <div className="mt-8 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['T', 'O', 'K'].map((initial, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#2E3A2F] border-2 border-[#0E0E0F] grid place-items-center text-[10px] font-bold"
                    >
                      {initial}
                    </div>
                  ))}
                </div>

                <div className="text-[12px] leading-tight">
                  <div className="font-bold">Trusted by 500+ travelers</div>
                  <div className="opacity-50">Airbnb • SGR • JKIA daily</div>
                </div>

                <div className="hidden md:flex items-center gap-2 ml-6 px-3 py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[11px] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-black animate-ping" />
                  <span>Response &lt; 15min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Route Map & Waypoint Graphic */}
        <RouteMapCard />
      </motion.div>

      {/* Infinite Running Marquee */}
      <MarqueeTicker />
    </section>
  );
};
