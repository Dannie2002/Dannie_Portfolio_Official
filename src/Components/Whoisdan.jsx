import React from "react";
import { motion, AnimatePresence,  useTransform, useScroll,useMotionValueEvent} from "framer-motion";
import { Check } from "lucide-react";
import {Children, useEffect, useRef, useState } from "react";
import digital from "../assets/digitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import banner from "../assets/ISP.jpg"
import branding from "../assets/ISP.jpg";
import noise from "../assets/noise.png";
import SectionHeader from "./SectionHeader.jsx";
import servicedesk from "../assets/ServiceDesk.jpg"
import MoonBalls from "./MoonBalls.jsx";
import Scribble from "./Scribble.jsx";
import Communication from "../SVGS/Communication.jsx";
import ThreeStars from "../SVGS/ThreeStars.jsx";
import WebPerformance from "../SVGS/WebPerformance.jsx";
import Telecom from "../SVGS/Telecom.jsx";
import ArrowDown from "../SVGS/ArrowDown.jsx";
import Github from "../SVGS/Github.jsx";
import WorkExperience from "./WorkExperience.jsx";

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
     Product Cards
  -------------------------------- */

const productCards = [
  {
    title: "Service Desk Engineer",
    image: banner,
    description:
      "Supporting ISP operations by monitoring network services, troubleshooting connectivity issues, managing incidents, and coordinating with NOC and field teams to maintain reliable customer connectivity.",
    responsibilities: [
      "Monitor and troubleshoot client connectivity and network incidents",
      "Handle and track service desk tickets and customer requests",
      "Investigate network faults, packet loss, latency and service interruptions",
      "Coordinate escalations with NOC and field technical teams",
      "Monitor SLA compliance and follow up on service restoration",
      "Prepare incident updates and RFOs for network outages",
    ],
  },

  {
    title: "ICT Support Officer",
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
     Card Component
  -------------------------------- */

const expertiseSlides = [ { image: banner, title: "Telecommunications", description: "ISP • GPON • FTTH • Network Infrastructure", }, { image: photography, title: "Frontend Engineering", description: "React • JavaScript • UI • Git", }, { image: digital, title: "Data & Analytics", description: "SQL • Python • Tableau • Data Analysis", }, { image: branding, title: "ICT & Systems", description: "Technical Support • Networking • Troubleshooting", }, ]; 
const [expertiseIndex, setExpertiseIndex] = useState(0);
useEffect(() => { const interval = setInterval(() => { setExpertiseIndex((prev) => (prev + 1) % expertiseSlides.length); }, 5000); return () => clearInterval(interval); }, [expertiseSlides.length]);

useEffect(() => { const interval = setInterval(() => { setExpertiseIndex((prev) => (prev + 1) % expertiseSlides.length); }, 5000); return () => clearInterval(interval); }, [expertiseSlides.length]);

  const ProductCard = ({ title, image, description, responsibilities }) => {
    return (
      <motion.div
        variants={itemVariants}
        className={`
          group
          relative
          overflow-hidden
          rounded-sm
          shadow-[3px_6px_28px_rgba(255,255,255,0.2)]
          flex
          flex-col
          items-start
          justify-start
          px-6
          py-8
           
          h-auto
        `}
    
      >

        {/* Dark Gradient */}

   <div className="absolute flex z-0 inset-0 bg-gradient-to-l from-[#060607] via-[#060607] to-[#070708]/70 opacity-90"></div>

        {/* Noise */}
   


        {/* Card Content */}
        <div className="relative z-10 flex flex-col gap-4">

          {/* Icon */}
          <div
            className="
            hidden
          
              w-fit
              items-center
              justify-center
              rounded-sm
              border
              border-[#8BBB92]/20
              bg-white/5
              p-2
              backdrop-blur-md
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#FFBF00"
              stroke="#8BBB92"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="16" y="16" width="6" height="6" rx="1" />
              <rect x="2" y="16" width="6" height="6" rx="1" />
              <rect x="9" y="2" width="6" height="6" rx="1" />
              <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
              <path d="M12 12V8" />
            </svg>
          </div>


          {/* Title */}
          <h4
            className="
              card_heading
              uppercase
              text-[#fffced]
              leading-tight
            "
          >
            {title}
          </h4>
          <h3 className="text-[#ffced2]">Employer:</h3>
          <h3 className="text-[#ffced2]">Duration:</h3>

     <p className="text-[#fffced] leading-relaxed">
  {description}
</p>

<div className="flex flex-col gap-3 mt-2">
  {responsibilities.map((responsibility, index) => (
    <div
      key={index}
      className="flex items-start gap-3 text-[#fffced]"
    >
      <Check
        size={17}
        strokeWidth={2}
        className="mt-0.5 shrink-0 text-[#FFBF00]"
      />

      <span className="leading-relaxed">
        {responsibility}
      </span>
    </div>
  ))}
</div>

        </div>

      </motion.div>
    );
  };

const [activeIndex, setActiveIndex] = useState(null);
const [scrollExperience, setScrollExperience] = useState(0);

const experienceRefs = useRef([]);


useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.experience);

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

const [scrollDirection, setScrollDirection] = useState("down");

useMotionValueEvent(scrollYProgress, "change", (current) => {
  const previous = scrollYProgress.getPrevious();

  if (previous === undefined) return;

  if (current > previous) {
    setScrollDirection("down");
  } else if (current < previous) {
    setScrollDirection("up");
  }
});

  return (


    
    <section className="bg-[#101011] min:h-screen flex flex-col lg:items-start lg:justify-center relative  w-full">


      <MoonBalls />
     
      <div className="Section_wrapper z-10">



          <div className="section_header mt-34">
                <motion.h1  className="page_title"  > Who is Dannie? </motion.h1>
                <h3  ref={ref}
  animate={{
    opacity: scrollDirection === "down" ? 1 : 0.35,
    y: scrollDirection === "down" ? 0 : 8,
  }}
  transition={{
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1],
  }}  className="Section_title text-[#fffced]"> Service desk Engineer & Frontend Engineer </h3>
            </div>







        <div className="flex_container">

                <motion.p
             
                        
              
                          className="text_para max-w-[460px] text-[#fffced] " 
                        >
                        Hands-on experience in telecommunications and ISP
                          operations, with practical exposure to ISP network architecture, Internet backbone 
                          connectivity, and Fibre-to-the-Home (FTTH) installation.
                </motion.p> 
                <div className="flex flex-color lg:flex-col gap-4">
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
      <Communication color="#978F66" size={43} />
                  </motion.div>
                    <Github color="#978F66" size={33} />
                    <Telecom fill="#978F66" size={33} />
                    <ArrowDown color="#978F22" className="mt-20" size={43} />
                  

                </div>
            

                <div className="Grid_4 grid-cols-3 gap-4 z-50 w-full">

                <div className="mt-6 outline-(--text-colour)/50 outline-3 overflow-hidden rounded-2xl lg:h-[360px] h-[220px]">
                <img src={photography} className="size-full object-cover grayscale" />
                
              </div>

                <motion.div  ref={ref}   className="mt-12 rounded-2xl  overflow-hidden lg:h-[360px] h-[210px]">
                <img src={branding} className="size-full object-cover" />
                
              </motion.div>

                  <div>
                      <div className=" flex "> 
                  {expertiseSlides.map((slide, index) => ( 
                    <button key={index} type="button" aria-label={`Show ${slide.title}`} onClick={() => setExpertiseIndex(index)} className="relative flex items-center justify-center p-1" >
                      <motion.div animate={{ width: expertiseIndex === index ? 24 : 7, height: expertiseIndex === index ? 7 : 7, opacity: expertiseIndex === index ? 1 : 0.55, }} transition={{ duration: 0.35, ease: "easeOut", }} className="rounded-full bg-(--primary-color)" />
                        </button> ))} 
                        </div>

                          <div className="mt-22 relative lg:w-44 rounded-2xl flex flex-col items-center justify-center  overflow-hidden lg:h-[370px] h-[200px]">
                    

                        <div>

                              {/* Image */}
              
                  <AnimatePresence mode="sync">
              <motion.img
                key={expertiseIndex}
                src={expertiseSlides[expertiseIndex].image}
                className="absolute inset-0 size-full rounded-2xl object-cover grayscale"
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-5%" }}
                transition={{
                  duration: 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
                  <div className="left-5 hidden rotate-270 bottom-16  z-20"> 
                    <AnimatePresence mode="wait">
                      <motion.div key={expertiseIndex} 
                      initial={{ opacity: 0, y: 12, }} 
                      animate={{ opacity: 1, y: 0, }}
                      exit={{ opacity: 0, y: -8, }} transition={{ duration: 0.45, }} > 
                      <p className="text-[#978F66] text-xs tracking-[0.2em] uppercase mb-1"> 0{expertiseIndex + 1} </p>
                        <h3 className="card_heading"> {expertiseSlides[expertiseIndex].title} </h3>
                        <p className="text-[#fffced]/70 text-xs mt-1"> {expertiseSlides[expertiseIndex].description} </p>
                          </motion.div>
                    </AnimatePresence> </div>

                        </div>

                
              </div>
            </div>
            
              

                </div>
        </div>

    

    

      
        
            <div className="w-full mt-12 hidden flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

              {/* IMAGE - Sticky */}

              <div className="lg:h-[520px] outline outline-2 gap-6 z-10 flex flex-col p-6 rounded-r-sm bg-[#0b0b0d] outline-[#4a4a4a]/60 lg:w-[45%] w-full sticky top-30 h-84 shadow-[6px_6px_18px_rgba(255,255,255,0.2)]">

              <motion.h2
              animate={{
                opacity: scrollExperience === 0 ? 1 : 0.35,
                x: scrollExperience === 0 ? 0 : -10,
                fontSize: scrollExperience === 0 ? "36px" : "24px",
                color: scrollExperience === 0 ? "#978F66" : "#b8b8b8",
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="card_heading leading-[38.6px]"
            >
              1. Service Desk Engineer
            </motion.h2>

                <motion.h2
              animate={{
                opacity: scrollExperience === 0 ? 1 : 0.35,
                x: scrollExperience === 0 ? 0 : -10,
                fontSize: scrollExperience === 0 ? "24px" : "36px",
                    color: scrollExperience === 0 ? "#b8b8b8" : "#978F66",
              }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="card_heading text-[32px] leading-[38.6px]"
                >
                  2. ICT Support Officer
                </motion.h2>

                  <motion.h2
              animate={{
                opacity: scrollExperience === 0 ? 1 : 0.35,
                x: scrollExperience === 0 ? 0 : -10,
                fontSize: scrollExperience === 0 ? "24px" : "36px",
                    color: scrollExperience === 0 ? "#b8b8b8" : "#978F66",
              }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="card_heading text-[32px] leading-[38.6px]"
                >
                  2. Trainer Technical
                </motion.h2>

              </div>

                {/* CONTENT */}
                {/* CONTENT */}

            <div className="w-full lg:w-[55%] z-0 flex flex-col gap-8">

              <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">

                {productCards.map((card, index) => (
                  <div
                    key={index}
                    ref={(element) => {
                      experienceRefs.current[index] = element;
                    }}
                    data-experience={index}
                  >
                    <ProductCard
                      title={card.title}
                      image={card.image}
                      description={card.description}
                      responsibilities={card.responsibilities}
                    />
                  </div>
                ))}

              </div>

            </div>

              </div>
      </div>

      <WorkExperience />


    </section>
  );
};

export default Whoisdan;