import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import {
  fetchGalleryPosts,
  formatLocation,
  galleryAlt,
  galleryImageUrl,
  galleryTitle,
  GalleryPost,
} from '../../api/gallery';

type LoadStatus = 'loading' | 'ready' | 'error';

interface GalleryCard {
  key: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  // Width class hint for natural varying widths at a uniform height
  widthClass: string;
}

/**
 * Cards keep their uniform height with varying widths (landscape, square,
 * portrait). The collection has no width field, so the widths cycle by index.
 */
const WIDTH_CLASSES = [
  'w-[280px] md:w-[340px]', // Portrait
  'w-[320px] md:w-[380px]', // Square
  'w-[380px] md:w-[460px]', // Landscape (wider)
  'w-[260px] md:w-[320px]', // Tall Portrait
  'w-[400px] md:w-[480px]', // Wide Landscape
  'w-[360px] md:w-[440px]', // Landscape
];

/** Map Payload docs to cards, skipping posts whose image did not populate. */
function toCards(posts: GalleryPost[]): GalleryCard[] {
  const cards: GalleryCard[] = [];

  posts.forEach((post, idx) => {
    const src = galleryImageUrl(post);
    if (!src) return;

    cards.push({
      key: String(post.id),
      src,
      alt: galleryAlt(post),
      title: galleryTitle(post),
      location: formatLocation(post.location),
      widthClass: WIDTH_CLASSES[idx % WIDTH_CLASSES.length],
    });
  });

  return cards;
}

const ARROW_BTN =
  'w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 bg-white/[0.03] grid place-items-center text-[14px] md:text-[16px] font-bold transition disabled:opacity-25 disabled:cursor-not-allowed enabled:hover:bg-[#FF5A2C] enabled:hover:border-[#FF5A2C] enabled:hover:text-white';

export const Gallery: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);

  const [cards, setCards] = useState<GalleryCard[]>([]);
  const [status, setStatus] = useState<LoadStatus>('loading');

  const load = useCallback(async (signal?: AbortSignal) => {
    setStatus('loading');
    try {
      const docs = await fetchGalleryPosts(signal);
      setCards(toCards(docs));
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

  const syncState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;

    setProgress(Math.min(1, Math.max(0, ratio)));
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);

    if (max > 0 && max - el.scrollLeft <= 4) {
      setCurrent(cards.length);
      return;
    }

    const firstCard = el.firstElementChild as HTMLElement | null;
    if (firstCard) {
      const gap = parseFloat(getComputedStyle(el).gap) || 0;
      const step = firstCard.offsetWidth + gap;
      const index = step > 0 ? Math.round(el.scrollLeft / step) + 1 : 1;
      setCurrent(Math.min(cards.length, Math.max(1, index)));
    }
  }, [cards.length]);

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

  const showTrack = status === 'ready' && cards.length > 0;

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
                  disabled={!showTrack || !canPrev}
                  aria-label="Previous gallery images"
                  className={ARROW_BTN}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection(1)}
                  disabled={!showTrack || !canNext}
                  aria-label="Next gallery images"
                  className={ARROW_BTN}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Loading placeholders */}
        {status === 'loading' && <LoadingCards />}

        {/* API unreachable */}
        {status === 'error' && <ErrorPanel onRetry={() => load()} />}

        {/* No posts published yet */}
        {status === 'ready' && cards.length === 0 && <EmptyPanel />}

        {/* Carousel Track — Uniform height with variable natural widths */}
        {showTrack && (
          <div
            ref={trackRef}
            className="mt-8 md:mt-14 flex items-center gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth select-none pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {cards.map((image, idx) => (
              <motion.figure
                key={image.key}
                whileHover={{ y: -6 }}
                className={`group relative shrink-0 ${image.widthClass} snap-start`}
              >
                {/* Fixed uniform height across all cards (e.g. h-[380px] on mobile, h-[460px] on desktop) */}
                <div className="relative h-[380px] md:h-[460px] rounded-[20px] md:rounded-[28px] overflow-hidden bg-[#151515] border border-white/[0.07]">
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
        )}

        {/* Scroll Progress + Counter */}
        {showTrack && (
          <div className="mt-6 md:mt-8 flex items-center gap-4 md:gap-6">
            <div className="text-[10px] md:text-[12px] font-bold tracking-widest tabular-nums">
              {String(current).padStart(2, '0')}
              <span className="opacity-40"> / {String(cards.length).padStart(2, '0')}</span>
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
        )}
      </div>
    </section>
  );
};

/** Card-shaped placeholders while the gallery collection loads. */
const LoadingCards: React.FC = () => (
  <div
    className="mt-8 md:mt-14 flex items-center gap-4 md:gap-5 select-none pb-4"
    aria-hidden="true"
  >
    {WIDTH_CLASSES.slice(0, 4).map((widthClass, i) => (
      <div key={i} className={`shrink-0 ${widthClass}`}>
        <div className="relative h-[380px] md:h-[460px] rounded-[20px] md:rounded-[28px] bg-[#151515] border border-white/[0.07] animate-pulse p-3 md:p-4 flex flex-col justify-end gap-2">
          <div className="absolute top-3 left-3 md:top-4 md:left-4 h-6 md:h-7 w-10 rounded-full bg-white/[0.06]" />
          <div className="h-3 w-20 rounded-full bg-white/[0.06]" />
          <div className="h-5 w-32 rounded-full bg-white/[0.08]" />
        </div>
      </div>
    ))}
  </div>
);

/** Shown when the collection is empty — no photos have been posted yet. */
const EmptyPanel: React.FC = () => (
  <div className="mt-8 md:mt-14 rounded-[16px] md:rounded-[22px] border border-white/10 bg-[#151515] px-6 py-12 md:py-16 text-center">
    <div className="font-black tracking-[-0.05em] leading-none text-[26px] md:text-[44px]">
      MOMENTS COMING <span className="text-[#FF5A2C]">SOON</span>
    </div>
    <p className="mx-auto mt-3 max-w-[460px] text-[11px] md:text-[13px] leading-relaxed text-white/50">
      No gallery photos yet. Post one in the Payload admin dashboard — an image and a location, and
      a site if you like — and it will show up here automatically.
    </p>
  </div>
);

/** Shown when the Payload API cannot be reached. */
const ErrorPanel: React.FC<{ onRetry: () => void }> = ({ onRetry }) => (
  <div className="mt-8 md:mt-14 rounded-[16px] md:rounded-[22px] border border-white/10 bg-[#151515] px-6 py-12 md:py-16 text-center">
    <div className="font-black tracking-[-0.05em] leading-none text-[24px] md:text-[40px]">
      COULDN'T LOAD <span className="text-[#FF5A2C]">GALLERY</span>
    </div>
    <p className="mx-auto mt-3 max-w-[460px] text-[11px] md:text-[13px] leading-relaxed text-white/50">
      The gallery service didn't respond. Check that the Payload server is running, then try again.
    </p>
    <button
      type="button"
      onClick={onRetry}
      className="mt-5 inline-flex items-center gap-2 h-[34px] px-5 rounded-full bg-[#FF5A2C] text-white text-[11px] font-bold tracking-wide hover:brightness-110 transition"
    >
      Retry
      <span className="w-5 h-5 rounded-full bg-white/20 grid place-items-center text-[10px]">→</span>
    </button>
  </div>
);
