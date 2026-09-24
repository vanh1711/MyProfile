import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, Star } from 'lucide-react';
import type { TimelineItem } from '../types/portfolio';
import { DEFAULT_TIMELINE } from '../data/portfolioData';

interface TimelineProps {
  timeline?: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ timeline = DEFAULT_TIMELINE }) => {
  return (
    <section id="timeline" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="mb-16 pb-4 border-b border-[#242424]">
        <div className="inline-block px-2.5 py-1 border border-[#333333] bg-[#141414] text-[#E5E5E5] font-mono text-[11px] uppercase tracking-widest mb-3">
          // 04 ARCHIVE: EXPERIENCE &amp; MILESTONES
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
          KINH NGHIỆM <span className="font-serif italic font-normal text-[#A3A3A3]">THỰC CHIẾN</span>
        </h2>
        <p className="mt-3 font-normal text-sm sm:text-base text-[#A3A3A3] max-w-2xl">
          Quá trình học tập, nghiên cứu chuyên sâu và xây dựng các hệ thống dịch vụ số Java Backend.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-[#2A2A2A] space-y-12 sm:space-y-16 ml-3 sm:ml-6">
        {timeline.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
              className="relative"
            >
              {/* Node on the Timeline Line */}
              <div className="absolute -left-[32px] sm:-left-[48px] top-6 w-8 h-8 border border-[#404040] bg-[#0A0A0A] flex items-center justify-center">
                <Star className="w-3.5 h-3.5 text-white fill-white" />
              </div>

              {/* Experience Card */}
              <div className="border border-[#242424] bg-[#111111] mono-card p-6 sm:p-8">
                
                {/* Period & Location Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#222222]">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[#333333] bg-[#161616] text-[#E5E5E5] font-mono text-xs uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#888888]" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-[#888888]">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-white mt-4 uppercase tracking-tight">
                  {item.role}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 font-serif italic text-xs text-[#A3A3A3] uppercase">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{item.company}</span>
                </div>

                <p className="mt-4 text-sm text-[#D4D4D4] leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements list */}
                <div className="mt-4 space-y-2 text-xs sm:text-sm text-[#A3A3A3]">
                  {item.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-white font-mono text-sm leading-none">■</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t border-[#222222] flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono border border-[#2E2E2E] bg-[#141414] text-[#CCCCCC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
