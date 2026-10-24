
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReactiveImage from "./ScrollReactiveImage.jsx";
import mockup from "../assets/Mock-up.jpg";

export const servicesInfo = [
  {
    id: "Branding and Visibility Services.",
    subHeading:
      "CMC cares about making brands standout in digital dimension.",
    image: mockup,
    expertise: [
      "Content strategy.",
      "Brand concept.",
      "Brand consulting.",
    ],
  },
  {
    id: "Digital Experience Services.",
    subHeading:
      "We create digital experiences that connect brands with their audiences.",
    image: mockup,
    expertise: [
      "Web design.",
      "Digital strategy.",
      "User experience.",
    ],
  },
  {
    id: "Creative Communication Services.",
    subHeading:
      "We develop creative communication that gives brands a distinctive voice.",
    image: mockup,
    expertise: [
      "Creative direction.",
      "Visual communication.",
      "Campaign development.",
    ],
  },
];

const ServiceItem = ({ service, isOpen, onToggle }) => {
  return (
    <div className="px-12">
      <div className="w-full border-t border-[#909090]/70">

        {/* Service Heading */}
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="w-full text-left cursor-pointer"
        >
          <div className="w-full lg:px-6">
            <div className="py-6 flex flex-col items-start justify-center">
              <div className="flex gap-12 items-start">
                <h2 className="dmsans uppercase text-[#ededed] font-semibold text-[32px]">
                  {service.id}
                </h2>

                {/* Plus / Minus */}
                <motion.svg
                  className="size-15 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <path
                    d="M6 12L18 12"
                    stroke="#ededed"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <motion.path
                    d="M12 6V18"
                    stroke="#ededed"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.svg>
              </div>
            </div>
          </div>
        </button>

        {/* Service Content */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="service-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: {
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.35,
                  ease: "easeOut",
                },
              }}
              className="overflow-hidden"
            >
              <div className="w-full mt-12 px-6 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* Description */}
                <motion.div
                  className="col-span-4"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex flex-col items-start">
                    <h2 className="text-[#ededed] font-medium leading-normal text-[24px]">
                      {service.subHeading}
                    </h2>

                    {/* Temporary button styling */}
                    <motion.div
                      className="mt-12 px-6 py-2 border border-[#ededed]"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.25,
                      }}
                    >
                      <h4 className="text_para">See Service</h4>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Image Reveal */}
                <motion.div
                  className="col-span-6 overflow-hidden"
                  initial={{
                    clipPath: "inset(100% 0% 0% 0%)",
                  }}
                  animate={{
                    clipPath: "inset(0% 0% 0% 0%)",
                  }}
                  exit={{
                    clipPath: "inset(0% 0% 100% 0%)",
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="relative h-[400px] w-full">
                    <ScrollReactiveImage
                      src={service.image}
                      className="size-full grayscale object-cover"
                    />
                  </div>
                </motion.div>

                {/* Expertise */}
                <div className="col-span-2 flex flex-col items-end justify-end">
                  {service.expertise.map((item, index) => (
                    <motion.h4
                      key={item}
                      className="text-[#909090] text-[14px]"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.22 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {item}
                    </motion.h4>
                  ))}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceItem;
