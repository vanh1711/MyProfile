import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Sparkles,
  FileText,
  Mail,
  MapPin,
  CheckCircle2,
  Code2,
  Target,
  ArrowUpRight,
  Zap,
  Camera,
  Upload,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, FigmaIcon } from './icons/BrandIcons';
import type { PersonalInfo } from '../types/portfolio';

interface AboutMeProps {
  profile: PersonalInfo;
  onUpdateProfile?: (updated: PersonalInfo) => void;
  onOpenEditor?: () => void;
  isAdmin?: boolean;
}

export const AboutMe: React.FC<AboutMeProps> = ({ profile, onUpdateProfile, isAdmin = false }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const defaultAvatar = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80';
  const currentAvatar = profile.avatarUrl || defaultAvatar;

  // Handle local image file upload from user's computer
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Url = event.target?.result as string;
        if (base64Url && onUpdateProfile) {
          onUpdateProfile({
            ...profile,
            avatarUrl: base64Url,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section id="about" className="pt-10 sm:pt-14 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hidden File Input for Direct Local Image Upload */}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
        aria-hidden="true"
      />

      {/* Top Section Rule */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#242424]">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 border border-[#333333] bg-[#141414] font-mono text-[11px] uppercase tracking-widest text-[#E5E5E5]">
            // 01 ARCHIVE: IDENTITY
          </span>
          <h2 className="font-heading font-black text-sm sm:text-base text-white uppercase tracking-wider">
            HỒ SƠ JAVA BACKEND DEVELOPER
          </h2>
        </div>
        <span className="text-[11px] font-mono text-[#737373] uppercase hidden sm:inline tracking-widest">
          {profile.name} // PORTFOLIO 2026
        </span>
      </div>

      {/* Main Feature Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Visual Profile & Identity Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.3 }}
          className="lg:col-span-5 border border-[#242424] bg-[#111111] mono-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            
            {/* Top Identity Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#222222]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#A3A3A3]">
                <User className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                <span className="uppercase tracking-wider">HỒ SƠ ỨNG VIÊN</span>
              </div>
              <span className="px-2 py-0.5 border border-[#333333] bg-[#161616] text-[#E5E5E5] font-mono text-[10px] uppercase tracking-widest">
                BACKEND DEVELOPER
              </span>
            </div>

            {/* 1. Full Photo Avatar Box */}
            <div className="relative border border-[#2E2E2E] bg-[#050505] overflow-hidden aspect-[4/3] group/avatar">
              <img
                src={currentAvatar}
                alt={profile.name}
                className="w-full h-full object-cover object-center grayscale contrast-125 group-hover/avatar:grayscale-0 group-hover/avatar:scale-105 transition-all duration-300"
              />

              {/* Upload Button Overlay on Hover (Chỉ hiển thị khi là Admin) */}
              {isAdmin && (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity bg-black/75 p-4 text-center">
                    <button
                      type="button"
                      onClick={triggerUpload}
                      className="px-4 py-2 border border-white bg-white text-black font-mono font-bold text-xs uppercase flex items-center gap-2 hover:bg-transparent hover:text-white transition-all"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>TẢI ẢNH TỪ MÁY</span>
                    </button>
                    <span className="font-mono text-[10px] text-[#A3A3A3] mt-1.5">JPG, PNG, WEBP</span>
                  </div>

                  <button
                    type="button"
                    onClick={triggerUpload}
                    className="absolute top-3 right-3 p-2 border border-white bg-black text-white hover:bg-white hover:text-black group-hover/avatar:hidden transition-colors"
                    title="Bấm vào để đổi ảnh chân dung của bạn"
                  >
                    <Upload className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>

            {/* 2. Name & Title Placed BELOW the Photo Box */}
            <div className="text-center space-y-2 pt-1 border-b border-[#222222] pb-6">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight uppercase">
                {profile.name}
              </h3>
              <div className="font-serif italic text-xs text-[#A3A3A3] tracking-widest uppercase">
                {profile.title}
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#2E2E2E] bg-[#0D0D0D] text-[#CCCCCC] font-mono text-[11px] uppercase mt-1">
                <span className="w-1.5 h-1.5 bg-[#4ADE80] animate-pulse" />
                <span className="truncate max-w-[240px] tracking-wide">{profile.systemStatus}</span>
              </div>
            </div>

            {/* 3. Info Metrics Table */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between p-3 border border-[#202020] bg-[#0D0D0D]">
                <span className="text-[#888888] flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                  Khu vực:
                </span>
                <span className="text-[#E5E5E5] font-bold text-right truncate max-w-[180px]">
                  {profile.location}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 border border-[#202020] bg-[#0D0D0D]">
                <span className="text-[#888888] flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
                  Email:
                </span>
                <span className="text-[#E5E5E5] font-bold text-right truncate max-w-[180px]">
                  {profile.email}
                </span>
              </div>
            </div>

          </div>

          {/* Socials & Fast CV Action */}
          <div className="pt-6 border-t border-[#222222] mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-[#888888] uppercase tracking-wider">MẠNG XÃ HỘI:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#2A2A2A] bg-[#141414] hover:border-white text-[#A3A3A3] hover:text-white transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#2A2A2A] bg-[#141414] hover:border-white text-[#A3A3A3] hover:text-white transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-[#2A2A2A] bg-[#141414] hover:border-white text-[#A3A3A3] hover:text-white transition-colors"
                  title="Figma"
                >
                  <FigmaIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-white bg-white text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-transparent hover:text-white transition-all"
            >
              <FileText className="w-4 h-4" strokeWidth={1.75} />
              <span>XEM / TẢI CV CHUYÊN NGHIỆP</span>
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.75} />
            </a>
          </div>

        </motion.div>

        {/* Right Column: Bio Narrative & Core Superpowers (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          
          {/* Main Story Narrative Card */}
          <div className="border border-[#242424] bg-[#111111] mono-card p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center gap-2 text-[#888888] font-mono text-xs uppercase tracking-widest pb-3 border-b border-[#222222]">
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>// MỤC TIÊU NGHỀ NGHIỆP &amp; TƯ DUY HỆ THỐNG</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight leading-snug uppercase">
              "XÂY DỰNG HỆ THỐNG BACKEND VỮNG CHẮC, <br />
              <span className="font-serif italic font-normal text-white underline decoration-[#555555] underline-offset-4">
                RESTful API CHUẨN MỰC &amp; HIỆU NĂNG CAO"
              </span>
            </h3>

            <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed font-normal">
              {profile.bio}
            </p>

            <p className="text-sm text-[#A3A3A3] leading-relaxed">
              Với tinh thần cầu thị, chủ động tìm tòi và đam mê sâu sắc với kỹ thuật lập trình hệ thống, tôi đặt mục tiêu trở thành một <strong className="text-white font-bold">Java Software Engineer</strong> có chuyên môn cao. Tôi luôn chú trọng việc viết mã nguồn sạch (Clean Code), áp dụng đúng các quy chuẩn kiến trúc phần mềm và không ngừng nâng cao kỹ năng qua các dự án thực tế.
            </p>

            {/* 3 Core Superpowers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 border border-[#222222] bg-[#0E0E0E] space-y-2">
                <div className="p-1.5 w-fit border border-[#333333] bg-[#161616] text-white">
                  <Code2 className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="font-mono font-bold text-xs text-white uppercase tracking-wider">JAVA CORE &amp; OOP</div>
                <div className="font-sans text-[11px] text-[#888888] leading-relaxed">
                  Java 17, Collections, Concurrency, Stream API.
                </div>
              </div>

              <div className="p-4 border border-[#222222] bg-[#0E0E0E] space-y-2">
                <div className="p-1.5 w-fit border border-[#333333] bg-[#161616] text-white">
                  <Zap className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="font-mono font-bold text-xs text-white uppercase tracking-wider">SPRING BOOT 3</div>
                <div className="font-sans text-[11px] text-[#888888] leading-relaxed">
                  RESTful APIs, Spring Data JPA, JWT Security.
                </div>
              </div>

              <div className="p-4 border border-[#222222] bg-[#0E0E0E] space-y-2">
                <div className="p-1.5 w-fit border border-[#333333] bg-[#161616] text-white">
                  <Target className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div className="font-mono font-bold text-xs text-white uppercase tracking-wider">DATABASE &amp; TEST</div>
                <div className="font-sans text-[11px] text-[#888888] leading-relaxed">
                  MySQL, PostgreSQL, Docker, JUnit 5 &amp; Mockito.
                </div>
              </div>
            </div>

          </div>

          {/* Value Commitments Bar */}
          <div className="border border-[#242424] bg-[#111111] mono-card p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="flex items-center gap-3">
              <div className="p-2 border border-[#333333] bg-[#161616] text-white">
                <Code2 className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading font-black text-base text-white">OOP &amp; SOLID</div>
                <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">CLEAN CODE</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 border border-[#333333] bg-[#161616] text-white">
                <CheckCircle2 className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading font-black text-base text-white">RESTful API</div>
                <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">BEST PRACTICES</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 border border-[#333333] bg-[#161616] text-white">
                <Sparkles className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-heading font-black text-base text-white">FAST LEARNER</div>
                <div className="font-mono text-[10px] text-[#888888] uppercase tracking-wider">READY FOR INTERN</div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
