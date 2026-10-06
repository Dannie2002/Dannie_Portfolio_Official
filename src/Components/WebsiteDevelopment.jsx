import React from "react";
import { motion, useScroll,useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import webbb from "../assets/Webbb.jpg";
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


  /* --- Product Cards---- */

const websiteCards = [
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

const WebsiteCard = ({  index,title, icon: Icon, description}) => {

  return(
        <motion.div
      style={{
        "--mouseX": "50%",
        "--mouseY": "50%",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        e.currentTarget.style.setProperty("--mouseX", `${x}%`);
        e.currentTarget.style.setProperty("--mouseY", `${y}%`);
      }}
      className="moving-border-card card_transparent group relative overflow-hidden"
    >

      <div className="card-spotlight-border z-10" />
      {/* Spotlight */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle 190px at var(--mouseX) var(--mouseY), rgba(189,166,206,0.28), transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* Card Content */}
          <div className="card_space">
                <motion.div style={{ rotate }} className="svg_container">
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

                <h4 className="card_heading">{title}</h4>
          </div>

        <p className="text_para z-5">{description}</p>
       </motion.div>
      );
    };


  return (

    <section className="bg-[#101011] relative w-full">

     <img src={noise} alt=""  className="noise"/>
     <img src={bag} alt=""  className="absolute  inset-0 z-5 h-full w-full object-cover opacity-40 mix-blend-overlay"/>
      <MoonBalls />

            <SectionHeader
              title="Website Design & Development"
              bgImage={webbb}
              breadcrumbs={[
                { label: "Home", link: "/" },
                { label: "/ Competencies" },
                { label: "/ Website design & development" }
              ]}
              />

          <div  className="Section_wrapper z-10">
            <div  className="section_header  z-5">
                <motion.h1  className="page_title z-50" > Web Desing & Development </motion.h1>
                <h3 className="Section_title z-40">Modern websites <span className="text_gradient">.<br /> solving  </span> business complications. </h3>
                <div ref={svgRef} className="animate-item flex lg:flex-row flex-col mt-3 items-center justify-between gap-20">
                          <motion.p className=" text_para  max-w-2xl " >
                              Say goodbye to basic designs. I design modern websites based on what your brand needs. Develop to solve real business problems and to make your business standout.
                          </motion.p>
                                                        
                          <CodeMerge color="#978F66" size={36} className="hidden lg:flex"/>
                                                        
                </div>
            </div>
         </div>

          <div className="Section_wrapper z-10">
            <div className="flex_container ">
                <div className="Grid_4">
                {websiteCards.map((card, index) => (
                  <div key={index} className="z-20">
                    <WebsiteCard
                      index={index}
                      title={card.title}
                      icon={card.icon}
                      description={card.description}
                    />
                  </div>
                ))}
                </div>
            </div>
          </div>

    </section>
  );
};

export default WebsiteDevelopment;