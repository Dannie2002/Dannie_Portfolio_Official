import React from "react";
import { useEffect, useRef, useState } from "react";
import {motion, AnimatePresence, backInOut} from 'framer-motion'
import { ArrowRight,ArrowUpRight, SplinePointer, ChevronDown } from 'lucide-react'
import branding from '../assets/ServiceDesk2.jpg'
import noise from "../assets/Noise.png";
import border from "../assets/12.png";
import ThreeStars from "../SVGS/ThreeStars";
import { filter } from "motion/react-client";

const LetsConnect = () => {


    const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -80 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.75, ease: "easeInOut" }
    },
  };
  
 

        const bg6 = {
    backgroundImage: `url(${branding})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    
  };



  return (

    <section className="lg:min-h-[90vh] h-[70vh] bg-(--background-color) px-4 lg:px-12 lg:py-16 py-8 flex overflow-x-hidden" >




      <svg width="0" height="0">
  <clipPath id="projectClip" clipPathUnits="objectBoundingBox">
    <path
      d="
        M 0 0
        L 0.84 0
        L 1 0.14
        L 0.94 0.28
        L 1 0.50
        L 0.94 0.72
        L 1 0.86
        L 0.84 1
        L 0 1
        Z
      "
    />
  </clipPath>
</svg>
 


      <div className="w-full clip relative overflow-hidden rounded-3xl flex items-center justify-center"  style={bg6}>
         <div className="absolute z-5 inset-0 bg-gradient-to-r opacity-100 from-(--secondary-color) via-(--secondary-color)/99 to-(--secondary-color)/45" />
   
       
      
        <div className="flex relative flex-col items-center justify-center " >
                       
                
                    <div className="flex z-10  p-6 lg:gap-6 flex-col items-center justify-center ">
                                          
                    <h4 className="text-[#fffced] font-bold text-center text-[46px] geonova white leading-[46px]">Have an idea? Feel free to reach out.</h4>

                     <div className="flex mt-3 gap-4">
                        
                      <p className="text_para text-center  text-[#fffced]"><span className="  ">Take </span> your business on the first step. We look forward to being part of your journey.</p>
                      </div>
                                   <div className="mt-0 flex flex-row  gap-6">
                    
                     <motion.div className='flex btn  mt-6 group w-full transition-all duration-200 cursor-pointer rounded-sm bg-(--background-color)  px-6  py-2 items-center gap-4' >
                     <div className='relative flex overflow-hidden'>
                             <h3 className='text_button group-hover:translate-y-6 ease-in-out transition-transform duration-290 out'>
                          Contact me
                        </h3>
                        <h3 className='text_button absolute -translate-y-4  group-hover:opacity-100 group-hover:translate-y-0 opacity-0  transform transition-all duration-290'>
                          Contact me
                        </h3>
                     </div>
                     
                        <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm  justify-center bg-[#fffced] size-7 p-2'>
                          <ArrowRight className='absolute group-hover:rotate-15  ease-in-out  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-(--background-color)' />
                          <ArrowRight className='absolute group-hover:-rotate-45  ease-in-out  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                        </div>
                       
                      </motion.div>
                    </div>
                    </div>
    
        </div>




       </div>


    </section>
 
  );
};

export default LetsConnect;