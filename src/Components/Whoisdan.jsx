import React from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import digital from "../assets/DigitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import banner from "../assets/ISP.jpg";
import branding from "../assets/ISP.jpg";
import servicedesk from "../assets/ServiceDesk.jpg";

import SectionHeader from "./SectionHeader.jsx";
import MoonBalls from "./MoonBalls.jsx";
import Scribble from "./Scribble.jsx";
import WorkExperience from "./WorkExperience.jsx";

import Communication from "../SVGS/Communication.jsx";
import AnalyticalThinking from "../SVGS/AnalyticalThinking.jsx";
import ThreeStars from "../SVGS/ThreeStars.jsx";
import WebPerformance from "../SVGS/WebPerformance.jsx";
import Telecom from "../SVGS/Telecom.jsx";
import Energy from "../SVGS/Energy.jsx";
import ContactPlane from "../SVGS/ContactPlane.jsx";
import ArrowDown from "../SVGS/ArrowDown.jsx";
import Github from "../SVGS/Github.jsx";
import Web from "../SVGS/Web.jsx";

const ResponsibilityMarker = () => (
  <svg
    className="size-5 shrink-0"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.49991 0.877045C3.84222 0.877045 0.877075 3.84219 0.877075 7.49988C0.877075 11.1575 3.84222 14.1227 7.49991 14.1227C11.1576 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1576 0.877045 7.49991 0.877045ZM1.82708 7.49988C1.82708 4.36686 4.36689 1.82704 7.49991 1.82704C10.6329 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6329 13.1727 7.49991 13.1727C4.36689 13.1727 1.82708 10.6329 1.82708 7.49988ZM10.1589 5.53774C10.3178 5.31191 10.2636 5.00001 10.0378 4.84109C9.81194 4.68217 9.50004 4.73642 9.34112 4.96225L6.51977 8.97154L5.35681 7.78706C5.16334 7.59002 4.84677 7.58711 4.64973 7.78058C4.45268 7.97404 4.44978 8.29061 4.64325 8.48765L6.22658 10.1003C6.33054 10.2062 6.47617 10.2604 6.62407 10.2483C6.77197 10.2363 6.90686 10.1591 6.99226 10.0377L10.1589 5.53774Z"
      fill="#ededed"
    />
  </svg>
);

