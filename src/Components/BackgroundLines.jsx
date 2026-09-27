import React from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";

const paths = [
  "M720 450C720 450 720 450 720 450",
  "M720 450C650 380 600 350 520 330",
  "M720 450C790 380 840 350 920 330",
  "M720 450C650 450 560 450 470 450",
  "M720 450C790 450 880 450 970 450",
  "M720 450C650 520 600 550 520 570",
  "M720 450C790 520 840 550 920 570",

  "M720 450C620 300 500 260 350 250",
  "M720 450C820 300 940 260 1090 250",
  "M720 450C620 600 500 640 350 650",
  "M720 450C820 600 940 640 1090 650",

  "M720 450C580 350 430 320 250 330",
  "M720 450C860 350 1010 320 1190 330",
  "M720 450C580 550 430 580 250 570",
  "M720 450C860 550 1010 580 1190 570",

  "M720 450C560 250 400 180 200 180",
  "M720 450C880 250 1040 180 1240 180",
  "M720 450C560 650 400 720 200 720",
  "M720 450C880 650 1040 720 1240 720",

  "M720 450C500 450 300 450 100 450",
  "M720 450C940 450 1140 450 1340 450",
];

const colors = [
  "#635985",
  "#eef6c5",
  "#eef6c5",
  "#eef6c5",
  "#ff0000",
  "#eef6c5",
  "#eef6c5",
  "#eef6c5",
  "#635985",
  "#eef6c5",
  "#ff0000",
  "#eef6c5",
  "#eef6c5",
  "#635985",
  "#eef6c5",
  "#ff0000",
  "#eef6c5",
  "#eef6c5",
  "#eef6c5",
  "#eef6c5",
  "#eef6c5",
];

const wrap = (min, max, value) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

function AnimatedPath({
  path,
  color,
  index,
  progress,
  opacity,
}) {
  const dashOffset = useTransform(
    progress,
    (value) => -(value + index * 35)
  );

  return (
    <motion.path
      d={path}
      fill="none"
      stroke={color}
      strokeWidth="8"
      strokeLinecap="round"
      strokeDasharray="45 700"
      style={{
        strokeDashoffset: dashOffset,
        opacity,
      }}
    />
  );
}

export default function BackgroundLines({
  duration = 8,
  opacity = 0.35,
  className = "",
}) {
  const progress = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const speed = 1200 / duration;
    const next = progress.get() + speed * (delta / 1000);

    progress.set(wrap(0, 700, next));
  });

  return (
    <svg
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 z-0 w-full h-full pointer-events-none ${className}`}
    >
      {paths.map((path, index) => (
        <AnimatedPath
          key={index}
          path={path}
          color={colors[index]}
          index={index}
          progress={progress}
          opacity={opacity}
        />
      ))}
    </svg>
  );
}