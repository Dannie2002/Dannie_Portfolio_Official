import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import banner from "../assets/Good2.jpg";
import work from "../assets/ServiceDesk3.jpg";
import fat from "../assets/FAT.jpg";
import netoperations from "../assets/NetOperations.jpg";
import { ArrowRight,ArrowUpRight, SplinePointer, ChevronDown } from 'lucide-react'
import router from "../assets/Router.jpg";
import noise from "../assets/Noise.png";
import isp from "../assets/Good.jpg";
import SectionHeader from "./SectionHeader.jsx";
import Telecom from "../SVGS/Telecom.jsx";

const NetworkArchitecture = () => {

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
    title: "OLT",
    description:
      "Turning your unique vision into high-performing, custom-coded web solutions.",
  },

  {
    title: "Passive Splitters",
    description:
      "Writing optimized, maintainable code using modern frameworks.",
  },

  {
    title: "FAT",
    description:
      "Creating clean, engaging visuals that expand your brand.",
  },

  {
    title: "ONU",
    description:
      "Crafting seamless user experiences across mobile, tablet, and desktop.",
  },
];


const ProductCard = ({ title, description }) => {
  return (
    <motion.div
     variants={itemVariants}
      className=" group relative overflow-hidden border-b border-b-(--text-color)/60 flex flex-col lg:items-start lg:justify-start p-6 h-auto  "
    >
      {/* Card Content */}
      <div className="relative z-10 flex flex-col lg:items-start lg:justify-start lg:flex-row  pb-4 gap-6 lg:gap-8" >

        <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center">
          <h4 className=" card_heading"> {title}</h4>

          <p className="text-[#b8b8b8] text-center lg:text-start">
            {description}
          </p>
        </div>

      </div>
    </motion.div>
  );
};





  return (

    <section className="bg-[#101011] relative w-full">

      <SectionHeader
        title="Telecommunications"
        bgImage={banner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ Competencies" },
          { label: "/ Telecommunications" }
        ]}
      />


      <div className="Section_wrapper mt-12 !py-0">

        <div className="section_header">

           <motion.h1  className="page_title"  > Network Architecture & Infrastructure </motion.h1>
        
        </div>

      </div>


      <div className="Section_wrapper">


        <div className='flex_container'>

      <div className='lg:w-1/2'>
          <div className="relative  rounded-full h-80 flex flex-col items-start justify-between">
            <div className="flex flex-col gap-4">
                  <h3   className="Section_title text-[#fffced]"> From the internet <span className="text-(--secondary-color)">backbone</span> to the home.</h3>
                  <h4 className="card_heading uppercase">Gigabit Passive Optic Network (GPON)</h4>
            <motion.p className="text_para mt-4 text-[#fffced] font-normal max-w-sm" >I design modern digital products that dont just look great but bring meaningful results.</motion.p>
            </div>
           

                 <div className='bg-transparent py-2 gap-2 outline-[1.2px] outline-[#101111] items-center rounded-full px-6 flex '>
                
                  
                </div> 
          </div>

        </div>

        <div className='w-full lg:w-1/2'>
            <div className="grid lg:grid-cols-1  gap-6 lg:gap-8">
       {productCards.map((card, index) => (
     <ProductCard
    key={index}
    title={card.title}
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

export default NetworkArchitecture;