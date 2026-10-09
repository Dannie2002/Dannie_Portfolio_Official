import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import banner from "../assets/OLT.jpg";
import work from "../assets/ServiceDesk3.jpg";
import fat from "../assets/FAT.jpg";

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

const innovationQuotes = [
  "Building Beyond Horizons.",
  "Engineering Digital Authenticity.",
  "Crafting Seamless Interfaces.",
  "Where Code Meets Artistry.",
  "Optimized For Human Experience."
];

const cmsPosts = [
  { id: 1, title: "The art of creative direction" },
  { id: 2, title: "Designing calmer interfaces for focus" },
  { id: 3, title: "Organic shapes and natural layouts" },
  { id: 4, title: "Earthy color palettes that convert" },
  { id: 5, title: "Designing with growth: how to scale" },
  { id: 6, title: "Optimizing layout rendering threads" },
  { id: 7, title: "The physics of fluid spring micro-gestures" }
];

 const [quoteIndex, setQuoteIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  // Independent Random Notification Loop Engine
  useEffect(() => {
    const notificationCycle = setInterval(() => {
      setShowNotification(false);
      setTimeout(() => {
        setQuoteIndex((prev) => {
          let next = Math.floor(Math.random() * innovationQuotes.length);
          while (next === prev) next = Math.floor(Math.random() * innovationQuotes.length);
          return next;
        });
        setShowNotification(true);
      }, 5500);
    }, 7500); 

    return () => clearInterval(notificationCycle);
  }, []);

  
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
          absolute z-0 top-15 left-10
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


            <div className="lg:w-1/2  p-6 w-full flex flex-col lg:mt-28 lg:ml-12 mt-0 relative z-30 items-start lg:items-center justify-center ">
 <div className="border! border-[#fffced]/10 rounded-2xl h-[420px] border-(--text-colour)/10! card_transparent w-full flex flex-col items-center justify-between relative overflow-hidden group bg-[#0A0A0A]">
      
      {/* =========================================================
          INNOVATION LAYER: Coded Live CMS Dashboard Viewport
          (Replaces the static picture template with clean semantic markup)
         ========================================================= */}
      <div className="absolute inset-0 w-full h-full z-0 rounded-[22px] flex text-zinc-400 font-sans select-none overflow-hidden pt-6">
        
        {/* DASHBOARD COMPONENT A: Sidebar Navigation Panel */}
        <div className="w-[85px] h-full border-r border-zinc-900 bg-[#0E0E0E] flex flex-col p-1.5 gap-2 text-[8px]">
          <div className="flex items-center gap-1 font-bold text-zinc-100 bg-zinc-900/60 p-1 rounded-md mb-1 border border-zinc-800/30">
            <span className="text-[6px]">☰</span> About Dannie
          </div>
          <div className="flex flex-col gap-1.5 opacity-80 pl-0.5">
            <div className="text-zinc-500 font-semibold uppercase text-[6px] tracking-wider mb-0.5">Content</div>
            <div className="flex items-center gap-1 text-purple-400/90 font-medium bg-purple-500/5 px-1 py-0.5 rounded border border-purple-500/10"><span className="text-[6px]"><Energy fill="#978F66" size={23} /></span> Blog</div>
            <div className="flex items-center justify-between pl-2 text-zinc-200 font-semibold"><span className="flex items-center gap-1"><span>•</span> Posts</span><span className="text-[6px] text-zinc-500 bg-zinc-900 px-1 rounded-sm">320</span></div>
            <div className="flex items-center justify-between pl-2 text-zinc-400"><span className="flex items-center gap-1"><span>•</span> Authors</span><span className="text-[6px] text-zinc-500">24</span></div>
            <div className="flex items-center justify-between pl-2 text-zinc-400"><span className="flex items-center gap-1"><span>•</span> Tags</span><span className="text-[6px] text-zinc-500">96</span></div>
            <div className="flex items-center gap-1 mt-1"><span className="text-[6px]"><Telecom fill="#978F66" size={18} /></span> Media</div>
            <div className="flex items-center gap-1"><span className="text-[6px]"><Web fill="#978F66" size={18} /></span> Shop</div>
          </div>
        </div>

        {/* DASHBOARD COMPONENT B: Interactive Main Document Table Canvas */}
        <div className="flex-1 h-full bg-[#0A0A0A] flex flex-col relative">
          {/* Fixed Quick-Actions Sub-Toolbar Panel Header */}
          <div className="w-full p-2 border-b border-zinc-900/80 flex items-center justify-between text-[8px] bg-[#0A0A0A] z-10 text-zinc-500">
            <div className="flex gap-2 font-medium"><span className="text-zinc-300 font-bold border-b border-zinc-400 pb-0.5">Content</span><span>Fields</span></div>
            <div className="flex gap-1.5 text-[7px] text-zinc-400"><span>＋</span><span>⇅</span><span>🔍</span></div>
          </div>

          {/* Micro-Human Fluid Stepped Incremental Scrolling Feed Wrapper */}
          <div className="flex-1 w-full overflow-hidden">
            <motion.div
              className="w-full flex flex-col"
              animate={{ 
                y: [
                  "0px",       // Top Position: Post 1-4 active view
                  "0px",       // PAUSE
                  "-45px",     // Step Scroll slightly downward
                  "-45px",     // PAUSE
                  "-95px",     // Push deeper to expose hidden index modules
                  "-95px",     // PAUSE
                  "-140px",    // Reach bottom element threshold
                  "-140px",    // PAUSE
                  "-185px"     // Flawless looping clip bridge reset track
                ] 
              }}
              transition={{
                duration: 22,
                ease: "easeInOut",
                repeat: Infinity,
                times: [0, 0.15, 0.25, 0.45, 0.55, 0.75, 0.85, 0.94, 1]
              }}
            >
              {/* Core Repeating List Elements Rendering Loop */}
              {[...cmsPosts, ...cmsPosts.slice(0, 4)].map((post, idx) => (
                <div 
                  key={`${post.id}-${idx}`}
                  className="w-full px-2 py-2 border-b border-zinc-900/40 flex items-center gap-1.5 text-[7px] text-zinc-300 hover:bg-zinc-900/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded border border-zinc-800 bg-zinc-950 flex-shrink-0" />
                  <p className="truncate pr-1 leading-normal font-medium tracking-wide">
                    {post.title}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Ambient lighting layout vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-transparent to-zinc-950/40 pointer-events-none z-10" />
      </div>

      {/* =========================================================
          EXISTING LAYER: Hardware Speaker Notch Pill
         ========================================================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-3 bg-zinc-950 border-b border-x border-[#fffced]/10 rounded-b-lg z-30 flex items-center justify-center">
        <div className="w-6 h-[2px] bg-[#fffced]/20 rounded-full" />
      </div>

      {/* =========================================================
          EXISTING LAYER: Phone Push Notification Banner
         ========================================================= */}
      <div className="absolute top-5 left-3 right-3 flex flex-col items-center pointer-events-none z-30">
        <AnimatePresence mode="wait">
          {showNotification && (
            <motion.div 
              key={quoteIndex}
              initial={{ opacity: 0, y: -50, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 120, 
                damping: 14 
              }}
              className="w-full px-3 py-2 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-[#fffced]/10 shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-start gap-2"
            >
              <div className="mt-[2px] w-2 h-2 rounded-full bg-[#978F66] flex-shrink-0 animate-pulse" />
              <div className="flex flex-col gap-[1px]">
                <span className="text-[7px] uppercase tracking-widest text-zinc-500 font-mono font-bold">System Core</span>
                <p className="text-[9px] text-[#978F66] font-sans leading-tight">
                  {innovationQuotes[quoteIndex]}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* =========================================================
          YOUR ORIGINAL FLOATING SVG (Unchanged)
         ========================================================= */}
      <motion.svg
        className="lg:size-10 top-0 left-5 hidden size-50 z-20"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://w3.org"
        animate={{
          y: [0, -15, 2, -12, 0],       
          x: [0, 4, -4, 3, 0],          
          rotateY: [0, 8, -6, 4, 0],    
          rotateX: [0, -4, 5, -2, 0],   
        }}
        transition={{
          duration: 7,                  
          ease: "easeInOut",            
          repeat: Infinity,             
          times: [0, 0.35, 0.65, 0.85, 1], 
        }}
        style={{
          perspective: 600,             
        }}
      >
        <defs>
          <linearGradient id="robotGradient" x1="64" y1="64" x2="448" y2="448" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fffced" />
            <stop offset="55%" stopColor="#ededed" />
            <stop offset="100%" stopColor="#BDA6CE" />
          </linearGradient>
          <filter id="robotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>
        <g id="SVGRepo_iconCarrier">
          <g fill="#BDA6CE" opacity="0.14" filter="url(#robotGlow)" transform="translate(0, 6) scale(1.08)" transformOrigin="256px 256px">
            <path d="M320.15,283.87a5.33,5.33,0,0,0,5.33,5.33h7.8a22.16,22.16,0,0,0,22.14-22.14v-3.29a19.69,19.69,0,0,0,14.39-18.9v-38.8a19.74,19.74,0,0,0-19.72-19.72H348.5V152.4l16.33-49.52a5.31,5.31,0,0,0-5.06-7H301.46a5.33,5.33,0,0,0-5.33,5.33v30.53H278.92a30.16,30.16,0,0,0,7.5-19.79,30.46,30.46,0,0,0-60.91,0,30.16,30.16,0,0,0,7.5,19.79H215.88V101.21a5.32,5.32,0,0,0-5.33-5.33H152.23a5.31,5.31,0,0,0-5.06,7l16.34,49.52v33.95h-1.6a19.74,19.74,0,0,0-19.72,19.72v38.8a19.69,19.69,0,0,0,14.39,18.9v3.29a22.16,22.16,0,0,0,22.15,22.14h7.79a5.33,5.33,0,0,0,5.33-5.33V193.15l13.37-22.33V302.28a29,29,0,0,0-24,28.47v51.57a44,44,0,0,0-34.29,42.85,5.34,5.34,0,0,0,5.34,5.33h85.42a5.33,5.33,0,0,0,5.33-5.33V255.42h26V425.17a5.33,5.33,0,0,0,5.33,5.33h85.42a5.34,5.34,0,0,0,5.34-5.33,44,44,0,0,0-34.29-42.85V330.75a29,29,0,0,0-24-28.46v-52.2c0-.15-.07-.27-.08-.42v-79l13.44,22.46v90.72Zm24.61-16.81a11.49,11.49,0,0,1-11.48,11.48h-2.46V264.6h13.94Zm14.39-61v38.8a9.06,9.06,0,0,1-9.06,9.06H330.82V197h19.27A9.07,9.07,0,0,1,359.15,206.07Zm-52.36-99.53H352.4l-13.09,39.68H306.79ZM236.17,112A19.79,19.79,0,1,1,256,131.74,19.81,19.81,0,0,1,236.17,112Zm59.88,30.46V244.75H215.88V142.41Zm-90.83-35.87v39.68H172.7l-13.1-39.68ZM152.85,244.87v-38.8a9.07,9.07,0,0,1,9.06-9.06h19.27v56.92H161.91A9.06,9.06,0,0,1,152.85,244.87Zm28.33,33.67h-2.45a11.5,11.5,0,0,1-11.49-11.48V264.6h13.94Zm2.32-92.19h-9.32V156.88h27Zm8.35,144.4a18.32,18.32,0,0,1,18.3-18.3h22.17v68.71H191.85Zm40.47,89.08H158a33.42,33.42,0,0,1,32.92-28h41.42Zm0-118H215.88V255.42h16.44Zm63.81-46.37v46.37H279.68V255.42ZM354,419.83H279.68v-28h41.43A33.41,33.41,0,0,1,354,419.83Zm-33.87-89.08v50.41H279.68V312.45h22.17A18.32,18.32,0,0,1,320.15,330.75Zm17.68-173.87v29.47H328.5l-17.63-29.47Z" />
            <path d="M234.16,190h43.43a5.33,5.33,0,0,0,5.33-5.33V163.23a5.33,5.33,0,0,0-5.33-5.33H234.16a5.33,5.33,0,0,0-5.33,5.33v21.43A5.33,5.33,0,0,0,234.16,190Zm5.34-21.43h32.75v10.77H239.5Z" />
          </g>
        </g>
      </motion.svg>

      {/* =========================================================
          EXISTING LAYER: Glassmorphism Navigation Bar
         ========================================================= */}
      <div className='bg-transparent backdrop-blur-[12px] absolute bottom-4 py-2 gap-2 outline-[1.2px] outline-[#978F66]/60 items-center rounded-full px-6 flex z-20'>
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