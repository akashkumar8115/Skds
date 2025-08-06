"use client";

import { motion, useAnimation } from "motion/react";
import type { Variants } from "motion/react";

interface CallIconProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const centerVariants: Variants = {
  normal: { scale: 1 },
  animate: {
    scale: [1, 1.3, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

const ringVariants: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 2.5,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

const CallIcon = ({
  width = 28,
  height = 28,
  strokeWidth = 3,
  stroke = "#f7931a",
  ...props
}: CallIconProps) => {
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
        {/* Pulsing Phone icon */}
        <motion.path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 4.18 2 2 0 0 1 4.09 2h3a2 2 0 0 1 2 1.72c.12.82.3 1.61.54 2.38a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.7-1.7a2 2 0 0 1 2.11-.45c.77.24 1.56.42 2.38.54a2 2 0 0 1 1.72 2z"
          variants={centerVariants}
          animate={controls}
          initial="normal"
        />
        
      </svg>
    </div>
  );
};

export { CallIcon };
