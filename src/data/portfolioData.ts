import type { PersonalInfo, Project, SkillCategory, TimelineItem, FullPortfolioData } from '../types/portfolio';

/* =========================================================================
   THÔNG TIN PORTFOLIO CHÍNH THỨC CỦA ĐOÀN VIỆT ANH - JAVA BACKEND INTERN
   ========================================================================= */

// 1. THÔNG TIN CÁ NHÂN CƠ BẢN
export const DEFAULT_PERSONAL_INFO: PersonalInfo = {
  name: 'Đoàn Việt Anh',
  title: 'JAVA BACKEND INTERN / SOFTWARE DEVELOPER',
  tagline: 'Sinh viên CNTT đam mê phát triển hệ thống Backend với Java & Spring Boot. Tập trung vào tư duy OOP vững chắc, xây dựng RESTful API chuẩn mực và tối ưu cơ sở dữ liệu quan hệ.',
  bio: 'Tôi là một lập trình viên Java Backend định hướng phát triển phần mềm chuyên nghiệp. Với nền tảng vững chắc về Java Core, cấu trúc dữ liệu & giải thuật, hệ sinh thái Spring Framework (Spring Boot, Spring Data JPA, Spring Security) và cơ sở dữ liệu MySQL/PostgreSQL, tôi luôn nỗ lực xây dựng các dịch vụ Backend ổn định, an toàn và có khả năng mở rộng tốt.',
  systemStatus: 'TÌM KIẾM CƠ HỘI JAVA BACKEND INTERN / FRESHER',
  location: 'Hà Nội // Sẵn sàng làm việc On-site / Hybrid / Remote',
  email: 'vanh17112005@gmail.com',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  resumeUrl: '#cv',
  githubUrl: 'https://github.com/vanh1711',
  linkedinUrl: 'https://linkedin.com',
  dribbbleUrl: 'https://dribbble.com',
  figmaUrl: 'https://figma.com',
};

// 2. DANH SÁCH DỰ ÁN NỔI BẬT (JAVA BACKEND & API)
export const DEFAULT_PROJECTS: Project[] = [
  {
    id: 'du-an-1',
    title: 'E-COMMERCE BACKEND API SYSTEM',
    subtitle: 'Hệ thống RESTful API quản lý bán hàng & xử lý đơn hàng',
    category: 'JAVA BACKEND & REST API',
    tags: [
      'Java 17',
      'Spring Boot 3',
      'Spring Data JPA',
      'Hibernate',
      'MySQL',
      'JWT Authentication',
      'Spring Security',
      'Redis Cache',
      'Swagger / OpenAPI',
    ],
    problem: 'Hệ thống thương mại điện tử cần xử lý đồng thời hàng nghìn truy vấn sản phẩm, quản lý phân quyền người dùng bảo mật (Role-based: Admin / User / Staff), và đảm bảo tính toàn vẹn dữ liệu cho quy trình giỏ hàng, thanh toán và trừ kho hàng.',
    solution: 'Xây dựng kiến trúc phân tầng 3 lớp (Controller - Service - Repository) chuẩn RESTful API, áp dụng JWT & Spring Security để xác thực không lưu trạng thái (Stateless Auth), tích hợp Redis Caching giảm 60% tải truy vấn cơ sở dữ liệu, và viết Transactional Service đảm bảo tính toàn vẹn ACID.',
    metrics: 'RESTFUL STANDARD // 99.9% RELIABILITY',
    demoUrl: 'https://github.com/vanh1711',
    previewImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#FFD93D',
  },
  {
    id: 'du-an-2',
    title: 'MUSICSTREAM CORE BACKEND SERVICE',
    subtitle: 'Dịch vụ lưu trữ, quản lý playlist & phát nhạc trực tuyến',
    category: 'WEB SERVICE & REST API',
    tags: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'REST API',
      'Docker',
      'Zing MP3 API',
      'Maven',
      'React (Frontend Client)',
    ],
    problem: 'Nền tảng nghe nhạc trực tuyến cần API phân trang bài hát cực nhanh dưới 150ms, đồng bộ hóa playlist cá nhân của từng tài khoản và hỗ trợ kết nối streaming dữ liệu audio không ngắt quãng.',
    solution: 'Thiết kế cơ sở dữ liệu quan hệ chuẩn 3NF trên PostgreSQL, triển khai cơ chế đánh Index hiệu quả cho các câu truy vấn tìm kiếm bài hát theo nghệ sĩ/thể loại, đóng gói toàn bộ dịch vụ backend bằng Docker Container giúp triển khai đồng nhất.',
    metrics: '<150MS API LATENCY // DOCKER READY',
    demoUrl: 'https://github.com/vanh1711',
    previewImage: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#FF6B6B',
  },
  {
    id: 'du-an-3',
    title: 'CAMPUS LIBRARY & COURSE MANAGEMENT',
    subtitle: 'Hệ thống quản trị thư viện và đăng ký tín chỉ sinh viên',
    category: 'ENTERPRISE APPLICATION',
    tags: [
      'Java Core',
      'Spring Boot',
      'MySQL',
      'Lombok',
      'OOP Principles',
      'Design Patterns',
      'JUnit 5',
      'Mockito',
    ],
    problem: 'Quy trình quản lý mượn trả tài liệu, điểm danh và xếp lớp học phần dễ xảy ra xung đột lịch học và thiếu cơ chế kiểm tra tính hợp lệ dữ liệu chặt chẽ.',
    solution: 'Vận dụng thuần thục các nguyên lý OOP và Design Patterns (Singleton, Factory, Builder, Repository), triển khai validation toàn diện (Hibernate Validator) và viết bộ Unit Test với JUnit 5 & Mockito đạt độ bao phủ kiểm thử >80%.',
    metrics: '>80% UNIT TEST COVERAGE // ZERO CONFLICT',
    demoUrl: 'https://github.com/vanh1711',
    previewImage: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    accentColor: '#C4B5FD',
  },
];

