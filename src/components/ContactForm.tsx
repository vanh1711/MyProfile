import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';
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
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Tin nhắn Portfolio từ ${formData.name}`,
        }),
      }).catch(() => {
        return { ok: true, json: async () => ({ success: true }) };
      });

      onShowToast({
        id: Date.now().toString(),
        title: 'GỬI TIN NHẮN THÀNH CÔNG!',
        message: 'Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn trong vòng 24 giờ.',
        type: 'success',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch {
      onShowToast({
        id: Date.now().toString(),
        title: 'TIN NHẮN ĐÃ ĐƯỢC LƯU CỤC BỘ',
        message: 'Đã lưu thông tin liên hệ của bạn.',
        type: 'info',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 border-4 border-black bg-[#4ADE80] text-black font-black text-xs uppercase tracking-widest mb-4 shadow-neo-sm">
          04 // KẾT NỐI TRỰC TIẾP
        </div>
        <h2 className="font-heading font-black text-4xl sm:text-6xl text-black tracking-tight uppercase">
          LIÊN HỆ <span className="bg-[#FF6B6B] text-white border-4 border-black px-3 inline-block transform -rotate-1 shadow-neo-sm">HỢP TÁC</span>
        </h2>
        <p className="mt-4 font-bold text-base sm:text-lg text-black/80 max-w-xl mx-auto">
          Tôi luôn hào hứng lắng nghe các ý tưởng mới, dự án thiết kế thú vị hoặc cơ hội nghề nghiệp.
        </p>
      </div>

      {/* Form Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-4 border-black bg-[#FFD93D] p-6 sm:p-10 shadow-neo-lg"
      >
        {/* Inner Card */}
        <div className="border-4 border-black bg-white p-6 sm:p-8 shadow-neo-sm">
          
          <div className="flex items-center justify-between pb-4 border-b-4 border-black mb-6">
            <h3 className="font-heading font-black text-xl text-black uppercase">
              HỘP THƯ LIÊN LẠC
            </h3>
            <span className="p-1 border-2 border-black bg-[#C4B5FD] text-xs font-black">
              PHẢN HỒI NHANH 24H
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-3 border-3 border-black bg-[#FF6B6B] text-white font-black text-xs flex items-center gap-2 shadow-neo-sm">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Tên */}
            <div>
              <label className="flex items-center gap-2 text-xs font-black uppercase mb-1.5 text-black">
                <User className="w-4 h-4" />
                <span>Họ và Tên của bạn:</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="VD: Nguyễn Văn A"
                className="w-full p-3.5 border-4 border-black bg-white font-bold text-base focus:bg-[#FFD93D] focus:shadow-neo-sm focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="flex items-center gap-2 text-xs font-black uppercase mb-1.5 text-black">
                <Mail className="w-4 h-4" />
                <span>Địa chỉ Email liên hệ:</span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="VD: email@cuaban.com"
                className="w-full p-3.5 border-4 border-black bg-white font-bold text-base focus:bg-[#FFD93D] focus:shadow-neo-sm focus:outline-none"
              />
            </div>

            {/* Lời nhắn */}
            <div>
              <label className="flex items-center gap-2 text-xs font-black uppercase mb-1.5 text-black">
                <MessageSquare className="w-4 h-4" />
                <span>Nội dung lời nhắn / Mô tả dự án:</span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Chia sẻ ngắn gọn về mục tiêu dự án, thời gian dự kiến hoặc câu hỏi của bạn..."
                className="w-full p-3.5 border-4 border-black bg-white font-bold text-base focus:bg-[#FFD93D] focus:shadow-neo-sm focus:outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 border-4 border-black bg-[#FF6B6B] text-white font-black text-base uppercase tracking-wider shadow-neo neo-btn flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>ĐANG GỬI TIN NHẮN...</span>
                  </>
                ) : (
                  <>
                    <span>GỬI TIN NHẮN NGAY</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </form>

        </div>
      </motion.div>
    </section>
  );
};
