import type { PersonalInfo, Project, SkillCategory, TimelineItem, FullPortfolioData } from '../types/portfolio';

/* =========================================================================
   THÔNG TIN PORTFOLIO CHÍNH THỨC CỦA ĐOÀN VIỆT ANH
   ========================================================================= */

// 1. THÔNG TIN CÁ NHÂN CƠ BẢN
export const DEFAULT_PERSONAL_INFO: PersonalInfo = {
  name: 'Đoàn Việt Anh',
  title: 'UI/UX DESIGNER & FRONTEND DEVELOPER',
  tagline: 'Thiết kế sản phẩm số độc bản, trải nghiệm người dùng tối ưu và lập trình giao diện hiệu năng cao với React & Tailwind.',
  bio: 'Tôi là một nhà thiết kế UI/UX kiêm lập trình viên Frontend đam mê tạo ra các giao diện giàu tính thẩm mỹ, phá cách nhưng luôn đề cao tính thực dụng và khả năng tiếp cận.',
  systemStatus: 'SẴN SÀNG NHẬN DỰ ÁN MỚI (AVAILABLE FOR HIRE)',
  location: 'Việt Nam // Nhận việc Toàn cầu (Remote)',
  email: 'vanh17112005@gmail.com',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  resumeUrl: '#cv',
  githubUrl: 'https://github.com/vanh1711',
  linkedinUrl: 'https://linkedin.com',
  dribbbleUrl: 'https://dribbble.com',
  figmaUrl: 'https://figma.com',
};

// 2. DANH SÁCH DỰ ÁN NỔI BẬT
export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'du-an-1',
    title: 'MUSICWEB',
    subtitle: 'Nền tảng nghe nhạc chất lượng cao',
    category: 'WEB APPLICATION',
    tags: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Web Audio API',
      'HTML5 Canvas',
      'Node.js',
      'Express.js',
      'Zing MP3 API',
    ],
    problem: 'Trải nghiệm nghe nhạc thường xuyên bị ngắt quãng khi chuyển trang (58% người dùng phàn nàn), giao diện tìm kiếm bài hát chậm chạp và cụm điều khiển phát nhạc quá rườm rà, khó thao tác bằng một tay trên di động.',
    solution: 'Thiết kế trình phát nhạc toàn cục cố định (Persistent Player) không ngắt mạch nghe, tối ưu tìm kiếm tức thì dưới 0.3s kết hợp hiệu ứng sóng âm và lời bài hát đồng bộ, giúp tăng 65% thời lượng nghe nhạc trung bình.',
    metrics: '+48% CONVERSION // 98/100 SPEED',
    demoUrl: 'https://example.com/demo1',
    figmaUrl: 'https://figma.com/@project1',
    caseStudyUrl: '#case-study-1',
    previewImage: 'https://cdn.dribbble.com/userupload/12341456/file/original-3157947c93b921f781482d2821f74aee.png',
    accentColor: '#FFD93D',
  },
  {
    id: 'du-an-2',
    title: 'FINTECH ANALYTICS DASHBOARD',
    subtitle: 'Hệ thống quản trị tài chính & đầu tư thông minh',
    category: 'SAAS & DASHBOARD',
    tags: ['Design Systems', 'TypeScript', 'Charts', 'UX Research'],
    problem: 'Người dùng doanh nghiệp bị quá tải thông tin trước hàng trăm chỉ số biểu đồ phức tạp và không có hệ thống phân cấp trực quan.',
    solution: 'Xây dựng Design System đồng bộ với hơn 80 components tùy biến, áp dụng cấu trúc Bento Grid để phân cấp thông tin rõ ràng, giảm 40% thời gian tra cứu.',
    metrics: '-40% THỜI GIAN TRA CỨU // WCAG AA',
    demoUrl: 'https://example.com/demo2',
    figmaUrl: 'https://figma.com/@project2',
    caseStudyUrl: '#case-study-2',
    previewImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#FF6B6B',
  },
  {
    id: 'du-an-3',
    title: 'MOBILE HEALTH & WELLNESS',
    subtitle: 'Ứng dụng chăm sóc sức khỏe & theo dõi thói quen',
    category: 'MOBILE APP UX',
    tags: ['Mobile UX', 'Design Tokens', 'Prototyping', 'User Testing'],
    problem: 'Khách hàng thường bỏ cuộc sau 7 ngày đầu do quy trình ghi chép hoạt động hàng ngày tẻ nhạt và thiếu động lực gắn kết.',
    solution: 'Ứng dụng cơ chế Gamification với huy hiệu Pop-Art sinh động, thao tác 1-chạm (One-tap logging) và thông báo khích lệ đúng thời điểm.',
    metrics: '+65% RETENTION SAU 30 NGÀY',
    demoUrl: 'https://example.com/demo3',
    figmaUrl: 'https://figma.com/@project3',
    caseStudyUrl: '#case-study-3',
    previewImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#C4B5FD',
  },
];

