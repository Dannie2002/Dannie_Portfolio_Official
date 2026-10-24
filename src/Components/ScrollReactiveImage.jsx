import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const ScrollReactiveImage = ({ src, alt = "", className = "" }) => {
  const wheelVelocity = useMotionValue(0);

  // Heavy, lazy response
  const smoothVelocity = useSpring(wheelVelocity, {
    damping: 35,
    stiffness: 70,
    mass: 1.8,
  });

  /*
   * The image doesn't immediately follow the wheel.
   * It slowly catches up.
   */

  const x = useTransform(
    smoothVelocity,
    [-100, 0, 100],
    [-45, 0, 45]
  );

  const y = useTransform(
    smoothVelocity,
    [-100, 0, 100],
    [-18, 0, 18]
  );

  const rotate = useTransform(
    smoothVelocity,
    [-100, 0, 100],
    [-2.5, 0, 2.5]
  );

  const scale = useTransform(
    smoothVelocity,
    [-100, 0, 100],
    [1.035, 1, 1.035]
  );

  useEffect(() => {
    let timeout;

    const handleWheel = (event) => {
      const velocity = Math.max(
        -100,
        Math.min(100, event.deltaY * 0.45)
      );

      /*
       * Don't slam the image.
       * Give it a gentle target to chase.
       */
      wheelVelocity.set(velocity);

      /*
       * Slowly bring the target back to zero.
       * The spring then lazily follows it.
       */
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        wheelVelocity.set(0);
      }, 180);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: true,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      clearTimeout(timeout);
    };
  }, [wheelVelocity]);

  return (
    <div className="relative h-[400px] w-full  overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{
          x,
          y,
          rotate,
          scale,
        }}
        className={`w-full h-full object-cover will-change-transform ${className}`}
      />
    </div>
  );
};

export default ScrollReactiveImage;