const Whoisdan = () => {
  /* --------------------------------
     Animation Variants
  -------------------------------- */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1.4,
        ease: "easeOut",
      },
    },
  };

  /* --------------------------------
     Professional Experience Cards
  -------------------------------- */

  const productCards = [
    {
      title: "Service Desk Engineer",
      company: "inq. digital Ltd.",
      duration: "Feb 2026 — Present",
      image: banner,
      description:
        "I serve as the first point of customer for clients and partners.",
      responsibilities: [
        "Monitor and troubleshoot client connectivity and network incidents",
        "Handle and track service desk tickets and customer requests",
        "Investigate network faults, packet loss, latency and service interruptions",
        "Coordinate escalations with NOC and field technical teams",
        "Monitor SLA compliance and follow up on service restoration",
        "Prepare incident updates and RFOs for network outages",
         "Coordinate escalations with NOC and field technical teams",
        "Monitor SLA compliance and follow up on service restoration",
        "Prepare incident updates and RFOs for network outages",
      ],
    },

    {
      title: "ICT Support Officer",
      company: "Balaka District Council",
      duration: "Sept 2025 — Jan 2026",
      image: digital,
      description:
        "Provided ICT support across hardware, software, networking and field operations while assisting users and project teams with technology-related requirements.",
      responsibilities: [
        "Provided hardware and software technical support",
        "Troubleshot first-line internet and network connectivity issues",
        "Performed Ethernet termination and structured cabling tasks",
        "Supported field data entry and digital information management",
        "Assisted project teams during field and council activities",
      ],
    },

    {
      title: "Technical Trainer",
      company: "Various Partners",
      duration: "2024 — 2025",
      image: digital,
      description:
        "Provided ICT support across hardware, software, networking and field operations while assisting users and project teams with technology-related requirements.",
      responsibilities: [
        "Provided hardware and software technical support",
        "Troubleshot first-line internet and network connectivity issues",
        "Performed Ethernet termination and structured cabling tasks",
        "Supported field data entry and digital information management",
        "Assisted project teams during field and council activities",
      ],
    },
  ];

  /* --------------------------------
     Expertise Slides
  -------------------------------- */

  const expertiseSlides = [
    {
      image: banner,
      title: "Telecommunications",
      description: "ISP • GPON • FTTH • Network Infrastructure",
    },
    {
      image: photography,
      title: "Frontend Engineering",
      description: "React • JavaScript • UI • Git",
    },
    {
      image: digital,
      title: "Data & Analytics",
      description: "SQL • Python • Tableau • Data Analysis",
    },
    {
      image: branding,
      title: "ICT & Systems",
      description: "Technical Support • Networking • Troubleshooting",
    },
  ];

  const [expertiseIndex, setExpertiseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setExpertiseIndex(
        (prev) => (prev + 1) % expertiseSlides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [expertiseSlides.length]);

  /* --------------------------------
     Product Card
  -------------------------------- */

  const ProductCard = ({
    title,
    company,
    duration,
    description,
    responsibilities,
    index,
  }) => {
    const [expanded, setExpanded] = useState(false);
    const collapseTimer = useRef(null);

    const openResponsibilities = () => {
      if (collapseTimer.current) {
        clearTimeout(collapseTimer.current);
        collapseTimer.current = null;
      }

      setExpanded(true);
    };

    const closeResponsibilities = () => {
      if (collapseTimer.current) {
        clearTimeout(collapseTimer.current);
      }

      // Small delay prevents the hover area from flickering while
      // the row changes height during the animation.
      collapseTimer.current = setTimeout(() => {
        setExpanded(false);
        collapseTimer.current = null;
      }, 180);
    };

    useEffect(() => {
      return () => {
        if (collapseTimer.current) {
          clearTimeout(collapseTimer.current);
        }
      };
    }, []);

    return (
      <motion.div
        layout
        variants={itemVariants}
        transition={{
          layout: {
            type: "spring",
            stiffness: 520,
            damping: 42,
            mass: 0.65,
          },
        }}
        className="w-full border-b border-(--text-color)/60 py-8"
      >
        <p className="text-[#909090] geonova uppercase tracking-[0.2em] text-4xl mt-4">
          {String(index + 1).padStart(2, "0")}
        </p>

        <div className="flex_container !items-stretch">
          {/* LEFT: number, title (position), duration */}
          <div className="lg:w-1/4 w-full card_space">
            <h2 className="lg:mt-3 geonova text-[42px] leading-[42.7px] card_heading">
              {title}
            </h2>

            <p className="mt-2 text-[#fffced]/70">{company}</p>
            <p className="mt-1 text-[#fffced]/70">{duration}</p>
          </div>

          {/* MIDDLE: short description */}
          <div className="lg:w-1/4 w-full">
            <p className="text_para text-[#fffced]">{description}</p>
          </div>

          {/* RIGHT: responsibilities preview and expandable list */}
          <div
            onMouseEnter={openResponsibilities}
            onMouseLeave={closeResponsibilities}
            onTouchStart={openResponsibilities}
            className="group lg:w-1/2 w-full"
          >
            <div className="relative w-full">
              <h4 className="zalando card_heading text-[14px]">
                Key responsibilities:
              </h4>

              <ul
                id={`responsibilities-${index}`}
                className="mt-4 flex flex-col gap-2"
              >
                {responsibilities.slice(0, 3).map((responsibility, i) => (
                  <li
                    key={i}
                    className="text_para flex gap-1 text-[#fffced]/70"
                  >
                    <span className="mr-2 shrink-0">
                      <ResponsibilityMarker />
                    </span>
                    {responsibility}
                  </li>
                ))}

                <AnimatePresence initial={false}>
                  {expanded &&
                    responsibilities.slice(3).map((responsibility, i) => (
                      <motion.li
                        key={`extra-${index}-${i}`}
                        initial={{
                          height: 0,
                          opacity: 0,
                          y: -8,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          y: -8,
                        }}
                        transition={{
                          height: {
                            type: "spring",
                            stiffness: 520,
                            damping: 42,
                            mass: 0.55,
                          },
                          y: {
                            type: "spring",
                            stiffness: 520,
                            damping: 38,
                            mass: 0.55,
                          },
                          opacity: {
                            duration: 0.16,
                            ease: "easeOut",
                          },
                        }}
                        className="text_para flex gap-1 overflow-hidden text-[#fffced]/90"
                      >
                        <span className="mr-2 shrink-0">
                          <ResponsibilityMarker />
                        </span>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                </AnimatePresence>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  /* --------------------------------
     Experience Scroll State
  -------------------------------- */

  const [activeIndex, setActiveIndex] = useState(null);
  const [scrollExperience, setScrollExperience] = useState(0);

  const experienceRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              entry.target.dataset.experience
            );

            setScrollExperience(index);
          }
        });
      },
      {
        threshold: 0.95,
      }
    );

    experienceRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      experienceRefs.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  /* --------------------------------
     Image Rotation
  -------------------------------- */

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

  /* --------------------------------
     PROFESSIONAL WORK TRACING BEAM
  -------------------------------- */

  const professionalWorkRef = useRef(null);

  /*
    IMPORTANT:
    This ref belongs to the actual experience
    cards/content, NOT to the tracing beam.
  */
  const beamContentRef = useRef(null);

  const [beamHeight, setBeamHeight] = useState(1);

  const {
    scrollYProgress: beamScrollProgress,
  } = useScroll({
    target: professionalWorkRef,
    offset: ["start start", "end start"],
  });

  /*
    Measure the actual height of the experience
    cards so the SVG beam has the same physical
    height as the content.
  */
  useEffect(() => {
    const updateBeamHeight = () => {
      if (!beamContentRef.current) return;

      const height =
        beamContentRef.current.getBoundingClientRect().height;

      setBeamHeight(height);
    };

    updateBeamHeight();

    const resizeObserver = new ResizeObserver(
      updateBeamHeight
    );

    if (beamContentRef.current) {
      resizeObserver.observe(beamContentRef.current);
    }

    window.addEventListener(
      "resize",
      updateBeamHeight
    );

    return () => {
      resizeObserver.disconnect();

      window.removeEventListener(
        "resize",
        updateBeamHeight
      );
    };
  }, []);

  /*
    Beam gradient movement.
  */

  const rawBeamY1 = useTransform(
    beamScrollProgress,
    [0, 0.8],
    [50, beamHeight]
  );

  const rawBeamY2 = useTransform(
    beamScrollProgress,
    [0, 1],
    [50, Math.max(beamHeight - 200, 50)]
  );

  const beamY1 = useSpring(rawBeamY1, {
    stiffness: 500,
    damping: 90,
  });

  const beamY2 = useSpring(rawBeamY2, {
    stiffness: 500,
    damping: 90,
  });

  /* --------------------------------
     RETURN
  -------------------------------- */

  return (
    <section className="bg-(--background-color) min:h-screen flex flex-col lg:items-start lg:justify-center relative w-full">

      <MoonBalls />

      <div className="Section_wrapper z-10">

        {/* --------------------------------
            Section Header
        -------------------------------- */}

        <div className="section_header mt-34">

          <motion.h1 className="page_title">
            My carrer overview
          </motion.h1>

          <h3 className="Section_title text-[#fffced]">
            IT Service desk Engineer & Frontend Engineer
          </h3>

        </div>

        {/* --------------------------------
            Introduction
        -------------------------------- */}

        <div className="flex_container">

          <div className="lg:w-[40%] w-full flex flex-col items-start justify-between">

            <motion.p
              className="text_para max-w-[460px] text-[#fffced]"
            >
              Hands-on experience in telecommunications and ISP
              operations, with practical exposure to ISP network
              architecture, Internet backbone connectivity, and
              Fibre-to-the-Home (FTTH) installation.
            </motion.p>

            <div
              className="
                bg-transparent
                mt-4
                lg:mt-34
                py-2
                gap-2
                outline-[1.2px]
                outline-(--primary-color)
                items-center
                rounded-full
                px-6
                flex
              "
            >
              <Web fill="#978F66" size={33} />

              <Energy
                fill="#978F66"
                size={30}
              />

              <AnalyticalThinking
                color="#978F66"
                size={33}
              />

              <ContactPlane
                fill="#978F66"
                size={30}
              />

              <ThreeStars
                color="#978F66"
                size={33}
              />
            </div>

          </div>

          {/* --------------------------------
              Icons
          -------------------------------- */}

          <div className="flex hidden flex-color lg:flex-col gap-4">

            <motion.div
              className="z-50"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Communication
                color="#978F66"
                size={43}
              />
            </motion.div>

            <Github
              color="#978F66"
              size={33}
            />

            <Telecom
              fill="#978F66"
              size={33}
            />

            <ArrowDown
              color="#978F22"
              className="mt-20"
              size={43}
            />

          </div>

          {/* --------------------------------
              Image / Expertise Grid
          -------------------------------- */}

          <div className="Grid_4 grid-cols-3 mt-0 lg:w-1/2 gap-4 z-50">

            <div className="mt-6 outline-(--text-colour)/50 outline-3 overflow-hidden rounded-2xl lg:h-[360px] h-[220px]">

              <img
                src={photography}
                className="size-full object-cover grayscale"
              />

            </div>

            <motion.div
              ref={ref}
              className="mt-12 rounded-2xl overflow-hidden lg:h-[360px] h-[210px]"
            >

              <img
                src={branding}
                className="size-full object-cover"
              />

            </motion.div>

            <div>

              <div className="flex">

                {expertiseSlides.map(
                  (slide, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`Show ${slide.title}`}
                      onClick={() =>
                        setExpertiseIndex(index)
                      }
                      className="
                        relative
                        flex
                        items-center
                        justify-center
                        p-1
                      "
                    >
                      <motion.div
                        animate={{
                          width:
                            expertiseIndex === index
                              ? 24
                              : 7,

                          height: 7,

                          opacity:
                            expertiseIndex === index
                              ? 1
                              : 0.55,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: "easeOut",
                        }}
                        className="
                          rounded-full
                          bg-(--primary-color)
                        "
                      />
                    </button>
                  )
                )}

              </div>

              <div
                className="
                  mt-18
                  relative
                  rounded-2xl
                  flex
                  flex-col
                  items-center
                  justify-center
                  overflow-hidden
                  lg:h-[370px]
                  h-[200px]
                "
              >

                <div>

                  {/* Image */}

                  <AnimatePresence mode="sync">

                    <motion.img
                      key={expertiseIndex}
                      src={
                        expertiseSlides[
                          expertiseIndex
                        ].image
                      }
                      className="
                        absolute
                        inset-0
                        size-full
                        rounded-2xl
                        object-cover
                        grayscale
                      "
                      initial={{
                        x: "100%",
                      }}
                      animate={{
                        x: "0%",
                      }}
                      exit={{
                        x: "-5%",
                      }}
                      transition={{
                        duration: 0.05,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                    />

                  </AnimatePresence>

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/20
                      to-transparent
                      pointer-events-none
                    "
                  />

                  <div
                    className="
                      left-5
                      
                      rotate-270
                      bottom-16
                      z-20
                    "
                  >

                    <AnimatePresence mode="wait">

                      <motion.div
                        key={expertiseIndex}
                        initial={{
                          opacity: 0,
                          y: 12,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: -8,
                        }}
                        transition={{
                          duration: 0.45,
                        }}
                      >

                        <p className="text-[#978F66] text-xs tracking-[0.2em] uppercase mb-1">
                          0{expertiseIndex + 1}
                        </p>

                        <h3 className="card_heading">
                          {
                            expertiseSlides[
                              expertiseIndex
                            ].title
                          }
                        </h3>

                        <p className="text-[#fffced]/70 text-xs mt-1">
                          {
                            expertiseSlides[
                              expertiseIndex
                            ].description
                          }
                        </p>

                      </motion.div>

                    </AnimatePresence>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* --------------------------------
            PROFESSIONAL WORK
        -------------------------------- */}

        <div
          ref={professionalWorkRef}
          className="
          
            relative
            w-full
            mt-12
            flex
            flex-col
            lg:flex-row
            gap-10
            lg:gap-12
            items-start
          "
        >


          <div
            className="
              pointer-events-none
              z-99
              w-[20px]
              shrink-0
            "
          >

            <div>

              {/* Top node */}

              <motion.div
                animate={{
                  boxShadow:
                    beamScrollProgress.get() > 0
                      ? "0 0 18px rgba(191,168,240,0.35)"
                      : "0 3px 8px rgba(0,0,0,0.24)",
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  flex
                  size-6
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#978F66]/70
                  bg-[#0b0b0d]
                "
              >

                <motion.div
                  animate={{
                    backgroundColor:
                      beamScrollProgress.get() > 0
                        ? "#bfa8f0"
                        : "#978F66",
                  }}
                  className="size-2 rounded-full"
                />

              </motion.div>

              {/* SVG Beam */}

              <svg
                viewBox={`0 0 20 ${beamHeight}`}
                width="20"
                height={beamHeight}
                className="block overflow-visible"
                aria-hidden="true"
              >

                {/* Base path */}

                <path
                  d={`M 10 0 V ${beamHeight}`}
                  fill="none"
                  stroke="#fffced"
                  strokeOpacity="0.10"
                  strokeWidth="1"
                />

                {/* Tracing gradient */}

                <motion.path
                  d={`M 10 0 V ${beamHeight}`}
                  fill="none"
                  stroke="url(#professionalBeamGradient)"
                  strokeWidth="2"
                />

                <defs>

                  <motion.linearGradient
                    id="professionalBeamGradient"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    x2="0"
                    y1={beamY1}
                    y2={beamY2}
                  >

                    <stop
                      stopColor="#fffced"
                      stopOpacity="0"
                    />

                    <stop
                      offset="0.35"
                      stopColor="#978F66"
                    />

                    <stop
                      offset="0.55"
                      stopColor="#bfa8f0"
                    />

                    <stop
                      offset="0.75"
                      stopColor="#635985"
                    />

                    <stop
                      offset="1"
                      stopColor="#635985"
                      stopOpacity="0"
                    />

                  </motion.linearGradient>

                </defs>

              </svg>

            </div>

          </div>

          {/* --------------------------------
              EXPERIENCE CONTENT
              
              IMPORTANT:
              beamContentRef measures THIS,
              not the beam.
          -------------------------------- */}

          <div
            ref={beamContentRef}
            className="
              w-full
              lg:w-[100%]
              z-0
              flex
              flex-col
              gap-8
            "
          >

            <div
              className="
                grid
                grid-cols-1
                lg:grid-cols-1
                gap-6
                lg:gap-8
              "
            >

              {productCards.map(
                (card, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      experienceRefs.current[
                        index
                      ] = element;
                    }}
                    data-experience={index}
                  >
                    <ProductCard
                      index={index}
                      title={card.title}
                      company={card.company}
                      duration={card.duration}
                      description={card.description}
                      responsibilities={card.responsibilities}
                    />
                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Whoisdan;