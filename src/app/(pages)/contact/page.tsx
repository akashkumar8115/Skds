// import React from "react";
// import { Metadata } from "next";
// import Contact from "@/components/Contact/contact";

// export const metadata: Metadata = {
//   title: "Contact | Shri Kishori Design Studio",
// };

// export default function AboutPage() {
//   return (
//     <main>
//         <Contact/>
//     </main>
//   );
// }


// src/app/contact/page.tsx

// 'use client'

import React from 'react';
import Contact from '@/components/Contact/contact';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
// Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: 'Contact Us | Shri Kishori Design Studio',
  description:
    'Get in touch with Shri Kishori Design Studio for inquiries, collaborations, or project discussions. Reach out via our contact form, email, or phone.',
  keywords: [
    'Shri Kishori Design Studio contact',
    'design studio contact',
    'creative agency inquiry',
    'contact form',
    'design collaboration',
  ],
  openGraph: {
    title: 'Contact Us | Shri Kishori Design Studio',
    description:
      'Connect with Shri Kishori Design Studio for creative design solutions and project inquiries.',
    url: 'https://yourdomain.com/contact', // Replace with your actual domain
    siteName: 'Shri Kishori Design Studio',
    images: [
      {
        url: '/images/contact-og-image.jpg', // Add an optimized image in public/images
        width: 1200,
        height: 630,
        alt: 'Shri Kishori Design Studio Contact Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Shri Kishori Design Studio',
    description:
      'Reach out to Shri Kishori Design Studio for your design needs.',
    images: ['/images/contact-og-image.jpg'],
  },
  alternates: {
    canonical: 'https://yourdomain.com/contact', // Replace with your actual domain
  },
};

export default function ContactPage() {
  return (
    <>
      <Head>
        {/* Structured Data for SEO (ContactPoint Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shri Kishori Design Studio',
              url: 'https://yourdomain.com',
              logo: '/images/logo.png', // Add your logo in public/images
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+91-123-456-7890', // Replace with your actual phone
                email: 'info@yourdomain.com', // Replace with your actual email
                contactType: 'Customer Service',
                areaServed: 'IN', // Adjust as needed
                availableLanguage: 'English',
              },
              sameAs: [
                'https://twitter.com/yourprofile', // Replace with actual social links
                'https://linkedin.com/company/yourprofile',
                'https://instagram.com/yourprofile',
              ],
            }),
          }}
        />
      </Head>
      <main className="max-w-screen-xl mx-auto bg-grey text-midnight-text">
        <section
          aria-labelledby="contact-heading"
          data-aos="fade-up" // AOS animation
          className="py-6.25"
        >
          <h1 id="contact-heading" className="text-44 text-primary text-center">
            Contact Shri Kishori Design Studio
          </h1>
          <Contact />
        </section>
        {/* Internal Linking for SEO */}
        <nav className="text-center py-3.75">
          <Link
            href="/"
            className="text-18 text-secondary hover:underline duration-150 custom-hover"
          >
            Back to Home
          </Link>
          {' | '}
          <Link
            href="/about"
            className="text-18 text-secondary hover:underline duration-150 custom-hover"
          >
            About Us
          </Link>
          {' | '}
          <Link
            href="/portfolio"
            className="text-18 text-secondary hover:underline duration-150 custom-hover"
          >
            View Our Portfolio
          </Link>
        </nav>
      </main>
    </>
  );
}