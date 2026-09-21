import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { DEFAULT_PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  projects?: Project[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects = DEFAULT_PROJECTS }) => {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-20">
        <div className="inline-block px-3 py-1 border-4 border-black bg-[#FFD93D] text-black font-black text-xs uppercase tracking-widest mb-4 shadow-neo-sm">
          02 // DỰ ÁN &amp; HỆ THỐNG BACKEND
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-black tracking-tight uppercase">
          DỰ ÁN <span className="bg-[#FF6B6B] text-white border-4 border-black px-3 inline-block transform rotate-1 shadow-neo-sm">TIÊU BIỂU</span>
        </h2>
        <p className="mt-4 font-bold text-base sm:text-lg text-black/80 max-w-2xl">
          Các dự án Backend thực chiến áp dụng Java 17, Spring Boot, thiết kế RESTful API chuẩn mực và tối ưu cơ sở dữ liệu.
        </p>
      </div>

      {/* Projects List */}
      <div className="space-y-16 sm:space-y-24">
        {projects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-4 border-black bg-white shadow-neo-lg neo-card overflow-hidden"
            >
              {/* Top Banner Bar */}
              <div className="px-6 py-3.5 bg-[#FFD93D] border-b-4 border-black flex flex-wrap items-center justify-between gap-3 font-black text-xs uppercase">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-black text-white">PROJ_0{index + 1}</span>
                  <span className="text-black tracking-wider">{project.category}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white border-2 border-black px-2.5 py-0.5 shadow-neo-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
                  <span>{project.metrics}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
                
                {/* Mockup Image Frame + Direct Code Button (7 Cols) */}
                <div className={`lg:col-span-7 flex flex-col justify-between space-y-4 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative border-4 border-black bg-black shadow-neo-sm overflow-hidden group/img aspect-video">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                    {/* Corner Sticker Badge */}
                    <div className="absolute top-3 left-3 bg-[#FF6B6B] text-white border-2 border-black font-black text-xs px-2.5 py-1 shadow-neo-sm transform -rotate-2">
                      FEATURED
                    </div>
                  </div>

                  {/* Nút Xem Code đặt ngay dưới ảnh để lấp đầy khoảng trống */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-neo-sm neo-btn flex items-center justify-center gap-2 hover:bg-[#ff5252] transition-colors"
                  >
                    <span>XEM SOURCE CODE GITHUB</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Case Study Details (5 Cols) */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-black border-2 border-black bg-[#C4B5FD]/40 text-black shadow-neo-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight uppercase">
                      {project.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-bold text-black/70 mt-1 uppercase">
                      // {project.subtitle}
                    </div>

                    {/* Problem & Solution Blocks */}
                    <div className="mt-6 space-y-4 text-xs sm:text-sm font-bold">
                      <div className="p-3.5 border-l-4 border-[#FF6B6B] border-y-2 border-r-2 border-black bg-[#FF6B6B]/10">
                        <span className="text-[#FF6B6B] font-black block mb-1 uppercase">
                          [ BÀI TOÁN KỸ THUẬT &amp; NGHIỆP VỤ ]
                        </span>
                        <p className="text-black/85 leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 border-l-4 border-[#4ADE80] border-y-2 border-r-2 border-black bg-[#4ADE80]/15">
                        <span className="text-black font-black block mb-1 uppercase">
                          [ GIẢI PHÁP KIẾN TRÚC &amp; BACKEND ]
                        </span>
                        <p className="text-black/85 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
