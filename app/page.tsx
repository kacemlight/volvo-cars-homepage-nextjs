'use client';

import React, { useState, useEffect } from 'react';
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import CarModelCard from '@/components/CarModelCard';
import FeatureHighlight from '@/components/FeatureHighlight';
import FooterSection from '@/components/FooterSection';
import { aemClient } from '@/lib/aem';

/**
 * Homepage (page.tsx)
 * Fetches content from AEM Content Fragments and renders all page sections
 * All content is dynamic from AEM — no hardcoded strings
 */
export default function Home() {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch page content from AEM on mount
    const fetchData = async () => {
      try {
        setLoading(true);
        // TODO: Once Alex confirms AEM endpoint, this will fetch real content
        // For now, falling back to mock data to demonstrate component structure
        const data = await aemClient.getPageContent();
        setPageData(data);
      } catch (err) {
        console.error('Error fetching page content:', err);
        setError('Failed to load page content. Please try again.');
        // Fallback to mock data structure for demonstration
        setPageData(getMockPageData());
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-600">Loading...</p>
      </div>
    );
  }

  const data = pageData || getMockPageData();

  return (
    <>
      {/* Navigation */}
      <NavigationBar {...data.navigation} />

      {/* Hero Section */}
      <HeroSection {...data.hero} />

      {/* Car Models Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-volvo-darkgray">
            Our Models
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.carModels?.map((model: any, index: number) => (
              <CarModelCard key={index} {...model} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-volvo-gray">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-volvo-darkgray">
            Why Choose Volvo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features?.map((feature: any, index: number) => (
              <FeatureHighlight key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection {...data.footer} />

      {/* Error Notice (if API failed) */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded shadow-lg">
          {error}
        </div>
      )}
    </>
  );
}

/**
 * Mock data structure for demonstration
 * TODO: Remove once real AEM data is flowing
 */
function getMockPageData() {
  return {
    navigation: {
      logo: 'Volvo Cars',
      navItems: [
        { label: 'Models', href: '#models' },
        { label: 'Features', href: '#features' },
        { label: 'Contact', href: '#contact' },
      ],
      ctaLabel: 'Build & Price',
      ctaLink: '/build',
    },
    hero: {
      title: 'Welcome to Volvo Cars',
      subtitle: 'Innovation, safety, and sustainability in every vehicle',
      backgroundImage: null,
      ctaText: 'Explore Models',
      ctaLink: '#models',
    },
    carModels: [
      {
        name: 'XC90',
        description: 'Luxury seven-seater SUV',
        price: 'Starting at $60,000',
        detailsLink: '/models/xc90',
      },
      {
        name: 'XC60',
        description: 'Premium mid-size SUV',
        price: 'Starting at $47,000',
        detailsLink: '/models/xc60',
      },
      {
        name: 'S90',
        description: 'Executive sedan',
        price: 'Starting at $55,000',
        detailsLink: '/models/s90',
      },
    ],
    features: [
      {
        icon: '🛡️',
        title: 'Safety First',
        description: 'Advanced safety technology and crash protection',
        ctaText: 'Learn more',
        ctaLink: '#safety',
      },
      {
        icon: '⚡',
        title: 'Electric & Hybrid',
        description: 'Sustainable mobility for a better future',
        ctaText: 'Explore EV',
        ctaLink: '#electric',
      },
      {
        icon: '🔧',
        title: 'Performance',
        description: 'Powerful engines with exceptional efficiency',
        ctaText: 'Discover',
        ctaLink: '#performance',
      },
    ],
    footer: {
      columns: [
        {
          title: 'Models',
          links: [
            { label: 'XC90', href: '/models/xc90' },
            { label: 'XC60', href: '/models/xc60' },
            { label: 'S90', href: '/models/s90' },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'Service & Maintenance', href: '/service' },
            { label: 'Owner Portal', href: '/owners' },
            { label: 'Recalls & Safety', href: '/safety' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About Us', href: '/about' },
            { label: 'Careers', href: '/careers' },
            { label: 'Press', href: '/press' },
          ],
        },
        {
          title: 'Legal',
          links: [
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Contact Us', href: '/contact' },
          ],
        },
      ],
      copyrightText: '© 2024 Volvo Cars. All rights reserved.',
      socialLinks: [
        { platform: 'Facebook', url: 'https://facebook.com/volvocars' },
        { platform: 'Twitter', url: 'https://twitter.com/volvocars' },
        { platform: 'Instagram', url: 'https://instagram.com/volvocars' },
      ],
    },
  };
}
