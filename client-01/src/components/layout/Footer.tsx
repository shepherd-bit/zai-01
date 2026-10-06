import React from 'react';
import { CONTACT_INFO } from '../../data/navigation';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Zai Tours & Stays, I want to book a service.'
  )}`;

  return (
    <footer id="contact" className="relative bg-[#0E0E0F] text-[#F5F1EB] pt-20 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
          {/* Left Column: Direct Phone & Geographic Coverage */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[11px] font-bold tracking-widest uppercase">
              Move. Stay. Fresh. • Kilifi HQ
            </div>

            <h2 className="mt-6 font-black tracking-[-0.06em] leading-[0.85] text-[48px] md:text-[84px]">
              BOOK IN
              <br />
              <span className="text-[#FF5A2C]">ONE CALL</span>
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {/* WhatsApp & Call Direct Box */}
              <div className="rounded-[24px] bg-[#151515] border border-white/[0.07] p-6">
                <div className="text-[11px] tracking-widest uppercase opacity-50 font-bold">
                  Call / WhatsApp
                </div>
                <div className="mt-2 font-black text-[22px] tracking-tight">
                  {CONTACT_INFO.displayPhone}
                </div>
                <div className="mt-1 text-[13px] opacity-60">
                  Response under 15min • 24/7 MBA
                </div>

                <div className="mt-5 flex gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[44px] px-5 rounded-full bg-[#D9FF66] text-[#0E0E0F] font-bold text-[13px] inline-flex items-center gap-2 hover:bg-[#e4ff85] transition"
                  >
                    <span>WhatsApp Us</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="h-[44px] px-5 rounded-full border border-white/15 bg-white/[0.04] font-bold text-[13px] inline-flex items-center hover:bg-white/[0.08] transition"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Physical Location Card */}
              <div className="rounded-[24px] bg-[#F5F1EB] text-[#0E0E0F] p-6">
                <div className="text-[11px] tracking-widest uppercase opacity-50 font-bold">
                  Location
                </div>
                <div className="mt-2 font-black text-[16px] leading-tight">
                  Kilifi, Coastal Kenya
                </div>
                <div className="mt-1 text-[12px] opacity-60 leading-snug">
                  Serving Mombasa • Diani • Malindi • Watamu • Kilifi • Mtwapa •
                  Mariakani • Ukunda
                </div>

                <div className="mt-4 h-[72px] rounded-[14px] bg-[#0E0E0F]/5 border border-black/5 grid place-items-center text-[11px] font-bold tracking-wide">
                  MBA → [SGR] → ZAI HQ • Fixed fare map
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-6 text-[11px] tracking-widest uppercase font-bold opacity-40">
              <span>© ZAI TOURS &amp; STAYS 2026</span>
              <span className="hidden md:inline">• Kilifi • Licensed • Insured</span>
            </div>
          </div>

          {/* Right Column: WhatsApp CTA */}
          <div className="flex flex-col gap-6">
            {/* Massive WhatsApp Icon */}
            <div className="rounded-[28px] bg-[#F5F1EB] text-[#0E0E0F] p-8 md:p-10 flex flex-col items-center justify-center text-center flex-1">
              <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full bg-[#25D366] grid place-items-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] text-white"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div className="mt-6 font-black text-[22px] tracking-tight">
                Chat with us instantly
              </div>
              <p className="mt-2 text-[13px] opacity-60 max-w-[280px]">
                No forms, no waiting. Message us and get a fixed fare quote in minutes.
              </p>
            </div>

            {/* Chat on WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[24px] bg-[#D9FF66] text-[#0E0E0F] p-6 flex items-center justify-between group hover:bg-[#e4ff85] transition"
            >
              <div>
                <div className="font-black text-[18px] tracking-tight">
                  Chat on WhatsApp
                </div>
                <div className="text-[12px] opacity-60 mt-1">
                  Typically replies in under 15 minutes
                </div>
              </div>
              <div className="w-[48px] h-[48px] rounded-full bg-[#0E0E0F] text-[#D9FF66] grid place-items-center group-hover:scale-110 transition">
                <span className="text-[20px]">↗</span>
              </div>
            </a>
          </div>
        </div>

        {/* Global Footer Sub-bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-wrap justify-between gap-4 text-[11px] tracking-wide">
          <div className="flex gap-6 opacity-50">
            <span>Move. Stay. Fresh.</span>
            <span>Built in Kilifi • 2026</span>
          </div>

          <div className="flex gap-6 opacity-70">
            <a
              href={CONTACT_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline decoration-white/20 underline-offset-4"
            >
              Instagram
            </a>
            <a
              href={CONTACT_INFO.socials.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline decoration-white/20 underline-offset-4"
            >
              Airbnb
            </a>
            <a
              href={CONTACT_INFO.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline decoration-white/20 underline-offset-4"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
