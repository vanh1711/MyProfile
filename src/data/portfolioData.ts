import type { PersonalInfo, Project, SkillCategory, TimelineItem, FullPortfolioData } from '../types/portfolio';

export const DEFAULT_PERSONAL_INFO: PersonalInfo = {
  "name": "Đoàn Việt Anh",
  "title": "JAVA BACKEND INTERN / SOFTWARE DEVELOPER",
  "tagline": "Sinh viên CNTT đam mê phát triển hệ thống Backend với Java & Spring Boot. Tập trung vào tư duy OOP vững chắc, xây dựng RESTful API chuẩn mực và tối ưu cơ sở dữ liệu quan hệ.",
  "bio": "Tôi là một lập trình viên Java Backend định hướng phát triển phần mềm chuyên nghiệp. Với nền tảng vững chắc về Java Core, cấu trúc dữ liệu & giải thuật, hệ sinh thái Spring Framework (Spring Boot, Spring Data JPA, Spring Security) và cơ sở dữ liệu MySQL/PostgreSQL, tôi luôn nỗ lực xây dựng các dịch vụ Backend ổn định, an toàn và có khả năng mở rộng tốt.",
  "systemStatus": "TÌM KIẾM CƠ HỘI JAVA BACKEND INTERN / FRESHER",
  "location": "Hà Nội",
  "email": "vanh17112005@gmail.com",
  "avatarUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  "resumeUrl": "#cv",
  "githubUrl": "https://github.com/vanh1711",
  "linkedinUrl": "https://linkedin.com",
  "dribbbleUrl": "https://dribbble.com",
  "figmaUrl": "https://figma.com"
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    "id": "workflow-manager-system",
    "title": "TASK & WORKFLOW MANAGEMENT SYSTEM",
    "subtitle": "Hệ thống Quản lý Công việc & Luồng tác vụ chuẩn Doanh nghiệp / FinTech",
    "category": "ENTERPRISE JAVA & WORKFLOW FSM",
    "tags": [
      "Java 17 LTS",
      "Spring Boot 3.4",
      "MySQL 8.0",
      "Spring Data JPA",
      "Hibernate",
      "Thymeleaf",
      "Spring Security 6",
      "Kanban Drag-Drop",
      "FSM State Machine",
      "Optimistic Locking",
      "RESTful API"
    ],
    "problem": "Các quy trình tác vụ doanh nghiệp thường đối mặt với nguy cơ xung đột dữ liệu (Lost Update) khi nhiều nhân sự thao tác đồng thời, trạng thái công việc bị nhảy cóc tùy tiện ngoài quy chuẩn, và việc tìm kiếm/lọc tác vụ phức tạp dễ gây nghẽn truy vấn hoặc phát sinh lỗ hổng SQL Injection.",
    "solution": "Xây dựng kiến trúc phân tầng Hybrid chuẩn mực kết hợp Server-Side Rendering (Thymeleaf, Kanban kéo thả) và RESTful API dùng chung 100% tầng nghiệp vụ. Áp dụng máy trạng thái hữu hạn (FSM) kiểm soát chặt chẽ luồng công việc (TODO → IN_PROGRESS → REVIEW → DONE). Tích hợp Khóa lạc quan (@Version) giải quyết triệt để tranh chấp dữ liệu, phân trang & lọc đa tiêu chí linh hoạt với JPA Specification và Whitelist Sorting, chuẩn hóa toàn bộ lỗi qua ApiResponse và ErrorCode.",
    "metrics": "ENTERPRISE FSM // OPTIMISTIC LOCKING // ZERO LOST UPDATE",
    "demoUrl": "https://github.com/vanh1711/Workflow-Manager-System",
    "previewImage": "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=1200&q=80",
    "accentColor": "#38BDF8"
  },
  {
    "id": "phonestore-ecommerce",
    "title": "PHONESTORE — FLAGSHIP SMARTPHONE E-COMMERCE",
    "subtitle": "Nền tảng Thương mại Điện tử Bán lẻ Điện thoại Di động chuẩn Flagship Store",
    "category": "FULLSTACK E-COMMERCE & LARAVEL",
    "tags": [
      "Laravel 12",
      "PHP 8.3",
      "MySQL",
      "Tailwind CSS",
      "Blade Engine",
      "Live Search Popup",
      "Interactive Cart",
      "Responsive Design",
      "Admin Dashboard"
    ],
    "problem": "Trải nghiệm mua sắm thiết bị di động trực tuyến thường bị gián đoạn do tốc độ tải trang chậm, bộ lọc cấu hình/màu sắc cồng kềnh, giỏ hàng thiếu tính tương tác thời gian thực và giao diện chưa đạt độ sang trọng, tin cậy chuẩn các chuỗi Flagship Store (như Apple/Samsung).",
    "solution": "Phát triển nền tảng bán lẻ PhoneStore tối ưu trên nền Laravel 12 & Tailwind CSS theo phong cách Flagship hiện đại. Tích hợp tính năng Live Search gợi ý thông minh tức thì, trang chi tiết sản phẩm cập nhật phiên bản bộ nhớ/màu sắc và giá bán theo thời gian thực, giỏ hàng tương tác cao hỗ trợ chọn từng món/tất cả và tính tiền tự động, cùng hệ thống Admin Dashboard quản lý toàn diện danh mục và tồn kho sản phẩm.",
    "metrics": "FLAGSHIP UI // LIVE SEARCH // REAL-TIME CART",
    "demoUrl": "https://github.com/vanh1711/E-Commerce",
    "previewImage": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    "accentColor": "#F43F5E"
  }
];

