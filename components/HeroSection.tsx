'use client';

import React from 'react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

/**
 * Hero section component — large banner with call-to-action
 * All content passed via props — no hardcoded strings
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}) => {
  const bgStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundColor: '#003DA5' };

  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-center"
      style={bgStyle}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {title && <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{title}</h1>}
        {subtitle && <p className="text-xl md:text-2xl text-white mb-8">{subtitle}</p>}

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="inline-block bg-volvo-lightblue hover:bg-opacity-90 text-white font-semibold px-8 py-3 rounded transition"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
