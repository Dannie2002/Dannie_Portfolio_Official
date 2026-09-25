import React from "react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import webbb from "../assets/Webbb.jpg";
import branding from "../assets/Hero.jpg";
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


  /* --------------------------------
     Product Cards
  -------------------------------- */

const productCards = [
  {
    title: "Faster & Secure",
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


  /*Card Component*/

const ProductCard = ({ title, icon: Icon, description }) => {
  return (
    <motion.div
     variants={itemVariants}
      className=" group relative overflow-hidden rounded-sm border border-(--text-color)/60 flex flex-col lg:items-start lg:justify-start p-6 h-auto  "
    >
      {/* Card Content */}
      <div className="relative z-10 flex flex-col lg:items-start lg:justify-start lg:flex-row  pb-4 gap-6 lg:gap-8" >

        <div className=" flex items-center lg:items-start lg:justify-start justify-center rounded-sm">
          <Icon color="#fffced" size={52} />
        </div>

        <div className="flex flex-col gap-2 lg:items-start items-center lg:justify-start justify-center">
          <h4 className=" card_heading"> {title}</h4>
          <p className="text-[#b8b8b8] text-center lg:text-start"> {description}</p>
        </div>

      </div>
    </motion.div>
  );
};

  return (

    <section className="bg-[#101011] relative  w-full">

            <SectionHeader
              title="Website Design & Development"
              bgImage={webbb}
              breadcrumbs={[
                { label: "Home", link: "/" },
                { label: "/ Competencies" },
                { label: "/ Web development" }
              ]}
              />


      <div className="Section_wrapper">
         <div className="section_header">
            <motion.h1  className="page_title"  > Web Desing & Development </motion.h1>
            <h3 className="Section_title">I deliver elite interfaces with <span className="text-(--secondary-color)">100% </span>business efficiency. </h3>
            <div className="flex lg:flex-row flex-col mt-3 items-center justify-between gap-20">
                      <motion.p className=" text_para  max-w-2xl " >
                          I am not just about ideas; I am about making them happen to expand your businesses. I craft digital solutions of impact for my clients.
                      </motion.p>
                                                    
                       <CodeMerge color="#978F66" size={36} className="hidden lg:flex"/>
                                                    
            </div>
        </div>
      </div>


{/*  Main Products Layout-------- */}

<div className="Section_wrapper ">

  <div className="flex_container ">
    {/* IMAGE - Sticky */}
      <div className="lg:h-[520px] outline outline-2 outline-[#fffced]/60 lg:w-[45%] w-full lg:sticky lg:top-25 h-84 shadow-[6px_6px_18px_rgba(255,255,255,0.2)]">
        <img
          src={webdev}
          alt="Photography and creative services"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    
    {/*Right CONTENT */}
    <div className="w-full lg:w-[55%] flex flex-col gap-8">
      <div className="grid lg:grid-cols-1  gap-6 lg:gap-8">
       {productCards.map((card, index) => (
        <ProductCard
          key={index}
          title={card.title}
          icon={card.icon}
          description={card.description}
        />
      ))}
      </div>

    </div>

  </div>
</div>

    </section>
  );
};

export default WebsiteDevelopment;