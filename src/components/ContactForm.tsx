import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, AlertCircle, Loader2, Phone } from 'lucide-react';
import type { ToastMessage } from '../types/portfolio';

interface ContactFormProps {
  onShowToast: (toast: ToastMessage) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('VUI LÒNG ĐIỀN ĐỦ THÔNG TIN: TÊN, EMAIL VÀ NỘI DUNG TIN NHẮN.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('ĐỊNH DẠNG EMAIL KHÔNG HỢP LỆ. VUI LÒNG KIỂM TRA LẠI.');
      return;
    }

    setLoading(true);

    try {
      const targetEmail = 'vanh17112005@gmail.com';
      const subject = encodeURIComponent(`[Tuyển dụng / Hợp tác] Tin nhắn từ ${formData.name}`);
      const body = encodeURIComponent(
        `Xin chào Đoàn Việt Anh,\n\n` +
        `Tôi liên hệ với bạn từ trang Portfolio:\n` +
        `- Họ và tên người gửi: ${formData.name}\n` +
        `- Email liên hệ lại: ${formData.email}\n\n` +
        `- Nội dung trao đổi:\n${formData.message}\n\n` +
        `Trân trọng!`
      );
      const mailtoLink = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      // Mở trình soạn thư với nội dung đã điền sẵn tới vanh17112005@gmail.com
      window.location.href = mailtoLink;

      onShowToast({
        id: Date.now().toString(),
        title: 'ĐÃ MỞ TRÌNH SOẠN EMAIL!',
        message: `Đã chuẩn bị sẵn nội dung gửi tới ${targetEmail}. Vui lòng bấm Gửi trên ứng dụng mail của bạn.`,
        type: 'success',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch {
      onShowToast({
        id: Date.now().toString(),
        title: 'LIÊN HỆ TRỰC TIẾP',
        message: 'Vui lòng gửi email trực tiếp tới vanh17112005@gmail.com.',
        type: 'info',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16 pb-4 border-b border-[#242424]">
        <div className="inline-block px-2.5 py-1 border border-[#333333] bg-[#141414] text-[#E5E5E5] font-mono text-[11px] uppercase tracking-widest mb-3">
          // 05 ARCHIVE: GET IN TOUCH
        </div>
        <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
          LIÊN HỆ <span className="font-serif italic font-normal text-[#A3A3A3]">HỢP TÁC</span>
        </h2>
        <p className="mt-3 font-normal text-sm sm:text-base text-[#A3A3A3] max-w-xl mx-auto">
          Tôi luôn sẵn sàng đón nhận cơ hội thực tập, trao đổi kỹ thuật hoặc thảo luận về dự án phát triển hệ thống Java Backend.
        </p>
      </div>

      {/* Form Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="border border-[#262626] bg-[#111111] p-6 sm:p-10 mono-card"
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-8">
          <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-white">
            // HỘP THƯ LIÊN LẠC TRỰC TUYẾN
          </h3>
          <span className="border border-[#333333] bg-[#161616] text-[#A3A3A3] text-[10px] font-mono px-2 py-0.5">
            RESPONSE &lt; 24H
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-3.5 border border-[#555555] bg-[#161616] text-white font-mono text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-white" />
              <span>{error}</span>
            </div>
          )}

          {/* Tên */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono uppercase mb-2 text-[#A3A3A3]">
              <User className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
              <span>Họ và Tên của bạn:</span>
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="VD: Nguyễn Văn A"
              className="w-full p-3.5 border border-[#2E2E2E] bg-[#0A0A0A] font-sans text-sm text-white placeholder:italic placeholder:text-[#555555] focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono uppercase mb-2 text-[#A3A3A3]">
              <Mail className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
              <span>Địa chỉ Email liên hệ:</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="VD: email@domain.com"
              className="w-full p-3.5 border border-[#2E2E2E] bg-[#0A0A0A] font-sans text-sm text-white placeholder:italic placeholder:text-[#555555] focus:border-white focus:outline-none transition-colors"
            />
          </div>

          {/* Lời nhắn */}
          <div>
            <label className="flex items-center gap-2 text-xs font-mono uppercase mb-2 text-[#A3A3A3]">
              <MessageSquare className="w-3.5 h-3.5 text-white" strokeWidth={1.5} />
              <span>Nội dung lời nhắn / Đề xuất phỏng vấn:</span>
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Chia sẻ ngắn gọn về cơ hội thực tập, yêu cầu dự án hoặc câu hỏi của bạn..."
              className="w-full p-3.5 border border-[#2E2E2E] bg-[#0A0A0A] font-sans text-sm text-white placeholder:italic placeholder:text-[#555555] focus:border-white focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 border border-white bg-white text-black font-mono font-bold text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-transparent hover:text-white transition-all disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>ĐANG GỬI TIN NHẮN...</span>
                </>
              ) : (
                <>
                  <span>GỬI TIN NHẮN NGAY</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Direct Contact Alternatives */}
        <div className="mt-8 pt-6 border-t border-[#222222] grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href="mailto:vanh17112005@gmail.com"
            className="p-3 border border-[#2E2E2E] bg-[#141414] hover:border-white font-mono text-xs flex items-center justify-between text-[#CCCCCC] hover:text-white transition-all group"
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#888888] group-hover:text-white" />
              <span className="font-bold">vanh17112005@gmail.com</span>
            </div>
            <span className="text-[10px] text-[#888888]">[GỬI MAIL]</span>
          </a>

          <a
            href="tel:0888218258"
            className="p-3 border border-[#2E2E2E] bg-[#141414] hover:border-white font-mono text-xs flex items-center justify-between text-[#CCCCCC] hover:text-white transition-all group"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#888888] group-hover:text-white" />
              <span className="font-bold">0888 218 258</span>
            </div>
            <span className="text-[10px] text-[#888888]">[GỌI ĐIỆN]</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
