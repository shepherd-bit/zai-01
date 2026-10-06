import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#F5F1EB] text-[#0E0E0F] py-24 md:py-32 border-t border-black/5">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
        {/* Left Column: Founder Quote & Key Stats */}
        <div>
          <div className="text-[12px] font-bold tracking-widest opacity-40">
            04 / ABOUT
          </div>

          <blockquote className="mt-6 font-black tracking-[-0.05em] leading-[0.9] text-[36px] md:text-[64px]">
            “Started with one car, one apartment, and a promise:{' '}
            <span className="text-[#FF5A2C]">
              no one should land in Kenya and feel lost.
            </span>
            ”
          </blockquote>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-[560px]">
            {[
              { n: '2022', l: 'Founded in Athi River' },
              { n: '6', l: 'Curated stays' },
              { n: '24/7', l: 'On-call driver' },
            ].map((stat) => (
              <div
                key={stat.n}
                className="rounded-[18px] bg-white border border-black/5 p-4 shadow-sm"
              >
                <div className="font-black text-[22px] tracking-tight leading-none">
                  {stat.n}
                </div>
                <div className="text-[11px] leading-tight opacity-60 mt-1">
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative & Values */}
        <div className="lg:pt-10">
          <div className="rounded-[28px] bg-white border border-black/5 p-8 md:p-10 shadow-sm">
            <div className="w-12 h-12 rounded-full bg-[#0E0E0F] text-[#F5F1EB] grid place-items-center font-black">
              T
            </div>

            <h3 className="mt-6 font-black text-[22px] tracking-tight leading-tight">
              Titus Oluoch built Zai for transit travelers.
            </h3>

            <p className="mt-4 text-[15px] leading-[1.6] opacity-70">
              Athi River is 12 minutes from JKIA, 8 from SGR Syokimau, but most visitors get stuck
              with boda prices, lost bags, and damp Airbnbs. Titus started driving neighbors from
              the airport in his first Toyota. Then he listed his own 1BR. Then his cousin's laundry
              shop joined.
            </p>

            <p className="mt-4 text-[15px] leading-[1.6] opacity-70">
              Today Zai Tours &amp; Stays is a small, tight crew: licensed tour drivers, Superhost-track
              Airbnb hosts, and laundry pros who fold like Uniqlo. We know which gate at JKIA floods
              when it rains, which SGR coach has extra legroom, and which apartment has the best
              sunset over Lukenya Hills.
            </p>

            {/* Guiding Principles */}
            <div className="mt-8 grid grid-cols-1 gap-3">
              {[
                { k: 'Punctual', v: 'We track flights & SGR times. Early is on time.' },
                { k: 'Local', v: 'Athi River born. We know shortcuts, not just highways.' },
                { k: 'Clean', v: 'Stays cleaned by us, laundry pressed by us. Same standard.' },
              ].map((pillar) => (
                <div
                  key={pillar.k}
                  className="flex gap-3 rounded-[14px] bg-[#F5F1EB] p-4"
                >
                  <span className="w-7 h-7 rounded-full bg-[#0E0E0F] text-white grid place-items-center text-[10px] font-bold shrink-0">
                    {pillar.k[0]}
                  </span>
                  <div>
                    <span className="font-black text-[13px]">{pillar.k} — </span>
                    <span className="text-[13px] opacity-70">{pillar.v}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[11px] font-bold tracking-wide">
                M-Pesa Accepted
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-[11px] font-bold tracking-wide">
                Airbnb Superhost Track
              </span>
              <span className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-[11px] font-bold tracking-wide">
                Licensed Tour Driver • T&amp;L No.
              </span>
            </div>
          </div>

          {/* Real Human Contact Guarantee */}
          <div className="mt-4 rounded-[20px] bg-[#0E0E0F] text-[#F5F1EB] p-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-[#2E3A2F] border-2 border-[#0E0E0F] grid place-items-center text-[10px] font-bold">
                JK
              </div>
              <div className="w-9 h-9 rounded-full bg-[#FF5A2C] border-2 border-[#0E0E0F] grid place-items-center text-[10px] font-bold">
                TO
              </div>
            </div>
            <div className="text-[12px] leading-tight">
              <div className="font-bold">You talk to a human in 1 call.</div>
              <div className="opacity-60">No bot, no queue. Titus or driver on line.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
