import React from 'react';

export const PixelDecoration = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 opacity-10">
        {[...Array(100)].map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-white/10 w-1 h-1"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
