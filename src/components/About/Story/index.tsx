"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const Story = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <section className="md:pt-28" id="work">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center mt-4">
          <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <p className="sm:text-28 text-18 text-white mb-6">
              Our Story <span className="text-primary">& Vision</span>
            </p>
            <h1 className="font-semibold leading-[1.2] lg:text-[52px] md:text-[46px] text-[35px] lg:text-start text-center text-white mb-6">
              Blending Roots with Rhythm of the Future. 
            </h1>
            <p className="text-white sm:text-28 text-18 mb-5">
              At Shri Kishori Design Studio, tradition meets innovation. We design with soul — crafting visuals that feel as good as they look. From sacred Indian motifs to sleek modern grids, our work reflects balance, beauty, and bold thinking. 
            </p>
             <p className="font-semibold text-white sm:text-28 text-18">Every pixel, every pattern — made to matter.</p>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12 mt-10">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
                src= {`${getImagePrefix()}images/about/about 1.png`}
                alt="image"
                width={600}
                height={425}
                style={{ transform: "scale(0.85)", transformOrigin: "top left" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
