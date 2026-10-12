import type { PersonalInfo, Project, SkillCategory, TimelineItem, FullPortfolioData } from '../types/portfolio';

export const DEFAULT_PERSONAL_INFO: PersonalInfo = {
  name: "Đoàn Việt Anh",
  title: "JAVA BACKEND DEVELOPER INTERN",
  tagline: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm với nền tảng vững chắc về Core Java, Lập trình hướng đối tượng (OOP) và cơ sở dữ liệu quan hệ. Mong muốn ứng tuyển vị trí Java Developer Intern để đóng góp vào phát triển hệ thống backend, tối ưu hóa quy trình xử lý lõi và hướng tới mục tiêu phát triển thành Junior Java Developer chính thức.",
  bio: "Tôi là sinh viên năm cuối chuyên ngành Kỹ thuật Phần mềm tại Trường Đại học Tài nguyên và Môi trường Hà Nội (GPA: 3.47/4.0, IELTS 5.5). Với nền tảng vững chắc về Core Java, tư duy lập trình hướng đối tượng (OOP), hệ sinh thái Spring Boot (Spring Data JPA, Spring Security) và cơ sở dữ liệu MySQL, tôi định hướng phát triển chuyên sâu vào kỹ thuật Backend, tối ưu hóa quy trình xử lý lõi và sẵn sàng thích ứng với các tiêu chuẩn phát triển phần mềm doanh nghiệp.",
  systemStatus: "SẴN SÀNG ỨNG TUYỂN JAVA DEVELOPER INTERN",
  location: "Hoài Đức, Hà Nội",
  email: "vanh17112005@gmail.com",
  phone: "0888218258",
  birthDate: "17/11/2005",
  university: "Đại học Tài nguyên và Môi trường Hà Nội",
  gpa: "3.47 / 4.0",
  ielts: "5.5 Overall (2025 — 2027)",
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/cv/Doan-Viet-Anh-Java-Backend-Intern-CV.pdf",
  githubUrl: "https://github.com/vanh1711"
};

export const DEFAULT_PROJECTS: Project[] = [
  {
    id: "workflow-manager-system",
    title: "TASK & WORKFLOW MANAGEMENT SYSTEM",
    subtitle: "Hệ thống Quản lý Công việc & Luồng tác vụ chuẩn Doanh nghiệp (06/2026 — 08/2026)",
    category: "ENTERPRISE JAVA & WORKFLOW FSM",
    tags: [
      "Java 17 (Core, OOP)",
      "Spring Boot 3",
      "MySQL 8.0",
      "Spring Data JPA",
      "Hibernate",
      "Spring Security 6",
      "Finite State Machine (FSM)",
      "Optimistic Locking (@Version)",
      "JUnit 5 & Mockito (65 tests)",
      "Thymeleaf UI",
      "RESTful APIs",
      "Maven"
    ],
    problem: "Hệ thống quản lý công việc doanh nghiệp thường đối mặt với nguy cơ xung đột dữ liệu (Lost Update) khi nhiều nhân sự thao tác đồng thời, trạng thái tác vụ bị nhảy cóc tùy tiện ngoài quy trình kiểm duyệt, và thiếu cơ chế phân quyền bảo mật chặt chẽ.",
    solution: "Xây dựng kiến trúc phân tầng chuẩn mực từ thiết kế schema MySQL đến business logic với Spring Boot 3 và JPA. Thiết lập Finite State Machine (FSM) kiểm soát chặt chẽ vòng đời chuyển trạng thái (TODO → IN_PROGRESS → REVIEW → DONE). Ứng dụng Khóa lạc quan (Optimistic Locking với @Version) ngăn chặn triệt để xung đột đồng thời, mã hóa mật khẩu với BCrypt và phân quyền với Spring Security 6 RBAC. Viết kiểm thử tự động toàn diện với JUnit 5 & Mockito (65 test cases, pass rate 100%).",
    metrics: "65 TEST CASES // 100% PASS RATE // ZERO LOST UPDATE",
    demoUrl: "https://github.com/vanh1711/Workflow-Manager-System",
    deployUrl: "https://workflow-manager-system.onrender.com",
    previewImage: "/projects/task-manager-dashboard.png",
    secondaryImage: "/projects/task-manager-kanban.png",
    accentColor: "#38BDF8"
  },
  {
    id: "phonestore-ecommerce",
    title: "E-COMMERCE — NỀN TẢNG BÁN LẺ CÔNG NGHỆ",
    subtitle: "Nền tảng Thương mại Điện tử Thiết bị Công nghệ Đa tính năng (08/2026 — 10/2026)",
    category: "FULL-STACK E-COMMERCE // GHN API // MOMO // GEMINI AI",
    tags: [
      "PHP 8.3",
      "Laravel 12",
      "MySQL",
      "Tailwind CSS",
      "GHN Express API",
      "Cổng thanh toán MoMo",
      "Google Gemini AI Fallback",
      "Live Chat 2 Chiều",
      "Admin Analytics Dashboard",
      "Responsive Dark/Light"
    ],
    problem: "Nền tảng thương mại điện tử cần giải quyết bài toán đồng bộ vận chuyển tự động, đảm bảo giao dịch thanh toán trực tuyến an toàn không phát sinh sai lệch tồn kho khi nhiều người mua cùng lúc, cùng hệ thống hỗ trợ khách hàng tức thì 24/7.",
    solution: "Thiết kế kiến trúc toàn diện từ schema cơ sở dữ liệu MySQL đến giao diện responsive Dark/Light mode hiện đại. Tích hợp API Giao Hàng Nhanh (GHN Express) tự động tính cước, tạo mã vận đơn và cập nhật trạng thái đơn hàng thời gian thực qua webhook. Triển khai luồng thanh toán bảo mật với MoMo IPN & COD kết hợp quản lý giao dịch tồn kho (Transactional stock management) và xử lý đơn hàng hàng loạt. Xây dựng hệ thống chat trực tuyến kết hợp AI Google Gemini (fallback tự động) và live chat 2 chiều với Admin.",
    metrics: "GHN REAL-TIME // MOMO IPN // GEMINI AI SUPPORT",
    demoUrl: "https://github.com/vanh1711/E-Commerce",
    deployUrl: "https://e-commerce-79p4.onrender.com",
    previewImage: "/projects/phonestore-home.png",
    secondaryImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    accentColor: "#F43F5E"
  }
];

