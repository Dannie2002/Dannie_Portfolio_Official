import React from "react";
import { useEffect, useRef, useState } from "react";
import {motion, AnimatePresence, backInOut} from 'framer-motion'
import { ArrowRight,ArrowUpRight, SplinePointer, ChevronDown } from 'lucide-react'
import branding from '../assets/ServiceDesk2.jpg'
import noise from "../assets/Noise.png";
import png from "../assets/Letsee.png";
import ContactPlane from "../SVGS/ContactPlane.jsx";
import TwoRings from "../SVGS/TwoRings.jsx";
import Graduate from "../SVGS/Graduate.jsx";
import Web from '../SVGS/Web.jsx';
import Energy from '../SVGS/Energy.jsx';
import ThreeStars from '../SVGS/ThreeStars.jsx';
import Telecom from "../SVGS/Telecom.jsx";

const WorkExperience = () => {


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
  
 

        const bg4 = {
    backgroundImage: `url(${branding})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };





const experience = [
  {
    point: "Service Desk Engineer",
    duration: "Feb 2026 — Present",
    description:
      "Supporting ISP operations and client connectivity while coordinating technical issues across network and service teams.",
  },

  {
    point: "ICT Support Officer",
    duration: "2025 — 2026",
    description:
      "Provided technical support and maintained ICT systems while assisting with connectivity and digital operations.",
  },
];


  const [activeIndex, setActiveIndex] = useState(null);

const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};




  return (
       <section className="h-min-screen relative bg-(--black-color)">

  {/* Section Heading */}

  <div className="Section_wrapper relative z-50">
          <div className="section_header">
       
                  <motion.h1  className="page_title"  > Explore more </motion.h1>
                 <h3   className="Section_title text-[#fffced]"> I believe in <span className="text-(--secondary-color)">dedication </span> and hardwork.</h3>
       
       
                 <div className="flex lg:flex-row flex-col items-center justify-between gap-20">
       
                   <motion.p
                     className="text_para max-w-xl text-[#fffced] "
                   >
                     From the internet backbone to telecommunications and ISP operations, Internet
                   and Fibre-to-the-Home (FTTH) installation
                   </motion.p>
       
                       <motion.div className='flex btn border  mt-6 group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-(--primary-color) border-(--primary-color)/40 px-6  py-2 items-center gap-4' >
                            <div className='relative flex overflow-hidden'>
                                    <h3 className='text_button group-hover:translate-y-6 ease-in-out transition-transform duration-490 out'>
                                 Exlpore more
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

  <div className="mt-16  ">

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8n ">

        <div className="bg-(--primary-color)  flex flex-col items-start justify-between relative row-span-2 lg:col-span-4 p-6 rounded-3xl overflow-hidden">
           <img src={noise} alt="" className="absolute inset-0   h-full w-full  object-cover  opacity-25  mix-blend-multiply pointer-events-none  "/>

               <h4 className="card_heading relative leading-[30px] text-[26px] z-10 text-[#fffced]">Industry Exposure in Telecommunications and ICT support.</h4>

                <div className="absolute inset-0 z-0 overflow-hidden rounded-sm size-full">
                  <motion.img
                    src={branding}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.08 }}
                    transition={{
                      duration: 8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="size-full rounded-sm grayscale object-cover"
                  />
                </div>

                 <div className="absolute z-5 inset-0 bg-gradient-to-b opacity-90 from-(--secondary-color) via-(--secondary-color)/70 to-(--secondary-color)/45" />

        <div className="relative z-10 mt-8 flex flex-col gap-4 w-full">

  {experience.map((item, index) => (
      <div key={index} className="bg-(--primary-colour)/6 rounded-sm backdrop-blur-[16px] px-3 border border-[#fffced]/40 py-2">

      {/* POSITION */}
      <div
        onClick={() => toggleAccordion(index)}
        className="flex items-center gap-2 justify-between cursor-pointer"
      >
        <motion.h4 className="card_heading text-[#fffced]">
          {item.point}
        </motion.h4>

        <motion.div
          animate={{
            rotate: activeIndex === index ? 180 : 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="z-50 "
        >
          <ChevronDown
            size={26}
            color="#fffced"
          />
        </motion.div>
      </div>

      {/* ACCORDION CONTENT */}
      <AnimatePresence>
        {activeIndex === index && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              clipPath: "inset(0 0 100% 0)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              y: -8,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{
              duration: 0.75,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >

            {/* DURATION */}
            <p className="mt-3 text-[#fffced] text-sm font-medium">
              {item.duration}
            </p>

            {/* SHORT DESCRIPTION */}
            <p className="mt-2 text-[#101011] text_para line-clamp-2 max-w-xl">
              {item.description}
            </p>

          </motion.div>
        )}
      </AnimatePresence>

      </div>
  ))}

       </div>
         </div>

        <div className="relative bg-[#BDA6CE] lg:col-span-4 p-6 flex flex-col items-start justify-between  h-64 rounded-3xl">
        <img src={noise} alt="" className="absolute inset-0   h-full w-full  object-cover  opacity-25  mix-blend-multiply pointer-events-none  "/>
          <div className="flex flex-col gap-3">

            <h4 className="card_heading  leading-[30px] relative text-[26px] z-10 text-[#fffced]"> Let's create something together.</h4>
             <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm  justify-center bg-[#fffced] size-8 p-2'>
                                      <ArrowRight className='absolute group-hover:rotate-15  ease-in-out  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-(--black-color) btn' />
                                      <ArrowRight className='absolute group-hover:-rotate-45  ease-in-out  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                                    </div>
          </div>
            
               <div className='bg-transparent py-2 gap-2 outline-[1.2px] outline-[#101111] items-center rounded-full px-6 flex '>
                  <Web fill="#101111" size={33} />
                  <Energy fill="#101111" size={30} />
                  <Telecom fill="#101111" size={33} />
                  <ContactPlane fill="#101111" size={30} />
                  <ThreeStars color="#101111" size={33} />
                  
                </div> 
        </div>

      <div className="bg-(--primary-color) flex flex-col items-start justify-between p-6 relative lg:col-span-4 h-64 rounded-3xl overflow-hidden">
           <h4 className="card_heading  leading-[30px] relative text-[26px] z-10 text-[#fffced]"> Turning ideas into reality.</h4>
           <p className="text_para font-normal text-[#fffced]">Transforming creative ideas into purposeful digital experiences of impact.</p>

  {/* CENTER ICON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <TwoRings
                  size={90}
                  color="#fffced"
                  className="size-14"
                />
              </div>

  {/* TAGLINE */}
   

     </div>

    <div className="relative overflow-hidden border border-(--primary-color) bg-(--black-color) lg:col-span-5 h-auto py-4 lg:h-44 rounded-3xl flex lg:flex-row flex-col w-full items-center justify-center px-4 lg:px-6">
          <div className="absolute z-0 rounded-full size-40 bg-transparent outline-[0.7px] outline-(--primary-color) top-5 -right-32" />
          <div className="absolute z-0 rounded-full size-40 bg-transparent outline-[0.7px] outline-(--primary-color) top-5 -right-35" />
          <div className="flex lg:flex-row flex-col items-start w-full gap-6 justify-center">
          {/* Years of Experience */}
                    <div className="flex flex-col items-start justify-center flex-1">
                      <span className="text-4xl geonova lg:text-4xl font-semibold text-[#fffced]">
                        1.5+
                      </span>

                      <span className="mt-2 text-[12px] lg:text-base text-(--primary-color)">
                        Years of Experience
                      </span>
                    </div>

                    {/* Divider */}
                    
                    {/* Projects Delivered */}
                  <div className="flex flex-col items-start justify-center flex-1">
                      <span className="text-4xl geonova lg:text-4xl font-semibold text-[#fffced]">
                        95%+
                      </span>

                      <span className="mt-2 text-[12px] lg:text-base text-(--primary-color)">
                        Client Satfaction Rate
                      </span>
                    </div>

                    {/* Divider */}

                    {/* Certifications */}
                  <div className="flex flex-col items-start justify-center flex-1">
                      <span className="text-4xl geonova lg:text-4xl font-semibold text-[#fffced]">
                        15+
                      </span>

                      <span className="mt-2 text-[12px] lg:text-base text-(--primary-color)">
                        Certifications 
                      </span>
                    </div>
          </div>
        
    </div>

        <div className="relative overflow-hidden bg-[#101111] border border-(--primary-color) flex items-center justify-center lg:col-span-3 h-44 rounded-3xl">
      
          <div className="absolute z-0 rounded-full size-40 bg-transparent outline-[0.7px] outline-(--primary-color) top-5 -left-32" />
     <div className="absolute z-0 rounded-full size-40 bg-transparent outline-[0.7px] outline-(--primary-color) top-5 -left-35" />

          <Graduate size={86} color="#fffced" className="z-10" />

        </div>


        

      </div>
    </div>


  </div>

</section>
  );
};

export default WorkExperience;