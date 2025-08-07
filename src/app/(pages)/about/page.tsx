import React from "react";
import Story from "@/components/About/Story";
import CTA from "@/components/About/cta";
import { Metadata } from "next";
import Founder from "@/components/About/founder";

export const metadata: Metadata = {
  title: "About Us | Shri Kishori Design Studio",
};

export default function AboutPage() {
  return (
    <main>
        <Story/>
        <CTA/>
        <Founder/>
    </main>
  );
}
