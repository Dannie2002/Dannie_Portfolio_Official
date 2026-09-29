import React from "react";
import { motion, useScroll,useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import webbb from "../assets/Webbb.jpg";
import branding from "../assets/Hero.jpg";
import bag from "../assets/12.png"
import noise from "../assets/Noise.png";
import SectionHeader from "./SectionHeader.jsx";
import webdev from "../assets/Webdevelopment.jpg"
import WebPerformance from "../SVGS/WebPerformance.jsx";
import CleanCode from "../SVGS/CleanCode.jsx";
import ResponsiveLayout from "../SVGS/ResponsiveLayout.jsx";
import Scribble from "./Scribble.jsx";
import CodeMerge from "../SVGS/CodeMeerge.jsx";
import MoonBalls from "./MoonBalls.jsx"


const WebsiteDevelopment = () => {

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

const cardRef = useRef(null);

const { scrollYProgress: cardScrollProgress } = useScroll({
  target: cardRef,
  offset: ["start end", "center center"],
});

  /* --- Product Cards---- */

const productCards = [
  {
    title: "Fast & Secure",
    icon: WebPerformance,
    description:
      "Turning your unique vision into high-performing, custom-coded web solutions.",
  },

  {
    title: "Clean Code",
    icon: CleanCode,
    description:
      "Writing optimized, maintainable code using modern frameworks.",
  },

  {
    title: "SEO",
    icon: ResponsiveLayout,
    description:
      "Creating clean, engaging visuals that expand your brand.",
  },

  {
    title: "Adaptive designs",
    icon: ResponsiveLayout,
    description:
      "Crafting seamless user experiences across mobile, tablet, and desktop.",
  },
];


const svgRef = useRef(null);


// 1. First scroll tracker (for SVG)
const { scrollYProgress: svgScrollProgress } = useScroll({
  target: svgRef,
  offset: ["start end", "center center"],
});



// --- SVG ANIMATIONS ---
const rawX = useTransform(svgScrollProgress, [0, 1], [700, 0]);
const rawRotate = useTransform(svgScrollProgress, [0, 1], [180, 0]);
const x = useSpring(rawX, { stiffness: 100, damping: 15 });
const rotate = useSpring(rawRotate, { stiffness: 100, damping: 20 });


  /*Card Component*/

const ProductCard = ({  index,title, icon: Icon, description, scrollProgress,}) => {

    // Each card gets its own scroll tracker
    const rawY = useTransform(
    scrollProgress,
    [
      0,
      0.15 + index * 0.08,
      0.55 + index * 0.08,
      1,
    ],
    [
      140,
      140,
      0,
      0,
    ]
  );
  
  const y = useSpring(rawY, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <motion.div
    
        
      style={{
        y,
       
      }}

      className="moving-border-card card_transparent"
    >
      {/* Card Content */}
          <div className="flex flex-col items-start gap-6">
                <motion.div style={{rotate}} className="svg_container">
             <div className="absolute size-8 rounded-full -bottom-5 blur-xl opacity-90 bg-(--secondary-color)" />
             <motion.svg
  style={{
    x,
    rotate,
  }}
  className="size-10 text-[#fffced]"
  viewBox="0 0 48 48"
  fill="#fffced"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M40.93,14.25,24,24,7.07,14.25"
    fill="none"
    stroke="#fffced"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M7.07,14.25l16.93-9.75L40.93,14.25v19.5L24.0007,43.5,7.07,33.75"
    fill="none"
    stroke="#fffced"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
              </motion.svg>
          </motion.div>
  
          <h4 className=" card_heading"> {title} </h4>
        </div>
        <p className="text_para text-[#fffced]"> {description}</p>
   

    </motion.div>
  );
};


  return (

    <section  ref={cardRef}  className="bg-[#101011] relative w-full">


     <img
        src={noise}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
      />
        <img
        src={bag}
        alt=""
        className="absolute  inset-0 z-10 h-full w-full object-cover opacity-40 mix-blend-overlay"
      />


      <MoonBalls />

            <SectionHeader
              title="Website Design & Development"
              bgImage={webbb}
              breadcrumbs={[
                { label: "Home", link: "/" },
                { label: "/ Competencies" },
                { label: "/ Web development" }
              ]}
              />


      <div  className="Section_wrapper z-99">
         <div  className="section_header easy z-50">
            <motion.h1  className="page_title animate-item z-50"  > Web Desing & Development </motion.h1>
            <h3 className="Section_title animate-item z-40">Build with purpose <span className="text_gradient">.<br /> Design </span>to commumicate. </h3>
            <div ref={svgRef} className="animate-item flex lg:flex-row flex-col mt-3 items-center justify-between gap-20">
                      <motion.p className=" text_para  max-w-2xl " >
                          I am not just about ideas; I am about making them happen to expand your businesses. I craft digital solutions of impact for my clients.
                      </motion.p>
                                                    
                       <CodeMerge color="#978F66" size={36} className="hidden lg:flex"/>
                                                    
            </div>
        </div>
      </div>


{/*  Main Products Layout-------- */}

<div  className="Section_wrapper z-99">

  <div className="flex_container ">
    {/* IMAGE - Sticky */}
   
    
    {/*Right CONTENT */}
    <div className="w-full  flex flex-col gap-8">
   <div  className="grid easy lg:grid-cols-4 gap-6 lg:gap-8">
  {productCards.map((card, index) => (
    <div key={index} className="z-20">
      <ProductCard
       index={index}
        title={card.title}
        icon={card.icon}
        description={card.description}
         scrollProgress={cardScrollProgress}
      />
    </div>
  ))}
</div>


    </div>

  </div>
</div>

    </section>
  );
};

export default WebsiteDevelopment;