export const DEFAULT_SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "java-languages",
    title: "NGÔN NGỮ LẬP TRÌNH & NỀN TẢNG OOP",
    tag: "01 // LANGUAGES & OOP",
    description: "Nền tảng vững chắc về Java Core, 4 trụ cột lập trình hướng đối tượng (OOP: Encapsulation, Inheritance, Polymorphism, Abstraction), cấu trúc dữ liệu, Collections Framework và truy vấn cơ sở dữ liệu quan hệ với SQL.",
    skills: [
      "Java (Core, OOP)",
      "SQL (DDL / DML)",
      "Collections Framework",
      "Stream API & Lambda",
      "SOLID Principles",
      "Exception Handling",
      "Java 17 LTS"
    ],
    bgColor: "#FFD93D"
  },
  {
    id: "backend-frameworks",
    title: "BACKEND FRAMEWORKS & RESTful APIs",
    tag: "02 // BACKEND FRAMEWORKS",
    description: "Phát triển dịch vụ Backend với Spring Boot 3, xây dựng hệ thống RESTful APIs chuẩn mực, quản lý ORM với Spring Data JPA & Hibernate, áp dụng Finite State Machine (FSM) và bảo mật Spring Security 6.",
    skills: [
      "Spring Boot 3",
      "RESTful APIs Design",
      "Spring Data JPA",
      "Hibernate ORM",
      "Spring Security 6 (RBAC)",
      "Optimistic Locking (@Version)"
    ],
    bgColor: "#FF6B6B"
  },
  {
    id: "database-tools",
    title: "CƠ SỞ DỮ LIỆU, CÔNG CỤ & KIỂM THỬ",
    tag: "03 // DATABASE, TOOLS & TESTING",
    description: "Hệ quản trị cơ sở dữ liệu MySQL, quy trình làm việc chuyên nghiệp với Git & GitHub, quản lý thư viện Maven, kiểm thử API với Postman và kiểm thử tự động với JUnit 5 & Mockito (100% pass).",
    skills: [
      "MySQL Database",
      "Git & GitHub Workflow",
      "Postman API Testing",
      "Apache Maven",
      "JUnit 5 & Mockito (100% Pass)",
      "Docker Basics"
    ],
    bgColor: "#C4B5FD"
  }
];

