import React from 'react';

export const GradientBorder = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
    </div>
  );
};
