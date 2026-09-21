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
      <div className="mb-16">
        <div className="inline-block px-3 py-1 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase tracking-widest mb-4 shadow-neo-sm">
          03 // NĂNG LỰC &amp; CÔNG NGHỆ
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-black tracking-tight uppercase">
          KỸ NĂNG <span className="bg-[#FFD93D] border-4 border-black px-3 inline-block transform -rotate-1 shadow-neo-sm">CHUYÊN MÔN</span>
        </h2>
        <p className="mt-4 font-bold text-base sm:text-lg text-black/80 max-w-2xl">
          Nền tảng vững chắc về Java Core, hệ sinh thái Spring Framework và kỹ năng thiết kế cơ sở dữ liệu quan hệ.
        </p>
      </div>

      {/* Asymmetric Neo-Brutalist Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        
        {/* Card 1: Java Core & OOP (7 Cols) */}
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
              <Code2 className="w-5 h-5 text-black" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
              {cat1.description}
            </p>

            {/* OOP Pillars Box */}
            <div className="p-4 border-3 border-black bg-[#FFFDF5] space-y-3">
              <div className="flex items-center justify-between text-xs font-black uppercase">
                <span>4 TRỤ CỘT HƯỚNG ĐỐI TƯỢNG (OOP):</span>
                <span className="bg-[#4ADE80] border border-black px-2 py-0.5">CHUẨN MỰC</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-black">
                <div className="p-2 border-2 border-black bg-[#FF6B6B] text-white">ENCAPSULATION</div>
                <div className="p-2 border-2 border-black bg-[#FFD93D] text-black">INHERITANCE</div>
                <div className="p-2 border-2 border-black bg-[#C4B5FD] text-black">POLYMORPHISM</div>
                <div className="p-2 border-2 border-black bg-[#4ADE80] text-black">ABSTRACTION</div>
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

        {/* Card 2: Spring Framework & REST API (5 Cols) */}
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
              <Zap className="w-5 h-5" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
              {cat2.description}
            </p>

            {/* Java Code Snippet Box */}
            <div className="p-4 border-3 border-black bg-black text-white font-mono text-[11px] leading-relaxed">
              <div className="text-[#FFD93D] font-bold">@RestController</div>
              <div className="text-[#FFD93D] font-bold">@RequestMapping("/api/v1")</div>
              <div className="text-[#4ADE80]">public class OrderController &#123;</div>
              <div className="pl-3 text-[#C4B5FD]">@PostMapping("/checkout")</div>
              <div className="pl-3 text-white">public ResponseEntity&lt;Response&gt; createOrder() &#123; ... &#125;</div>
              <div className="text-[#4ADE80]">&#125;</div>
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

        {/* Card 3: Database & DevOps (5 Cols) */}
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
              <Database className="w-5 h-5" />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
              {cat3.description}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 border-3 border-black bg-[#FFD93D] text-center shadow-neo-sm">
                <div className="font-black text-xl sm:text-2xl">RDBMS</div>
                <div className="font-bold text-xs">MYSQL &amp; POSTGRES</div>
              </div>
              <div className="p-3 border-3 border-black bg-[#4ADE80] text-center shadow-neo-sm">
                <div className="font-black text-xl sm:text-2xl">&gt;80%</div>
                <div className="font-bold text-xs">JUNIT 5 COVERAGE</div>
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
                <Terminal className="w-5 h-5 text-black" />
                <span className="font-black text-xs uppercase tracking-widest">
                  NGUYÊN TẮC KỸ THUẬT // CLEAN ARCHITECTURE
                </span>
              </div>
              <span className="bg-[#4ADE80] text-black border-2 border-black px-2 py-0.5 text-xs font-black">
                SOLID PRINCIPLES
              </span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight uppercase">
              MÃ NGUỒN SẠCH &amp; DỄ BẢO TRÌ
            </h3>
            
            <p className="mt-3 font-bold text-sm sm:text-base text-black/80 leading-relaxed">
              Tập trung vào kiến trúc phân tầng 3 lớp (Layered Architecture), xử lý Exception tập trung với `@ControllerAdvice`, viết Unit Test bảo vệ logic nghiệp vụ và tuân thủ các quy chuẩn đặt tên biến, cấu trúc package của hệ sinh thái Java.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 border-3 border-black bg-[#FFFDF5]">
                <div className="font-black text-xs uppercase">BẢO MẬT</div>
                <div className="font-bold text-xs text-black/70 mt-0.5">JWT &amp; Spring Security</div>
              </div>
              <div className="p-3 border-3 border-black bg-[#FFFDF5]">
                <div className="font-black text-xs uppercase">HIỆU NĂNG</div>
                <div className="font-bold text-xs text-black/70 mt-0.5">Index SQL &amp; Redis Cache</div>
              </div>
              <div className="p-3 border-3 border-black bg-[#FFFDF5]">
                <div className="font-black text-xs uppercase">TÍNH TOÀN VẸN</div>
                <div className="font-bold text-xs text-black/70 mt-0.5">ACID Transactions</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 border-3 border-black bg-[#FFD93D] font-black text-xs uppercase flex items-center justify-between shadow-neo-sm">
            <span>SẴN SÀNG THAM GIA DỰ ÁN THỰC TẾ &amp; HỌC HỎI CÔNG NGHỆ MỚI</span>
            <Star className="w-4 h-4 fill-black" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

