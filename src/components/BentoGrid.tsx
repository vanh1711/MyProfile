import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2, Award, CheckCircle2, Star, Sparkles } from 'lucide-react';
import type { SkillCategory } from '../types/portfolio';
import { DEFAULT_SKILL_CATEGORIES } from '../data/portfolioData';

interface BentoGridProps {
  skills?: SkillCategory[];
}

export const BentoGrid: React.FC<BentoGridProps> = ({ skills = DEFAULT_SKILL_CATEGORIES }) => {
  const cat1 = skills[0] || DEFAULT_SKILL_CATEGORIES[0];
  const cat2 = skills[1] || DEFAULT_SKILL_CATEGORIES[1];
  const cat3 = skills[2] || DEFAULT_SKILL_CATEGORIES[2];
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-16">
        <div className="inline-block px-3 py-1 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase tracking-widest mb-4 shadow-neo-sm">
          02 // NĂNG LỰC &amp; CÔNG CỤ
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-black tracking-tight uppercase">
          KỸ NĂNG <span className="bg-[#FFD93D] border-4 border-black px-3 inline-block transform -rotate-1 shadow-neo-sm">CHUYÊN MÔN</span>
        </h2>
        <p className="mt-4 font-bold text-base sm:text-lg text-black/80 max-w-2xl">
          Sự giao thoa hoàn hảo giữa tư duy thiết kế lấy người dùng làm trung tâm và năng lực code chuẩn xác.
        </p>
      </div>

      {/* Asymmetric Neo-Brutalist Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        
        {/* Card 1: UI/UX (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 border-4 border-black bg-white shadow-neo neo-card flex flex-col justify-between"
        >
          {/* Colored Top Header */}
          <div className="p-4 sm:p-6 bg-[#FFD93D] border-b-4 border-black flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 border-2 border-black bg-black text-white font-black text-xs">
                {cat1.tag}
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
                {cat1.title}
              </h3>
            </div>
            <div className="p-2 border-3 border-black bg-white">
              <Palette className="w-5 h-5 text-black" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
              {cat1.description}
            </p>

            {/* Design System Preview Box */}
            <div className="p-4 border-3 border-black bg-[#FFFDF5] space-y-3">
              <div className="flex items-center justify-between text-xs font-black uppercase">
                <span>HỆ THỐNG DESIGN TOKENS:</span>
                <span className="bg-[#4ADE80] border border-black px-2 py-0.5">CHÍNH XÁC 100%</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-black">
                <div className="p-2 border-2 border-black bg-[#FF6B6B] text-white">#FF6B6B (RED)</div>
                <div className="p-2 border-2 border-black bg-[#FFD93D] text-black">#FFD93D (YELLOW)</div>
                <div className="p-2 border-2 border-black bg-[#C4B5FD] text-black">#C4B5FD (VIOLET)</div>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {cat1.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-black border-2 border-black bg-[#FFD93D]/30 text-black hover:bg-[#FFD93D] transition-colors"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 2: Frontend Engineering (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 border-4 border-black bg-white shadow-neo neo-card flex flex-col justify-between"
        >
          <div className="p-4 sm:p-6 bg-[#FF6B6B] border-b-4 border-black text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 border-2 border-black bg-white text-black font-black text-xs">
                {cat2.tag}
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-white">
                {cat2.title}
              </h3>
            </div>
            <div className="p-2 border-3 border-black bg-white text-black">
              <Code2 className="w-5 h-5" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
              {cat2.description}
            </p>

            {/* Code Snippet Box */}
            <div className="p-4 border-3 border-black bg-black text-white font-mono text-xs leading-relaxed">
              <div className="text-[#FFD93D] font-bold">&gt; TECH_STACK = [</div>
              <div className="pl-4 text-[#4ADE80]">'React 19', 'Tailwind',</div>
              <div className="pl-4 text-[#C4B5FD]">'Framer Motion', 'TypeScript'</div>
              <div className="text-[#FFD93D] font-bold">];</div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {cat2.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-black border-2 border-black bg-[#FF6B6B]/20 text-black hover:bg-[#FF6B6B] hover:text-white transition-colors"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Standards & Quality (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="lg:col-span-5 border-4 border-black bg-white shadow-neo neo-card flex flex-col justify-between"
        >
          <div className="p-4 sm:p-6 bg-[#C4B5FD] border-b-4 border-black flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1.5 border-2 border-black bg-black text-white font-black text-xs">
                {cat3.tag}
              </span>
              <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-black">
                {cat3.title}
              </h3>
            </div>
            <div className="p-2 border-3 border-black bg-white text-black">
              <Award className="w-5 h-5" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
              {cat3.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border-3 border-black bg-[#FFD93D] text-center shadow-neo-sm">
                <div className="font-black text-2xl">100%</div>
                <div className="font-bold text-xs">LIGHTHOUSE</div>
              </div>
              <div className="p-3 border-3 border-black bg-[#4ADE80] text-center shadow-neo-sm">
                <div className="font-black text-2xl">AAA</div>
                <div className="font-bold text-xs">ACCESSIBILITY</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {cat3.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-black border-2 border-black bg-[#C4B5FD]/30 text-black hover:bg-[#C4B5FD] transition-colors flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 4: Triết lý & Cam kết (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="lg:col-span-7 border-4 border-black bg-white shadow-neo neo-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b-4 border-black mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-black" />
                <span className="font-black text-xs uppercase tracking-widest">
                  TRIẾT LÝ THIẾT KẾ // CAM KẾT CHẤT LƯỢNG
                </span>
              </div>
              <span className="bg-[#FF6B6B] text-white border-2 border-black px-2 py-0.5 text-xs font-black">
                ZERO SLOP
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight uppercase">
              KHÔNG DÙNG TEMPLATE RẬP KHUÔN
            </h3>
            
            <p className="mt-3 font-bold text-sm sm:text-base text-black/80 leading-relaxed">
              Mỗi sản phẩm tạo ra đều được nghiên cứu kỹ lưỡng về ngữ cảnh, đối tượng người dùng mục tiêu và tinh chỉnh tỉ mỉ từng chi tiết tương tác để đem lại cảm giác cao cấp, dễ dùng và ghi điểm tuyệt đối.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 border-3 border-black bg-[#FFFDF5]">
                <div className="font-black text-xs uppercase">BẢNG MÀU</div>
                <div className="font-bold text-xs text-black/70 mt-0.5">Tương phản cao WCAG</div>
              </div>
              <div className="p-3 border-3 border-black bg-[#FFFDF5]">
                <div className="font-black text-xs uppercase">CHUYỂN ĐỘNG</div>
                <div className="font-bold text-xs text-black/70 mt-0.5">Vật lý cơ học đầm tay</div>
              </div>
              <div className="p-3 border-3 border-black bg-[#FFFDF5]">
                <div className="font-black text-xs uppercase">MÃ NGUỒN</div>
                <div className="font-bold text-xs text-black/70 mt-0.5">TypeScript sạch 100%</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 border-3 border-black bg-[#FFD93D] font-black text-xs uppercase flex items-center justify-between shadow-neo-sm">
            <span>SẴN SÀNG BIẾN Ý TƯỞNG THÀNH SẢN PHẨM:</span>
            <Star className="w-4 h-4 fill-black" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
