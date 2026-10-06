/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { NoiseOverlay } from './components/common/NoiseOverlay';
import { ScrollProgressBar } from './components/common/ScrollProgressBar';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { TransportSection } from './components/home/TransportSection';
import { StaysSection } from './components/home/StaysSection';
import { LaundrySection } from './components/home/LaundrySection';
import { AboutSection } from './components/home/AboutSection';
import { Footer } from './components/layout/Footer';
import { CONTACT_INFO } from './data/navigation';

export default function App() {
  const defaultWhatsAppUrl = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Hi Zai Tours & Stays, I would like to make an inquiry.'
  )}`;

  return (
    <div className="relative min-h-screen bg-[#0E0E0F] text-[#F5F1EB] antialiased selection:bg-[#FF5A2C] selection:text-white overflow-x-hidden max-w-[100vw]">
      {/* Noise background texture */}
      <NoiseOverlay />

      {/* Top scroll reading progress bar */}
      <ScrollProgressBar />

      {/* Main navigation */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <HeroSection />
        <TransportSection />
        <StaysSection />
        <LaundrySection />
        <AboutSection />
      </main>

      {/* Footer and contact section */}
      <Footer />

      {/* Floating fast contact button */}
      <FloatingWhatsApp href={defaultWhatsAppUrl} />
    </div>
  );
}
