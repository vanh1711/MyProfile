import React from 'react';

export const GridFloor: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Ambient Horizon Glow Orb (Taste-Skill: soft, refined, non-generic) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-gradient-to-b from-neon-orange/20 via-neon-magenta/15 to-transparent blur-[130px] opacity-40 pointer-events-none" 
        aria-hidden="true"
      />

      {/* Receding 3D Perspective Grid Floor */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[380px] grid-floor opacity-45 pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle Cyan Horizon Laser Line */}
      <div 
        className="absolute bottom-[360px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};