export const DEFAULT_TIMELINE: TimelineItem[] = [
  {
    id: "exp-ecommerce",
    period: "08/2026 — 10/2026",
    role: "LẬP TRÌNH VIÊN CHÍNH (MAIN DEVELOPER)",
    company: "E-COMMERCE — NỀN TẢNG BÁN LẺ THIẾT BỊ CÔNG NGHỆ",
    location: "HÀ NỘI",
    description: "Kiến trúc và phát triển toàn diện nền tảng thương mại điện tử thiết bị công nghệ với giao diện responsive đa chủ đề Dark/Light, tích hợp vận chuyển GHN Express, thanh toán MoMo và trợ lý AI Google Gemini.",
    achievements: [
      "Thiết kế kiến trúc hệ thống và xây dựng cơ sở dữ liệu quan hệ MySQL cho catalog sản phẩm, biến thể (RAM/ROM, màu sắc) và đơn hàng.",
      "Tích hợp API Giao Hàng Nhanh (GHN Express) tính cước tự động, sinh mã vận đơn tức thì và cập nhật trạng thái đơn hàng thời gian thực qua webhook.",
      "Triển khai luồng thanh toán bảo mật với MoMo IPN và COD kết hợp cơ chế kiểm soát tồn kho giao dịch (Transactional stock management).",
      "Xây dựng hệ thống chat hỗ trợ khách hàng thời gian thực kết hợp AI Google Gemini (fallback tự động) và live chat 2 chiều với Admin."
    ],
    techStack: [
      "PHP 8.3",
      "Laravel 12",
      "MySQL",
      "Tailwind CSS",
      "MoMo IPN",
      "GHN API",
      "Gemini AI"
    ]
  },
  {
    id: "exp-task-workflow",
    period: "06/2026 — 08/2026",
    role: "LẬP TRÌNH VIÊN CHÍNH (MAIN DEVELOPER)",
    company: "TASK & WORKFLOW MANAGEMENT SYSTEM",
    location: "HÀ NỘI",
    description: "Phát triển ứng dụng web quản lý tác vụ và quy trình doanh nghiệp theo kiến trúc phân tầng chuẩn mực, tích hợp bảng Kanban tương tác, kiểm soát trạng thái bằng Finite State Machine (FSM) và phân quyền Spring Security 6 RBAC.",
    achievements: [
      "Xây dựng hệ thống RESTful APIs và giao diện Thymeleaf từ thiết kế schema MySQL đến business logic phân tầng với Spring Boot 3 và JPA.",
      "Triển khai quy tắc chuyển đổi trạng thái nghiêm ngặt (TODO → IN_PROGRESS → REVIEW → DONE) ngăn ngừa nhảy cóc quy trình.",
      "Áp dụng Khóa lạc quan (Optimistic Locking với @Version) ngăn chặn triệt để xung đột ghi đè dữ liệu (Lost Update) và mã hóa mật khẩu với BCrypt.",
      "Viết kiểm thử tự động toàn diện với JUnit 5 & Mockito đạt 65 test cases (tỷ lệ pass 100%)."
    ],
    techStack: [
      "Java 17",
      "Spring Boot 3.4",
      "MySQL 8.0",
      "Spring Data JPA",
      "Spring Security 6",
      "JUnit 5",
      "Mockito",
      "Thymeleaf"
    ]
  },
  {
    id: "edu-hunre",
    period: "2023 — 2027 (DỰ KIẾN TỐT NGHIỆP)",
    role: "SINH VIÊN KỸ THUẬT PHẦN MỀM (SOFTWARE ENGINEERING)",
    company: "TRƯỜNG ĐẠI HỌC TÀI NGUYÊN VÀ MÔI TRƯỜNG HÀ NỘI",
    location: "HÀ NỘI",
    description: "Sinh viên năm cuối ngành Kỹ thuật Phần mềm. Tập trung nghiên cứu chuyên sâu về lập trình Java, cấu trúc dữ liệu, giải thuật, cơ sở dữ liệu quan hệ và kiến trúc hệ thống Backend doanh nghiệp.",
    achievements: [
      "Điểm trung bình tích lũy GPA: 3.47 / 4.0.",
      "Đạt Chứng chỉ tiếng Anh Quốc tế IELTS Certificate — Overall Band 5.5 (Hiệu lực: 2025 — 2027).",
      "Nắm vững các học phần chuyên ngành: Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng với Java, Hệ quản trị cơ sở dữ liệu (MySQL), Thiết kế phần mềm, An toàn thông tin."
    ],
    techStack: [
      "Java Core",
      "OOP",
      "SQL",
      "Data Structures",
      "Algorithms",
      "IELTS 5.5"
    ]
  }
];

export const DEFAULT_FULL_PORTFOLIO_DATA: FullPortfolioData = {
  personalInfo: DEFAULT_PERSONAL_INFO,
  projects: DEFAULT_PROJECTS,
  skills: DEFAULT_SKILL_CATEGORIES,
  timeline: DEFAULT_TIMELINE,
};

const STORAGE_KEY_FULL_DATA = 'neo_portfolio_full_data_v10';

export function getStoredFullData(): FullPortfolioData {
  try {
    const data = localStorage.getItem(STORAGE_KEY_FULL_DATA);
    if (data) {
      const parsed = JSON.parse(data);
      // Ensure we have the updated CV data and real CV PDF link
      const hasRealCv = parsed.personalInfo?.resumeUrl?.includes('Doan-Viet-Anh');
      if (hasRealCv && parsed.personalInfo?.location === "Hoài Đức, Hà Nội") {
        const storedAvatar = parsed.personalInfo?.avatarUrl;
        const validAvatar = storedAvatar && !storedAvatar.includes('unsplash') ? storedAvatar : '/avatar.jpg';
        return {
          personalInfo: {
            ...DEFAULT_PERSONAL_INFO,
            ...(parsed.personalInfo || {}),
            avatarUrl: validAvatar,
          },
          projects: parsed.projects && parsed.projects.length > 0
            ? parsed.projects.map((proj: Project, idx: number) => ({
                ...DEFAULT_PROJECTS[idx],
                ...proj,
                previewImage: DEFAULT_PROJECTS[idx]?.previewImage || proj.previewImage,
                secondaryImage: DEFAULT_PROJECTS[idx]?.secondaryImage || proj.secondaryImage,
              }))
            : DEFAULT_PROJECTS,
          skills: parsed.skills && parsed.skills.length > 0 ? parsed.skills : DEFAULT_SKILL_CATEGORIES,
          timeline: parsed.timeline && parsed.timeline.length > 0 ? parsed.timeline : DEFAULT_TIMELINE,
        };
      }
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
