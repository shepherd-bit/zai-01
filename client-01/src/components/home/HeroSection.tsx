import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MarqueeTicker } from './MarqueeTicker';
import { CONTACT_INFO } from '../../data/navigation';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section ref={heroRef} className="relative overflow-hidden bg-[#0E0E0F]">
      {/* Ambient background glow matching theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#D9FF66]/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[420px] bg-[#FF5A2C]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto max-w-[1600px] px-6 md:px-10 pt-8 md:pt-14 pb-12"
      >
        {/* Main Grid: Left Neon ZAI Visual / Right Tours & Stays Content */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center min-h-[580px] lg:min-h-[640px]">
          
          {/* Left Column: 3 Tilted Dark Glass Cards with Giant Glowing Neon "ZAI" Typography */}
          <div className="relative flex items-center justify-center py-6 sm:py-10 order-2 lg:order-1 select-none">
            {/* Background ambient radial glow */}
            <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-gradient-to-tr from-[#D9FF66]/20 via-[#D9FF66]/10 to-transparent rounded-full blur-[90px] pointer-events-none" />

            {/* Container for the 3 tilted cards */}
            <div className="relative w-full max-w-[560px] h-[380px] sm:h-[440px] flex items-center justify-center">
              
              {/* Card 1: Left Tilted Card (-8deg) */}
              <motion.div
                initial={{ opacity: 0, rotate: -14, x: -30 }}
                animate={{ opacity: 1, rotate: -8, x: 0 }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ rotate: -5, scale: 1.02 }}
                className="absolute left-2 sm:left-6 w-[170px] sm:w-[220px] md:w-[240px] h-[270px] sm:h-[350px] md:h-[380px] rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#1c1d22]/95 via-[#131418]/90 to-[#0c0d0f]/95 border border-white/10 p-4 sm:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 z-0"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    01 / FLEET
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#FF5A2C]" />
                </div>

                {/* Card Body Abstract Vector Graphics */}
                <div className="my-auto py-2 flex flex-col items-center justify-center opacity-40">
                  <svg viewBox="0 0 120 120" className="w-20 sm:w-28 h-20 sm:h-28 stroke-white/30 fill-none">
                    <circle cx="60" cy="60" r="50" strokeDasharray="4 4" strokeWidth="1" />
                    <circle cx="60" cy="60" r="32" strokeWidth="1" />
                    <circle cx="60" cy="60" r="6" fill="#FF5A2C" />
                    <path d="M60 10 L60 110 M10 60 L110 60" strokeWidth="0.75" strokeOpacity="0.4" />
                    <path d="M25 35 Q 60 75, 95 40" stroke="#FF5A2C" strokeWidth="2" strokeDasharray="3 3" />
                  </svg>
                </div>

                {/* Card Footer Info */}
                <div className="border-t border-white/[0.08] pt-3">
                  <div className="text-[11px] sm:text-[12px] font-bold text-white/90">
                    Private Mobility
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    JKIA • SGR • Coastal
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Center Elevated Card (Upright / -1deg) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, rotate: -1 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ rotate: 0, scale: 1.03 }}
                className="absolute w-[180px] sm:w-[230px] md:w-[250px] h-[290px] sm:h-[370px] md:h-[400px] rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#24262d]/95 via-[#18191f]/90 to-[#0e0f13]/98 border border-white/20 p-4 sm:p-6 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-xl transition-all duration-300 z-10"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#D9FF66] uppercase">
                    02 / STAYS
                  </span>
                  <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#D9FF66]/10 border border-[#D9FF66]/30 text-[#D9FF66] text-[9px] font-bold">
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Card Body Abstract Blueprint & Architecture lines */}
                <div className="my-auto py-2 flex flex-col items-center justify-center opacity-50">
                  <div className="w-full h-24 sm:h-32 border border-white/10 rounded-xl p-2.5 relative overflow-hidden bg-black/20">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px] opacity-20" />
                    <div className="flex justify-between items-start text-[9px] font-mono text-white/50">
                      <span>VILLA 04</span>
                      <span>KILIFI CRK</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="w-3 h-3 rounded-sm border border-[#D9FF66]" />
                      <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-[#D9FF66]" />
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[8px] font-mono text-white/40">
                      <div className="p-1 rounded bg-white/[0.04]">OCEAN</div>
                      <div className="p-1 rounded bg-white/[0.04]">POOL</div>
                      <div className="p-1 rounded bg-white/[0.04]">CHEF</div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="border-t border-white/[0.1] pt-3">
                  <div className="text-[11px] sm:text-[12px] font-bold text-white flex items-center justify-between">
                    <span>Curated Stays</span>
                    <span className="text-[#D9FF66] text-[10px]">★ 4.98</span>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/50 uppercase tracking-wider mt-0.5">
                    Athi River • Coast Stays
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Right Tilted Card (+8deg) */}
              <motion.div
                initial={{ opacity: 0, rotate: 14, x: 30 }}
                animate={{ opacity: 1, rotate: 8, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ rotate: 5, scale: 1.02 }}
                className="absolute right-2 sm:right-6 w-[170px] sm:w-[220px] md:w-[240px] h-[270px] sm:h-[350px] md:h-[380px] rounded-[24px] sm:rounded-[32px] bg-gradient-to-br from-[#1c1d22]/95 via-[#131418]/90 to-[#0c0d0f]/95 border border-white/10 p-4 sm:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.12)] backdrop-blur-md transition-all duration-300 z-0"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase">
                    03 / LAUNDRY
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#D9FF66]" />
                </div>

                {/* Card Body Wave & Freshness Abstract graphic */}
                <div className="my-auto py-2 flex flex-col items-center justify-center opacity-40">
                  <svg viewBox="0 0 120 120" className="w-20 sm:w-28 h-20 sm:h-28 stroke-white/30 fill-none">
                    <path d="M10 40 Q 35 20, 60 40 T 110 40" strokeWidth="1.5" />
                    <path d="M10 60 Q 35 40, 60 60 T 110 60" stroke="#D9FF66" strokeWidth="1.5" />
                    <path d="M10 80 Q 35 60, 60 80 T 110 80" strokeWidth="1.5" />
                    <circle cx="60" cy="60" r="28" strokeDasharray="3 3" strokeWidth="1" />
                    <circle cx="60" cy="60" r="4" fill="#D9FF66" />
                  </svg>
                </div>

                {/* Card Footer Info */}
                <div className="border-t border-white/[0.08] pt-3">
                  <div className="text-[11px] sm:text-[12px] font-bold text-white/90">
                    Crisp Care
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-wider mt-0.5">
                    Wash • Fold • Same-Day
                  </div>
                </div>
              </motion.div>

              {/* GIANT GLOWING NEON "ZAI" MONOGRAM OVERLAY */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
              >
                <div className="relative w-full max-w-[500px] px-2">
                  <svg
                    viewBox="0 0 520 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto overflow-visible"
                  >
                    <defs>
                      {/* Neon glow filter */}
                      <filter id="zai-neon-glow" x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="4" result="blur1" />
                        <feGaussianBlur stdDeviation="12" result="blur2" />
                        <feGaussianBlur stdDeviation="24" result="blur3" />
                        <feMerge>
                          <feMergeNode in="blur3" />
                          <feMergeNode in="blur2" />
                          <feMergeNode in="blur1" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      <linearGradient id="neon-lime-stroke" x1="0" y1="0" x2="520" y2="280" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#EBFF85" />
                        <stop offset="50%" stopColor="#D9FF66" />
                        <stop offset="100%" stopColor="#B8F03B" />
                      </linearGradient>
                    </defs>

                    {/* Outer Neon Glow Layer */}
                    <g filter="url(#zai-neon-glow)" opacity="0.95">
                      {/* Letter Z */}
                      <path
                        d="M 40 40 L 175 40 L 40 240 L 180 240"
                        stroke="url(#neon-lime-stroke)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />

                      {/* Letter A */}
                      <path
                        d="M 185 240 L 260 40 L 335 240 M 205 175 L 315 175"
                        stroke="url(#neon-lime-stroke)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />

                      {/* Letter I with center dot */}
                      <path
                        d="M 360 40 L 485 40 M 422 40 L 422 240 M 360 240 L 485 240"
                        stroke="url(#neon-lime-stroke)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      {/* Decorative inner circular dot inside 'I' geometry as seen in attachment */}
                      <circle
                        cx="422"
                        cy="140"
                        r="14"
                        fill="#D9FF66"
                      />
                    </g>

                    {/* Crisp Core Stroke Layer */}
                    <g opacity="1">
                      {/* Letter Z */}
                      <path
                        d="M 40 40 L 175 40 L 40 240 L 180 240"
                        stroke="#F5FFE6"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />

                      {/* Letter A */}
                      <path
                        d="M 185 240 L 260 40 L 335 240 M 205 175 L 315 175"
                        stroke="#F5FFE6"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />

                      {/* Letter I */}
                      <path
                        d="M 360 40 L 485 40 M 422 40 L 422 240 M 360 240 L 485 240"
                        stroke="#F5FFE6"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                      <circle
                        cx="422"
                        cy="140"
                        r="10"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Typography, Copy & Action Buttons matching Attachment 2 */}
          <div className="flex flex-col justify-center order-1 lg:order-2 pl-0 lg:pl-4">
            {/* Main Headline */}
            <h1 className="font-black text-[13vw] sm:text-[10vw] lg:text-[6.5vw] xl:text-[96px] tracking-[-0.04em] leading-[0.88] text-white uppercase select-none">
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="block"
              >
                TOURS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                className="block"
              >
                &amp; STAYS
              </motion.span>
            </h1>

            {/* Subtitle / Value Prop */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6 sm:mt-8 text-[17px] sm:text-[19px] md:text-[20px] leading-relaxed text-white/75 max-w-[540px] font-normal"
            >
              One call. Three solutions. Transport, stays, laundry — sorted.
            </motion.p>

            {/* Tagline / Uppercase Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-4 text-[11px] sm:text-[12px] md:text-[13px] font-bold tracking-[0.18em] text-white/45 uppercase"
            >
              WE RUN THE ERRANDS. YOU RUN THE TRIP.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
            >
              {/* Explore Services CTA (Dark border button with down arrow) */}
              <a
                href="#transport"
                className="h-[48px] sm:h-[52px] px-6 sm:px-8 rounded-md border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/40 text-white font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase inline-flex items-center gap-2.5 transition duration-200 backdrop-blur-sm group"
              >
                <span>EXPLORE SERVICES</span>
                <span className="text-[14px] transition-transform duration-200 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>

              {/* View Stays CTA (Solid high-contrast button with right arrow) */}
              <a
                href="#stays"
                className="h-[48px] sm:h-[52px] px-6 sm:px-8 rounded-md bg-[#F5F1EB] text-[#0E0E0F] hover:bg-white font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase inline-flex items-center gap-2.5 transition duration-200 shadow-lg shadow-white/5 group"
              >
                <span>VIEW STAYS</span>
                <span className="text-[14px] transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* Bottom Location & Status Bar matching Attachment 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-14 sm:mt-20 pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-white/60"
        >
          {/* Left: — BASED IN KILIFI */}
          <div className="flex items-center gap-3">
            <span className="w-5 h-5 rounded-full border border-white/25 grid place-items-center text-[9px] font-black text-white/80 shrink-0">
              N
            </span>
            <span className="text-white/80">— BASED IN KILIFI</span>
          </div>

          {/* Center: WHATSAPP 24/7 • */}
          <div className="flex items-center justify-start md:justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hi Zai Tours & Stays, I would like to make an inquiry.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition group"
            >
              <span className="text-white/80 group-hover:text-white transition">WHATSAPP 24/7</span>
              <span className="w-2 h-2 rounded-full bg-[#D9FF66] animate-pulse" />
            </a>
          </div>

          {/* Right: KILIFI . MOMBASA . LAMU */}
          <div className="flex items-center justify-start md:justify-end gap-2 text-white/50">
            <span>KILIFI</span>
            <span className="text-white/30">•</span>
            <span>MOMBASA</span>
            <span className="text-white/30">•</span>
            <span>LAMU</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Running Marquee Ticker */}
      <MarqueeTicker />
    </section>
  );
};

