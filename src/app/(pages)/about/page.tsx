// import React from "react";
// import Story from "@/components/About/Story";
// import CTA from "@/components/About/cta";
// import { Metadata } from "next";
// import Founder from "@/components/About/founder";

// export const metadata: Metadata = {
//   title: "About Us | Shri Kishori Design Studio",
// };

// export default function AboutPage() {
//   return (
//     <main>
//         <Story/>
//         <CTA/>
//         <Founder/>
//     </main>
//   );
// }

// 'use client'

// src/app/about/page.tsx
import React from 'react';
import Story from '@/components/About/Story';
import CTA from '@/components/About/cta';
import Founder from '@/components/About/founder';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: 'About Us | Shri Kishori Design Studio',
  description:
    'Learn about Shri Kishori Design Studio, our mission, values, and the passionate team behind our creative designs. Discover our story and meet our founder.',
  keywords: [
    'Shri Kishori Design Studio',
    'about us',
    'design studio story',
    'creative design team',
    'founder profile',
  ],
  openGraph: {
    title: 'About Us | Shri Kishori Design Studio',
    description:
      'Explore the story, mission, and team behind Shri Kishori Design Studio, a creative design agency.',
    url: 'https://yourdomain.com/about', // Replace with your actual domain
    siteName: 'Shri Kishori Design Studio',
    images: [
      {
        url: '/images/about-og-image.jpg', // Add an optimized image in public/images
        width: 1200,
        height: 630,
        alt: 'Shri Kishori Design Studio About Page',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Shri Kishori Design Studio',
    description:
      'Discover the story and team behind Shri Kishori Design Studio.',
    images: ['/images/about-og-image.jpg'], // Same image as Open Graph
  },
  alternates: {
    canonical: 'https://yourdomain.com/about', // Replace with your actual domain
  },
};

export default function AboutPage() {
  return (
    <>
      <Head>
        {/* Structured Data for SEO (Organization Schema) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Shri Kishori Design Studio',
              url: 'https://yourdomain.com',
              logo: '/images/logo.png', // Add your logo in public/images
              description:
                'Shri Kishori Design Studio is a creative agency specializing in innovative design solutions.',
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
          aria-labelledby="story-heading"
          data-aos="fade-up" // AOS animation
          className="py-6.25"
        >
          <h1 id="story-heading" className="text-44 text-primary text-center pt-22">
            About Shri Kishori Design Studio
          </h1>
          <Story />
        </section>
        <section
          aria-labelledby="cta-heading"
          data-aos="fade-up"
          data-aos-delay="100"
          className="py-6.25 bg-darklight text-white"
        >
          <h2 id="cta-heading" className="text-30 text-center text-white">
            Join Our Creative Journey
          </h2>
          <CTA />
        </section>
        <section
          aria-labelledby="founder-heading"
          data-aos="fade-up"
          data-aos-delay="200"
          className="py-6.25"
        >
          <h2 id="founder-heading" className="text-30 text-center text-primary">
            Meet Our Founder
          </h2>
          <Founder />
        </section>
        {/* Internal Linking for SEO */}
        <nav className="text-center py-3.75">
          <Link
            href="/"
            className="text-18 text-secondary hover:underline duration-150"
          >
            Back to Home
          </Link>
          {' | '}
          <Link
            href="/portfolio"
            className="text-18 text-secondary hover:underline duration-150"
          >
            View Our Portfolio
          </Link>
        </nav>
      </main>
    </>
  );
}