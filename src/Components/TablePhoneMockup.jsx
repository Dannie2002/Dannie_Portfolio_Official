import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import banner from "../assets/OLT.jpg";
import webd from "../assets/dESIGN-WEB.png";
import Web from "../SVGS/Web.jsx";
import Energy from "../SVGS/Energy.jsx";
import ContactPlane from "../SVGS/ContactPlane.jsx";
import ThreeStars from "../SVGS/ThreeStars.jsx";
import Telecom from "../SVGS/Telecom.jsx";

const innovationQuotes = [
  "Building Beyond Horizons.",
  "Engineering Digital Authenticity.",
  "Crafting Seamless Interfaces.",
  "Where Code Meets Artistry.",
  "Optimized For Human Experience.",
];

const TablePhoneMockup = ({ className = "" }) => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const pendingTimeouts = new Set();
    const notificationCycle = setInterval(() => {
      setShowNotification(false);
      const timeout = setTimeout(() => {
        setQuoteIndex((previousIndex) => {
          let nextIndex = Math.floor(Math.random() * innovationQuotes.length);
          while (nextIndex === previousIndex) {
            nextIndex = Math.floor(Math.random() * innovationQuotes.length);
          }
          return nextIndex;
        });
        setShowNotification(true);
        pendingTimeouts.delete(timeout);
      }, 109900);
      pendingTimeouts.add(timeout);
    }, 10900);

    return () => {
      clearInterval(notificationCycle);
      pendingTimeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div
      className={`bg-(--background-color) rounded-[12px] lg:h-[420px] h-[440px] w-full hover:rotate-5 gap-6 shadow-[6px_12px_22px_rgba(189,166,206,0.3)] transition-transform duration-560 ease-in-out relative overflow-hidden rounded-[4px] mt-6 lg:mt-0 outline-[0.8px] outline-(--text-colour)/30 flex flex-col items-start justify-between group bg-[#0A0A0A] ${className}`}
    >
        

<div className=" w-full h-full z-0 border border-(--text-color)/30 rounded-[2px] flex  select-none overflow-hidden pt-6">

  {/* =====================================================
      TABLET SIDEBAR
  ===================================================== */}

  <div className="lg:w-[150px] bg-[#101011] w-[80px] h-full border-r border-r-(--text-color)/35 border-r-[0.2px] flex flex-col lg:p-3 p-2 gap-2 ">

    {/* Identity */}

      <div className="flex-center gap-2 text-[#fffced] font-medium px-2 py-1 mb-2 rounded bg-(--secondary-color)">
           <svg className="size-4" fill="#fffced" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M60.5,21h-27c-4.687,0-8.5-3.813-8.5-8.5S28.813,4,33.5,4h27c4.687,0,8.5,3.813,8.5,8.5S65.187,21,60.5,21z M33.5,8 c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h27c2.481,0,4.5-2.019,4.5-4.5S62.981,8,60.5,8H33.5z"></path> </g> <g> <path d="M60.5,68h-27c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5h27c4.687,0,8.5,3.813,8.5,8.5S65.187,68,60.5,68z M33.5,55 c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h27c2.481,0,4.5-2.019,4.5-4.5S62.981,55,60.5,55H33.5z"></path> </g> <g> <path d="M60.5,45h-27c-4.687,0-8.5-3.813-8.5-8.5s3.813-8.5,8.5-8.5h27c4.687,0,8.5,3.813,8.5,8.5S65.187,45,60.5,45z M33.5,32 c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h27c2.481,0,4.5-2.019,4.5-4.5S62.981,32,60.5,32H33.5z"></path> </g> </g> <g> <g> <path d="M12.5,21h-1C6.813,21,3,17.187,3,12.5S6.813,4,11.5,4h1c4.687,0,8.5,3.813,8.5,8.5S17.187,21,12.5,21z M11.5,8 C9.019,8,7,10.019,7,12.5S9.019,17,11.5,17h1c2.481,0,4.5-2.019,4.5-4.5S14.981,8,12.5,8H11.5z"></path> </g> <g> <path d="M12.5,68h-1C6.813,68,3,64.187,3,59.5S6.813,51,11.5,51h1c4.687,0,8.5,3.813,8.5,8.5S17.187,68,12.5,68z M11.5,55 C9.019,55,7,57.019,7,59.5S9.019,64,11.5,64h1c2.481,0,4.5-2.019,4.5-4.5S14.981,55,12.5,55H11.5z"></path> </g> <g> <path d="M12.5,45h-1C6.813,45,3,41.187,3,36.5S6.813,28,11.5,28h1c4.687,0,8.5,3.813,8.5,8.5S17.187,45,12.5,45z M11.5,32 C9.019,32,7,34.019,7,36.5S9.019,41,11.5,41h1c2.481,0,4.5-2.019,4.5-4.5S14.981,32,12.5,32H11.5z"></path> </g> </g> </g> </g></svg>
        <h4 className="chivo uppercase text-[10px]"> Dannie.com </h4>
      </div>


    {/* Navigation */}

    <div className="flex flex-col gap-2  pl-0.5">

      {/* Overview */}

      <div className="flex items-center gap-3 text-[#fffced] font-medium px-1 py-1 rounded bg-(--text-color)/60">
        <svg className="size-4" viewBox="0 -0.5 25 25" fill="#978F66" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.5 7.75C15.0858 7.75 14.75 8.08579 14.75 8.5C14.75 8.91421 15.0858 9.25 15.5 9.25V7.75ZM19.5 9.25C19.9142 9.25 20.25 8.91421 20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75V9.25ZM20.25 8.5C20.25 8.08579 19.9142 7.75 19.5 7.75C19.0858 7.75 18.75 8.08579 18.75 8.5H20.25ZM18.75 12.5C18.75 12.9142 19.0858 13.25 19.5 13.25C19.9142 13.25 20.25 12.9142 20.25 12.5H18.75ZM20.0303 9.03033C20.3232 8.73744 20.3232 8.26256 20.0303 7.96967C19.7374 7.67678 19.2626 7.67678 18.9697 7.96967L20.0303 9.03033ZM12.5 15.5L11.9697 16.0303C12.2626 16.3232 12.7374 16.3232 13.0303 16.0303L12.5 15.5ZM9.5 12.5L10.0303 11.9697C9.73744 11.6768 9.26256 11.6768 8.96967 11.9697L9.5 12.5ZM4.96967 15.9697C4.67678 16.2626 4.67678 16.7374 4.96967 17.0303C5.26256 17.3232 5.73744 17.3232 6.03033 17.0303L4.96967 15.9697ZM15.5 9.25H19.5V7.75H15.5V9.25ZM18.75 8.5V12.5H20.25V8.5H18.75ZM18.9697 7.96967L11.9697 14.9697L13.0303 16.0303L20.0303 9.03033L18.9697 7.96967ZM13.0303 14.9697L10.0303 11.9697L8.96967 13.0303L11.9697 16.0303L13.0303 14.9697ZM8.96967 11.9697L4.96967 15.9697L6.03033 17.0303L10.0303 13.0303L8.96967 11.9697Z" fill="#978F66"></path> </g></svg>

        <h4 className="geonova text-[10px] text-[#fffced]">
          Overview
        </h4>
      </div>


      {/* Projects */}

      <div className="flex items-center gap-3 text-(--text-color) font-medium px-1 py-1 rounded">
    
       <svg className=" size-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#978F66"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 13.122a1 1 0 00.741.966l7 1.876A1 1 0 0011 14.998V14h2a1 1 0 001-1V3a1 1 0 00-1-1h-2v-.994A1 1 0 009.741.04l-7 1.876A1 1 0 002 2.882v10.24zM9 2.31v11.384l-5-1.34V3.65l5-1.34zM11 12V4h1v8h-1z" fill="#978F66"></path> </g></svg>

          <h4 className="geonova text-[10px] text-[#7a7e80]">
          Projects
        </h4>
      </div>


      {/* Analytics */}

      <div className="flex items-center gap-3 text-(--text-color) font-medium px-1 py-1 rounded">
        <ThreeStars className="hidden lg:flex" color="#978F66" size={17} />

          <h4 className="geonova text-[10px] text-[#7a7e80]">
          Analytics
        </h4>
      </div>


      {/* Network */}

      <div className="flex items-center gap-3 text-(--text-color) font-medium px-1 py-1 rounded">
        <Telecom className="hidden lg:flex"  fill="#978F66" size={17} />

        <h4 className="geonova text-[10px] text-[#7a7e80]">
          Network
        </h4>
      </div>


      {/* Services */}

      <div className="flex items-center gap-3 text-(--text-color) font-medium px-1 py-1 rounded">
        <ContactPlane  className="hidden lg:flex" fill="#978F66" size={17} />
        <h4 className="geonova text-[10px] text-[#7a7e80]">Services</h4>
      </div>
       <div className="flex items-center gap-3 text-(--text-color) font-medium px-1 py-1 rounded">
       <svg className="size-4" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#978F66"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#978F66" d="M317.056 128 128 344.064V896h768V344.064L706.944 128H317.056zm-14.528-64h418.944a32 32 0 0 1 24.064 10.88l206.528 236.096A32 32 0 0 1 960 332.032V928a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V332.032a32 32 0 0 1 7.936-21.12L278.4 75.008A32 32 0 0 1 302.528 64z"></path><path fill="#978F66" d="M64 320h896v64H64z"></path><path fill="#978F66" d="M448 327.872V640h128V327.872L526.08 128h-28.16L448 327.872zM448 64h128l64 256v352a32 32 0 0 1-32 32H416a32 32 0 0 1-32-32V320l64-256z"></path></g></svg>
        <h4 className="geonova text-[10px] text-[#7a7e80]">Tools</h4>
      </div>

    </div>


    {/* Technology block */}

    <div className="mt-auto border-t border-(--text-color) pt-3">

      <h2 className="text-[8px] uppercase chivo tracking-wider text-zinc-500 mb-2">
        Technology
      </h2>

      <div className="flex flex-wrap gap-1">

        <span className="px-1.5 py-1 chivo rounded bg-zinc-900 text-[7px] text-zinc-400">
          WEB
        </span>

        <span className="px-1.5 py-1 chivo rounded bg-zinc-900 text-[7px] text-zinc-400">
          DATA
        </span>

        <span className="px-1.5 py-1 chivo rounded bg-zinc-900 text-[7px] text-zinc-400">
          NETWORK
        </span>

      </div>

    </div>

  </div>


  {/* =====================================================
      MAIN DASHBOARD
  ===================================================== */}

  <div className="flex-1 h-full bg-[#101011] flex flex-col relative">


    {/* ===================================================
        DASHBOARD HEADER
    =================================================== */}

    <div className="w-full px-3 py-2 border-b border-zinc-900/80 flex items-center justify-between z-10">

      <div className="card_space gap-2">

        <p className="lg:text-[10px] text-[8px] uppercase font-bold chivo tracking-[0.18em] text-[#fffced]">
          Workspace
        </p>

        <h1 className="lg:text-[11px] text-[9px] font-bold chivo uppercase text-[#fffced]">
          Digital Operations
        </h1>

      </div>


      <div className="flex items-center gap-1.5">

        <span className="size-1.5 rounded-full bg-[#978F66] animate-pulse" />

        <span className="lg:text-[7px] text-[6px] uppercase chivo text-[#fffced]">
          Online
        </span>

      </div>

    </div>


    {/* ===================================================
        SCROLLING DASHBOARD CONTENT
    =================================================== */}

    <div className="flex-1 w-full overflow-hidden">

      <motion.div
        className="w-full flex flex-col gap-3 p-3"

        animate={{
          y: [
          
          ],
        }}

        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
          times: [
            0,
            0.15,
            0.27,
            0.40,
            0.52,
            0.65,
            0.77,
            0.90,
            1,
          ],
        }}
      >


        {/* =================================================
            OVERVIEW METRICS
        ================================================= */}

        <div className="grid grid-cols-1 gap-1.5">

          {/* Projects */}

          <div className=" hidden rounded-md bg-(--secondary-color)/70 p-4">
            <Web className="hidden size-12 lg:flex" fill="#ededed" size={27} />

             <p className="lg:text-[11px] text-[9px] uppercase chivo text-[#fffced]">
              Years of experience
            </p>

            <p className="lg:text-[28px] text-[24px] leading-none geonova text-[#fffced] font-bold mt-1">
              04
            </p>

            <div className="mt-2 h-[2px] bg-zinc-900 overflow-hidden rounded-full">
              <div className="h-full w-[82%] bg-(--text-colour)" />
            </div>

          </div>



        </div>


        {/* =================================================
            ANALYTICS
        ================================================= */}

   
