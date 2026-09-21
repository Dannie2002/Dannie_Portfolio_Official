import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import noise from "../assets/Noise.png";

const MoonBalls = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 360]
  );

  return (
    <>
      {/* Small Moon */}
      <div
        className="
          absolute z-0 top-40 right-5
          size-30 rounded-full
          shadow-[15px_10px_16px_2px_rgba(224,222,218,0.1)]
          bg-gradient-to-l
          from-[#0b0b0d]
          via-[#0b0b0d]
          to-[#b8b8b8]/40
          opacity-78
        "
      />

      {/* Main Moon */}
      <motion.div
        ref={ref}
        style={{
          rotate,
          transformStyle: "preserve-3d",
        }}
        className="
          absolute z-0 top-60 right-40
          size-60 rounded-full
          bg-gradient-to-r
          from-[#0b0b0d]
          via-[#0b0b0d]
          to-[#978F22]/70
          opacity-78
          shadow-[15px_10px_16px_2px_rgba(151,143,34,0.3)]
        "
        animate={{
          scale: [1, 1.015, 1],
        }}
        transition={{
          scale: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Pulsing Moon */}
      <motion.div
        className="
          absolute z-0 top-30 right-70
          size-10 rounded-full
          shadow-[15px_10px_16px_2px_rgba(151,143,34,0.3)]
          bg-gradient-to-r
          from-[#0b0b0d]
          via-[#0b0b0d]
          to-[#b8b8b8]/40
          opacity-88
        "
        animate={{
          scale: [
            1,
            1.08,
            1.32,
            1.12,
            1.42,
            1.05,
            1,

            1,

            1.18,
            1.38,
            1.08,
            1,

            1,

            1.55,
            1.08,
            1,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [
            0,
            0.08,
            0.15,
            0.2,
            0.27,
            0.36,
            0.44,

            0.58,

            0.64,
            0.7,
            0.76,
            0.82,

            0.91,

            0.96,
            0.98,
            1,
          ],
        }}
      />

      {/* Noise Overlay */}
      <img
        src={noise}
        alt=""
        className="
          absolute inset-0
          h-full w-full
          object-cover
          opacity-10
          mix-blend-multiply
          pointer-events-none
        "
      />
    </>
  );
};

export default MoonBalls;