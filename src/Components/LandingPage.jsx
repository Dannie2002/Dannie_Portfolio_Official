import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bag from "../assets/12.png";
import code from "../assets/code.png";
import bg8 from "../assets/Webbb.jpg";
import noise from "../assets/Noise.png";
import Scribble from "../Components/Scribble.jsx";

const LandingPage = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
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

  return (
    <section
      className="h-[90vh] overflow-hidden lg:h-[95vh] w-full relative bg-[#1d201d] flex items-center"
      style={{
        backgroundImage: `url(${bg8})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >

      {/* Noise */}
      <img
        src={noise}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-overlay"
      />

  

        <img
        src={bag}
        alt=""
        className="absolute  inset-0 z-10 h-full w-full object-cover opacity-90 mix-blend-overlay"
      />

      {/* Overlay */}
      <div className="absolute z-10 inset-0 bg-gradient-to-r opacity-100 from-[#0b0b0d] via-[#0b0b0d]/90 to-[#272726]/85" />

      <div className="absolute z-0 top-40 right-5 size-30 rounded-full shadow-[15px_10px_16px_2px_rgba(224,222,218,0.1)] z-0 bg-gradient-to-l opacity-78 from-[#0b0b0d] via-[#0b0b0d] to-[#b8b8b8]/40" />
            <motion.div
        className="
          absolute z-0 top-60 right-40
          size-15 rounded-full
          bg-gradient-to-r
          from-[#b8b8b8]
          via-[#0b0b0d]
          to-[#b8b8b8]/60
          opacity-78
          shadow-[15px_10px_16px_2px_rgba(224,222,218,0.4)]
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
          absolute z-0 top-30 right-30
          size-10 rounded-full
          shadow-[15px_10px_16px_2px_rgba(151,143,102,0.3)]
          bg-gradient-to-r
          from-[#0b0b0d]
          via-[#0b0b0d]
          to-[#b8b8b8]/40
          opacity-88
        "
        animate={{
          scale: [
            1,        // resting
            1.08,     // tiny inhale
            1.32,     // heartbeat
            1.12,     // recoil
            1.42,     // big pop
            1.05,     // shrink
            1,        // rest
      
            1,        // DELAY
      
            1.18,     // second pulse
            1.38,
            1.08,
            1,        // shrink
      
            1,        // LONG DELAY
      
            1.55,     // sudden balloon pop
            1.08,
            1,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          times: [
            0,
            0.08,
            0.15,
            0.20,
            0.27,
            0.36,
            0.44,
      
            0.58,
      
            0.64,
            0.70,
            0.76,
            0.82,
      
            0.91,
      
            0.96,
            0.98,
            1,
          ],
        }}
      />


      {/* Content */}
      <div className="relative Section_wrapper z-30 w-full">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:mt-22 mt-15 relative z-30 items-start justify-center"
        >

          {/* Scribble */}
          <motion.div variants={itemVariants}>
            <Scribble className="" 
              size={20}
              color="#
"
            />
          </motion.div>
           <motion.h1
            variants={itemVariants}
            className="text-[12px] tracking-[3px] mb-4 uppercase chivo font-semibold text-[#b8b8b8]"
          >
          Fleelance FrontEnd Developer
            
          </motion.h1>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading geonova !text-[58px] !leading-[68px] !capitalize font-bold leading-[68px] text-(--primary-color)"
          >    
              
            beyond<br /> business <br />  
            <span className="text-(--secondary-color)">
            authenticity.
            </span>
        
          </motion.h1>


          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="pt-6  text-[#fffced] font-normal  text-[16.5062px] leading-[23.754px] max-w-2xl"
          >
            I design and build modern digital products<span className="">  enabling your business to grow effortlessly, access new markets and deliver reliable digital solutions.</span>
           
          </motion.p>


          {/* Contact Button */}
          <motion.div
            variants={itemVariants}
            className="flex gap-5 mt-6"
          >

             <motion.div className='flex  border  mt-6 group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-[#F2EAE0] hover:bg-(--secondary-color) border-(--primary-color)/40 px-6  py-2 items-center gap-4' >
                                 <div className='relative flex overflow-hidden'>
                                         <h3 className=' text-[#101011] archivo font-medium text-[16.5px] group-hover:translate-y-6 ease-in-out transition-transform duration-490 out'>
                                      About Me
                                    </h3>
                                    <h3 className='text_button absolute -translate-y-4 ease-in group-hover:opacity-100 group-hover:translate-y-0 opacity-0  transform transition-all duration-600'>
                                      Contact Us
                                    </h3>
                                 </div>
                                 
                                    <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm  justify-center bg-[#fffced] size-7 p-2'>
                                      <ArrowRight className='absolute group-hover:rotate-15  ease-in-out  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-[#101011]' />
                                      <ArrowRight className='absolute group-hover:-rotate-45  ease-in-out  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                                    </div>
                                   
                                  </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default LandingPage;