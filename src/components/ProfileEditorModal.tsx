import React, { useState } from 'react';
import {
  X,
  Save,
  Copy,
  Check,
  RotateCcw,
  User,
  Briefcase,
  Plus,
  Trash2,
  Layers,
  Award,
} from 'lucide-react';
import type { FullPortfolioData, Project, SkillCategory, TimelineItem } from '../types/portfolio';
import { DEFAULT_FULL_PORTFOLIO_DATA, saveStoredFullData } from '../data/portfolioData';

interface ProfileEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  fullData: FullPortfolioData;
  onUpdateFullData: (updated: FullPortfolioData) => void;
}

type TabKey = 'personal' | 'projects' | 'skills' | 'timeline';

export const ProfileEditorModal: React.FC<ProfileEditorModalProps> = ({
  isOpen,
  onClose,
  fullData,
  onUpdateFullData,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('personal');
  const [formData, setFormData] = useState<FullPortfolioData>(fullData);
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync formData when fullData changes or modal opens
  React.useEffect(() => {
    setFormData(fullData);
  }, [fullData, isOpen]);

  if (!isOpen) return null;

  // Personal Info Handler
  const handlePersonalChange = (field: keyof typeof formData.personalInfo, value: string) => {
    setFormData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  // Projects Handlers
  const handleProjectChange = (index: number, field: keyof Project, value: any) => {
    const updated = [...formData.projects];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, projects: updated }));
  };

  const handleAddProject = () => {
    const newProj: Project = {
      id: `du-an-${Date.now()}`,
      title: 'TÊN DỰ ÁN MỚI',
      subtitle: 'Mô tả ngắn gọn về dự án của bạn',
      category: 'WEB APPLICATION',
      tags: ['React', 'Figma', 'Tailwind'],
      problem: 'Mô tả vấn đề UX hoặc thách thức kỹ thuật mà khách hàng gặp phải.',
      solution: 'Giải pháp thiết kế giao diện hoặc tối ưu hệ thống bạn đã xây dựng.',
      metrics: '+50% HIỆU SUẤT // 100% RESPONSIVE',
      demoUrl: 'https://example.com',
      figmaUrl: 'https://figma.com',
      caseStudyUrl: '#',
      previewImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      accentColor: '#FFD93D',
    };
    setFormData((prev) => ({ ...prev, projects: [newProj, ...prev.projects] }));
  };

  const handleDeleteProject = (index: number) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa dự án này?')) {
      setFormData((prev) => ({
        ...prev,
        projects: prev.projects.filter((_, i) => i !== index),
      }));
    }
  };

  // Skills Handlers
  const handleSkillChange = (index: number, field: keyof SkillCategory, value: any) => {
    const updated = [...formData.skills];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, skills: updated }));
  };

  // Timeline Handlers
  const handleTimelineChange = (index: number, field: keyof TimelineItem, value: any) => {
    const updated = [...formData.timeline];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, timeline: updated }));
  };

  const handleAddTimeline = () => {
    const newItem: TimelineItem = {
      id: `exp-${Date.now()}`,
      period: '2024 — NAY',
      role: 'CHỨC DANH MỚI CỦA BẠN',
      company: 'TÊN CÔNG TY / TỔ CHỨC',
      location: 'TP. Hồ Chí Minh / Remote',
      description: 'Mô tả công việc và đóng góp chính của bạn trong giai đoạn này.',
      achievements: [
        'Đạt thành tựu nổi bật số 1...',
        'Xây dựng quy trình hoặc sản phẩm thành công số 2...',
      ],
      techStack: ['Figma', 'React', 'Tailwind'],
    };
    setFormData((prev) => ({ ...prev, timeline: [newItem, ...prev.timeline] }));
  };

  const handleDeleteTimeline = (index: number) => {
    if (window.confirm('Bạn có chắc muốn xóa mốc kinh nghiệm này?')) {
      setFormData((prev) => ({
        ...prev,
        timeline: prev.timeline.filter((_, i) => i !== index),
      }));
    }
  };

  // Save changes
  const handleSaveAll = () => {
    saveStoredFullData(formData);
    onUpdateFullData(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  // Reset to default
  const handleReset = () => {
    if (window.confirm('Bạn có chắc muốn đặt lại TOÀN BỘ thông tin về mặc định ban đầu không?')) {
      setFormData(DEFAULT_FULL_PORTFOLIO_DATA);
      saveStoredFullData(DEFAULT_FULL_PORTFOLIO_DATA);
      onUpdateFullData(DEFAULT_FULL_PORTFOLIO_DATA);
    }
  };

  // Copy full configuration code
  const handleCopyCode = () => {
    const codeString = `import type { PersonalInfo, Project, SkillCategory, TimelineItem, FullPortfolioData } from '../types/portfolio';

export const DEFAULT_PERSONAL_INFO: PersonalInfo = ${JSON.stringify(formData.personalInfo, null, 2)};

export const DEFAULT_PROJECTS: Project[] = ${JSON.stringify(formData.projects, null, 2)};

export const DEFAULT_SKILL_CATEGORIES: SkillCategory[] = ${JSON.stringify(formData.skills, null, 2)};

export const DEFAULT_TIMELINE: TimelineItem[] = ${JSON.stringify(formData.timeline, null, 2)};

export const DEFAULT_FULL_PORTFOLIO_DATA: FullPortfolioData = {
  personalInfo: DEFAULT_PERSONAL_INFO,
  projects: DEFAULT_PROJECTS,
  skills: DEFAULT_SKILL_CATEGORIES,
  timeline: DEFAULT_TIMELINE,
};

const STORAGE_KEY_FULL_DATA = 'neo_portfolio_full_data_v2';

export function getStoredFullData(): FullPortfolioData {
  try {
    const data = localStorage.getItem(STORAGE_KEY_FULL_DATA);
    if (data) {
      const parsed = JSON.parse(data);
      return {
        personalInfo: { ...DEFAULT_PERSONAL_INFO, ...(parsed.personalInfo || {}) },
        projects: parsed.projects && parsed.projects.length > 0 ? parsed.projects : DEFAULT_PROJECTS,
        skills: parsed.skills && parsed.skills.length > 0 ? parsed.skills : DEFAULT_SKILL_CATEGORIES,
        timeline: parsed.timeline && parsed.timeline.length > 0 ? parsed.timeline : DEFAULT_TIMELINE,
      };
    }
  } catch (err) {
    console.warn('Cannot read data from localStorage:', err);
  }
  return DEFAULT_FULL_PORTFOLIO_DATA;
}

export function saveStoredFullData(data: FullPortfolioData): void {
  try {
    localStorage.setItem(STORAGE_KEY_FULL_DATA, JSON.stringify(data));
  } catch (err) {
    console.warn('Cannot save data to localStorage:', err);
  }
}
`;
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl my-6 bg-[#FFFDF5] border-4 sm:border-6 border-black shadow-neo-xl flex flex-col max-h-[90vh]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#FFD93D] border-b-4 border-black shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 bg-black text-white font-black text-xs">ADMIN</span>
            <h2 className="font-heading font-black text-lg sm:text-2xl text-black uppercase tracking-tight">
              TÙY CHỈNH NỘI DUNG PORTFOLIO
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 border-2 border-black bg-white hover:bg-[#FF6B6B] hover:text-white transition-colors"
            aria-label="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap border-b-4 border-black bg-white shrink-0 text-xs sm:text-sm font-black uppercase">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-4 sm:px-6 py-3 border-r-4 border-black flex items-center gap-2 transition-colors ${
              activeTab === 'personal' ? 'bg-[#FF6B6B] text-white' : 'hover:bg-[#FFD93D]'
            }`}
          >
            <User className="w-4 h-4" />
            <span>1. Thông Tin Chung</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`px-4 sm:px-6 py-3 border-r-4 border-black flex items-center gap-2 transition-colors ${
              activeTab === 'projects' ? 'bg-[#FF6B6B] text-white' : 'hover:bg-[#FFD93D]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. Dự Án Nổi Bật ({formData.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 sm:px-6 py-3 border-r-4 border-black flex items-center gap-2 transition-colors ${
              activeTab === 'skills' ? 'bg-[#FF6B6B] text-white' : 'hover:bg-[#FFD93D]'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>3. Kỹ Năng</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 sm:px-6 py-3 flex items-center gap-2 transition-colors ${
              activeTab === 'timeline' ? 'bg-[#FF6B6B] text-white' : 'hover:bg-[#FFD93D]'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>4. Kinh Nghiệm ({formData.timeline.length})</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* TAB 1: THÔNG TIN CÁ NHÂN */}
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="p-3.5 border-3 border-black bg-[#C4B5FD]/30 text-xs font-bold leading-relaxed">
                💡 Thay đổi tên, ảnh đại diện, chức danh và thông điệp của bạn. Dữ liệu sẽ xuất hiện ngay tại Logo, Hero, Giới Thiệu Bản Thân và Footer.
              </div>

              {/* Avatar Upload & URL */}
              <div className="p-4 border-4 border-black bg-white shadow-neo-sm space-y-3">
                <label className="block text-xs font-black uppercase">Ảnh đại diện (Avatar):</label>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="w-20 h-20 border-3 border-black bg-black overflow-hidden shrink-0 shadow-neo-sm">
                    <img
                      src={formData.personalInfo.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80'}
                      alt={formData.personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 w-full space-y-2">
                    <input
                      type="text"
                      value={formData.personalInfo.avatarUrl || ''}
                      onChange={(e) => handlePersonalChange('avatarUrl', e.target.value)}
                      placeholder="Dán link ảnh (URL) hoặc tải từ máy tính bên dưới"
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                    />
                    <div className="flex items-center gap-2">
                      <label className="px-3 py-1.5 border-2 border-black bg-[#FFD93D] text-black font-black text-xs uppercase cursor-pointer hover:bg-[#ffe26e] shadow-neo-sm">
                        📁 Tải ảnh từ máy tính
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const reader = new FileReader();
                              reader.onload = (evt) => {
                                const base64 = evt.target?.result as string;
                                if (base64) {
                                  handlePersonalChange('avatarUrl', base64);
                                }
                              };
                              reader.readAsDataURL(file);
                            }
                          }}
                        />
                      </label>
                      <span className="text-[11px] font-bold text-black/60">Tự động lưu vào trình duyệt</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Họ và Tên của bạn:</label>
                <input
                  type="text"
                  value={formData.personalInfo.name}
                  onChange={(e) => handlePersonalChange('name', e.target.value)}
                  className="w-full p-3 border-4 border-black bg-white font-bold text-base focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Chức danh chuyên môn (Title):</label>
                <input
                  type="text"
                  value={formData.personalInfo.title}
                  onChange={(e) => handlePersonalChange('title', e.target.value)}
                  className="w-full p-3 border-4 border-black bg-white font-bold text-base focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Câu định vị ngắn (Tagline):</label>
                <textarea
                  rows={2}
                  value={formData.personalInfo.tagline}
                  onChange={(e) => handlePersonalChange('tagline', e.target.value)}
                  className="w-full p-3 border-4 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Tiểu sử chi tiết (Bio - Hiển thị trong phần Giới Thiệu):</label>
                <textarea
                  rows={3}
                  value={formData.personalInfo.bio || ''}
                  onChange={(e) => handlePersonalChange('bio', e.target.value)}
                  className="w-full p-3 border-4 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm resize-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase mb-1">Email liên hệ:</label>
                  <input
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handlePersonalChange('email', e.target.value)}
                    className="w-full p-3 border-4 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase mb-1">Địa điểm làm việc:</label>
                  <input
                    type="text"
                    value={formData.personalInfo.location}
                    onChange={(e) => handlePersonalChange('location', e.target.value)}
                    className="w-full p-3 border-4 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Trạng thái làm việc:</label>
                <input
                  type="text"
                  value={formData.personalInfo.systemStatus}
                  onChange={(e) => handlePersonalChange('systemStatus', e.target.value)}
                  className="w-full p-3 border-4 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase mb-1">Link xem CV (Google Drive, Notion...):</label>
                <input
                  type="text"
                  value={formData.personalInfo.resumeUrl}
                  onChange={(e) => handlePersonalChange('resumeUrl', e.target.value)}
                  className="w-full p-3 border-4 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none shadow-neo-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-xs font-black mb-1">Link GitHub:</label>
                  <input
                    type="text"
                    value={formData.personalInfo.githubUrl}
                    onChange={(e) => handlePersonalChange('githubUrl', e.target.value)}
                    className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black mb-1">Link LinkedIn:</label>
                  <input
                    type="text"
                    value={formData.personalInfo.linkedinUrl}
                    onChange={(e) => handlePersonalChange('linkedinUrl', e.target.value)}
                    className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black mb-1">Link Dribbble / Behance:</label>
                  <input
                    type="text"
                    value={formData.personalInfo.dribbbleUrl}
                    onChange={(e) => handlePersonalChange('dribbbleUrl', e.target.value)}
                    className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black mb-1">Link Figma Profile:</label>
                  <input
                    type="text"
                    value={formData.personalInfo.figmaUrl}
                    onChange={(e) => handlePersonalChange('figmaUrl', e.target.value)}
                    className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DỰ ÁN TIÊU BIỂU */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-black/80">
                  Quản lý danh sách các dự án tiêu biểu hiển thị trên trang chính:
                </div>
                <button
                  type="button"
                  onClick={handleAddProject}
                  className="px-3 py-1.5 border-3 border-black bg-[#4ADE80] text-black font-black text-xs uppercase flex items-center gap-1.5 shadow-neo-sm neo-btn hover:bg-[#3ec472]"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Thêm Dự Án Mới</span>
                </button>
              </div>

              {formData.projects.map((proj, idx) => (
                <div key={proj.id} className="border-4 border-black bg-white p-5 shadow-neo-sm space-y-4">
                  <div className="flex items-center justify-between border-b-3 border-black pb-2">
                    <span className="font-black text-xs uppercase bg-[#FFD93D] px-2 py-0.5 border border-black">
                      DỰ ÁN #{idx + 1}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteProject(idx)}
                      className="text-[#FF6B6B] hover:text-black font-black text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>XÓA</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Tên Dự Án:</label>
                      <input
                        type="text"
                        value={proj.title}
                        onChange={(e) => handleProjectChange(idx, 'title', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Thể loại (Category):</label>
                      <input
                        type="text"
                        value={proj.category}
                        onChange={(e) => handleProjectChange(idx, 'category', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">Phụ đề tóm tắt:</label>
                    <input
                      type="text"
                      value={proj.subtitle}
                      onChange={(e) => handleProjectChange(idx, 'subtitle', e.target.value)}
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Các thẻ công nghệ (phân cách bằng dấu phẩy):
                    </label>
                    <input
                      type="text"
                      value={proj.tags.join(', ')}
                      onChange={(e) =>
                        handleProjectChange(
                          idx,
                          'tags',
                          e.target.value.split(',').map((t) => t.trim()).filter(Boolean)
                        )
                      }
                      placeholder="React, Figma, Tailwind, TypeScript"
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase mb-1 text-[#FF6B6B]">
                        Vấn đề UX cần giải quyết:
                      </label>
                      <textarea
                        rows={3}
                        value={proj.problem}
                        onChange={(e) => handleProjectChange(idx, 'problem', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase mb-1 text-[#4ADE80]">
                        Giải pháp thực thi:
                      </label>
                      <textarea
                        rows={3}
                        value={proj.solution}
                        onChange={(e) => handleProjectChange(idx, 'solution', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Chỉ số nổi bật (Metrics):</label>
                      <input
                        type="text"
                        value={proj.metrics}
                        onChange={(e) => handleProjectChange(idx, 'metrics', e.target.value)}
                        className="w-full p-2 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Link Demo Trải Nghiệm:</label>
                      <input
                        type="text"
                        value={proj.demoUrl}
                        onChange={(e) => handleProjectChange(idx, 'demoUrl', e.target.value)}
                        className="w-full p-2 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">Link ảnh Mockup (URL):</label>
                    <input
                      type="text"
                      value={proj.previewImage}
                      onChange={(e) => handleProjectChange(idx, 'previewImage', e.target.value)}
                      placeholder="https://images.unsplash.com/..."
                      className="w-full p-2 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: KỸ NĂNG CHUYÊN MÔN */}
          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="text-xs font-bold text-black/80">
                Tùy chỉnh 3 nhóm kỹ năng chuyên môn chính trong Bento Grid:
              </div>

              {formData.skills.map((cat, idx) => (
                <div key={cat.id} className="border-4 border-black bg-white p-5 shadow-neo-sm space-y-4">
                  <div className="flex items-center justify-between border-b-3 border-black pb-2">
                    <span className="font-black text-xs uppercase bg-[#FFD93D] px-2 py-0.5 border border-black">
                      NHÓM KỸ NĂNG #{idx + 1}
                    </span>
                    <span className="text-xs font-bold">{cat.tag}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Tên nhóm kỹ năng:</label>
                      <input
                        type="text"
                        value={cat.title}
                        onChange={(e) => handleSkillChange(idx, 'title', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Tag hiển thị (vd: 01 // DESIGN):</label>
                      <input
                        type="text"
                        value={cat.tag}
                        onChange={(e) => handleSkillChange(idx, 'tag', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">Mô tả năng lực nhóm này:</label>
                    <textarea
                      rows={2}
                      value={cat.description}
                      onChange={(e) => handleSkillChange(idx, 'description', e.target.value)}
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Danh sách các kỹ năng cụ thể (phân cách bằng dấu phẩy):
                    </label>
                    <input
                      type="text"
                      value={cat.skills.join(', ')}
                      onChange={(e) =>
                        handleSkillChange(
                          idx,
                          'skills',
                          e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                        )
                      }
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 4: KINH NGHIỆM THỰC CHIẾN */}
          {activeTab === 'timeline' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold text-black/80">
                  Quản lý hành trình kinh nghiệm và quá trình làm việc:
                </div>
                <button
                  type="button"
                  onClick={handleAddTimeline}
                  className="px-3 py-1.5 border-3 border-black bg-[#4ADE80] text-black font-black text-xs uppercase flex items-center gap-1.5 shadow-neo-sm neo-btn hover:bg-[#3ec472]"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Thêm Mốc Kinh Nghiệm</span>
                </button>
              </div>

              {formData.timeline.map((item, idx) => (
                <div key={item.id} className="border-4 border-black bg-white p-5 shadow-neo-sm space-y-4">
                  <div className="flex items-center justify-between border-b-3 border-black pb-2">
                    <span className="font-black text-xs uppercase bg-[#FFD93D] px-2 py-0.5 border border-black">
                      MỐC #{idx + 1}: {item.period}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteTimeline(idx)}
                      className="text-[#FF6B6B] hover:text-black font-black text-xs flex items-center gap-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>XÓA</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Giai đoạn (Period):</label>
                      <input
                        type="text"
                        value={item.period}
                        onChange={(e) => handleTimelineChange(idx, 'period', e.target.value)}
                        placeholder="VD: 2023 — NAY"
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Vị trí / Chức danh (Role):</label>
                      <input
                        type="text"
                        value={item.role}
                        onChange={(e) => handleTimelineChange(idx, 'role', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-sm focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Công ty / Đơn vị:</label>
                      <input
                        type="text"
                        value={item.company}
                        onChange={(e) => handleTimelineChange(idx, 'company', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase mb-1">Địa điểm:</label>
                      <input
                        type="text"
                        value={item.location}
                        onChange={(e) => handleTimelineChange(idx, 'location', e.target.value)}
                        className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">Mô tả tóm tắt vai trò:</label>
                    <textarea
                      rows={2}
                      value={item.description}
                      onChange={(e) => handleTimelineChange(idx, 'description', e.target.value)}
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Các kết quả / thành tựu (mỗi dòng một ý):
                    </label>
                    <textarea
                      rows={3}
                      value={item.achievements.join('\n')}
                      onChange={(e) =>
                        handleTimelineChange(
                          idx,
                          'achievements',
                          e.target.value.split('\n').filter((line) => line.trim().length > 0)
                        )
                      }
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase mb-1">
                      Công nghệ áp dụng (phân cách bằng dấu phẩy):
                    </label>
                    <input
                      type="text"
                      value={item.techStack.join(', ')}
                      onChange={(e) =>
                        handleTimelineChange(
                          idx,
                          'techStack',
                          e.target.value.split(',').map((t) => t.trim()).filter(Boolean)
                        )
                      }
                      className="w-full p-2.5 border-3 border-black bg-white font-bold text-xs focus:bg-[#FFD93D] focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Feedback message */}
          {savedSuccess && (
            <div className="p-3 border-4 border-black bg-[#4ADE80] font-black text-xs text-center uppercase tracking-wider shadow-neo-sm">
              ✓ ĐÃ LƯU TOÀN BỘ DỮ LIỆU THÀNH CÔNG VÀO TRÌNH DUYỆT!
            </div>
          )}
        </div>

        {/* Action Controls Footer */}
        <div className="p-4 sm:p-6 bg-white border-t-4 border-black flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2.5 border-4 border-black bg-white text-black font-black text-xs uppercase hover:bg-gray-100 flex items-center gap-1.5 neo-btn"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Đặt Lại Mặc Định</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleCopyCode}
              className="px-4 py-2.5 border-4 border-black bg-[#C4B5FD] text-black font-black text-xs uppercase hover:bg-[#b09dfa] flex items-center gap-1.5 neo-btn"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'ĐÃ COPY MÃ!' : 'COPY MÃ JSON'}</span>
            </button>

            <button
              type="button"
              onClick={handleSaveAll}
              className="px-6 py-2.5 border-4 border-black bg-[#FF6B6B] text-white font-black text-sm uppercase hover:bg-[#ff5252] flex items-center gap-2 neo-btn shadow-neo-sm"
            >
              <Save className="w-4 h-4" />
              <span>LƯU TẤT CẢ THAY ĐỔI</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
