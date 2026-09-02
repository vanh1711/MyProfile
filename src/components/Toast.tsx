import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import type { ToastMessage } from '../types/portfolio';

interface ToastProps {
  toast: ToastMessage | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ toast, onClose }) => {
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [toast, onClose]);

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4"
        >
          <div className="relative border-4 border-black bg-[#FFD93D] shadow-neo-lg p-5 text-black">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b-3 border-black pb-2 mb-3">
              <span className="font-black text-xs uppercase tracking-widest bg-black text-white px-2 py-0.5">
                THÔNG BÁO HỆ THỐNG
              </span>
              <button
                onClick={onClose}
                className="p-1 border-2 border-black bg-white hover:bg-[#FF6B6B] hover:text-white transition-colors"
                aria-label="Đóng thông báo"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="flex items-start gap-3">
              <div className="p-1.5 border-2 border-black bg-[#4ADE80] text-black shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-black text-base text-black uppercase">
                  {toast.title}
                </h4>
                <p className="font-bold text-xs text-black/85 mt-1 leading-relaxed">
                  {toast.message}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-[4px] bg-black"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
