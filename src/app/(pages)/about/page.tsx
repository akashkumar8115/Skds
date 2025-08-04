import React from "react";
import Story from "@/components/About/Story";
import CTA from "@/components/About/cta";
import { Metadata } from "next";
import Founder from "@/components/About/founder";

export const metadata: Metadata = {
  title: "About Us | Shri Kishori Design Studio",
  description:
    "Learn about Shri Kishori Design Studio, our story, mission, and the team behind our creative solutions.",
  keywords: [
    "About Shri Kishori",
    "Design Studio Team",
    "Our Story",
    "Mission",
  ],
  openGraph: {
    title: "About Us | Shri Kishori Design Studio",
    description:
      "Learn about Shri Kishori Design Studio, our story, mission, and the team behind our creative solutions.",
    url: "https://yourdomain.com/about",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1 className="sr-only">About Shri Kishori Design Studio</h1>
      <Story />
      <CTA />
      <Founder />
    </main>
  );
}
