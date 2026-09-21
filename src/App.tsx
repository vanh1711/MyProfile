import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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

export const App: React.FC = () => {
  const [fullData, setFullData] = useState<FullPortfolioData>(getStoredFullData());
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

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
    <div className="relative min-h-screen bg-[#FFFDF5] text-black overflow-x-clip selection:bg-[#FFD93D] selection:text-black">
      {/* Sticky Navigation */}
      <Navbar
        profile={fullData.personalInfo}
        onOpenEditor={() => setIsEditorOpen(true)}
      />

      {/* Main Sections (pt-20 accounts for fixed 80px Navbar) */}
      <main className="relative z-10 pt-20">
        <Hero profile={fullData.personalInfo} />
        <AboutMe
          profile={fullData.personalInfo}
          onUpdateProfile={handleUpdateProfile}
          onOpenEditor={() => setIsEditorOpen(true)}
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
      />

      {/* Floating Fast Action: Edit Profile Button */}
      <button
        type="button"
        onClick={() => setIsEditorOpen(true)}
        className="fixed bottom-6 left-6 z-40 px-4 py-3 border-4 border-black bg-[#FFD93D] text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-neo neo-btn flex items-center gap-2 hover:bg-[#ffe26e]"
        title="Bấm vào để tùy chỉnh họ tên, dự án, kỹ năng và kinh nghiệm của bạn"
      >
        <Edit3 className="w-4 h-4" />
        <span className="hidden sm:inline">TÙY CHỈNH NỘI DUNG</span>
        <span className="sm:hidden">SỬA</span>
      </button>

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
