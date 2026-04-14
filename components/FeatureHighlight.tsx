'use client';

import React from 'react';

interface FeatureHighlightProps {
  icon?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
}

/**
 * Feature highlight component — showcases key features or benefits
 * All content passed via props — no hardcoded strings
 */
export const FeatureHighlight: React.FC<FeatureHighlightProps> = ({
  icon,
  title,
  description,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="bg-volvo-gray p-8 rounded-lg text-center hover:shadow-lg transition">
      {/* Icon */}
      {icon && <div className="text-4xl mb-4">{icon}</div>}

      {/* Title */}
      {title && <h3 className="text-2xl font-bold text-volvo-darkgray mb-2">{title}</h3>}

      {/* Description */}
      {description && <p className="text-gray-600 mb-6">{description}</p>}

      {/* CTA Link */}
      {ctaText && ctaLink && (
        <a href={ctaLink} className="text-volvo-blue hover:underline font-semibold">
          {ctaText} →
        </a>
      )}
    </div>
  );
};

export default FeatureHighlight;
