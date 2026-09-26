import React from "react";
import { useEffect, useRef, useState } from "react";
import {motion, AnimatePresence, backInOut} from 'framer-motion'
import { ArrowRight,ArrowUpRight, SplinePointer, ChevronDown } from 'lucide-react'
import branding from '../assets/ServiceDesk3.jpg'
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
    backgroundRepeat: 'no-repeat'
    
  };



  return (

    <section className="min-h-[90vh] bg-[#f5fafa] px-4 lg:px-12 lg:py-16 py-8 flex overflow-x-hidden" >




      <svg width="0" height="0">
        <clipPath id="myClip" clipPathUnits="objectBoundingBox">
          <path d="M0,0
                  L0 0
                  L 0.7 0
                  L 1 0.10
                  L 1 0.9
                  L 1 0.9
                  L 1 1
                  L 0 1
                  " />
        </clipPath>
      </svg>
 


      <div className="w-full relative overflow-hidden rounded-3xl flex items-center justify-center"  style={bg6}>
         <div className="absolute z-5 inset-0 bg-gradient-to-r opacity-98 from-(--secondary-color) via-(--secondary-color)/70 to-(--secondary-color)/45" />
   
       
      
        <div className="flex relative flex-col items-center justify-center " >
                       
                
                    <div className="flex z-10  p-6 lg:gap-6 flex-col items-center justify-center ">
                                          
                    <h4 className="text-[#fffced] font-bold text-center text-[46px] geonova white leading-[40px]">Have an idea? Feel free to reach out.</h4>

                     <div className="flex mt-3 gap-4">
                        
                      <p className="text_para text-center  text-[#fffced]"><span className="  ">Take </span> your business on the first step. We look forward to being part of your journey.</p>
                      </div>
                                   <div className="mt-0 flex flex-row  gap-6">
                    
                     <motion.div className='flex btn border  mt-6 group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-(--primary-color) border-(--primary-color)/40 px-6  py-2 items-center gap-4' >
                     <div className='relative flex overflow-hidden'>
                             <h3 className='text_button group-hover:translate-y-6 ease-in-out transition-transform duration-490 out'>
                          Contact Us
                        </h3>
                        <h3 className='text_button absolute -translate-y-4 ease-in group-hover:opacity-100 group-hover:translate-y-0 opacity-0  transform transition-all duration-600'>
                          Contact Us
                        </h3>
                     </div>
                     
                        <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm  justify-center bg-[#fffced] size-7 p-2'>
                          <ArrowRight className='absolute group-hover:rotate-15  ease-in-out  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-(--primary-color)' />
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