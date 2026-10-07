import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { fetchListings, formatRating, Listing, thumbnailUrl } from '../../api/listings';

type LoadStatus = 'loading' | 'ready' | 'error';

export const StaysSection: React.FC = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [status, setStatus] = useState<LoadStatus>('loading');

  const load = useCallback(async (signal?: AbortSignal) => {
    setStatus('loading');
    try {
      const docs = await fetchListings(signal);
      setListings(docs);
      setStatus('ready');
    } catch (error) {
      if ((error as Error)?.name === 'AbortError') return;
      setStatus('error');
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  return (
    <section id="stays" className="relative bg-[#F5F1EB] text-[#0E0E0F] py-14 md:py-32">
      <div className="mx-auto max-w-[1600px] px-4 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 md:justify-between md:items-end">
          <div className="flex gap-4 md:gap-6">
            <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40 mt-2 md:mt-3">
              02 / STAYS
            </div>
            <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[36px] md:text-[84px]">
              STAYS THAT
              <br />
              FEEL LIKE <span className="text-[#FF5A2C]">HOME</span>
            </h2>
          </div>

          <div className="max-w-[420px] text-[13px] md:text-[15px] leading-[1.5] opacity-70">
            Curated Airbnbs. Self check-in, fast WiFi, full kitchens. Perfect for layovers, project stays, or soft landings. Studio: KES 2500, 1 Bedroom: KES 3500. Our Locations: Watamu, Kilifi Town, Eldoret Town, Nairobi. Make inquiries via WhatsApp (Instant reply).
          </div>
        </div>

        {/* Stays Grid / States */}
        <div className="mt-8 md:mt-14">
          {status === 'loading' && <LoadingGrid />}

          {status === 'error' && <ErrorPanel onRetry={() => load()} />}

          {status === 'ready' && listings.length === 0 && <EmptyPanel />}

          {status === 'ready' && listings.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {listings.map((listing, idx) => (
                <motion.div
                  key={String(listing.id)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: (idx % 4) * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[20px] md:rounded-[28px] bg-white border border-black/[0.06] p-3 md:p-4 overflow-hidden shadow-sm"
                >
                  {/* Visual Thumbnail Area */}
                  <div className="relative aspect-[1.6/1] rounded-[14px] md:rounded-[20px] overflow-hidden bg-[#0E0E0F]">
                    {thumbnailUrl(listing) ? (
                      <img
                        src={thumbnailUrl(listing)}
                        alt={listing.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#2A2A2C,#0E0E0F)]"
                      />
                    )}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.55))]"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4 flex gap-1.5 md:gap-2">
                      <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[9px] md:text-[11px] font-bold tracking-wide">
                        Superhost
                      </span>
                      <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/90 text-[#0E0E0F] text-[9px] md:text-[11px] font-bold">
                        {formatRating(listing.airbnbRating) ? (
                          <>★ {formatRating(listing.airbnbRating)}</>
                        ) : (
                          <>New</>
                        )}
                      </span>
                    </div>

                    {/* Bottom Overlay Title Info */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 md:bottom-4 md:left-4 md:right-4 flex justify-between items-end">
                      <div className="text-white">
                        <div className="text-[10px] md:text-[13px] opacity-70 tracking-wide">
                          {listing.bedrooms}BR • {listing.capacity} guests
                        </div>
                        <div className="text-[14px] md:text-[18px] font-black tracking-tight leading-none mt-0.5 md:mt-1">
                          {listing.title}
                        </div>
                      </div>
                      <a
                        href={listing.airbnbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${listing.title} on Airbnb`}
                        className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white text-black grid place-items-center font-bold text-[10px] md:text-[12px]"
                      >
                        ↗
                      </a>
                    </div>

                    {/* Geometric Graphic Emblem */}
                    <div
                      aria-hidden="true"
                      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-[52px] h-[52px] md:w-[72px] md:h-[72px] rounded-full border border-white/15 grid place-items-center"
                    >
                      <div className="w-[34px] h-[34px] md:w-[48px] md:h-[48px] rounded-full border border-white/20 grid place-items-center text-white/40 text-[12px] md:text-[16px]">
                        ✦
                      </div>
                    </div>
                  </div>

                  {/* Card Meta & Nightly Rate */}
                  <div className="px-1 md:px-2 pt-3 md:pt-4 pb-1 md:pb-2 flex justify-between items-end">
                    <div>
                      <div className="text-[10px] md:text-[12px] opacity-50 tracking-wide">
                        {listing.location}
                      </div>
                      <div className="mt-1.5 md:mt-2 flex flex-wrap gap-1 md:gap-2 text-[8px] md:text-[10px] font-bold tracking-wide">
                        {listing.features?.map((feature) => (
                          <span
                            key={feature.id ?? feature.feature}
                            className="px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-black/[0.06] text-[#0E0E0F]"
                          >
                            {feature.feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] md:text-[11px] uppercase tracking-widest opacity-40 font-bold">
                        From
                      </div>
                      <div className="font-black text-[16px] md:text-[20px] tracking-tight">
                        KES {listing.pricePerNight.toLocaleString('en-US')}
                        <span className="text-[9px] md:text-[11px] font-bold opacity-40">/night</span>
                      </div>
                      <a
                        href={listing.airbnbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 md:mt-3 inline-flex items-center gap-1.5 md:gap-2 h-[30px] md:h-[36px] px-3 md:px-4 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[9px] md:text-[11px] font-bold tracking-wide hover:bg-black transition"
                      >
                        Book on Airbnb
                        <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#FF5A2C] text-white grid place-items-center text-[8px] md:text-[10px]">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="mt-6 md:mt-10 flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 items-start md:items-center md:justify-between">
          <div className="text-[10px] md:text-[12px] tracking-wide opacity-60 max-w-[600px]">
            All listings are Airbnb Superhost track, verified by Zai team. Instant book • Self
            check-in • M-Pesa accepted • Invoice available.
          </div>
        </div>
      </div>
    </section>
  );
};

/** Two placeholder cards while the listings request is in flight. */
const LoadingGrid: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5" aria-hidden="true">
    {[0, 1].map((i) => (
      <div
        key={i}
        className="rounded-[20px] md:rounded-[28px] bg-white border border-black/[0.06] p-3 md:p-4 animate-pulse"
      >
        <div className="aspect-[1.6/1] rounded-[14px] md:rounded-[20px] bg-black/[0.08]" />
        <div className="px-1 md:px-2 pt-3 md:pt-4 pb-2 flex justify-between items-end">
          <div className="space-y-2">
            <div className="h-2.5 w-24 rounded-full bg-black/[0.08]" />
            <div className="h-2.5 w-40 rounded-full bg-black/[0.06]" />
          </div>
          <div className="h-6 w-28 rounded-full bg-black/[0.08]" />
        </div>
      </div>
    ))}
  </div>
);

/** Shown when the collection is empty — nothing has been posted yet. */
const EmptyPanel: React.FC = () => (
  <div className="rounded-[20px] md:rounded-[28px] border border-black/10 bg-white/70 px-6 py-14 md:py-24 text-center">
    <div className="font-black tracking-[-0.05em] leading-none text-[32px] md:text-[64px]">
      NO LISTINGS YET
    </div>
    <p className="mx-auto mt-4 max-w-[460px] text-[12px] md:text-[14px] leading-relaxed opacity-60">
      New stays are on the way. Publish your first listing in the admin dashboard and it will
      appear right here.
    </p>
  </div>
);

/** Shown when the Payload API cannot be reached. */
const ErrorPanel: React.FC<{ onRetry: () => void }> = ({ onRetry }) => (
  <div className="rounded-[20px] md:rounded-[28px] border border-black/10 bg-white/70 px-6 py-14 md:py-20 text-center">
    <div className="font-black tracking-[-0.05em] leading-none text-[26px] md:text-[48px]">
      COULDN'T LOAD LISTINGS
    </div>
    <p className="mx-auto mt-4 max-w-[460px] text-[12px] md:text-[14px] leading-relaxed opacity-60">
      The listings service didn't respond. Check that the Payload server is running, then try
      again.
    </p>
    <button
      type="button"
      onClick={onRetry}
      className="mt-6 inline-flex items-center gap-2 h-[36px] px-5 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[11px] font-bold tracking-wide hover:bg-black transition"
    >
      Retry
      <span className="w-5 h-5 rounded-full bg-[#FF5A2C] text-white grid place-items-center text-[10px]">
        →
      </span>
    </button>
  </div>
);
