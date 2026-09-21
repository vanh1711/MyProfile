export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  systemStatus: string;
  location: string;
  email: string;
  avatarUrl?: string;
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  dribbbleUrl: string;
  figmaUrl: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tags: string[];
  problem: string;
  solution: string;
  metrics: string;
  demoUrl: string;
  figmaUrl?: string;
  caseStudyUrl?: string;
  previewImage: string;
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  tag: string;
  description: string;
  skills: string[];
  bgColor: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface FullPortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  skills: SkillCategory[];
  timeline: TimelineItem[];
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'error';
}
