'use client';

import React from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title?: string;
  links?: FooterLink[];
}

interface FooterSectionProps {
  columns?: FooterColumnProps[];
  copyrightText?: string;
  socialLinks?: Array<{ platform: string; url: string }>;
}

/**
 * Footer section component — website footer with links and info
 * All content passed via props — no hardcoded strings
 */
export const FooterSection: React.FC<FooterSectionProps> = ({
  columns = [],
  copyrightText,
  socialLinks = [],
}) => {
  return (
    <footer className="bg-volvo-darkgray text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {columns.map((column, index) => (
            <div key={index}>
              {column.title && (
                <h4 className="font-bold text-lg mb-4">{column.title}</h4>
              )}
              <ul className="space-y-2">
                {column.links?.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                {link.platform}
              </a>
            ))}
          </div>
        )}

        {/* Copyright */}
        {copyrightText && (
          <div className="border-t border-gray-600 pt-8 text-gray-400 text-sm">
            {copyrightText}
          </div>
        )}
      </div>
    </footer>
  );
};

export default FooterSection;