<div className="outline mt-0 outline-4 outline-[#4a4a4a]/40 p-4 rounded-md bg-(--background-color) overflow-hidden">

          <div className=" flex flex-col gap-2 py-3">

              <p className="lg:text-[10px] text-[7px] uppercase font-bold chivo tracking-wider text-(--text-colour)">
              Exposure to the industry.
            </p>

             <p className="lg:text-[14px] text-[12px] geonova font-semibold text-[#fffced]">
              My Gallery
            </p>

          </div>

<div className="max-h-[340px] w-full mt-2">
<img src={banner} className="grayscale h-full"/>
</div>
       

        </div>

        {/* =================================================
            ACTIVE PROJECTS
        ================================================= */}

        <div className="outline mt-4 outline-4 outline-[#4a4a4a]/40 p-4 rounded-md bg-(--background-color) overflow-hidden">

          <div className=" flex flex-col gap-2 py-2 border-b border-zinc-900">

              <p className="lg:text-[10px] text-[7px] uppercase font-bold chivo tracking-wider text-(--text-colour)">
              Portfolio
            </p>

             <p className="lg:text-[14px] text-[12px] geonova font-semibold text-[#fffced]">
              Active Projects
            </p>

          </div>


       <img src={webd} className=""/>

        </div>


        {/* =================================================
            SYSTEM STATUS
        ================================================= */}

        <div className="border flex flex-col gap-2 border-zinc-900 rounded-md bg-zinc-950/50 p-2.5">

          <div className="flex items-center justify-between mb-2">

            <div className="flex flex-col gap-2">

             <p className="lg:text-[10px] text-[7px] uppercase font-bold chivo tracking-wider text-(--text-colour)">
                Infrastructure
              </p>

                  <p className="lg:text-[14px] text-[12px] geonova font-semibold text-[#fffced]">
                System Status
              </p>

            </div>

            <span className="text-[6px] text-(--secondary-color) uppercase">
              Stable
            </span>

          </div>


          <div className='bg-transparent backdrop-blur-[12px]  py-2 gap-2 outline-[1.2px] outline-[#978F66]/60 items-center rounded-full px-6 flex z-20'>
        <Web fill="#978F66" size={23} />
        <Energy fill="#978F66" size={20} />
        <Telecom fill="#978F66" size={23} />
        <ContactPlane fill="#978F66" size={20} />
        <ThreeStars color="#978F66" size={23} />
      </div> 

        </div>


        {/* =================================================
            TECHNOLOGY
        ================================================= */}

        <div className="border border-zinc-900 rounded-md bg-zinc-950/50 p-2.5">

          <div className="flex items-center justify-between mb-2">

           <div className="px-2.5 flex flex-col gap-2 py-2 border-b border-zinc-900">

              <p className="lg:text-[10px] text-[6px] uppercase font-bold chivo tracking-wider text-(--text-color)">
                Stack
              </p>

               <p className="lg:text-[14px] text-[12px] geonova font-semibold text-[#fffced]">
                Technology
              </p>

            </div>

            <span className="text-[6px] text-zinc-600">
              CORE
            </span>

          </div>


          <div className="flex flex-wrap gap-1">

            {[
              "REACT",
              "PYTHON",
              "SQL",
              "NETWORK",
              "DATA",
              "SYSTEMS",
            ].map((technology) => (

              <span
                key={technology}
                className="px-1.5 py-1 rounded bg-zinc-900 border border-zinc-800/70 text-[6px] uppercase chivo text-zinc-400"
              >
                {technology}
              </span>

            ))}

          </div>

        </div>


      </motion.div>

    </div>


    {/* ===================================================
        AMBIENT LIGHTING
    =================================================== */}
  </div>

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
              exit={{ opacity: 0, y: 20, scale: 0.5 }}
              transition={{ 
                type: "spring", 
                stiffness: 120, 
                damping: 14 
              }}
              className="w-full px-3 py-2 rounded-sm bg-(--text-color)/45 backdrop-blur-lg border border-[#fffced]/10 shadow-[0_8px_24px_rgba(0,0,0,0.6)] flex items-start gap-2"
            >
              <div className="mt-[2px] w-2 h-2 rounded-full bg-(--secondary-color) flex-shrink-0 animate-pulse" />
              <div className="flex flex-col gap-2">
                <h4 className="text-[12px] uppercase geonova text-[#fffced]  font-bold">System Core</h4>
                <p className="text-[10px] text-[#fffced] leading-tight">
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
      <div className='hidden bg-transparent backdrop-blur-[12px] absolute bottom-4 py-2 gap-2 outline-[1.2px] outline-[#978F66]/60 items-center rounded-full px-6 flex z-20'>
        <Web fill="#978F66" size={23} />
        <Energy fill="#978F66" size={20} />
        <Telecom fill="#978F66" size={23} />
        <ContactPlane fill="#978F66" size={20} />
        <ThreeStars color="#978F66" size={23} />
      </div> 

    </div>
  );
};

export default TablePhoneMockup;
