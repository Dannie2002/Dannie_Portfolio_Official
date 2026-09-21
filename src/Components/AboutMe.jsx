import React from 'react';
import work from "../assets/WorkExp.jpg";
import Scribble from '../Components/Scribble'
import { motion } from 'framer-motion';
import { Link } from "react-router";
import MoonBalls from "./MoonBalls.jsx";


const AboutMe = () => {


  
          const bg4 = {
      backgroundImage: `url(${work}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      
    };
  



  return (
    <section className="lg:min-h-[70vh] h-min-screen relative bg-(--background-color)">

        <div className="absolute z-0 top-40 right-5 size-30 rounded-full shadow-[15px_10px_16px_2px_rgba(224,222,218,0.1)] z-0 bg-gradient-to-l opacity-78 from-[#0b0b0d] via-[#0b0b0d] to-[#b8b8b8]/40" />
                 <motion.div
             className="
               absolute z-0 top-50 right-70
               size-8 rounded-full
               bg-gradient-to-r
               from-[#0b0b0d]
               via-[#000000]
               to-[#978F66]
               opacity-78
               shadow-[15px_10px_16px_2px_rgba(224,222,218,0)]
             "
             animate={{
               rotate: 360,
               scale: [1, 1.015, 1],
             }}
             transition={{
               rotate: {
                 duration: 35,
                 repeat: Infinity,
                 ease: "linear",
               },
               scale: {
                 duration: 7,
                 repeat: Infinity,
                 ease: "easeInOut",
               },
             }}
             style={{
               transformStyle: "preserve-3d",
             }}
           />

                     <motion.div
             className="
               absolute z-0 top-20 right-40
               size-18 rounded-full
               bg-gradient-to-r
               from-[#0b0b0d]
               via-[#000000]
               to-[#978F66]
               opacity-78
               shadow-[15px_10px_16px_2px_rgba(224,222,218,0)]
             "
             animate={{
               rotate: 360,
               scale: [1, 1.015, 1],
             }}
             transition={{
               rotate: {
                 duration: 15,
                 repeat: Infinity,
                 ease: "linear",
               },
               scale: {
                 duration: 7,
                 repeat: Infinity,
                 ease: "easeInOut",
               },
             }}
             style={{
               transformStyle: "preserve-3d",
             }}
           />
       

        <div className='Section_wrapper'>

            <motion.h1
                              
                                className="page_title text-[#201f1f] font-semibold"
                              >
                             About Me
                                
                              </motion.h1>
      <div className='flex  mt-12 items-start'>

                <div className="w-fit  !py-0 ">
                     
        
                  <h3 className="Section_title text-[#201f1f]">
                 
                     Telecom tech. Client support.<br /> Brand identity.<span className='text-(--primary-color)'> All in one.</span>
                   
                  </h3>

                      <motion.p className="text_para max-w-xl">
            From designing modern digital products that speaks to your market and beyond. To proving client support through professional communication.
          </motion.p>
          
               <Link
                to="/who-is-dan?"
                  className="flex mt-4 items-center gap-1 cursor-pointer text-[#4a4a4a] archivo
                  transition-all duration-300 relative group btn"
                >
                  Learn more About Dannie
                </Link>
        
                 
        </div>

   <div className='grid grid-cols-1 h-66 w-full lg:grid-cols-3 lg:w-[55%] rounded-sm gap-6 relative'>
  <div className="hidden z-0 rounded-sm inset-0 bg-gradient-to-r from-[var(--secondary-color)]  via-(--primary-color) to-(--secondary-color) opacity-70 "></div>

  <div className="relative h-full w-full [perspective:1000px]">
    <motion.div
      className="relative h-full w-full [transform-style:preserve-3d]"
      whileHover={{ rotateY: 180 }}
      transition={{
        duration: 1.3,
        ease: [0.42, 1, 0.36, 1],
      }}
    >
      <div className='absolute inset-0 flex bg-[#1b1916] rounded-2xl items-start justify-between gap-8 z-5 flex-col border-l-[0.3px] border-l-[#fffced]/70 p-4 [backface-visibility:hidden]'>
        <h2 className='!text-[16-px] text-[#fffced] font-semibold'>Years of Experience</h2>
        <h2 className='text-[#fffced] text-[64px] card_heading font-bold'>1.5+</h2>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img
          src={work}
          alt=""
          className="absolute inset-0 size-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-[#0b0b0d]/65"></div>

        <div className="relative z-10 flex size-full items-end p-4">
          <h2 className="card_heading">
            Learning. Growing. Building.
          </h2>
        </div>
      </div>
    </motion.div>
  </div>


  <div className="relative h-full w-full [perspective:1000px]">
    <motion.div
      className="relative h-full w-full [transform-style:preserve-3d]"
      whileHover={{ rotateY: 180 }}
      transition={{
        duration: 1.8,
        ease: [0.52, 1, 0.36, 1],
      }}
    >
      <div className='absolute inset-0 flex z-5 flex-col rounded-2xl items-start justify-between gap-6 bg-[#1b1916] p-4 gap-0 [backface-visibility:hidden]'>
        <h2 className='!text-[16-px] text-[#fffced] font-semibold'>Projects Delivered</h2>
        <h2 className='text-[#fffced] text-[64px] card_heading font-bold'>15+</h2>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img
          src={work}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b0b0d]/65"></div>

        <div className="relative z-10 flex size-full items-end p-4">
          <h2 className="text-[#fffced] text-[20px] font-semibold">
            Ideas. Code. Impact.
          </h2>
        </div>
      </div>
    </motion.div>
  </div>


  <div className="relative h-full w-full [perspective:1000px]">
    <motion.div
      className="relative h-full w-full [transform-style:preserve-3d]"
      whileHover={{ rotateY: 180 }}
      transition={{
        duration: 1.8,
        ease: [0.52, 1, 0.36, 1],
      }}
    >
      <div className='absolute inset-0 flex z-5 items-start rounded-2xl justify-between bg-(--primary-color) flex-col p-4 gap-8 [backface-visibility:hidden]'>
        <h2 className='!text-[16-px] text-[#fffced] font-semibold'>Certifications</h2>
        <h2 className='text-[#fffced] text-[64px] card_heading font-bold'>20+</h2>
      </div>

      <div className="absolute inset-0 overflow-hidden rounded-2xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <img
          src={work}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0b0b0d]/65"></div>

        <div className="relative z-10 flex size-full items-end p-4">
          <h2 className="text-[#fffced] text-[20px] font-semibold">
            Verified. Skilled. Ready.
          </h2>
        </div>
      </div>
    </motion.div>
  </div>




      </div>
      
      
      </div>    
 
          
        </div>



 </section>
  );
};

export default AboutMe;