import React, { useState } from 'react';
import { Menu, X, FileText, Edit3, ArrowUpRight, User, Layers, Award, Briefcase, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, FigmaIcon } from './icons/BrandIcons';
import type { PersonalInfo } from '../types/portfolio';

interface NavbarProps {
  profile: PersonalInfo;
  onOpenEditor: () => void;
  isAdmin?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenEditor, isAdmin = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: 'GIỚI THIỆU', href: '#about', tag: '01', icon: User },
    { label: 'DỰ ÁN', href: '#projects', tag: '02', icon: Layers },
    { label: 'KỸ NĂNG', href: '#skills', tag: '03', icon: Award },
    { label: 'KINH NGHIỆM', href: '#timeline', tag: '04', icon: Briefcase },
    { label: 'LIÊN HỆ', href: '#contact', tag: '05', icon: Mail },
  ];

  return (
    <>
      {/* =========================================================================
          1. DESKTOP: FIXED VERTICAL LEFT SIDEBAR (lg:flex)
          ========================================================================= */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 bg-[#FFFDF5] border-r-4 border-black z-40 flex-col justify-between p-6 shadow-neo overflow-y-auto">
        
        {/* Top Header & Brand */}
        <div className="space-y-4">
          <a
            href="#"
            className="block p-3.5 border-4 border-black bg-[#FFD93D] shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-black text-xl tracking-tighter text-black uppercase">
                {profile.name}
              </span>
              <span className="w-2.5 h-2.5 bg-[#FF6B6B] border border-black rounded-full" />
            </div>
            <div className="text-[10px] font-black uppercase text-black/75 tracking-wider mt-1">
              JAVA BACKEND DEVELOPER
            </div>
          </a>

          {/* System Status Pill */}
          <div className="p-2.5 border-3 border-black bg-[#4ADE80] text-black font-black text-[11px] uppercase shadow-neo-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse shrink-0" />
            <span className="truncate">{profile.systemStatus}</span>
          </div>
        </div>

        {/* Middle Navigation Links */}
        <nav className="my-6 space-y-2.5">
          <div className="text-[10px] font-black uppercase text-black/60 tracking-widest px-1 pb-1">
            // ĐIỀU HƯỚNG TRANG
          </div>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="w-full p-3 border-3 border-black bg-white hover:bg-[#FFD93D] shadow-neo-sm neo-btn font-black text-xs uppercase flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </div>
                <span className="px-1.5 py-0.5 bg-black text-white text-[10px] font-black">
                  {item.tag}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions & Socials */}
        <div className="space-y-4 pt-4 border-t-4 border-black">
          {/* Nút Xem CV */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-neo-sm neo-btn hover:bg-[#ff5252]"
          >
            <FileText className="w-4 h-4" />
            <span>XEM / TẢI CV</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          {/* Social Links Row */}
          <div className="flex items-center justify-between gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-2 border-2 border-black bg-white hover:bg-[#FFD93D] shadow-neo-sm neo-btn flex items-center justify-center transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-2 border-2 border-black bg-white hover:bg-[#38BDF8] shadow-neo-sm neo-btn flex items-center justify-center transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-2 border-2 border-black bg-white hover:bg-[#C4B5FD] shadow-neo-sm neo-btn flex items-center justify-center transition-colors"
              title="Figma"
            >
              <FigmaIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Nút Admin (Chỉ hiện khi Admin bật) */}
          {isAdmin && (
            <button
              type="button"
              onClick={onOpenEditor}
              className="w-full py-2 border-3 border-black bg-[#C4B5FD] text-black font-black text-xs uppercase shadow-neo-sm neo-btn flex items-center justify-center gap-1.5 hover:bg-[#b5a1fc]"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>SỬA THÔNG TIN (ADMIN)</span>
            </button>
          )}
        </div>
      </aside>

      {/* =========================================================================
          2. MOBILE: FIXED TOP BAR (lg:hidden)
          ========================================================================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#FFFDF5] border-b-4 border-black shadow-neo-sm">
        <div className="h-16 px-4 flex items-center justify-between">
          <a
            href="#"
            className="p-1.5 border-3 border-black bg-[#FFD93D] shadow-neo-sm font-black text-base uppercase text-black"
          >
            {profile.name}
          </a>

          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={onOpenEditor}
                className="p-1.5 border-2 border-black bg-[#C4B5FD] text-black font-black text-xs"
                title="Sửa thông tin"
              >
                <Edit3 className="w-4 h-4" />
              </button>
            )}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border-3 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase shadow-neo-sm"
            >
              XEM CV
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 border-3 border-black bg-[#FFD93D] shadow-neo-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-t-4 border-black bg-[#FFFDF5] p-5 space-y-3">
            <div className="flex flex-col gap-2 font-black text-sm uppercase">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 border-3 border-black bg-white shadow-neo-sm hover:bg-[#FFD93D]"
                >
                  {item.tag}. {item.label}
                </a>
              ))}
            </div>

            {isAdmin && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditor();
                }}
                className="w-full py-2.5 border-3 border-black bg-[#C4B5FD] text-black font-black text-xs uppercase shadow-neo-sm"
              >
                ✏️ SỬA THÔNG TIN CỦA BẠN
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
};
