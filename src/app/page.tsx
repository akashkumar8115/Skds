import React from "react";
import Hero from "@/components/Home/Hero";
import Work from "@/components/Home/work";
import TimeLine from "@/components/Home/timeline";
import Platform from "@/components/Home/platform";
import Portfolio from "@/components/Home/portfolio";
import Perks from "@/components/Home/perks";
import { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Shri Kishori Design Studio – Elevate Your Brand With Stunning Design",
  description:
    "Shri Kishori Design Studio offers innovative digital design solutions, including branding, UX/UI, and web design to help your brand stand out.",
  keywords: [
    "Design Studio",
    "UX/UI Design",
    "Branding",
    "Web Design",
    "Graphic Design",
    "Shri Kishori",
    "Creative Agency",
    "Digital Design",
    "Visual Identity",
  ],
  authors: [{ name: "Shri Kishori Design Studio", url: "https://skds.in" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  metadataBase: new URL("https://skds.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shri Kishori Design Studio",
    description:
      "We help brands shine through custom design, branding, and digital experiences.",
    url: "https://skds.in",
    siteName: "Shri Kishori Design Studio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://skds.in/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Shri Kishori Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shri Kishori Design Studio",
    description:
      "We help brands shine through custom design, branding, and digital experiences.",
    images: ["https://skds.in/og-image.jpg"], // Same as OG image
    creator: "@yourTwitterHandle", // Optional: Add if you have one
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <TimeLine />
      <Platform />
      <Portfolio />
      <Perks />
    </main>
  );
}
