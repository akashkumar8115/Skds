"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Reviews from "./reviews";
import { getImagePrefix } from "@/utils/utils";

const Founder = () => {
  return (
    <section className="md:pt-44 sm:pt-24 pt-1 -mt-20">

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-32"
          >
            <Image
              src= {`${getImagePrefix()}/images/about/imgPortfolio.png`}
              alt="Portfolio"
              width={780}
              height={700}
              style={{ transform: "scale(0.85)", transformOrigin: "bottom right" }}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-28 text-18 text-muted mb-4">
              Meet Our <span className="text-primary">Visionary</span>
            </p>
            <h2 className="text-white sm:text-36 text-27 font-medium mb-5">
              Guided by <span className="text-primary">Vision,</span> <br/> Grounded in <span className="text-primary">Values.</span>
            </h2>
            <p className="text-white sm:text-lg text-sm mb-5">
                At the heart of Shri Kishori Design Studio is a founder driven by purpose — blending artistic intuition with strategic clarity. Every project reflects a commitment to elevate brands through soulful design, thoughtful innovation, and a belief that creativity, when rooted in culture, can transform everything.
            </p>
          </motion.div>
        </div>
        <Reviews/>
      </div>
    </section>
  );
};

export default Founder;