// 3. KỸ NĂNG & CÔNG CỤ CHUYÊN MÔN
export const DEFAULT_SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'ui-ux',
    title: 'UI/UX & THIẾT KẾ SẢN PHẨM',
    tag: '01 // DESIGN',
    description: 'Chuyên sâu về nghiên cứu người dùng, thiết kế Design System, kiến trúc thông tin và tạo mẫu tương tác cao cấp (High-fidelity Prototyping).',
    skills: [
      'Figma Masters',
      'Design Tokens',
      'User Research',
      'Wireframing',
      'Heuristic Evaluation',
      'Design System Architecture',
    ],
    bgColor: '#FFD93D',
  },
  {
    id: 'frontend',
    title: 'LẬP TRÌNH FRONTEND',
    tag: '02 // ENGINEERING',
    description: 'Biến mọi bản thiết kế thành trang web thực tế chuẩn xác từng pixel, mượt mà 60fps và tối ưu SEO.',
    skills: [
      'React & Vite',
      'Next.js',
      'Tailwind CSS',
      'Framer Motion',
      'TypeScript',
      'Responsive Layouts',
    ],
    bgColor: '#FF6B6B',
  },
  {
    id: 'workflow',
    title: 'QUY TRÌNH & CHUẨN MỰC',
    tag: '03 // STANDARDS',
    description: 'Cam kết chất lượng mã nguồn sạch, tối ưu hóa Core Web Vitals, tương thích đa trình duyệt và chuẩn trợ năng WCAG.',
    skills: [
      'Lighthouse 100/100',
      'Git & GitHub',
      'Clean Code',
      'Web Performance',
      'Micro-interactions',
      'Cross-browser Testing',
    ],
    bgColor: '#C4B5FD',
  },
];

// 4. KINH NGHIỆM LÀM VIỆC & HỌC VẤN
export const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    id: 'exp-1',
    period: '2023 — NAY',
    role: 'JUNIOR UI/UX & CREATIVE FRONTEND',
    company: 'STUDIO ĐỘC LẬP / FREELANCE',
    location: 'TP. HÀ NỘI / Remote',
    description: 'Thiết kế và phát triển website, web app cho các khách hàng công nghệ và thương hiệu khởi nghiệp.',
    achievements: [
      'Hoàn thành 2 dự án từ ý tưởng sơ khai đến sản phẩm thực tế đưa vào hoạt động.',
      'Thiết lập hệ thống Design System tái sử dụng giúp rút ngắn 50% thời gian phát triển giao diện.',
      'Đạt 100% sự hài lòng từ khách hàng về mặt thẩm mỹ và độ tương thích thiết bị.',
    ],
    techStack: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
];

// DỮ LIỆU TỔNG HỢP MẶC ĐỊNH
export const DEFAULT_FULL_PORTFOLIO_DATA: FullPortfolioData = {
  personalInfo: DEFAULT_PERSONAL_INFO,
  projects: DEFAULT_PROJECTS,
  skills: DEFAULT_SKILL_CATEGORIES,
  timeline: DEFAULT_TIMELINE,
};

// 5. HELPER FUNCTIONS LƯU VÀ ĐỌC TỪ LOCALSTORAGE
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
