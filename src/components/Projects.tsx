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
      <div className="mb-16 pb-4 border-b border-[#242424]">
        <div className="inline-block px-2.5 py-1 border border-[#333333] bg-[#141414] text-[#E5E5E5] font-mono text-[11px] uppercase tracking-widest mb-3">
          // 02 ARCHIVE: SELECTED WORKS
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
          DỰ ÁN <span className="font-serif italic font-normal text-[#A3A3A3]">TIÊU BIỂU</span>
        </h2>
        <p className="mt-3 font-normal text-sm sm:text-base text-[#A3A3A3] max-w-2xl">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-[#242424] bg-[#111111] mono-card overflow-hidden"
            >
              {/* Top Banner Bar */}
              <div className="px-6 py-3 bg-[#141414] border-b border-[#242424] flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 border border-[#333333] bg-black text-white text-[10px]">PROJ_0{index + 1}</span>
                  <span className="text-[#888888] tracking-wider">// {project.category}</span>
                </div>
                <div className="flex items-center gap-1.5 border border-[#2E2E2E] bg-[#0A0A0A] px-2.5 py-0.5 text-[#CCCCCC] text-[10px]">
                  <Sparkles className="w-3 h-3 text-white" />
                  <span>{project.metrics}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
                
                {/* Mockup Image Frame + Direct Code Button (7 Cols) */}
                <div className={`lg:col-span-7 flex flex-col justify-between space-y-4 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative border border-[#2E2E2E] bg-black overflow-hidden group/img aspect-video">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center grayscale contrast-125 group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-300"
                    />
                    {/* Corner Sticker Badge */}
                    <div className="absolute top-3 left-3 bg-white text-black border border-black font-mono font-bold text-[10px] px-2 py-0.5 tracking-wider">
                      FEATURED
                    </div>
                  </div>

                  {/* Nút Xem Code đặt ngay dưới ảnh */}
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 border border-white bg-white text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-transparent hover:text-white transition-all"
                  >
                    <span>XEM SOURCE CODE GITHUB</span>
                    <ExternalLink className="w-4 h-4" strokeWidth={1.75} />
                  </a>
                </div>

                {/* Case Study Details (5 Cols) */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono border border-[#2E2E2E] bg-[#161616] text-[#CCCCCC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-heading font-black text-2xl text-white tracking-tight uppercase">
                      {project.title}
                    </h3>
                    <div className="font-serif italic text-xs text-[#888888] mt-1">
                      // {project.subtitle}
                    </div>

                    {/* Problem & Solution Blocks */}
                    <div className="mt-6 space-y-3 font-sans text-xs">
                      <div className="p-3.5 border-l-2 border-[#404040] bg-[#0E0E0E]">
                        <span className="text-[#888888] font-mono text-[10px] block mb-1 uppercase tracking-wider">
                          [ BÀI TOÁN KỸ THUẬT &amp; NGHIỆP VỤ ]
                        </span>
                        <p className="text-[#A3A3A3] leading-relaxed">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 border-l-2 border-white bg-[#141414]">
                        <span className="text-white font-mono text-[10px] font-bold block mb-1 uppercase tracking-wider">
                          [ GIẢI PHÁP KIẾN TRÚC &amp; BACKEND ]
                        </span>
                        <p className="text-[#E5E5E5] leading-relaxed">
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
