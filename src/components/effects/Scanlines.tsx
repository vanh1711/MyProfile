import React from 'react';

export const Scanlines: React.FC = () => {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-50 scanline-overlay opacity-[0.035] select-none"
      aria-hidden="true"
    />
  );
};
