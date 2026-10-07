import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  location: string;
  tag: string;
}

/**
 * Placeholder tour imagery — swap `src` values for real assets in /public
 * when the final gallery shots are ready.
 */
const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: 'https://picsum.photos/seed/zai-gallery-01/900/1125',
    alt: 'Traditional dhow sailing on Kilifi creek at sunset',
    title: 'Kilifi Creek Sunset',
    location: 'Kilifi, KE',
    tag: 'Dhow Ride',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-02/900/1125',
    alt: 'Snorkeling over coral reefs in Watamu marine park',
    title: 'Watamu Marine Park',
    location: 'Watamu, KE',
    tag: 'Snorkel',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-03/900/1125',
    alt: 'White sand beach day on the south coast of Diani',
    title: 'Diani Beach Day',
    location: 'Diani, KE',
    tag: 'South Coast',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-04/900/1125',
    alt: 'Historic streets and architecture of Malindi old town',
    title: 'Malindi Old Town',
    location: 'Malindi, KE',
    tag: 'Culture',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-05/900/1125',
    alt: 'Walking trail through Arabuko Sokoke forest',
    title: 'Arabuko Sokoke',
    location: 'Kilifi, KE',
    tag: 'Forest Trail',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-06/900/1125',
    alt: 'Coastal view from the SGR Madaraka Express train',
    title: 'SGR Coastal Ride',
    location: 'Mombasa Line',
    tag: 'Train Trip',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-07/900/1125',
    alt: 'Bird watching by the water at Mida creek',
    title: 'Mida Creek',
    location: 'Watamu, KE',
    tag: 'Birding',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-08/900/1125',
    alt: 'Ancient baobab trees on the Kilifi hinterland trail',
    title: 'Baobab Trail',
    location: 'Kilifi, KE',
    tag: 'Day Trip',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-09/900/1125',
    alt: 'City tour around Fort Jesus in Mombasa',
    title: 'Fort Jesus Run',
    location: 'Mombasa, KE',
    tag: 'City Tour',
  },
  {
    src: 'https://picsum.photos/seed/zai-gallery-10/900/1125',
    alt: 'Quiet private cove at Tiwi beach',
    title: 'Tiwi Beach Escape',
    location: 'Tiwi, KE',
    tag: 'Hidden Cove',
  },
];

const ARROW_BTN =
  'w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 bg-white/[0.03] grid place-items-center text-[14px] md:text-[16px] font-bold transition disabled:opacity-25 disabled:cursor-not-allowed enabled:hover:bg-[#FF5A2C] enabled:hover:border-[#FF5A2C] enabled:hover:text-white';

export const Gallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);

  const syncState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;

    setProgress(Math.min(1, Math.max(0, ratio)));
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);

    if (max > 0 && max - el.scrollLeft <= 4) {
      // At the end the last card is right-aligned, not left-aligned.
      setCurrent(GALLERY_IMAGES.length);
      return;
    }

    const firstCard = el.firstElementChild as HTMLElement | null;
    if (firstCard) {
      const gap = parseFloat(getComputedStyle(el).gap) || 0;
      const step = firstCard.offsetWidth + gap;
      const index = step > 0 ? Math.round(el.scrollLeft / step) + 1 : 1;
      setCurrent(Math.min(GALLERY_IMAGES.length, Math.max(1, index)));
    }
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    syncState();
    el.addEventListener('scroll', syncState, { passive: true });
    window.addEventListener('resize', syncState);
    return () => {
      el.removeEventListener('scroll', syncState);
      window.removeEventListener('resize', syncState);
    };
  }, [syncState]);

  const scrollByDirection = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="relative bg-[#0E0E0F] py-14 md:py-32">
      <div className="mx-auto max-w-[1600px] px-4 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 md:justify-between md:items-end">
          <div className="flex gap-4 md:gap-6">
            <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40 mt-2 md:mt-3">
              05 / GALLERY
            </div>
            <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[36px] md:text-[84px]">
              MOMENTS FROM
              <br />
              THE <span className="text-[#FF5A2C]">COAST</span>
            </h2>
          </div>

          <div className="max-w-[420px] flex flex-col gap-4 md:gap-5">
            <p className="text-[13px] md:text-[15px] leading-[1.5] text-white/60">
              Beach days, marine parks, forest trails and city runs — a look at where our guests
              end up. Tap the arrows or swipe through, then book your own.
            </p>

            <div className="flex items-center justify-between gap-3">
              <span className="lg:hidden h-8 px-3 rounded-full border border-white/15 text-[10px] font-bold tracking-widest grid place-items-center text-white/70">
                SWIPE →
              </span>

              <div className="flex gap-2 md:gap-3 lg:ml-auto">
                <button
                  type="button"
                  onClick={() => scrollByDirection(-1)}
                  disabled={!canPrev}
                  aria-label="Previous gallery images"
                  className={ARROW_BTN}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection(1)}
                  disabled={!canNext}
                  aria-label="Next gallery images"
                  className={ARROW_BTN}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Track — native scroll + snap gives mobile swipe for free */}
        <div
          ref={trackRef}
          className="mt-8 md:mt-14 flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth select-none pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {GALLERY_IMAGES.map((image, idx) => (
            <motion.figure
              key={image.src}
              whileHover={{ y: -6 }}
              className="group relative shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] xl:w-[24%] snap-start"
            >
              <div className="relative aspect-[4/5] rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#151515] border border-white/[0.07]">
                {/* Fallback emblem shown while an image loads or if it fails */}
                <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 grid place-items-center text-white/25 text-[14px] md:text-[16px]">
                    ✦
                  </div>
                </div>

                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  draggable={false}
                  onError={(event) => {
                    event.currentTarget.style.opacity = '0';
                  }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.65))]"
                />

                {/* Slide Index */}
                <span className="absolute top-3 left-3 md:top-4 md:left-4 h-6 md:h-7 px-2.5 md:px-3 rounded-full bg-black/40 border border-white/15 backdrop-blur text-[9px] md:text-[11px] font-bold tracking-widest grid place-items-center text-white">
                  {String(idx + 1).padStart(2, '0')}
                </span>

                {/* Trip Tag */}
                <span className="absolute top-3 right-3 md:top-4 md:right-4 h-6 md:h-7 px-2.5 md:px-3 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[9px] md:text-[11px] font-bold grid place-items-center">
                  {image.tag}
                </span>

                {/* Caption */}
                <figcaption className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex justify-between items-end">
                  <div className="text-white">
                    <div className="text-[10px] md:text-[12px] opacity-70 tracking-wide">
                      {image.location}
                    </div>
                    <div className="mt-1 text-[15px] md:text-[20px] font-black tracking-tight leading-none">
                      {image.title}
                    </div>
                  </div>
                  <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white text-black grid place-items-center font-bold text-[10px] md:text-[12px]">
                    ↗
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Scroll Progress + Counter */}
        <div className="mt-6 md:mt-8 flex items-center gap-4 md:gap-6">
          <div className="text-[10px] md:text-[12px] font-bold tracking-widest tabular-nums">
            {String(current).padStart(2, '0')}
            <span className="opacity-40"> / {GALLERY_IMAGES.length}</span>
          </div>

          <div className="flex-1 h-[2px] rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full bg-[#FF5A2C] transition-[width] duration-150 ease-out"
              style={{ width: `${Math.max(6, progress * 100)}%` }}
            />
          </div>

          <div className="hidden sm:block text-[10px] md:text-[12px] font-bold tracking-widest uppercase opacity-50">
            4.9 rating • 40+ trips
          </div>
        </div>
      </div>
    </section>
  );
};
