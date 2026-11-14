import React from 'react';

export default function CollegeLogo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center select-none py-0.5 ${className}`}>
      {/* Official RIET Institutional Brand Logo (with Crest, 25 Yrs Experience, RTU Kota & REAP 1025) */}
      <img
        src={isLight ? '/riet-header-logo-light.png' : '/riet-header-logo.png'}
        alt="Rajasthan Institute of Engineering and Technology (RIET) Jaipur"
        className="h-9 sm:h-10 md:h-11 lg:h-12 w-auto max-w-[85vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl object-contain transition-transform duration-300 group-hover:scale-[1.01]"
      />
    </div>
  );
}
