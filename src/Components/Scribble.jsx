import React from "react";
import { motion } from "framer-motion";

export default function Scribble({
  color = "#000000",
  size = 24,
  className = "",
  delay = 0,
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 -1 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={className}
    >
      <g
        transform="translate(-377, -601)"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g transform="translate(375,598)">
          <motion.path
            d="M3,13.5793719 C9.98914658,5.83454059 14.2442185,2.78592627 15.7652158,4.43352892 C18.0467117,6.90493289 7.55581053,16.1455344 9.47834357,17.954063 C11.4008766,19.7625917 16.9959382,11.5719148 19.0578414,12.4109285 C21.1197445,13.2499421 16.1152903,18.1722847 17.4055985,18.9997829 C18.2658039,19.5514483 19.3191667,19.0606734 20.5656867,17.527458"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay,
              ease: "easeInOut",
            }}
          />
        </g>
      </g>
    </svg>
  );
}