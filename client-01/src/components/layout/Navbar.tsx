import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NAV_ITEMS } from '../../data/navigation';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-[18px] bg-[#0E0E0F]/75 border-b border-white/[0.06]">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-[72px] flex items-center justify-between">
        {/* Brand Logo & Desktop Links */}
        <div className="flex items-center gap-10">
          <a
            href="#"
            className="flex items-baseline gap-[1px]"
            aria-label="ZAI Home"
            onClick={closeMobileMenu}
          >
            <span className="text-[22px] font-black tracking-[-0.04em] leading-none">
              ZAI
            </span>
            <span className="w-[6px] h-[6px] rounded-full bg-[#FF5A2C] ml-[1px] translate-y-[-8px] inline-block" />
          </a>

          <div className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wide">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.id}
                className="relative group py-2 opacity-70 hover:opacity-100 transition"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-[#F5F1EB] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 h-[40px] px-5 rounded-full bg-[#F5F1EB] text-[#0E0E0F] text-[13px] font-bold tracking-wide hover:bg-white transition"
          >
            <span>Book in 1 Call</span>
            <span className="w-5 h-5 rounded-full bg-[#0E0E0F] text-[#F5F1EB] grid place-items-center text-[12px]">
              ↗
            </span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="lg:hidden w-10 h-10 rounded-full border border-white/15 grid place-items-center focus:outline-none"
          >
            <div className="w-[14px] h-[12px] relative">
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-white transition-all ${
                  mobileMenuOpen ? 'top-[5px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[5px] w-full h-[1.5px] bg-white transition-opacity ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-white transition-all ${
                  mobileMenuOpen ? 'top-[5px] -rotate-45' : 'top-[10px]'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute inset-x-0 top-[72px] bg-[#0E0E0F] border-b border-white/10 px-6 py-10"
          >
            <div className="grid gap-6 text-[28px] font-black tracking-tight leading-[0.9]">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={item.id}
                  onClick={closeMobileMenu}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  <span className="text-[#FF5A2C] text-[16px]">0{idx + 1}</span>
                </motion.a>
              ))}
            </div>

            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-8 flex h-[52px] items-center justify-center rounded-full bg-[#F5F1EB] text-[#0E0E0F] font-bold"
            >
              Book in 1 Call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
