"use client";

import { motion, useAnimation } from 'framer-motion';
import type { Variants } from "framer-motion";

interface LocationProps extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const bounceVariants: Variants = {
  normal: { y: 0, scale: 1 },
  animate: {
    y: [0, -3, 0],
    scale: [1, 1.1, 1],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const pulseVariants: Variants = {
  normal: { r: 0, opacity: 0 },
  animate: {
    r: [0, 6],
    opacity: [0.5, 0],
    transition: {
      duration: 1.4,
      repeat: Infinity,
      repeatDelay: 1,
    },
  },
};

const Location = ({
  width = 28,
  height = 28,
  strokeWidth = 3,
  stroke = "#f7931a",
  ...props
}: LocationProps) => {
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
        {/* Pointer */}
        <motion.path
          d="M12 21s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z"
          variants={bounceVariants}
          animate={controls}
          initial="normal"
        />
        {/* Center Circle */}
        <motion.circle
          cx="12"
          cy="8"
          r="2"
          variants={bounceVariants}
          animate={controls}
          initial="normal"
        />
        {/* Pulse Ring */}
        <motion.circle
          cx="12"
          cy="8"
          variants={pulseVariants}
          animate={controls}
          initial="normal"
          stroke={stroke}
          fill="none"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export { Location };
