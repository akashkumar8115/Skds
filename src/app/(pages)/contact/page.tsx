import React from "react";
import { Metadata } from "next";
import Contact from "@/components/Contact/contact";

export const metadata: Metadata = {
  title: "Contact | Shri Kishori Design Studio",
  description:
    "Get in touch with Shri Kishori Design Studio for creative design solutions, project inquiries, or collaborations.",
  keywords: [
    "Contact",
    "Design Studio",
    "Shri Kishori",
    "Get in touch",
    "Collaboration",
  ],
  openGraph: {
    title: "Contact | Shri Kishori Design Studio",
    description:
      "Get in touch with Shri Kishori Design Studio for creative design solutions, project inquiries, or collaborations.",
    url: "https://yourdomain.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">
        Contact Shri Kishori Design Studio
      </h1>
      <Contact />
    </main>
  );
}
