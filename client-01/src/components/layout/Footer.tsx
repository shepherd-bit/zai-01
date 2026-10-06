import React, { useState } from 'react';
import { CONTACT_INFO } from '../../data/navigation';
import { QuickBookingRequest } from '../../types';

export const Footer: React.FC = () => {
  const [formData, setFormData] = useState<QuickBookingRequest>({
    service: 'Airport Pickup - JKIA',
    date: '',
    wa: '',
  });

  const whatsappMessage = `Hi Zai Tours & Stays, I want to book: ${formData.service} on ${
    formData.date || 'ASAP'
  }. My number: ${formData.wa}`;

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer id="contact" className="relative bg-[#0E0E0F] text-[#F5F1EB] pt-20 pb-10">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10">
          {/* Left Column: Direct Phone & Geographic Coverage */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[11px] font-bold tracking-widest uppercase">
              Move. Stay. Fresh. • Athi River HQ
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
                  Response under 15min • 24/7 JKIA
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
                  {CONTACT_INFO.location}
                </div>
                <div className="mt-1 text-[12px] opacity-60 leading-snug">
                  Serving Nairobi Metro • JKIA 12min • SGR Syokimau 8min • Mlolongo • Kitengela •
                  Syokimau • Greenpark
                </div>

                <div className="mt-4 h-[72px] rounded-[14px] bg-[#0E0E0F]/5 border border-black/5 grid place-items-center text-[11px] font-bold tracking-wide">
                  JKIA → [SGR] → ZAI HQ • Fixed fare map
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-6 text-[11px] tracking-widest uppercase font-bold opacity-40">
              <span>© ZAI TOURS &amp; STAYS 2026</span>
              <span className="hidden md:inline">• Athi River • Licensed • Insured</span>
            </div>
          </div>

          {/* Right Column: Quick Request Form */}
          <div className="rounded-[28px] bg-[#F5F1EB] text-[#0E0E0F] p-6 md:p-8">
            <div className="flex justify-between items-start">
              <h3 className="font-black text-[22px] tracking-tight leading-tight">
                Quick Request
              </h3>
              <span className="text-[11px] px-2 py-1 rounded-full bg-[#0E0E0F] text-[#F5F1EB] font-bold">
                No login needed
              </span>
            </div>

            <p className="mt-2 text-[13px] opacity-60">
              Select service, date, and WhatsApp. We’ll confirm on WhatsApp in 15min.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
              }}
              className="mt-6 space-y-4"
            >
              <label className="block">
                <span className="text-[11px] font-bold tracking-widest uppercase opacity-60">
                  Service
                </span>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mt-2 w-full h-[48px] rounded-[14px] bg-white border border-black/10 px-4 text-[14px] font-medium outline-none focus:border-black/20"
                >
                  <option>Airport Pickup - JKIA</option>
                  <option>Airport Pickup - Wilson</option>
                  <option>Car Hire - Prado Day Tour</option>
                  <option>Car Hire - Alphard Executive</option>
                  <option>SGR Station Pickup</option>
                  <option>Airbnb Stay - Athi River</option>
                  <option>Laundry - Pickup &amp; Delivery</option>
                </select>
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[11px] font-bold tracking-widest uppercase opacity-60">
                    Date
                  </span>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="mt-2 w-full h-[48px] rounded-[14px] bg-white border border-black/10 px-4 text-[14px] font-medium outline-none focus:border-black/20"
                  />
                </label>

                <label className="block">
                  <span className="text-[11px] font-bold tracking-widest uppercase opacity-60">
                    WhatsApp Number
                  </span>
                  <input
                    type="tel"
                    placeholder="+254 7..."
                    value={formData.wa}
                    onChange={(e) => setFormData({ ...formData, wa: e.target.value })}
                    className="mt-2 w-full h-[48px] rounded-[14px] bg-white border border-black/10 px-4 text-[14px] font-medium outline-none focus:border-black/20 placeholder:opacity-40"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-2 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#0E0E0F] text-[#F5F1EB] font-bold text-[14px] hover:bg-black transition"
              >
                <span>Request on WhatsApp</span>
                <span className="w-6 h-6 rounded-full bg-[#D9FF66] text-black grid place-items-center text-[12px]">
                  ↗
                </span>
              </button>

              <div className="rounded-[14px] bg-[#0E0E0F]/5 border border-black/5 p-3 text-[11px] leading-snug opacity-70">
                By requesting, you agree to fixed fare quote via WhatsApp. M-Pesa Till:{' '}
                <span className="font-bold">{CONTACT_INFO.mpesaTill}</span> • Pay on arrival
                available for transport.
              </div>
            </form>
          </div>
        </div>

        {/* Global Footer Sub-bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-wrap justify-between gap-4 text-[11px] tracking-wide">
          <div className="flex gap-6 opacity-50">
            <span>Move. Stay. Fresh.</span>
            <span>Built in Athi River • 2026</span>
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
