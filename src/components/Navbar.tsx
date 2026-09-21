import React, { useState } from 'react';
import { Menu, X, FileText, Edit3, ArrowUpRight } from 'lucide-react';
import type { PersonalInfo } from '../types/portfolio';

interface NavbarProps {
  profile: PersonalInfo;
  onOpenEditor: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ profile, onOpenEditor }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: 'GIỚI THIỆU', href: '#about' },
    { label: 'DỰ ÁN', href: '#projects' },
    { label: 'KỸ NĂNG', href: '#skills' },
    { label: 'KINH NGHIỆM', href: '#timeline' },
    { label: 'LIÊN HỆ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#FFFDF5] border-b-4 border-black shadow-neo-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo / Brand Sticker Box */}
        <a
          href="#"
          className="flex items-center gap-2 p-2 border-4 border-black bg-[#FFD93D] shadow-neo-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group"
        >
          <span className="font-black text-xl tracking-tighter text-black uppercase">
            {profile.name}
          </span>
          <span className="w-2.5 h-2.5 bg-[#FF6B6B] border border-black rounded-full" />
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-2 font-black text-sm uppercase tracking-wide">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 border-2 border-transparent hover:border-black hover:bg-[#FFD93D] hover:shadow-neo-sm transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Nút Sửa Thông Tin Cá Nhân */}
          <button
            type="button"
            onClick={onOpenEditor}
            className="px-3.5 py-2 border-4 border-black bg-[#C4B5FD] text-black font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-neo-sm neo-btn hover:bg-[#b5a1fc]"
          >
            <Edit3 className="w-4 h-4" />
            <span>SỬA THÔNG TIN</span>
          </button>

          {/* Nút Tải CV */}
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border-4 border-black bg-[#FF6B6B] text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-neo-sm neo-btn hover:bg-[#ff5252]"
          >
            <FileText className="w-4 h-4" />
            <span>XEM CV</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenEditor}
            className="p-2 border-3 border-black bg-[#C4B5FD] text-black font-black text-xs"
            title="Sửa thông tin"
          >
            <Edit3 className="w-5 h-5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border-4 border-black bg-[#FFD93D] shadow-neo-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-black bg-[#FFFDF5] p-6 space-y-4">
          <div className="flex flex-col gap-2 font-black text-base uppercase">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-3 border-4 border-black bg-white shadow-neo-sm hover:bg-[#FFD93D]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t-4 border-black flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEditor();
              }}
              className="w-full py-3 border-4 border-black bg-[#C4B5FD] text-black font-black text-sm uppercase shadow-neo-sm"
            >
              ✏️ SỬA THÔNG TIN CỦA BẠN
            </button>
            <a
              href={profile.resumeUrl}
              className="w-full py-3 border-4 border-black bg-[#FF6B6B] text-white font-black text-sm uppercase text-center shadow-neo-sm"
            >
              📄 TẢI CV CÁ NHÂN
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
