"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface EmailProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const flapVariants: Variants = {
  normal: { d: "M3 5 L12 13 L21 5" },
  animate: {
    d: [
      "M3 5 L12 13 L21 5", // closed
      "M3 5 L12 8 L21 5",  // open (flap up)
      "M3 5 L12 13 L21 5", // closed again
    ],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const envelopeVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.6,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const Emailicon = ({
  width = 28,
  height = 28,
  strokeWidth = 3,
  stroke = "#f7931a",
  ...props
}: EmailProps) => {
  const controls = useAnimation();

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {/* Envelope Body */}
        <motion.rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          ry="2"
          variants={envelopeVariants}
          animate={controls}
          initial="normal"
        />
        {/* Envelope Flap (animated polyline) */}
        <motion.path
          variants={flapVariants}
          animate={controls}
          initial="normal"
          fill="none"
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
};

export { Emailicon };
