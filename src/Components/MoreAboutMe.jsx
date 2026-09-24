import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import bag from "../assets/052.png";
import banner from "../assets/WorkExp.jpg";
import digital from "../assets/digitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import branding from "../assets/Hero.jpg";
import noise from "../assets/Noise.png";
import SectionHeader from "./SectionHeader.jsx";
import servicedesk from "../assets/ServiceDesk.jpg"

const MoreAboutMe = () => {

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
    title: "Web Design & Development",
    image: photography,
    description:
      "Designing and developing responsive web experiences with a focus on usability, visual presentation and practical digital solutions.",
    responsibilities: [
      "Design responsive and user-focused interfaces",
      "Develop web applications using modern frontend technologies",
      "Build reusable and maintainable UI components",
      "Integrate interactive animations and dynamic experiences",
    ],
  },
];


  /* --------------------------------
     Card Component
  -------------------------------- */

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


  return (


    
    <section className="bg-[#060607] relative  w-full">
                       <SectionHeader
  title="Hi! My name is Dannie"
  bgImage={banner}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Reports" }
  ]}
/>


             <img
              src={code}
              alt=""
              className="absolute top-0 right-0 z-0 size-85 object-contain opacity-0 mix-blend-overlay"
            />
      
            
      {/* --------------------------------
          Section Heading
      -------------------------------- */}

      <div className="Section_wrapper mt-12 !py-0">

          <div className="w-fit ">

          <h3 className="Section_title text-[#978F66]">
            <span className="text-[#b8b8b8]">
              Work
            </span>{" "}
            Experience
          </h3>

        </div>

      </div>


{/* --------------------------------
    Main Products Layout
-------------------------------- */}
<div className="Section_wrapper">

  <div className="w-full  flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

    {/* IMAGE - Sticky */}
    
      <div className="lg:h-[520px] outline outline-2 gap-6 flex flex-col p-6 outline-[#4a4a4a]/60 lg:w-[45%] w-full lg:sticky lg:top-25 h-84 shadow-[6px_6px_18px_rgba(255,255,255,0.2)]">
        <h2 className="card_heading text-[32px] leading-[38.6px]">1. Service Desk Engineer</h2>
        <h2 className="card_heading text-[32px] text-[#b8b8b8] leading-[38.6px]">2. ICT Support Officer</h2>
      </div>
    

    {/* CONTENT */}
    <div className="w-full lg:w-[55%] flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
  {productCards.map((card, index) => (
    <ProductCard
      key={index}
      title={card.title}
      image={card.image}
      description={card.description}
      responsibilities={card.responsibilities}
    />
  ))}
</div>
      {/* Add a few more paragraphs if needed so the right side is clearly taller */}
    </div>

  </div>
</div>




    </section>
  );
};

export default MoreAboutMe;