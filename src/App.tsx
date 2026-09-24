import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AboutMe } from './components/AboutMe';
import { BentoGrid } from './components/BentoGrid';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ProfileEditorModal } from './components/ProfileEditorModal';
import { getStoredFullData, saveStoredFullData } from './data/portfolioData';
import type { ToastMessage, FullPortfolioData, PersonalInfo } from './types/portfolio';
import { Edit3 } from 'lucide-react';
import { ConstellationField } from './shaders/neuform-isolated/NeuformBatchEffects';
import './shaders/threeui.css';

export const App: React.FC = () => {
  const [fullData, setFullData] = useState<FullPortfolioData>(getStoredFullData());
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  // Admin Mode: Bật khi chạy localhost HOẶC có tham số ?admin=true trên URL HOẶC bấm Ctrl+Shift+E
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    return (
      urlParams.get('admin') === 'true' ||
      urlParams.get('edit') === 'true' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    );
  });

  // Phím tắt bí mật (Ctrl + Shift + E) để mở/tắt chế độ Quản trị
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
        e.preventDefault();
        setIsAdmin((prev) => {
          const next = !prev;
          setToast({
            id: `toast-${Date.now()}`,
            title: next ? 'CHẾ ĐỘ QUẢN TRỊ' : 'CHẾ ĐỘ KHÁCH XEM',
            message: next ? '🔓 Đã mở Chế độ Quản trị (Admin Mode)!' : '🔒 Đã ẩn các nút chỉnh sửa (Guest View)!',
            type: 'info',
          });
          return next;
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleShowToast = (newToast: ToastMessage) => {
    setToast(newToast);
  };

  const handleCloseToast = () => {
    setToast(null);
  };

  const handleUpdateFullData = (updatedData: FullPortfolioData) => {
    setFullData(updatedData);
  };

  const handleUpdateProfile = (updatedProfile: PersonalInfo) => {
    const updatedFullData: FullPortfolioData = {
      ...fullData,
      personalInfo: updatedProfile,
    };
    setFullData(updatedFullData);
    saveStoredFullData(updatedFullData);
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#FFFFFF] font-sans overflow-x-clip selection:bg-[#FFFFFF] selection:text-[#000000] bg-arch-grid">
      {/* Dynamic Particle Network Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-45 mix-blend-screen overflow-hidden">
        <ConstellationField
          variant="particle-network"
          mode="dark"
          speed={1.00}
          size={1.00}
          length={1.00}
          density={1.00}
          opacity={1.00}
          hue={0}
          saturation={1.00}
          brightness={1.00}
        />
      </div>

      {/* Sticky Navigation */}
      <Navbar
        profile={fullData.personalInfo}
        onOpenEditor={() => setIsEditorOpen(true)}
        isAdmin={isAdmin}
      />

      {/* Main Sections & Footer Wrapper (Offset by lg:pl-72 for left sidebar) */}
      <div className="lg:pl-72 flex flex-col min-h-screen">
        <main className="relative z-10 pt-16 lg:pt-0 flex-1">
          <AboutMe
            profile={fullData.personalInfo}
            onUpdateProfile={handleUpdateProfile}
            onOpenEditor={() => setIsEditorOpen(true)}
            isAdmin={isAdmin}
          />
          <Projects projects={fullData.projects} />
          <BentoGrid skills={fullData.skills} />
          <Timeline timeline={fullData.timeline} />
          <ContactForm onShowToast={handleShowToast} />
        </main>

        {/* Footer */}
        <Footer
          profile={fullData.personalInfo}
          onOpenEditor={() => setIsEditorOpen(true)}
          isAdmin={isAdmin}
        />
      </div>

      {/* Floating Fast Action: Edit Profile Button (Chỉ hiển thị khi là Admin) */}
      {isAdmin && (
        <button
          type="button"
          onClick={() => setIsEditorOpen(true)}
          className="fixed bottom-6 right-6 z-40 px-4 py-2.5 border border-[#404040] bg-[#141414] text-white font-mono text-xs uppercase tracking-wider mono-btn flex items-center gap-2 hover:bg-white hover:text-black transition-all"
          title="Bấm vào để tùy chỉnh họ tên, dự án, kỹ năng và kinh nghiệm của bạn"
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">[ADMIN: SỬA HỒ SƠ]</span>
          <span className="sm:hidden">SỬA</span>
        </button>
      )}

      {/* Toast Notification */}
      <Toast toast={toast} onClose={handleCloseToast} />

      {/* Full Profile Editor Modal (Personal, Projects, Skills, Timeline) */}
      <ProfileEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        fullData={fullData}
        onUpdateFullData={handleUpdateFullData}
      />
    </div>
  );
};

export default App;
