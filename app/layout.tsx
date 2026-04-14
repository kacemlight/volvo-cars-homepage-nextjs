import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Volvo Cars US | Electric & Hybrid Vehicles',
  description: 'Discover Volvo Cars vehicles, technology, and services. Explore our latest models, electric vehicles, and hybrid options for the US market.',
  keywords: 'Volvo, cars, vehicles, electric, hybrid, SUV, sedan, safety',
  openGraph: {
    title: 'Volvo Cars US',
    description: 'Discover Volvo Cars vehicles and technology',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
