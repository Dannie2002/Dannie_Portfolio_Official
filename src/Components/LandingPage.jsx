import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bag from "../assets/12.png"
import noise from "../assets/Noise.png";
import Scribble from "../Components/Scribble.jsx";
import Web from '../SVGS/Web.jsx';
import Energy from '../SVGS/Energy.jsx';
import ContactPlane from '../SVGS/ContactPlane.jsx'
import ThreeStars from '../SVGS/ThreeStars.jsx';
import Telecom from "../SVGS/Telecom.jsx"

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

const words =[
  {text : "Resourceful" },
  {text : "Creative" },
  {text : "Akatundu"},
  {text : "Namateture"},
  {text : "Machine"},
  {text : "Katakwe"},

]

  return (
    <section className="min-h-screen overflow-hidden lg:h-[95vh] w-full relative bg-[#1d201d] flex items-center">

         <div className='bg-transparent backdrop-blur-[12px] absolute bottom-8 right-40 py-2 gap-2 outline-[1.2px] outline-[#978F66]/60 items-center rounded-full px-6 flex '>
                        <Web fill="#978F66" size={33} />
                        <Energy fill="#978F66" size={30} />
                        <Telecom fill="#978F66" size={33} />
                        <ContactPlane fill="#978F66" size={30} />
                        <ThreeStars color="#978F66" size={33} />
                        
                      </div> 

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
      <div className="absolute z-0 top-40 right-5 size-30 rounded-full shadow-[15px_10px_16px_2px_rgba(224,222,218,0.1)] z-0 bg-gradient-to-l opacity-78 from-[#0b0b0d] via-[#0b0b0d] to-[#b8b8b8]/40" />

       <motion.div
        className="
          absolute z-0 top-25 right-30
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


        <div className="flex_container">
                <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:w-1/2 lg:mt-22 mt-15 relative z-30 items-start justify-center"
        >


          {/* Scribble */}
          <motion.div variants={itemVariants}>
            <Scribble className="mb-4" 
              size={20}
              color="#635985"
            />
          </motion.div>
           <motion.h1
            variants={itemVariants}
            className="text-[14px] tracking-[3px] mb-4 uppercase chivo font-semibold text-[#b8b8b8]"
          >
          To Reign the digital world.  
          </motion.h1>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading geonova !text-[58px] !leading-[68px] !capitalize font-bold leading-[68px] text-[#ededed]"
          >          
            beyond<br /> business <br />  
            <span className="text_gradient">
            authenticity.
            </span>
        
          </motion.h1>


          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="pt-6 text_para max-w-lg"
          >
            I design and build modern digital products<span className="">  enabling your business to grow effortlessly, access new markets and deliver reliable digital solutions.</span>
           
          </motion.p>

          {/* Contact Button */}
          <motion.div
            variants={itemVariants}
            className="flex gap-5  mt-6"
          >

             <motion.div className=' flex  border  mt-6 group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-[#F2EAE0] hover:bg-(--secondary-color) border-(--primary-color)/40 px-10  py-2 items-center gap-6' >
                                <div className='relative  flex overflow-hidden'>
                             <h3 className='text_button !text-[#101011] group-hover:translate-y-6 ease-in transition-transform duration-490 out'>
                          View works
                        </h3>
                        <h3 className='absolute -translate-y-4 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0  transform transition-all duration-600'>
                          View works
                        </h3>
                     </div>
                     
                                 
                                    <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm  justify-center bg-[#101011] size-7 p-2'>
                                      <ArrowRight className='absolute group-hover:rotate-15  ease-in-out  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-[#fffced]' />
                                      <ArrowRight className='absolute group-hover:-rotate-45  ease-in-out  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                                    </div>
                                   
                                  </motion.div>

          </motion.div>

                </motion.div>


            <div className="lg:w-1/2  w-full flex flex-col lg:mt-28 lg:ml-22 mt-0 relative z-30 items-start lg:items-center justify-center ">
              <svg
    className="absolute -bottom-10 right-40 size-10"
    version="1.1"
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    fill="#fffced z-40"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>

    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>

    <g id="SVGRepo_iconCarrier">
      <style type="text/css">
        {`.bentblocks_een{fill:#978F66;}`}
      </style>

      <path
        className="bentblocks_een"
        d="M25.975,11.514C25.728,8.428,23.15,6,20,6c-1.094,0-2.117,0.298-3,0.809C16.117,6.298,15.094,6,14,6
        c-1.787,0-3.386,0.785-4.485,2.025C6.428,8.272,4,10.85,4,14c0,3.314,2.686,6,6,6h6
        c0,3.314,0.686,6,4,6c3.15,0,5.728-2.428,5.975-5.515c0.094-0.083,1.943-1.86,1.916-4.485
        C27.878,14.683,27.278,13.152,25.975,11.514z M6,14c0-2.067,1.614-3.816,3.675-3.982
        c0.032-0.003,0.063-0.013,0.095-0.017l1.3,1.3c-0.529,1.114-0.344,2.485,0.577,3.405l1.414-1.414
        c-0.39-0.39-0.39-1.024,0-1.414c0.378-0.378,1.039-0.377,1.414,0l1.414-1.414
        c-0.886-0.886-2.285-1.069-3.396-0.568l-0.992-0.992C12.208,8.332,13.084,8,14,8
        c1.304,0,2.348,0.809,3,0.809C17.653,8.809,18.695,8,20,8c2.067,0,3.816,1.614,3.982,3.675
        c0.041,0.515,0.28,0.993,0.666,1.336c0.361,0.32,0.64,0.707,0.862,1.122C25.535,14.178,25.974,14.99,26,16
        c0.041,1.586-0.716,3.657-4,4c-1.245,0.13-2.37-0.579-3.103-1.483l1.231-1.231
        c0.398,0.19,0.832,0.3,1.286,0.3c0.802,0,1.556-0.312,2.122-0.879l-1.416-1.413
        c-0.377,0.376-1.033,0.378-1.413,0c-0.39-0.39-0.39-1.024,0-1.415l-1.414-1.414
        c-0.921,0.92-1.105,2.291-0.577,3.405c0,0-2.038,2.13-2.216,2.13H10C7.794,18,6,16.206,6,14z
        M20,24c-0.898,0-1.909-0.01-1.992-3.532C19.068,21.418,20.464,22,22,22
        c0.544,0,1.069-0.079,1.571-0.215C22.909,23.099,21.544,24,20,24z"
      />
    </g>
  </svg>
<motion.svg
  className="lg:size-70 size-50"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient
      id="cubeGradient"
      x1="3"
      y1="3"
      x2="21"
      y2="21"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0%" stopColor="#fffced" />
      <stop offset="55%" stopColor="#ededed" />
      <stop offset="100%" stopColor="#BDA6CE" />
    </linearGradient>

    {/* Soft blur for the enlarged path */}
    <filter
      id="cubeGlow"
      x="-50%"
      y="-50%"
      width="200%"
      height="200%"
    >
      <feGaussianBlur stdDeviation="0.8" />
    </filter>
  </defs>

  <g id="SVGRepo_iconCarrier">

    {/* =========================
        ENLARGED GROWING PATH
       ========================= */}
    <path
      d="M20.73 16.52C20.73 16.52 20.73 16.45 20.73 16.41V7.58999C20.7297 7.47524 20.7022 7.36218 20.65 7.25999C20.5764 7.10119 20.4488 6.97364 20.29 6.89999L12.29 3.31999C12.1926 3.2758 12.0869 3.25293 11.98 3.25293C11.8731 3.25293 11.7674 3.2758 11.67 3.31999L3.67001 6.89999C3.54135 6.96474 3.43255 7.06303 3.35511 7.18448C3.27766 7.30592 3.23444 7.44603 3.23001 7.58999V16.41C3.23749 16.5532 3.28195 16.6921 3.35906 16.813C3.43617 16.9339 3.54331 17.0328 3.67001 17.1L11.67 20.68C11.7668 20.7262 11.8727 20.7501 11.98 20.7501C12.0873 20.7501 12.1932 20.7262 12.29 20.68L20.29 17.1C20.4055 17.0471 20.5061 16.9665 20.5829 16.8653 20.6597 16.812 20.7102 16.6455 20.73 16.52ZM4.73001 8.73999L11.23 11.66V18.84L4.73001 15.93V8.73999ZM12.73 11.66L19.23 8.73999V15.93L12.73 18.84V11.66ZM12 4.81999L18.17 7.58999L12 10.35L5.83001 7.58999L12 4.81999Z"
      fill="#BDA6CE"
      opacity="0.14"
      filter="url(#cubeGlow)"
      transform="translate(0 0.3) scale(1.08)"
      transform-origin="12px 12px"
    />

    {/* =========================
        ORIGINAL SHARP PATH
       ========================= */}
    <path
      d="M20.73 16.52C20.73 16.52 20.73 16.45 20.73 16.41V7.58999C20.7297 7.47524 20.7022 7.36218 20.65 7.25999C20.5764 7.10119 20.4488 6.97364 20.29 6.89999L12.29 3.31999C12.1926 3.2758 12.0869 3.25293 11.98 3.25293C11.8731 3.25293 11.7674 3.2758 11.67 3.31999L3.67001 6.89999C3.54135 6.96474 3.43255 7.06303 3.35511 7.18448C3.27766 7.30592 3.23444 7.44603 3.23001 7.58999V16.41C3.23749 16.5532 3.28195 16.6921 3.35906 16.813C3.43617 16.9339 3.54331 17.0328 3.67001 17.1L11.67 20.68C11.7668 20.7262 11.8727 20.7501 11.98 20.7501C12.0873 20.7501 12.1932 20.7262 12.29 20.68L20.29 17.1C20.4055 17.0471 20.5061 16.812 20.5829 16.8653C20.6597 16.812 20.7102 16.6455 20.73 16.52ZM4.73001 8.73999L11.23 11.66V18.84L4.73001 15.93V8.73999ZM12.73 11.66L19.23 8.73999V15.93L12.73 18.84V11.66ZM12 4.81999L18.17 7.58999L12 10.35L5.83001 7.58999L12 4.81999Z"
      fill="url(#cubeGradient)"
    />

  </g>
</motion.svg>

            </div>




        </div>
      
      </div>

    </section>
  );
};

export default LandingPage;