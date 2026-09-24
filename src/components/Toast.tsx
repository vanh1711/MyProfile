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
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.15 }}
          className="fixed bottom-6 right-6 z-50 max-w-md w-full px-4"
        >
          <div className="relative border border-[#404040] bg-[#111111] p-5 text-white">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#262626] pb-2 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest bg-white text-black px-2 py-0.5 font-bold">
                SYSTEM NOTIFICATION
              </span>
              <button
                onClick={onClose}
                className="p-1 border border-[#333333] bg-[#161616] text-[#A3A3A3] hover:text-white hover:border-white transition-colors"
                aria-label="Đóng thông báo"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex items-start gap-3">
              <div className="p-1 border border-[#333333] bg-[#161616] text-white shrink-0">
                <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="font-heading font-black text-sm text-white uppercase tracking-tight">
                  {toast.title}
                </h4>
                <p className="text-xs text-[#A3A3A3] mt-1 leading-relaxed">
                  {toast.message}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: 5, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-[2px] bg-white"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
