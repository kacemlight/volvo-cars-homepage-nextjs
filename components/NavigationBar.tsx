'use client';

import React from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface NavigationBarProps {
  logo?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaLink?: string;
}

/**
 * Navigation bar component
 * All content passed via props — no hardcoded strings
 */
export const NavigationBar: React.FC<NavigationBarProps> = ({
  logo,
  navItems = [],
  ctaLabel,
  ctaLink,
}) => {
  return (
    <nav className="bg-volvo-blue text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        {logo && (
          <div className="text-2xl font-bold">
            {typeof logo === 'string' ? logo : 'Volvo Cars'}
          </div>
        )}

        {/* Navigation Items */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-volvo-lightblue transition"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        {ctaLabel && ctaLink && (
          <a
            href={ctaLink}
            className="bg-volvo-lightblue px-6 py-2 rounded hover:bg-opacity-90 transition"
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
