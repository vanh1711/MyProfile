# Đoàn Việt Anh — Creative Portfolio ⚡

> **Personal Portfolio Website** thiết kế theo phong cách **Neo-Brutalism (Pop Art / Neu-Brutalism)** dành cho **UI/UX Designer & Creative Frontend Developer**.

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)

---

## 🎨 Điểm Nổi Bật Về Thiết Kế & Trải Nghiệm (UI/UX)
- **Phong cách Neo-Brutalism:** Nền giấy kem ấm `#FFFDF5`, chữ và viền đen dày `border-4 border-black`, bóng đổ khối cứng góc 45° (hard offset shadows, zero blur).
- **Typography:** Display & Body sử dụng font **Space Grotesk** (700/900) kết hợp hiệu ứng viền rỗng (text stroke).
- **Tương tác cơ học (Mechanical Feedback):**
  - Hiệu ứng nút bấm lún xuống (`push down`) như công tắc cơ học thực tế.
  - Hiệu ứng thẻ nổi lên (`lift up`) khi hover chuột.
  - Dải băng chạy chữ vô tận (Marquee ribbon).
  - Thanh Header cố định (`fixed top-0`) bám theo khi cuộn trang.
- **Trình Quản Trị Trực Quan (In-Browser Content Management):**
  - Tích hợp sẵn Modal chỉnh sửa trực tiếp 4 mục: Thông tin cá nhân, Dự án nổi bật, Kỹ năng và Kinh nghiệm.
  - Tự động đồng bộ vào `localStorage` và hỗ trợ xuất mã TypeScript sạch.

---

## 🚀 Cài Đặt & Chạy Cục Bộ

### 1. Yêu cầu hệ thống
- Node.js >= 18
- Trình quản lý gói `npm`, `yarn` hoặc `pnpm`

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Khởi động môi trường phát triển (Dev Server)
```bash
npm run dev
```
Truy cập: `http://localhost:5173/`

### 4. Đóng gói bản phát hành (Production Build)
```bash
npm run build
```

---

## 📂 Cấu Trúc Dự Án
```
├── public/                 # Favicon và tài nguyên tĩnh
├── src/
│   ├── components/         # Các thành phần giao diện (Navbar, Hero, Projects, BentoGrid...)
│   │   ├── icons/          # SVG Brand Icons (GitHub, LinkedIn, Figma...)
│   │   └── ProfileEditorModal.tsx # Cửa sổ chỉnh sửa nội dung trực tiếp
│   ├── data/
│   │   └── portfolioData.ts# Dữ liệu nguồn chính thức & helpers
│   ├── types/
│   │   └── portfolio.ts    # TypeScript interfaces & types
│   ├── App.tsx             # Component chính kết nối state
│   ├── index.css           # Cấu hình Tailwind, CSS tokens, bóng cứng và hoa văn
│   └── main.tsx            # Điểm khởi chạy ứng dụng React
└── tailwind.config.js      # Hệ màu Neo-Brutalism & hard shadows
```

---

## 📬 Liên Hệ
- **Họ và tên:** Đoàn Việt Anh
- **Email:** vanh17112005@gmail.com
- **GitHub:** [@vanh1711](https://github.com/vanh1711)
