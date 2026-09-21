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

      {/* Section Header */}
      <div className="mb-20">
        <div className="inline-block px-3 py-1 border-4 border-black bg-[#C4B5FD] text-black font-black text-xs uppercase tracking-widest mb-4 shadow-neo-sm">
          01 // CHÂN DUNG &amp; BẢN SẮC
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-black tracking-tight uppercase">
          GIỚI THIỆU <span className="bg-[#FFD93D] border-4 border-black px-3 inline-block transform -rotate-1 shadow-neo-sm">BẢN THÂN</span>
        </h2>
        <p className="mt-4 font-bold text-base sm:text-lg text-black/80 max-w-2xl">
          Đam mê xây dựng hệ thống Java Backend tin cậy, tối ưu hóa cơ sở dữ liệu và triển khai RESTful APIs chuẩn mực.
        </p>
      </div>

      {/* Main Feature Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left Column: Visual Profile & Identity Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 border-4 border-black bg-white shadow-neo neo-card p-6 sm:p-8 flex flex-col justify-between"
        >
          <div className="space-y-6">
            
            {/* Top Identity Header */}
            <div className="flex items-center justify-between pb-4 border-b-4 border-black">
              <div className="flex items-center gap-2 font-black text-xs text-black">
                <User className="w-4 h-4 text-black" />
                <span className="uppercase">HỒ SƠ ỨNG VIÊN</span>
              </div>
              <span className="px-2.5 py-0.5 border-2 border-black bg-[#FFD93D] text-black font-black text-xs uppercase shadow-neo-sm">
                BACKEND DEVELOPER
              </span>
            </div>

            {/* 1. Full Photo Avatar Box (Takes full box width & height) */}
            <div className="relative border-4 border-black bg-black shadow-neo-sm overflow-hidden aspect-[4/3] group/avatar">
              <img
                src={currentAvatar}
                alt={profile.name}
                className="w-full h-full object-cover object-center group-hover/avatar:scale-105 transition-transform duration-500"
              />

              {/* Upload Button Overlay on Hover (Chỉ hiển thị khi là Admin) */}
              {isAdmin && (
                <>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity bg-black/60 p-4 text-center">
                    <button
                      type="button"
                      onClick={triggerUpload}
                      className="px-4 py-2.5 border-2 border-black bg-[#FFD93D] text-black font-black text-xs uppercase flex items-center gap-2 shadow-neo-sm neo-btn"
                    >
                      <Camera className="w-4 h-4" />
                      <span>TẢI ẢNH TỪ MÁY TÍNH</span>
                    </button>
                    <span className="font-bold text-[10px] text-white mt-1.5">Hỗ trợ JPG, PNG, WEBP</span>
                  </div>

                  <button
                    type="button"
                    onClick={triggerUpload}
                    className="absolute top-3 right-3 p-2 border-2 border-black bg-[#FFD93D] text-black shadow-neo-sm neo-btn group-hover/avatar:hidden"
                    title="Bấm vào để đổi ảnh chân dung của bạn"
                  >
                    <Upload className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>

            {/* 2. Name & Title Placed BELOW the Photo Box */}
            <div className="text-center space-y-2 pt-1 border-b-4 border-black pb-6">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight uppercase">
                {profile.name}
              </h3>
              <div className="font-black text-xs text-[#FF6B6B] uppercase tracking-wider">
                {profile.title}
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-black bg-[#4ADE80] text-black font-black text-xs uppercase shadow-neo-sm mt-1">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span className="truncate max-w-[240px]">{profile.systemStatus}</span>
              </div>
            </div>

            {/* 3. Info Metrics Table */}
            <div className="space-y-3 font-bold text-xs">
              <div className="flex items-center justify-between p-3 border-3 border-black bg-[#FFFDF5]">
                <span className="text-black/70 flex items-center gap-2 font-black">
                  <MapPin className="w-4 h-4 text-[#FF6B6B]" />
                  Khu vực:
                </span>
                <span className="text-black font-black text-right truncate max-w-[180px]">
                  {profile.location}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 border-3 border-black bg-[#FFFDF5]">
                <span className="text-black/70 flex items-center gap-2 font-black">
                  <Mail className="w-4 h-4 text-[#FFD93D]" />
                  Email:
                </span>
                <span className="text-black font-black text-right truncate max-w-[180px]">
                  {profile.email}
                </span>
              </div>
            </div>

          </div>

          {/* Socials & Fast CV Action */}
          <div className="pt-6 border-t-4 border-black mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-black text-xs text-black/70 uppercase">MẠNG XÃ HỘI:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black bg-white hover:bg-[#FFD93D] shadow-neo-sm neo-btn transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black bg-white hover:bg-[#38BDF8] shadow-neo-sm neo-btn transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={profile.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black bg-white hover:bg-[#C4B5FD] shadow-neo-sm neo-btn transition-colors"
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
              className="w-full py-3.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-neo-sm neo-btn hover:bg-[#ff5252]"
            >
              <FileText className="w-4 h-4" />
              <span>XEM / TẢI CV CHUYÊN NGHIỆP</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </motion.div>

        {/* Right Column: Bio Narrative & Core Superpowers (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6"
        >
          
          {/* Main Story Narrative Card */}
          <div className="border-4 border-black bg-white shadow-neo neo-card p-6 sm:p-8 space-y-6">
            
            <div className="flex items-center gap-2 text-black font-black text-xs uppercase tracking-wider pb-3 border-b-2 border-black">
              <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
              <span>MỤC TIÊU NGHỀ NGHIỆP &amp; TƯ DUY KỸ THUẬT</span>
            </div>

            <h3 className="font-heading font-black text-2xl sm:text-3xl text-black tracking-tight leading-snug uppercase">
              "XÂY DỰNG HỆ THỐNG BACKEND VỮNG CHẮC, <br />
              <span className="bg-[#FFD93D] border-2 border-black px-2 inline-block transform rotate-1 mt-1">
                RESTful API CHUẨN MỰC &amp; HIỆU NĂNG CAO"
              </span>
            </h3>

            <p className="font-bold text-sm sm:text-base text-black/85 leading-relaxed">
              {profile.bio}
            </p>

            <p className="font-bold text-sm text-black/75 leading-relaxed">
              Với tinh thần cầu thị, chủ động tìm tòi và đam mê sâu sắc với kỹ thuật lập trình hệ thống, tôi đặt mục tiêu trở thành một <strong className="text-black font-black">Java Software Engineer</strong> có chuyên môn cao. Tôi luôn chú trọng việc viết mã nguồn sạch (Clean Code), áp dụng đúng các quy chuẩn kiến trúc phần mềm và không ngừng nâng cao kỹ năng qua các dự án thực tế.
            </p>

            {/* 3 Core Superpowers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 border-3 border-black bg-[#FFFDF5] space-y-1.5 shadow-neo-sm">
                <div className="p-2 w-fit border-2 border-black bg-[#FFD93D] text-black">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="font-black text-xs text-black uppercase">JAVA CORE &amp; OOP</div>
                <div className="font-bold text-[11px] text-black/70 leading-relaxed">
                  Java 17, Collections, Concurrency, Stream API.
                </div>
              </div>

              <div className="p-3.5 border-3 border-black bg-[#FFFDF5] space-y-1.5 shadow-neo-sm">
                <div className="p-2 w-fit border-2 border-black bg-[#FF6B6B] text-white">
                  <Zap className="w-4 h-4" />
                </div>
                <div className="font-black text-xs text-black uppercase">SPRING BOOT 3</div>
                <div className="font-bold text-[11px] text-black/70 leading-relaxed">
                  RESTful APIs, Spring Data JPA, JWT Security.
                </div>
              </div>

              <div className="p-3.5 border-3 border-black bg-[#FFFDF5] space-y-1.5 shadow-neo-sm">
                <div className="p-2 w-fit border-2 border-black bg-[#4ADE80] text-black">
                  <Target className="w-4 h-4" />
                </div>
                <div className="font-black text-xs text-black uppercase">DATABASE &amp; TESTING</div>
                <div className="font-bold text-[11px] text-black/70 leading-relaxed">
                  MySQL, PostgreSQL, Docker, JUnit 5 &amp; Mockito.
                </div>
              </div>
            </div>

          </div>

          {/* Value Commitments Bar */}
          <div className="border-4 border-black bg-white shadow-neo-sm p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div className="flex items-center gap-3">
              <div className="p-2 border-2 border-black bg-[#FFD93D] text-black font-black text-xs">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-black text-lg text-black">OOP &amp; SOLID</div>
                <div className="font-bold text-[10px] text-black/70 uppercase">CLEAN CODE</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 border-2 border-black bg-[#FF6B6B] text-white font-black text-xs">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-black text-lg text-black">RESTful API</div>
                <div className="font-bold text-[10px] text-black/70 uppercase">BEST PRACTICES</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2 border-2 border-black bg-[#C4B5FD] text-black font-black text-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="font-heading font-black text-lg text-black">FAST LEARNER</div>
                <div className="font-bold text-[10px] text-black/70 uppercase">READY FOR INTERN</div>
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