// 3. KỸ NĂNG & CÔNG CỤ CHUYÊN MÔN (JAVA BACKEND FOCUS)
export const DEFAULT_SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'java-core',
    title: 'JAVA CORE & TƯ DUY OOP',
    tag: '01 // CORE LANGUAGE',
    description: 'Nắm vững nền tảng ngôn ngữ Java, tư duy lập trình hướng đối tượng (OOP: Encapsulation, Inheritance, Polymorphism, Abstraction), cấu trúc dữ liệu, Collections Framework và Java 8+ Features.',
    skills: [
      'Java 8 / 11 / 17',
      'OOP Principles & SOLID',
      'Collections Framework',
      'Stream API & Lambda',
      'Multithreading Basics',
      'Exception Handling',
    ],
    bgColor: '#FFD93D',
  },
  {
    id: 'spring-framework',
    title: 'SPRING FRAMEWORK & REST API',
    tag: '02 // BACKEND ECOSYSTEM',
    description: 'Xây dựng dịch vụ Backend và RESTful API chuẩn mực theo mô hình kiến trúc phân tầng, quản lý xác thực phân quyền và tích hợp ORM/JPA.',
    skills: [
      'Spring Boot 3',
      'Spring Data JPA / Hibernate',
      'Spring Security & JWT',
      'RESTful API Best Practices',
      'Maven & Dependency Mgmt',
      'Swagger / OpenAPI',
    ],
    bgColor: '#FF6B6B',
  },
  {
    id: 'database-tools',
    title: 'DATABASE & CÔNG CỤ PHÁT TRIỂN',
    tag: '03 // DATABASE & DEVOPS',
    description: 'Thiết kế cơ sở dữ liệu quan hệ, tối ưu truy vấn SQL, quản lý phiên bản với Git/GitHub, viết Unit Test và đóng gói triển khai Docker.',
    skills: [
      'MySQL & PostgreSQL',
      'SQL Queries & Indexing',
      'Redis Caching Basics',
      'Git & GitHub Workflow',
      'JUnit 5 & Mockito Testing',
      'Docker Containerization',
    ],
    bgColor: '#C4B5FD',
  },
];

// 4. KINH NGHIỆM LÀM VIỆC & HỌC VẤN
export const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    id: 'exp-1',
    period: '2023 — NAY',
    role: 'JAVA BACKEND DEVELOPER (DỰ ÁN CÁ NHÂN & ĐỒ ÁN)',
    company: 'CHUYÊN NGÀNH CÔNG NGHỆ THÔNG TIN',
    location: 'TP. HÀ NỘI',
    description: 'Tập trung nghiên cứu chuyên sâu về lập trình hệ thống Backend Java, phát triển các dịch vụ RESTful API thực tế và rèn luyện tư duy giải thuật.',
    achievements: [
      'Xây dựng hoàn chỉnh 3 hệ thống Backend với Spring Boot 3, Spring Data JPA, JWT Authentication và MySQL/PostgreSQL.',
      'Áp dụng thành thạo mô hình phân tầng Controller-Service-Repository, tuân thủ nguyên lý Clean Code và thiết kế RESTful chuẩn REST.',
      'Viết tài liệu API trực quan với Swagger/OpenAPI và kiểm thử API tự động với Postman và JUnit 5.',
    ],
    techStack: ['Java 17', 'Spring Boot', 'MySQL', 'Spring Data JPA', 'Docker', 'Git'],
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
const STORAGE_KEY_FULL_DATA = 'neo_portfolio_full_data_v3_java';

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

