import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import banner from "../assets/ServiceDesk2.jpg";
import digital from "../assets/DigitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import noise from "../assets/Noise.png";
import SectionHeader from "./SectionHeader.jsx";
import servicedesk from "../assets/ServiceDesk3.jpg"
import Communication from "../SVGS/Communication.jsx";
import Management from "../SVGS/Management.jsx";
import AnalyticalThinking from "./AnalyticalThinking.jsx";
import Scribble from "./Scribble.jsx";

const ServiceDesk = () => {



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



const productCards = [
  {
    title: "Incident Management",
    paragraph:
      "Track, prioritise, escalate, and resolve service incidents efficiently.",
      icon: Communication,
  },

  {
    title: "Professional Communication",
    paragraph:
      "Communicate clearly with clients, NOC teams, and technical partners.",
   icon: Communication,
  },

  {
    title: "Root Cause Analysis",
    paragraph:
      "Investigate incidents to identify root causes and prevent recurrence.",
       icon: Management,
  },

  {
    title: "Analytical Thinking",
    paragraph:
      "Analyse network data and service alarms to guide effective resolutions.",
      icon: AnalyticalThinking,
  },

  {
    title: "SLA Compliance",
    paragraph:
      "Monitor service performance and follow up to maintain SLA commitments.",
      icon: Management,
  },

  {
    title: "Troubleshooting",
    paragraph:
      "Diagnose connectivity and service issues to restore reliable network access.",
      icon: Management,
  },
];


  const ProductCard = ({ title, icon: Icon,  paragraph}) => {
    return (
      <motion.div
   
        variants={itemVariants}
        className={`group relativeoverflow-hidden rounded-sm outline outline-[#fffced]/60 flex flex-col items-start justify-start px-6  py-8 h-auto bg-[#242222]
        `}
    
      >

        {/* Card Content */}
        <div className="relative z-10 flex flex-col gap-4">

          {/* Icon */}
       <div className=" flex items-center justify-center rounded-sm">
          <Icon color="#ffffff" size={42} />
        </div>

       <div>
          <h4 className=" card_heading"> {title} </h4>
          <p className="text-[#b8b8b8]"> {paragraph}</p>
        </div>
   

        </div>

      </motion.div>
    );
  };


  return (


    
    <section className="bg-[#101011] relative  w-full">
                       <SectionHeader
  title="Service Desk Engineering"
  bgImage={banner}
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "/ Publication" },
    { label: "/ Reports" }
  ]}
/>



            
      {/* --------------------------------
          Section Heading
      -------------------------------- */}

      <div className="Section_wrapper mt-12 !py-0">

      <div className="section_header">
                     <motion.h1  className="page_title"  > Service Desk Engineering </motion.h1>
                     <h3 className="Section_title "><span className="text-[]"> Well experienced </span>{" "} in customer support. </h3>
                     <div className="flex w-full justify-between items-center gap-20">
                       <motion.p
                                 className="
                                   pt-6
                                   text-[#fffced]
                                   font-normal
                                   text-[16.5062px]
                                   leading-[23.754px]
                                   max-w-2xl
                                 "
                               >
                                I engage in professional communication with local and internation partners at Inq. digital's service desk.
                        </motion.p>
                     
                        <Communication color="#978F66" size={36} className="hidden"/>
                     
                     </div>
                              
              </div>

      </div>


{/* --------------------------------
    Main Products Layout
-------------------------------- */}
<div className="Section_wrapper mt-12">

  <div className="w-full  flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

    {/* IMAGE - Sticky */}
    
      <div className="lg:h-[520px] outline outline-2 outline-[#4a4a4a]/60 lg:w-[45%] w-full lg:sticky lg:top-25 h-84 shadow-[6px_6px_18px_rgba(255,255,255,0.2)]">
        <img
          src={servicedesk}
          alt="Photography and creative services"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    

    {/* CONTENT */}
    <div className="w-full lg:w-[55%] flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
         {productCards.map((card, index) => (
          <ProductCard
            key={index}
            title={card.title}
            icon={card.icon}
            paragraph={card.paragraph}
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

export default ServiceDesk;