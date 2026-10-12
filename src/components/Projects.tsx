import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './icons/BrandIcons';
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
          Các dự án thực chiến áp dụng Java 17, Spring Boot, Laravel & MySQL, thiết kế kiến trúc chuẩn mực (FSM, Clean Architecture) và tối ưu trải nghiệm người dùng.
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
                  <div className="space-y-4">
                    {/* Primary Image */}
                    <div className="relative border border-[#2E2E2E] hover:border-[#444444] bg-black overflow-hidden group/img aspect-video transition-colors">
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-all duration-500"
                      />
                      {/* Corner Sticker Badge */}
                      <div className="absolute top-3 left-3 bg-emerald-500/10 text-emerald-400 border border-emerald-500/40 backdrop-blur-md font-mono font-bold text-[10px] px-2.5 py-1 tracking-wider flex items-center gap-1.5 shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>SCREEN 01 // OVERVIEW</span>
                      </div>
                    </div>

                    {/* Secondary Image */}
                    {project.secondaryImage && (
                      <div className="relative border border-[#2E2E2E] hover:border-[#444444] bg-black overflow-hidden group/img aspect-video transition-colors">
                        <img
                          src={project.secondaryImage}
                          alt={`${project.title} - Preview 2`}
                          loading="lazy"
                          className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-all duration-500"
                        />
                        {/* Corner Sticker Badge */}
                        <div className="absolute top-3 left-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/40 backdrop-blur-md font-mono font-bold text-[10px] px-2.5 py-1 tracking-wider flex items-center gap-1.5 shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span>SCREEN 02 // MODULE &amp; DETAILS</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Nút Xem Code & Live Demo đặt ngay dưới ảnh */}
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    {project.deployUrl && (
                      <a
                        href={project.deployUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-3 border border-white bg-white text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-transparent hover:text-white transition-all shadow-md"
                      >
                        <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                        <span>TRẢI NGHIỆM DEMO LIVE</span>
                      </a>
                    )}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 px-3 border border-[#404040] bg-[#141414] text-white font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-white hover:bg-white hover:text-black transition-all shadow-md ${!project.deployUrl ? 'w-full py-3.5 bg-white text-black hover:bg-transparent hover:text-white border-white' : ''}`}
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>SOURCE CODE GITHUB</span>
                    </a>
                  </div>
                </div>

                {/* Case Study Details (5 Cols) */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono border border-[#2E2E2E] bg-[#161616] text-[#D4D4D4] hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-sans font-black text-2xl sm:text-3xl text-white tracking-tight uppercase leading-snug">
                      {project.title}
                    </h3>
                    <div className="font-sans font-semibold text-sm sm:text-base text-white/95 mt-2 flex items-start gap-2 leading-relaxed">
                      <span className="text-emerald-400 font-mono font-bold text-base shrink-0">//</span>
                      <span>{project.subtitle}</span>
                    </div>

                    {/* Problem & Solution Blocks */}
                    <div className="mt-6 space-y-4 font-sans">
                      <div className="p-4 border-l-4 border-amber-500 bg-[#121212] space-y-2">
                        <span className="text-amber-400 font-mono text-xs sm:text-sm font-bold block uppercase tracking-wider">
                          [ BÀI TOÁN KỸ THUẬT &amp; NGHIỆP VỤ ]
                        </span>
                        <p className="text-sm sm:text-base text-[#E5E5E5] leading-relaxed font-normal">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-4 border-l-4 border-emerald-400 bg-[#141414] space-y-2">
                        <span className="text-emerald-400 font-mono text-xs sm:text-sm font-bold block uppercase tracking-wider">
                          [ GIẢI PHÁP KIẾN TRÚC &amp; BACKEND ]
                        </span>
                        <p className="text-sm sm:text-base text-white leading-relaxed font-normal">
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
