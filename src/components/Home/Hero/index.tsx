"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import CardSlider from "./slider";
import { useEffect, useRef, useState, useCallback } from "react";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-8">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-7 col-span-12 mt-14">
            <h1 className="font-bold leading-[1.4] lg:text-[64px] md:text-[58px] text-[44px] lg:text-start text-center text-white mb-6">
              Design That Speaks <br />
              <span className="text-primary">Tradition</span> with a <br /> 
              <span className="text-primary">Modern Voice</span>
            </h1>
            <p className="text-white sm:text-28 text-18 mb-10">
              Shri Kishori Design Studio delivers growth-driven design,
              branding, and development solutions — rooted in creativity,
              powered by technology.
            </p>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <button className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-2 px-7 z-50">
                Let’s Build Together
              </button>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-5 lg:block hidden"
          >
            <div className="ml-18 -mr-60">
              <Image
                src={`${getImagePrefix()}images/hero/banner image.png`}
                alt="Banner"
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
        <CardSlider />
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Hero;
