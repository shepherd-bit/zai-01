import React from 'react';
import { motion } from 'motion/react';

interface FloatingWhatsAppProps {
  href: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ href }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Direct WhatsApp Chat with ZAI team"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.2, type: 'spring' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[55] w-14 h-14 rounded-full bg-[#D9FF66] text-[#0E0E0F] grid place-items-center shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-black/10 transition-colors hover:bg-[#e4ff85]"
    >
      <span className="font-black text-[20px]" aria-hidden="true">
        ✦
      </span>
    </motion.a>
  );
};
