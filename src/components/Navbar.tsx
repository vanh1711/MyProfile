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
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 bg-[#0A0A0A] border-r border-[#222222] z-40 flex-col justify-between p-6 overflow-y-auto">
        
        {/* Top Header & Brand */}
        <div className="space-y-4">
          <a
            href="#about"
            className="block p-4 border border-[#262626] bg-[#111111] hover:border-white transition-all group"
          >
            <div className="flex items-center justify-between">
              <span className="font-heading font-black text-lg tracking-tight text-white uppercase group-hover:tracking-wider transition-all">
                {profile.name}
              </span>
              <span className="w-2 h-2 bg-white rounded-none" />
            </div>
            <div className="text-[10px] font-mono uppercase text-[#8E8E8E] tracking-widest mt-1.5 flex items-center gap-1.5">
              <span>//</span>
              <span>JAVA BACKEND ENGINEER</span>
            </div>
          </a>

          {/* System Status Pill */}
          <div className="p-2.5 border border-[#222222] bg-[#0E0E0E] text-[#D4D4D4] font-mono text-[10px] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#4ADE80] animate-pulse shrink-0" />
            <span className="truncate tracking-wide">{profile.systemStatus}</span>
          </div>
        </div>

        {/* Middle Navigation Links */}
        <nav className="my-6 space-y-1.5">
          <div className="text-[10px] font-mono uppercase text-[#555555] tracking-widest px-1 pb-1 flex items-center justify-between">
            <span>// MỤC LỤC ĐIỀU HƯỚNG</span>
            <span>[INDEX]</span>
          </div>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="w-full p-3 border border-transparent hover:border-[#333333] hover:bg-[#141414] font-mono text-xs uppercase flex items-center justify-between text-[#A3A3A3] hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-[#737373] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  <span className="tracking-wider">{item.label}</span>
                </div>
                <span className="text-[10px] font-mono text-[#555555] group-hover:text-white transition-colors">
                  /{item.tag}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom Actions & Socials */}
        <div className="space-y-3 pt-4 border-t border-[#222222]">
          {/* Nút Xem CV - Stark White CTA */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 border border-white bg-white text-black font-mono font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-transparent hover:text-white transition-all"
          >
            <FileText className="w-3.5 h-3.5" strokeWidth={1.75} />
            <span>XEM / TẢI CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.75} />
          </a>

          {/* Social Links Row */}
          <div className="flex items-center justify-between gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-2.5 border border-[#222222] bg-[#111111] hover:border-white text-[#8E8E8E] hover:text-white flex items-center justify-center transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-2.5 border border-[#222222] bg-[#111111] hover:border-white text-[#8E8E8E] hover:text-white flex items-center justify-center transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 p-2.5 border border-[#222222] bg-[#111111] hover:border-white text-[#8E8E8E] hover:text-white flex items-center justify-center transition-colors"
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
              className="w-full py-2 border border-[#2E2E2E] bg-[#0E0E0E] text-[#888888] hover:text-white hover:border-[#555555] font-mono text-[11px] uppercase flex items-center justify-center gap-1.5 transition-all"
            >
              <Edit3 className="w-3 h-3" />
              <span>[SỬA HỒ SƠ - ADMIN]</span>
            </button>
          )}
        </div>
      </aside>

      {/* =========================================================================
          2. MOBILE: FIXED TOP BAR (lg:hidden)
          ========================================================================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#0A0A0A] border-b border-[#222222]">
        <div className="h-16 px-4 flex items-center justify-between">
          <a
            href="#about"
            className="p-2 border border-[#2E2E2E] bg-[#111111] font-heading font-black text-sm uppercase text-white tracking-wider"
          >
            {profile.name}
          </a>

          <div className="flex items-center gap-2">
            {isAdmin && (
              <button
                onClick={onOpenEditor}
                className="p-2 border border-[#333333] bg-[#161616] text-[#A3A3A3] hover:text-white text-xs font-mono"
                title="Sửa thông tin"
              >
                <Edit3 className="w-3.5 h-3.5" />
              </button>
            )}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-white bg-white text-black font-mono font-bold text-xs uppercase"
            >
              XEM CV
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#333333] bg-[#111111] text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="border-t border-[#222222] bg-[#0A0A0A] p-5 space-y-3">
            <div className="flex flex-col gap-1.5 font-mono text-xs uppercase">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 border border-[#222222] bg-[#111111] text-[#CCCCCC] hover:text-white hover:border-white transition-all flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-[#555555]">/{item.tag}</span>
                </a>
              ))}
            </div>

            {isAdmin && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEditor();
                }}
                className="w-full py-2.5 border border-[#333333] bg-[#161616] text-[#D4D4D4] font-mono text-xs uppercase"
              >
                [SỬA THÔNG TIN CỦA BẠN]
              </button>
            )}
          </div>
        )}
      </header>
    </>
  );
};
