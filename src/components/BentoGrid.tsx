import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Database, CheckCircle2, Star, Terminal } from 'lucide-react';
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
      <div className="mb-16 pb-4 border-b border-[#242424]">
        <div className="inline-block px-2.5 py-1 border border-[#333333] bg-[#141414] text-[#E5E5E5] font-mono text-[11px] uppercase tracking-widest mb-3">
          // 03 ARCHIVE: TECHNICAL SPECS
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
          KỸ NĂNG <span className="font-serif italic font-normal text-[#A3A3A3]">CHUYÊN MÔN</span>
        </h2>
        <p className="mt-3 font-normal text-sm sm:text-base text-[#A3A3A3] max-w-2xl">
          Nền tảng vững chắc về Java Core, hệ sinh thái Spring Framework và kỹ năng thiết kế cơ sở dữ liệu quan hệ.
        </p>
      </div>

      {/* Asymmetric Minimalist Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
        
        {/* Card 1: Java Core & OOP (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-7 border border-[#242424] bg-[#111111] mono-card flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 bg-[#141414] border-b border-[#242424] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 border border-[#333333] bg-black text-white font-mono text-[10px]">
                {cat1.tag}
              </span>
              <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-white">
                {cat1.title}
              </h3>
            </div>
            <div className="p-1.5 border border-[#333333] bg-black text-white">
              <Code2 className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
              {cat1.description}
            </p>

            {/* OOP Pillars Box */}
            <div className="p-4 border border-[#242424] bg-[#0A0A0A] space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#888888] uppercase tracking-wider">
                <span>[4 TRỤ CỘT HƯỚNG ĐỐI TƯỢNG OOP]:</span>
                <span className="border border-[#333333] bg-[#141414] text-[#E5E5E5] px-2 py-0.5 text-[10px]">STANDARD</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px] font-mono tracking-wider">
                <div className="p-2 border border-[#262626] bg-[#111111] text-white">ENCAPSULATION</div>
                <div className="p-2 border border-[#262626] bg-[#111111] text-white">INHERITANCE</div>
                <div className="p-2 border border-[#262626] bg-[#111111] text-white">POLYMORPHISM</div>
                <div className="p-2 border border-[#262626] bg-[#111111] text-white">ABSTRACTION</div>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {cat1.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-[11px] font-mono border border-[#2E2E2E] bg-[#141414] text-[#CCCCCC] hover:border-white hover:text-white transition-colors"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 2: Spring Framework & REST API (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-5 border border-[#242424] bg-[#111111] mono-card flex flex-col justify-between"
        >
          <div className="p-4 sm:p-5 bg-[#141414] border-b border-[#242424] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 border border-[#333333] bg-black text-white font-mono text-[10px]">
                {cat2.tag}
              </span>
              <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-white">
                {cat2.title}
              </h3>
            </div>
            <div className="p-1.5 border border-[#333333] bg-black text-white">
              <Zap className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
              {cat2.description}
            </p>

            {/* Java Code Snippet Box */}
            <div className="p-4 border border-[#242424] bg-[#080808] text-[#E5E5E5] font-mono text-[11px] leading-relaxed">
              <div className="text-[#888888]">@RestController</div>
              <div className="text-[#888888]">@RequestMapping("/api/v1")</div>
              <div className="text-white">public class OrderController &#123;</div>
              <div className="pl-3 text-[#A3A3A3]">@PostMapping("/checkout")</div>
              <div className="pl-3 text-[#CCCCCC]">public ResponseEntity&lt;Response&gt; create() &#123; ... &#125;</div>
              <div className="text-white">&#125;</div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {cat2.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-[11px] font-mono border border-[#2E2E2E] bg-[#141414] text-[#CCCCCC] hover:border-white hover:text-white transition-colors"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Database & DevOps (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.15 }}
          className="lg:col-span-5 border border-[#242424] bg-[#111111] mono-card flex flex-col justify-between"
        >
          <div className="p-4 sm:p-5 bg-[#141414] border-b border-[#242424] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-1 border border-[#333333] bg-black text-white font-mono text-[10px]">
                {cat3.tag}
              </span>
              <h3 className="font-heading font-black text-lg sm:text-xl uppercase tracking-tight text-white">
                {cat3.title}
              </h3>
            </div>
            <div className="p-1.5 border border-[#333333] bg-black text-white">
              <Database className="w-4 h-4" strokeWidth={1.5} />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
              {cat3.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 border border-[#262626] bg-[#0D0D0D] text-center">
                <div className="font-mono font-bold text-lg text-white">RDBMS</div>
                <div className="font-mono text-[10px] text-[#888888] tracking-wider mt-0.5">MYSQL &amp; POSTGRES</div>
              </div>
              <div className="p-3.5 border border-[#262626] bg-[#0D0D0D] text-center">
                <div className="font-mono font-bold text-lg text-white">&gt;80%</div>
                <div className="font-mono text-[10px] text-[#888888] tracking-wider mt-0.5">JUNIT 5 COVERAGE</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {cat3.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-[11px] font-mono border border-[#2E2E2E] bg-[#141414] text-[#CCCCCC] hover:border-white hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#A3A3A3]" strokeWidth={1.75} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 4: Triết lý & Cam kết (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="lg:col-span-7 border border-[#242424] bg-[#111111] mono-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-white" strokeWidth={1.5} />
                <span className="font-mono text-xs text-[#888888] uppercase tracking-widest">
                  // NGUYÊN TẮC KỸ THUẬT &amp; CLEAN ARCHITECTURE
                </span>
              </div>
              <span className="border border-[#333333] bg-[#141414] text-white px-2 py-0.5 text-[10px] font-mono">
                SOLID PRINCIPLES
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
              MÃ NGUỒN SẠCH &amp; DỄ BẢO TRÌ
            </h3>
            
            <p className="mt-3 text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
              Tập trung vào kiến trúc phân tầng 3 lớp (Layered Architecture), xử lý Exception tập trung với `@ControllerAdvice`, viết Unit Test bảo vệ logic nghiệp vụ và tuân thủ các quy chuẩn đặt tên biến, cấu trúc package của hệ sinh thái Java.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 border border-[#222222] bg-[#0E0E0E]">
                <div className="font-mono text-xs text-white uppercase font-bold tracking-wider">BẢO MẬT</div>
                <div className="font-sans text-xs text-[#888888] mt-1">JWT &amp; Spring Security</div>
              </div>
              <div className="p-3.5 border border-[#222222] bg-[#0E0E0E]">
                <div className="font-mono text-xs text-white uppercase font-bold tracking-wider">HIỆU NĂNG</div>
                <div className="font-sans text-xs text-[#888888] mt-1">Index SQL &amp; Redis Cache</div>
              </div>
              <div className="p-3.5 border border-[#222222] bg-[#0E0E0E]">
                <div className="font-mono text-xs text-white uppercase font-bold tracking-wider">TÍNH TOÀN VẸN</div>
                <div className="font-sans text-xs text-[#888888] mt-1">ACID Transactions</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 border border-[#2E2E2E] bg-[#161616] font-mono text-xs uppercase flex items-center justify-between text-[#CCCCCC]">
            <span className="tracking-wider">SẴN SÀNG THAM GIA DỰ ÁN THỰC TẾ &amp; HỌC HỎI CÔNG NGHỆ MỚI</span>
            <Star className="w-3.5 h-3.5 text-white fill-white" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

