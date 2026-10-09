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
import webbb from "../assets/Webbb.jpg";

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

      

      {/* Noise */}
      <img
        src={noise}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
      />
        <img
        src={bag}
        alt=""
        className="absolute  inset-0 z-10 h-full w-full object-cover opacity-60 mix-blend-overlay"
      />
      {/* Overlay */}
      <div className="absolute z-0 top-40 right-5 size-30 rounded-full shadow-[15px_10px_16px_2px_rgba(99,89,133,0.1)] z-0 bg-gradient-to-l opacity-78 from-[#0b0b0d] via-[#0b0b0d] to-[#b8b8b8]/40" />

       <motion.div
        className="
          absolute z-0 top-25 right-30
          size-10 rounded-full
          shadow-[15px_10px_16px_2px_rgba(99,89,133,0.2)]
          bg-gradient-to-r
         from-[#191933] via-[#1a1a20] to-[#b8b8b8]/40
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
        }}/>


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
            className="font-heading geonova !text-[48px] !leading-[58px] !capitalize font-bold leading-[68px] text-[#ededed]"
          >          
            building<br /> business <br />  
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
            className="flex gap-5 btn mt-6"
          >

             <motion.div className=' flex   border  mt-6 group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-transparent hover:bg-(--secondary-colour) border-(--primary-color)/60 px-10  py-2 items-center gap-6' >
                                <div className='relative  flex overflow-hidden'>
                             <h3 className='text_button text-[#fffced]! group-hover:translate-y-6 ease-in transition-transform duration-490 out'>
                          View works
                        </h3>
                        <h3 className='absolute -translate-y-4 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 opacity-0  transform transition-all duration-600'>
                         See more
                        </h3>
                     </div>
                     
                                 
                                    <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm  justify-center group-hover:bg-[#fffced] bg-[#101011] size-7 p-2'>
                                      <ArrowRight className='absolute group-hover:rotate-15  ease-in-out  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-[#fffced]' />
                                      <ArrowRight className='absolute group-hover:-rotate-45  ease-in-out  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                                    </div>
                                   
                                  </motion.div>

          </motion.div>

                </motion.div>


            <div className="lg:w-1/2  p-6 w-full flex flex-col lg:mt-28 lg:ml-22 mt-0 relative z-30 items-start lg:items-center justify-center ">
           <div className="border border-[#fffced]/10 flex items-center justify-start rounded-3xl h-[420px] border-(--text-colour)/70 card_transparent w-[255px] flex items-center justify-center relative">


           <div className="h-[140px] w-full" >

            <img src={webbb} className="object-cover rounded-sm h-full w-full" />

           </div>
      
      <motion.svg
        className="lg:size-25 size-50"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // --- 3D Moon Gravity Floating Animation Loop ---
        animate={{
          y: [0, -15, 2, -12, 0],       // Low gravity slow vertical drift
          x: [0, 4, -4, 3, 0],          // Subliminal lateral swaying
          rotateY: [0, 8, -6, 4, 0],    // Mild 3D yaw rotation
          rotateX: [0, -4, 5, -2, 0],   // Mild 3D pitch tilt
        }}
        transition={{
          duration: 7,                  // Long duration for low gravity speed
          ease: "easeInOut",            // Fluid transitions
          repeat: Infinity,             // Infinite sequence loops
          times: [0, 0.35, 0.65, 0.85, 1], // Asymmetric milestones for realistic float
        }}
        style={{
          perspective: 600,             // Provides a 3D space depth for rotations
        }}
      >
        <defs>
          <linearGradient
            id="robotGradient"
            x1="64"
            y1="64"
            x2="448"
            y2="448"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#fffced" />
            <stop offset="55%" stopColor="#ededed" />
            <stop offset="100%" stopColor="#BDA6CE" />
          </linearGradient>

          {/* Soft blur for the enlarged background glow */}
          <filter
            id="robotGlow"
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>

        <g id="SVGRepo_iconCarrier">
          {/* =========================
              ENLARGED GROWING PATH (GLOW)
             ========================= */}
          <g
            fill="#BDA6CE"
            opacity="0.14"
            filter="url(#robotGlow)"
            transform="translate(0, 6) scale(1.08)"
            transformOrigin="256px 256px"
          >
            <path d="M320.15,283.87a5.33,5.33,0,0,0,5.33,5.33h7.8a22.16,22.16,0,0,0,22.14-22.14v-3.29a19.69,19.69,0,0,0,14.39-18.9v-38.8a19.74,19.74,0,0,0-19.72-19.72H348.5V152.4l16.33-49.52a5.31,5.31,0,0,0-5.06-7H301.46a5.33,5.33,0,0,0-5.33,5.33v30.53H278.92a30.16,30.16,0,0,0,7.5-19.79,30.46,30.46,0,0,0-60.91,0,30.16,30.16,0,0,0,7.5,19.79H215.88V101.21a5.32,5.32,0,0,0-5.33-5.33H152.23a5.31,5.31,0,0,0-5.06,7l16.34,49.52v33.95h-1.6a19.74,19.74,0,0,0-19.72,19.72v38.8a19.69,19.69,0,0,0,14.39,18.9v3.29a22.16,22.16,0,0,0,22.15,22.14h7.79a5.33,5.33,0,0,0,5.33-5.33V193.15l13.37-22.33V302.28a29,29,0,0,0-24,28.47v51.57a44,44,0,0,0-34.29,42.85,5.34,5.34,0,0,0,5.34,5.33h85.42a5.33,5.33,0,0,0,5.33-5.33V255.42h26V425.17a5.33,5.33,0,0,0,5.33,5.33h85.42a5.34,5.34,0,0,0,5.34-5.33,44,44,0,0,0-34.29-42.85V330.75a29,29,0,0,0-24-28.46v-52.2c0-.15-.07-.27-.08-.42v-79l13.44,22.46v90.72Zm24.61-16.81a11.49,11.49,0,0,1-11.48,11.48h-2.46V264.6h13.94Zm14.39-61v38.8a9.06,9.06,0,0,1-9.06,9.06H330.82V197h19.27A9.07,9.07,0,0,1,359.15,206.07Zm-52.36-99.53H352.4l-13.09,39.68H306.79ZM236.17,112A19.79,19.79,0,1,1,256,131.74,19.81,19.81,0,0,1,236.17,112Zm59.88,30.46V244.75H215.88V142.41Zm-90.83-35.87v39.68H172.7l-13.1-39.68ZM152.85,244.87v-38.8a9.07,9.07,0,0,1,9.06-9.06h19.27v56.92H161.91A9.06,9.06,0,0,1,152.85,244.87Zm28.33,33.67h-2.45a11.5,11.5,0,0,1-11.49-11.48V264.6h13.94Zm2.32-92.19h-9.32V156.88h27Zm8.35,144.4a18.32,18.32,0,0,1,18.3-18.3h22.17v68.71H191.85Zm40.47,89.08H158a33.42,33.42,0,0,1,32.92-28h41.42Zm0-118H215.88V255.42h16.44Zm63.81-46.37v46.37H279.68V255.42ZM354,419.83H279.68v-28h41.43A33.41,33.41,0,0,1,354,419.83Zm-33.87-89.08v50.41H279.68V312.45h22.17A18.32,18.32,0,0,1,320.15,330.75Zm17.68-173.87v29.47H328.5l-17.63-29.47Z" />
            <path d="M234.16,190h43.43a5.33,5.33,0,0,0,5.33-5.33V163.23a5.33,5.33,0,0,0-5.33-5.33H234.16a5.33,5.33,0,0,0-5.33,5.33v21.43A5.33,5.33,0,0,0,234.16,190Zm5.34-21.43h32.75v10.77H239.5Z" />
          </g>

          {/* =========================
              ORIGINAL SHARP PATH (GRADIENT)
             ========================= */}
          <g fill="url(#robotGradient)">
            <path d="M320.15,283.87a5.33,5.33,0,0,0,5.33,5.33h7.8a22.16,22.16,0,0,0,22.14-22.14v-3.29a19.69,19.69,0,0,0,14.39-18.9v-38.8a19.74,19.74,0,0,0-19.72-19.72H348.5V152.4l16.33-49.52a5.31,5.31,0,0,0-5.06-7H301.46a5.33,5.33,0,0,0-5.33,5.33v30.53H278.92a30.16,30.16,0,0,0,7.5-19.79,30.46,30.46,0,0,0-60.91,0,30.16,30.16,0,0,0,7.5,19.79H215.88V101.21a5.32,5.32,0,0,0-5.33-5.33H152.23a5.31,5.31,0,0,0-5.06,7l16.34,49.52v33.95h-1.6a19.74,19.74,0,0,0-19.72,19.72v38.8a19.69,19.69,0,0,0,14.39,18.9v3.29a22.16,22.16,0,0,0,22.15,22.14h7.79a5.33,5.33,0,0,0,5.33-5.33V193.15l13.37-22.33V302.28a29,29,0,0,0-24,28.47v51.57a44,44,0,0,0-34.29,42.85,5.34,5.34,0,0,0,5.34,5.33h85.42a5.33,5.33,0,0,0,5.33-5.33V255.42h26V425.17a5.33,5.33,0,0,0,5.33,5.33h85.42a5.34,5.34,0,0,0,5.34-5.33,44,44,0,0,0-34.29-42.85V330.75a29,29,0,0,0-24-28.46v-52.2c0-.15-.07-.27-.08-.42v-79l13.44,22.46v90.72Zm24.61-16.81a11.49,11.49,0,0,1-11.48,11.48h-2.46V264.6h13.94Zm14.39-61v38.8a9.06,9.06,0,0,1-9.06,9.06H330.82V197h19.27A9.07,9.07,0,0,1,359.15,206.07Zm-52.36-99.53H352.4l-13.09,39.68H306.79ZM236.17,112A19.79,19.79,0,1,1,256,131.74,19.81,19.81,0,0,1,236.17,112Zm59.88,30.46V244.75H215.88V142.41Zm-90.83-35.87v39.68H172.7l-13.1-39.68ZM152.85,244.87v-38.8a9.07,9.07,0,0,1,9.06-9.06h19.27v56.92H161.91A9.06,9.06,0,0,1,152.85,244.87Zm28.33,33.67h-2.45a11.5,11.5,0,0,1-11.49-11.48V264.6h13.94Zm2.32-92.19h-9.32V156.88h27Zm8.35,144.4a18.32,18.32,0,0,1,18.3-18.3h22.17v68.71H191.85Zm40.47,89.08H158a33.42,33.42,0,0,1,32.92-28h41.42Zm0-118H215.88V255.42h16.44Zm63.81-46.37v46.37H279.68V255.42ZM354,419.83H279.68v-28h41.43A33.41,33.41,0,0,1,354,419.83Zm-33.87-89.08v50.41H279.68V312.45h22.17A18.32,18.32,0,0,1,320.15,330.75Zm17.68-173.87v29.47H328.5l-17.63-29.47Z" />
            <path d="M234.16,190h43.43a5.33,5.33,0,0,0,5.33-5.33V163.23a5.33,5.33,0,0,0-5.33-5.33H234.16a5.33,5.33,0,0,0-5.33,5.33v21.43A5.33,5.33,0,0,0,234.16,190Zm5.34-21.43h32.75v10.77H239.5Z" />
          </g>
        </g>
      </motion.svg>

           <div className='hidden bg-transparent backdrop-blur-[12px] absolute bottom-6 py-2 gap-2 outline-[1.2px] outline-[#978F66]/60 items-center rounded-full px-6 lg:flex '>
                        <Web fill="#978F66" size={23} />
                        <Energy fill="#978F66" size={20} />
                        <Telecom fill="#978F66" size={23} />
                        <ContactPlane fill="#978F66" size={20} />
                        <ThreeStars color="#978F66" size={23} />
                        
             </div> 

    </div>
          
      

            </div>




        </div>
      
      </div>

    </section>
  );
};

export default LandingPage;