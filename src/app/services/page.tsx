// app/services/page.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import {
  PenTool,
  Code,
  Smartphone,
  Gamepad2,
  TrendingUp,
  Paintbrush2,
  Sparkles,
  Globe,
  Users,
  SendHorizontal
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0e0c14] via-black to-[#0e0c14] text-white px-6 py-16 flex flex-col items-center gap-20 relative overflow-hidden">
      {/* Background rotating orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-orange-500 to-yellow-400 opacity-10 rounded-full blur-3xl z-0 animate-spin-slow"
        style={{ top: "10%", left: "10%" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      />

      <div className="text-center space-y-6 z-10">
        <p className="text-sm text-orange-400 font-semibold">Explore Our <span className="underline underline-offset-2">Expertise</span></p>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafting Excellence,<br/> One Pixel & Line at a Time.
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          From intuitive interfaces to powerful digital products, our offerings are crafted to drive impact, growth, and delight. Explore the breadth of services that turn your ideas into timeless solutions.
        </p>
      </div>

      <motion.div 
        className="relative w-full max-w-lg h-[420px] flex items-center justify-center z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute border-4 border-dashed border-orange-500 rounded-full h-full w-full animate-spin-slow" />
        <Card className="relative z-10 bg-black/60 backdrop-blur-xl p-6 shadow-lg shadow-orange-500/10 border border-orange-500">
          <CardContent>
            <h3 className="text-xl font-semibold mb-4">From Vision to Execution</h3>
            <ul className="pl-0 space-y-4 text-sm">
              <li className="flex items-center gap-2"><PenTool size={18}/> UI/UX Design</li>
              <li className="flex items-center gap-2"><Code size={18}/> Web Development</li>
              <li className="flex items-center gap-2"><Smartphone size={18}/> App Development</li>
              <li className="flex items-center gap-2"><Gamepad2 size={18}/> Game Development</li>
              <li className="flex items-center gap-2"><TrendingUp size={18}/> Digital Marketing & SEO</li>
              <li className="flex items-center gap-2"><Paintbrush2 size={18}/> Graphic Design & Branding</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <section className="flex flex-col md:flex-row items-center gap-10 text-center md:text-left z-10">
        <Card className="bg-gray-900/60 border border-orange-400 p-6 w-full max-w-md backdrop-blur-xl">
          <CardContent>
            <h4 className="text-lg font-bold mb-3 text-orange-400">Four Pillars of Our Promise</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2"><Sparkles size={18}/> We Design Magic, Not Just Mockups</li>
              <li className="flex items-center gap-2"><Globe size={18}/> Rooted in Culture, Wired for Future</li>
              <li className="flex items-center gap-2"><Users size={18}/> One Team, Many Hats</li>
              <li className="flex items-center gap-2"><SendHorizontal size={18}/> Delivery That Exceeds Commitment</li>
            </ul>
          </CardContent>
        </Card>

        <div className="max-w-md space-y-4">
          <h3 className="text-xl font-bold">
            What Sets <span className="text-orange-400">Shri Kishori Design Studio</span> Apart
          </h3>
          <p className="text-gray-300">
            We don’t just design — we translate vision into timeless digital identity. Blending rich cultural aesthetics with forward-thinking creativity, we create standout experiences that connect, inspire, and grow with your brand.
          </p>
        </div>
      </section>

      <motion.div 
        className="bg-gradient-to-r from-orange-500 to-yellow-400 p-1 rounded-xl shadow-xl w-full max-w-4xl z-10"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-black rounded-xl p-6 text-center">
          <h4 className="text-lg md:text-xl font-semibold mb-4 text-white">
            Let’s Build Something That Speaks for Itself
          </h4>
          <p className="text-gray-300 mb-6">
            Your vision deserves more than just execution — it needs thoughtful design, seamless tech and a spark of creativity. Partner with us to craft digital experiences that connect, convert, and captivate.
          </p>
          <Link href="/start-project">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2">
              Start Your Project
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
