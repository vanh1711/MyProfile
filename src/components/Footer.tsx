import React from 'react';
import { Heart, Edit3 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DribbbleIcon, FigmaIcon } from './icons/BrandIcons';
import type { PersonalInfo } from '../types/portfolio';

interface FooterProps {
  profile: PersonalInfo;
  onOpenEditor: () => void;
  isAdmin?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenEditor, isAdmin = false }) => {
  return (
    <footer className="border-t-6 border-black bg-[#FFD93D] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tier: Brand & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b-4 border-black">
          
          {/* Brand & Status */}
          <div>
            <div className="inline-block p-2 border-4 border-black bg-white font-black text-2xl uppercase tracking-tight shadow-neo-sm">
              {profile.name}
            </div>
            <div className="mt-2 font-bold text-xs uppercase tracking-wider text-black flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#4ADE80] border border-black rounded-full" />
              <span>{profile.systemStatus}</span>
            </div>
          </div>

          {/* Social Box Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-black bg-white hover:bg-[#FF6B6B] hover:text-white shadow-neo-sm neo-btn transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-black bg-white hover:bg-[#38BDF8] hover:text-white shadow-neo-sm neo-btn transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.dribbbleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-black bg-white hover:bg-[#FF6B6B] hover:text-white shadow-neo-sm neo-btn transition-colors"
              title="Dribbble"
            >
              <DribbbleIcon className="w-5 h-5" />
            </a>
            <a
              href={profile.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border-4 border-black bg-white hover:bg-[#C4B5FD] hover:text-black shadow-neo-sm neo-btn transition-colors"
              title="Figma"
            >
              <FigmaIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Quick Editor Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-bold text-xs uppercase text-black">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. TẤT CẢ QUYỀN ĐƯỢC BẢO LƯU.
          </div>

          <div className="flex items-center gap-4">
            {isAdmin && (
              <button
                onClick={onOpenEditor}
                className="px-3 py-1.5 border-2 border-black bg-white hover:bg-[#C4B5FD] flex items-center gap-1.5 shadow-neo-sm transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>SỬA THÔNG TIN</span>
              </button>
            )}

            <div className="flex items-center gap-1">
              <span>THIẾT KẾ VỚI</span>
              <Heart className="w-4 h-4 fill-[#FF6B6B] text-[#FF6B6B]" />
              <span>CHUẨN NEO-BRUTALISM</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