export const DEFAULT_SKILL_CATEGORIES: SkillCategory[] = [
  {
    "id": "java-core",
    "title": "JAVA CORE & TƯ DUY OOP",
    "tag": "01 // CORE LANGUAGE",
    "description": "Nắm vững nền tảng ngôn ngữ Java, tư duy lập trình hướng đối tượng (OOP: Encapsulation, Inheritance, Polymorphism, Abstraction), cấu trúc dữ liệu, Collections Framework và Java 8+ Features.",
    "skills": [
      "Java 8 / 11 / 17",
      "OOP Principles & SOLID",
      "Collections Framework",
      "Stream API & Lambda",
      "Multithreading Basics",
      "Exception Handling"
    ],
    "bgColor": "#FFD93D"
  },
  {
    "id": "spring-framework",
    "title": "SPRING FRAMEWORK & REST API",
    "tag": "02 // BACKEND ECOSYSTEM",
    "description": "Xây dựng dịch vụ Backend và RESTful API chuẩn mực theo mô hình kiến trúc phân tầng, quản lý xác thực phân quyền và tích hợp ORM/JPA.",
    "skills": [
      "Spring Boot 3",
      "Spring Data JPA / Hibernate",
      "Spring Security & JWT",
      "RESTful API Best Practices",
      "Maven & Dependency Mgmt",
      "Swagger / OpenAPI"
    ],
    "bgColor": "#FF6B6B"
  },
  {
    "id": "database-tools",
    "title": "DATABASE & CÔNG CỤ PHÁT TRIỂN",
    "tag": "03 // DATABASE & DEVOPS",
    "description": "Thiết kế cơ sở dữ liệu quan hệ, tối ưu truy vấn SQL, quản lý phiên bản với Git/GitHub, viết Unit Test và đóng gói triển khai Docker.",
    "skills": [
      "MySQL & PostgreSQL",
      "SQL Queries & Indexing",
      "Redis Caching Basics",
      "Git & GitHub Workflow",
      "JUnit 5 & Mockito Testing",
      "Docker Containerization"
    ],
    "bgColor": "#C4B5FD"
  }
];

export const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    "id": "exp-1",
    "period": "2023 — NAY",
    "role": "JAVA BACKEND DEVELOPER (DỰ ÁN CÁ NHÂN & ĐỒ ÁN)",
    "company": "CHUYÊN NGÀNH CÔNG NGHỆ THÔNG TIN",
    "location": "TP. HÀ NỘI",
    "description": "Tập trung nghiên cứu chuyên sâu về lập trình hệ thống Backend Java, phát triển các dịch vụ RESTful API thực tế và rèn luyện tư duy giải thuật.",
    "achievements": [
      "Xây dựng hoàn chỉnh 3 hệ thống Backend với Spring Boot 3, Spring Data JPA, JWT Authentication và MySQL/PostgreSQL.",
      "Áp dụng thành thạo mô hình phân tầng Controller-Service-Repository, tuân thủ nguyên lý Clean Code và thiết kế RESTful chuẩn REST.",
      "Viết tài liệu API trực quan với Swagger/OpenAPI và kiểm thử API tự động với Postman và JUnit 5."
    ],
    "techStack": [
      "Java 17",
      "Spring Boot",
      "MySQL",
      "Spring Data JPA",
      "Docker",
      "Git"
    ]
  }
];

export const DEFAULT_FULL_PORTFOLIO_DATA: FullPortfolioData = {
  personalInfo: DEFAULT_PERSONAL_INFO,
  projects: DEFAULT_PROJECTS,
  skills: DEFAULT_SKILL_CATEGORIES,
  timeline: DEFAULT_TIMELINE,
};

const STORAGE_KEY_FULL_DATA = 'neo_portfolio_full_data_v4';

export function getStoredFullData(): FullPortfolioData {
  try {
    const data = localStorage.getItem(STORAGE_KEY_FULL_DATA);
    if (data) {
      const parsed = JSON.parse(data);
      // If projects still contain old dummy IDs, upgrade to real projects
      const hasOldDummyProjects = parsed.projects?.some((p: any) => p.id === 'du-an-1' || p.id === 'du-an-2');
      return {
        personalInfo: { ...DEFAULT_PERSONAL_INFO, ...(parsed.personalInfo || {}) },
        projects: !hasOldDummyProjects && parsed.projects && parsed.projects.length > 0 ? parsed.projects : DEFAULT_PROJECTS,
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
