import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Star, Zap, ShieldCheck } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

interface HeroProps {
  profile: PersonalInfo;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section className="relative pt-12 pb-20 sm:pb-28 overflow-hidden bg-graph-paper">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Floating Sticker Badges */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
          <motion.div
            initial={{ rotate: -3, scale: 0.95 }}
            animate={{ rotate: -2, scale: 1 }}
            className="px-4 py-1.5 border-4 border-black bg-[#FFD93D] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-neo-sm flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-black animate-ping" />
            <span>XIN CHÀO! TÔI LÀ {profile.name}</span>
          </motion.div>

          <motion.div
            initial={{ rotate: 3, scale: 0.95 }}
            animate={{ rotate: 2, scale: 1 }}
            className="px-4 py-1.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase tracking-wider shadow-neo-sm flex items-center gap-1.5"
          >
            <Zap className="w-4 h-4 fill-white" />
            <span>{profile.title}</span>
          </motion.div>

          <motion.div
            initial={{ rotate: -2, scale: 0.95 }}
            animate={{ rotate: 0, scale: 1 }}
            className="px-4 py-1.5 border-4 border-black bg-[#C4B5FD] text-black font-black text-xs uppercase tracking-wider shadow-neo-sm flex items-center gap-1.5"
          >
            <Star className="w-4 h-4 fill-black" />
            <span>{profile.location}</span>
          </motion.div>
        </div>

        {/* Massive Space Grotesk Headline */}
        <div className="space-y-3 mb-10">
          <div className="text-black font-black text-xs sm:text-sm uppercase tracking-widest mb-2 inline-block px-3 py-1 border-2 border-black bg-white shadow-neo-sm">
            BACKEND ENGINEERING // SYSTEM &amp; RESTful APIs
          </div>

          <h1 className="font-heading font-black text-5xl sm:text-7xl md:text-9xl tracking-tighter leading-none text-black">
            JAVA
          </h1>

          <div className="inline-block transform -rotate-1">
            <span className="px-6 py-2 bg-[#FFD93D] border-4 sm:border-6 border-black shadow-neo font-heading font-black text-5xl sm:text-7xl md:text-9xl tracking-tighter leading-none text-black">
              BACKEND
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-8xl tracking-tighter leading-none text-black">
            &amp; <span className="text-stroke-black-thick">SPRING</span> DEVELOPER
          </h2>
        </div>

        {/* Tagline Card (Physical Newspaper Snippet) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto border-4 border-black bg-white p-6 sm:p-8 shadow-neo text-center mb-12 transform rotate-1"
        >
          <p className="font-bold text-base sm:text-lg md:text-xl text-black leading-relaxed">
            "{profile.tagline}"
          </p>
          <div className="mt-4 pt-3 border-t-2 border-black flex items-center justify-between text-xs font-black uppercase text-black/70">
            <span>● TRẠNG THÁI:</span>
            <span className="text-black bg-[#4ADE80] border-2 border-black px-2 py-0.5">
              {profile.systemStatus}
            </span>
          </div>
        </motion.div>

        {/* Mechanical Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 border-4 border-black bg-[#FF6B6B] text-white font-black text-base uppercase tracking-wider shadow-neo neo-btn flex items-center justify-center gap-2 hover:bg-[#ff5252]"
          >
            <span>XEM DỰ ÁN BACKEND</span>
            <ArrowDownRight className="w-5 h-5" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 border-4 border-black bg-[#FFD93D] text-black font-black text-base uppercase tracking-wider shadow-neo neo-btn flex items-center justify-center gap-2 hover:bg-[#ffe26e]"
          >
            <span>LIÊN HỆ PHỎNG VẤN</span>
            <Sparkles className="w-5 h-5" />
          </a>
        </div>

        {/* Value Prop Badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
          <div className="p-4 border-4 border-black bg-white shadow-neo-sm flex items-center gap-3">
            <div className="p-2 border-2 border-black bg-[#FFD93D]">
              <Zap className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-black text-sm uppercase">SPRING BOOT 3</div>
              <div className="font-bold text-xs text-black/70">RESTful APIs, JPA &amp; Security</div>
            </div>
          </div>

          <div className="p-4 border-4 border-black bg-white shadow-neo-sm flex items-center gap-3">
            <div className="p-2 border-2 border-black bg-[#FF6B6B] text-white">
              <Star className="w-5 h-5 fill-white" />
            </div>
            <div>
              <div className="font-black text-sm uppercase">JAVA CORE &amp; OOP</div>
              <div className="font-bold text-xs text-black/70">Tư duy đối tượng &amp; SOLID</div>
            </div>
          </div>

          <div className="p-4 border-4 border-black bg-white shadow-neo-sm flex items-center gap-3">
            <div className="p-2 border-2 border-black bg-[#C4B5FD]">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <div>
              <div className="font-black text-sm uppercase">RDBMS &amp; CLEAN CODE</div>
              <div className="font-bold text-xs text-black/70">MySQL, PostgreSQL &amp; JUnit 5</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
