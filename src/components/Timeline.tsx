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
      <div className="mb-20">
        <div className="inline-block px-3 py-1 border-4 border-black bg-[#C4B5FD] text-black font-black text-xs uppercase tracking-widest mb-4 shadow-neo-sm">
          03 // HÀNH TRÌNH SỰ NGHIỆP
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-black tracking-tight uppercase">
          KINH NGHIỆM <span className="bg-[#FFD93D] border-4 border-black px-3 inline-block transform rotate-1 shadow-neo-sm">THỰC CHIẾN</span>
        </h2>
        <p className="mt-4 font-bold text-base sm:text-lg text-black/80 max-w-2xl">
          Quá trình làm việc, xây dựng các giải pháp số và đóng góp giá trị cho các doanh nghiệp.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10 border-l-6 border-black space-y-12 sm:space-y-16 ml-3 sm:ml-6">
        {timeline.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Star Node on the Timeline Line */}
              <div className="absolute -left-[37px] sm:-left-[53px] top-6 w-9 h-9 sm:w-11 sm:h-11 border-4 border-black bg-[#FFD93D] shadow-neo-sm flex items-center justify-center">
                <Star className="w-5 h-5 text-black fill-black" />
              </div>

              {/* Experience Card */}
              <div className="border-4 border-black bg-white shadow-neo neo-card p-6 sm:p-8">
                
                {/* Period & Location Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b-4 border-black">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 border-2 border-black bg-[#FFD93D] text-black font-black text-xs uppercase shadow-neo-sm transform -rotate-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>

                  <div className="flex items-center gap-1.5 font-bold text-xs text-black/70">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B6B]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="font-heading font-black text-xl sm:text-2xl text-black mt-4 uppercase tracking-tight">
                  {item.role}
                </h3>
                <div className="flex items-center gap-1.5 mt-1 font-bold text-sm text-[#FF6B6B] uppercase">
                  <Briefcase className="w-4 h-4" />
                  <span>{item.company}</span>
                </div>

                <p className="mt-4 font-bold text-sm text-black/85 leading-relaxed">
                  {item.description}
                </p>

                {/* Achievements list */}
                <div className="mt-4 space-y-2 text-xs sm:text-sm font-bold text-black/80">
                  {item.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[#FF6B6B] font-black text-base leading-none">■</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t-2 border-black flex flex-wrap gap-2">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-black border-2 border-black bg-[#C4B5FD]/30 text-black"
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
