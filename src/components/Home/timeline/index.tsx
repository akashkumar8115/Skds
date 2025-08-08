"use client";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";
import { CircleHelp } from "@/icons/circlehelp";
import { WandSparkles } from "@/icons/WandSparkles";
import { Compass } from "@/icons/Compass";
import { Settings } from "@/icons/Settings";

const TimeLine = () => {
  // const ref = useRef(null);
  // const inView = useInView(ref);

  // const TopAnimation = {
  //   initial: { y: "-100%", opacity: 0 },
  //   animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
  //   transition: { duration: 0.6, delay: 0.4 },
  // };
  return (
    <section className="md:pt-40 pt-9" id="development">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              Our Creative <span className="text-primary">Process</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 font-medium mx-auto mb-20">
              We work closely with you — from the very first idea to the final pixel — to bring your vision to life.
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src={`${getImagePrefix()}/images/timeline/img.png`}
                  alt="image"
                  width={1220}
                  height={1000}
                  className="w-80% mx-auto"
                  loading="lazy"

                />
              </div>
              <div className="absolute lg::top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Discover</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Understand your brand, vision & audience through thoughtful discussions.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-light_grey bg-opacity-45 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Compass />
                </div>
              </div>
              <div className="absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-light_grey bg-opacity-45 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Settings />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">Refinement</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Fine-tune every detail through feedback and iteration.
                  </p>
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Design</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Turn strategy into beautiful visual solutions — from UI to invitations.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-light_grey bg-opacity-45 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <WandSparkles />
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-light_grey bg-opacity-45 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <CircleHelp />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-nowrap text-28 mb-3">
                    Deliver & Support
                  </h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Deliver final assets or launches with support even after the project ends.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
