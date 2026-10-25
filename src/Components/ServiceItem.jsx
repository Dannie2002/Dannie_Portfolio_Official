import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReactiveImage from "./ScrollReactiveImage.jsx";
import mockup from "../assets/Mock-up.jpg";
import media_Equip from "../assets/MediaEquip.jpg";
import audio from "../assets/Audioprod.jpg";
import SplitText from "gsap/SplitText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollVelocityContainer, ScrollVelocityRow } from '../Components/ScrollVelocity';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export const servicesInfo = [
  {
    id: "Branding and Visibility Services.",
    subHeading: "CMC cares about making brands standout in digital dimension.",
    image: mockup,
    expertise: ["Content strategy.", "Brand concept.", "Brand consulting."],
  },
  {
    id: "Graphic designing and publishing.",
    subHeading:
      "We create digital experiences that connect brands with their audiences.",
    image: mockup,
    expertise: [
      "Web design.",
      "Digital strategy.",
      "User experience.",
      "Brand strategy.",
    ],
  },
  {
    id: "Audio and visual media production",
    subHeading: "We are experts in producing quality sounds for all audience.",
    image: audio,
    expertise: ["Music production.", "Radio adverts.", "podcasts."],
  },
  {
    id: "Professional and creative writing",
    subHeading: "We are experts in producing quality sounds for all audience.",
    image: audio,
    expertise: ["Music production.", "Radio adverts.", "podcasts."],
  },
  {
    id: "Selling media equipments.",
    subHeading: "Buy media-related equipments from the most trusted brand.",
    image: media_Equip,
    expertise: ["Studio gears.", "Cameras.", "Laptops."],
  },
];

const ServiceItem = ({ service, isOpen, onToggle }) => {
  const processHeadingRef = useRef(null);
  const serviceItemRef = useRef(null);

  useGSAP(() => {
    const heading = processHeadingRef.current;
    if (!heading) return;

    const heroSplit = new SplitText(heading, {
      type: "lines, words, chars",
      mask: "chars",
    });

    const chars = heroSplit.chars;

    // --------------------------------
    // ENTRY REVEAL — PLAYS ONCE
    // --------------------------------

    const entryTl = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
        once: true,
      },
    });

    const groupSize = 17;
    const charStagger = 0.005;

    for (let i = 0; i < chars.length; i += groupSize) {
      const group = chars.slice(i, i + groupSize);

      entryTl.from(group, {
        opacity: 0,
        yPercent: 120,
        duration: 0.03,
        stagger: charStagger,
        ease: "expo.out",
      });

      if (i + groupSize < chars.length) {
        entryTl.to({}, {
          duration: 0.05,
        });
      }
    }

    return () => {
      heroSplit.revert();
    };
  }, {
    scope: processHeadingRef,
  });

  return (
    <div
      className="lg:px-12 px-0"
    >
      <div className="w-full border-t border-[#909090]/60">

        {/* Service Heading */}
        <button
          ref={serviceItemRef}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? "Close" : "Open"} ${service.id}`}
          className="w-full btn relative text-left cursor-pointer"
        >
          <div className="w-full lg:px-6">
            <div className="py-6 flex flex-col items-start justify-between">
              <div
                className="flex w-full lg:gap-12 gap-6 items-start justify-between"
              >

                <h2
                  ref={processHeadingRef}
                  className="dmsans uppercase text-[#ededed] font-semibold text-[20px] lg:text-[32px]"
                >
                  {service.id}
                </h2>

                {/* Plus / Minus */}
                <motion.svg
                  className="lg:size-15 size-8 shrink-0"
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
              onAnimationComplete={() => {
                if (isOpen) {
                  serviceItemRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }
              }}
            >
              <div className="w-full lg:mt-12 mt-4 lg:px-6 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

                {/* Description */}
                <motion.div
                  className="w-full min-w-0 lg:col-span-4"
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
                    <h2 className="text-[#c7c4c4] font-medium leading-normal text-[16px] lg:text-[18px]">
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
                  className="w-full min-w-0 overflow-hidden lg:col-span-6"
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
                  <div className="relative h-[220px] lg:h-[400px] w-full">
                    <ScrollReactiveImage
                      src={service.image}
                      className="size-full hover:grayscale object-cover"
                    />
                  </div>
                </motion.div>

                {/* Expertise */}
                <div className="w-full min-w-0 lg:col-span-2 lg:items-end lg:justify-start">
                
                    <ScrollVelocityContainer className="z-90 w-full min-w-0 flex flex-col gap-4">
                         <ScrollVelocityRow baseVelocity={-12} className="w-full min-w-0 flex gap-6">
                            <div className='flex px-6   items-center justify-center gap-6 min-w-[150px]' >
                                            {service.expertise.map((item, index) => (
                                       <motion.h4
                      key={item}
                      className="text-[#ededed] bg-[#909090]/30 px-1.5 py-1 rounded-full  text-[15px]"
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
               
                         </ScrollVelocityRow>
                     

                    </ScrollVelocityContainer>
              
               
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