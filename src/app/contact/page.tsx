import React from "react";
import { Metadata } from "next";
import Contact from "@/components/Contact/contact";

export const metadata: Metadata = {
  title: "Contact | Shri Kishori Design Studio",
};

export default function AboutPage() {
  return (
    <main>
        <Contact/>
    </main>
  );
}
