import React from "react";
import { motion, useScroll,useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import bag from "../assets/12.png"
import noise from "../assets/Noise.png";
import banner from "../assets/ServiceDesk2.jpg";
import digital from "../assets/DigitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import SectionHeader from "./SectionHeader.jsx";
import ProductCard from "../Constants/Data.js";
import Communication from "../SVGS/Communication.jsx";
import servicedesk from "../assets/ServiceDesk3.jpg"
import SdCards from "../Constants/Data.js"

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


  const svgRef = useRef(null);


// 1. First scroll tracker (for SVG)
const { scrollYProgress: svgScrollProgress } = useScroll({
  target: svgRef,
  offset: ["start end", "center center"],
});


// --- Picture and c ---
const rawScale = useTransform(svgScrollProgress,[0, 1], [1.25, 1]);
const scale = useSpring(rawScale, { stiffness: 80, damping: 18,});
const rawY = useTransform(svgScrollProgress, [0, 1], [200, 0]);
const y = useSpring(rawY, {stiffness: 100,damping: 20,});


// --- SVG ANIMATIONS ---
const rawX = useTransform(svgScrollProgress, [0, 1], [700, 0]);
const rawRotate = useTransform(svgScrollProgress, [0, 1], [180, 0]);
const x = useSpring(rawX, { stiffness: 100, damping: 15 });
const rotate = useSpring(rawRotate, { stiffness: 100, damping: 20 });






const ServiceDeskCard = ({ title, icon: Icon,  paragraph}) => {
    return (
      <motion.div variants={itemVariants} 
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
      
      
      className={`relative group card_transparent`}>

          <div className="pointer-events-none absolute inset-0 z-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    style={{
      background:
        "radial-gradient(circle 260px at var(--mouseX) var(--mouseY), rgba(189,166,206,0.28), transparent 70%)",
      filter: "blur(18px)",
    }}
  />
        
       <div className="card_space">
           <motion.div className="svg_container">
            <div className="absolute size-8 rounded-full -bottom-5 blur-xl opacity-70 bg-(--secondary-color)" />
          <Icon  color="#ffffff" size={42} />
        </motion.div>
          <h4 className=" card_heading"> {title} </h4>
        </div>
        <p className="text_para text-[#fffced]"> {paragraph}</p>
   
      </motion.div>
    );
  };


  return (

  <section className="bg-[#101011] relative  w-full">


     <img src={bag} alt=""  className="absolute  inset-0 z-0 h-full w-full object-cover opacity-40 mix-blend-overlay"/>

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

      <div className="Section_wrapper">

      <div className="section_header z-99">
                     <motion.h1  className="page_title"  > Service Desk Engineering </motion.h1>
                     <h3 className="Section_title "> Bridging the gap between <span className="text-(--secondary-color)"> business</span> and clients.  </h3>
                     <div className="flex w-full justify-between items-center gap-20">
                       <motion.p className=" pt-6 text-[#fffced] font-normal  text-[16.5062px] leading-[23.754px] max-w-2xl" >
                                I provide front-line support. From troubleshooting incidents to ensuring system reliability.
                        </motion.p>
                     
                        <Communication color="#978F66" size={36} className=""/>
                     
                     </div>
                              
              </div>

      </div>


{/* --------------------------------
    Main Products Layout
-------------------------------- */}
<div className="Section_wrapper ">

  <div className="flex_container">

    {/* IMAGE - Sticky */}
    
      <div ref={svgRef}   className="lg:h-[520px] overflow-hidden bg-[#a181b1] outline outline-2 outline-[#4a4a4a]/60 lg:w-[45%] w-full lg:sticky lg:top-25 h-84 shadow-[6px_6px_18px_rgba(255,255,255,0.2)]">
        <motion.img
          style={{ scale }}
          src={servicedesk}
          alt="Photography and creative services"
          className="w-full h-full object-cover grayscale"
        />
      </div>
    

    {/* CONTENT */}
    <div className="w-full lg:w-[55%] flex flex-col gap-8">
      <motion.div      
        style={{
          y,
      
        }} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 z-5">
         {SdCards.map((card, index) => (
          <ServiceDeskCard
            key={index}
            title={card.title}
            icon={card.icon}
            paragraph={card.paragraph}
          />
        ))}
      </motion.div>
    
    </div>

  </div>
</div>




    </section>
  );
};

export default ServiceDesk;