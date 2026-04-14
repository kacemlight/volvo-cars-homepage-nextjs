'use client';

import React from 'react';
import Image from 'next/image';

interface CarModelCardProps {
  name?: string;
  image?: string;
  description?: string;
  price?: string;
  detailsLink?: string;
}

/**
 * Car model card component — displays individual vehicle information
 * All content passed via props — no hardcoded strings
 */
export const CarModelCard: React.FC<CarModelCardProps> = ({
  name,
  image,
  description,
  price,
  detailsLink,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Car Image */}
      {image && (
        <div className="w-full h-64 bg-volvo-gray relative">
          <Image
            src={image}
            alt={name || 'Car model'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {name && <h3 className="text-2xl font-bold text-volvo-darkgray mb-2">{name}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {price && <p className="text-lg font-semibold text-volvo-blue mb-4">{price}</p>}

        {/* Details Link */}
        {detailsLink && (
          <a
            href={detailsLink}
            className="text-volvo-lightblue hover:underline font-semibold"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

export default CarModelCard;
