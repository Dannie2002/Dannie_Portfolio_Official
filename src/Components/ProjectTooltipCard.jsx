```jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ProjectTooltipCard = ({ project, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 8,
              scale: 0.94,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              bottom-[calc(100%+16px)]
              z-[100]
              w-[320px]
              -translate-x-1/2
            "
          >
            <div className="overflow-hidden rounded-xl border border-[#fffced]/10 bg-[#101011]/95 p-2 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="aspect-video w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#101011]/60 via-transparent to-transparent" />
              </div>

              <div className="px-2 pb-2 pt-3">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#fffced]">
                  {project.title}
                </p>

                {project.description && (
                  <p className="mt-1 text-xs leading-relaxed text-[#fffced]/60">
                    {project.description}
                  </p>
                )}
              </div>
            </div>

            <div
              className="
                absolute
                left-1/2
                top-full
                -translate-x-1/2
                border-l-[7px]
                border-r-[7px]
                border-t-[7px]
                border-l-transparent
                border-r-transparent
                border-t-[#101011]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectTooltipCard;
```
