import React from 'react';
import { Edit3 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, DribbbleIcon, FigmaIcon } from './icons/BrandIcons';
import type { PersonalInfo } from '../types/portfolio';

interface FooterProps {
  profile: PersonalInfo;
  onOpenEditor: () => void;
  isAdmin?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ profile, onOpenEditor, isAdmin = false }) => {
  return (
    <footer className="border-t border-[#222222] bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Tier: Brand & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#222222]">
          
          {/* Brand & Status */}
          <div>
            <div className="inline-block p-2 border border-[#2E2E2E] bg-[#111111] font-heading font-black text-xl uppercase tracking-tight text-white">
              {profile.name}
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-wider text-[#888888] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#4ADE80] rounded-none" />
              <span>{profile.systemStatus}</span>
            </div>
          </div>

          {/* Social Box Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[#262626] bg-[#111111] hover:border-white text-[#8E8E8E] hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[#262626] bg-[#111111] hover:border-white text-[#8E8E8E] hover:text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.dribbbleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[#262626] bg-[#111111] hover:border-white text-[#8E8E8E] hover:text-white transition-colors"
              title="Dribbble"
            >
              <DribbbleIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 border border-[#262626] bg-[#111111] hover:border-white text-[#8E8E8E] hover:text-white transition-colors"
              title="Figma"
            >
              <FigmaIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Quick Editor Link */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase text-[#737373]">
          <div>
            &copy; {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-4">
            {isAdmin && (
              <button
                onClick={onOpenEditor}
                className="px-3 py-1.5 border border-[#333333] bg-[#141414] hover:border-white text-[#888888] hover:text-white flex items-center gap-1.5 transition-all"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>[SỬA HỒ SƠ]</span>
              </button>
            )}

            <div className="flex items-center gap-1 text-[#666666]">
              <span>CURATED FOR</span>
              <span className="text-[#A3A3A3] font-bold">JAVA BACKEND ENGINEERING</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
