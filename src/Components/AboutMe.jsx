import React from 'react';
import work from "../assets/Reign2.png";
import work2 from "../assets/ServiceDesk2.jpg";
import Scribble from '../Components/Scribble'
import { motion } from 'framer-motion';
import { Link } from "react-router";
import MoonBalls from "./MoonBalls.jsx";
import Web from '../SVGS/Web.jsx';
import Energy from '../SVGS/Energy.jsx';
import ContactPlane from '../SVGS/ContactPlane.jsx'
import ThreeStars from '../SVGS/ThreeStars.jsx';
import Telecom from "../SVGS/Telecom.jsx"
import noise from "../assets/Noise.png"



const AboutMe = () => {


  
      const bg4 = {
      backgroundImage: `url(${work}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      
    };
  
const words =[
  {text : "Integrity" },
  {text : "continueos learning" },
  {text : "Collabolation"},


]


  return (
    <section className="h-min-screen relative bg-(--background-color)">
        <div className="absolute blur-3xl bottom-0 right-5 size-60 rounded-full shadow-[15px_10px_16px_2px_rgba(99,89,133,0.1)] z-0 bg-gradient-to-l  from-(--secondary-color)/80  to-(--secondary-color)/40" />
      <MoonBalls />
    


        <div className='Section_wrapper'>

          <div className="section_header relative z-10">
            <div className='flex gap-3 items-start '>
              <Energy fill="#909090" size={20} />
               <motion.h1   className="page_title font-semibold flex items-center justify-center"> About Me </motion.h1>
            </div>
               
                <h3 className="Section_title z-20"> Defined by credibility, <br /> I define <span className='text_gradient'>creativity. </span> </h3>

         
          
            
        
                 
          </div>

      <div className='flex_container mt-22'>

      <div className='lg:w-1/2'>
          <div className="relative  rounded-full  flex flex-col items-start justify-between">
            <div className="card_space">
                    <h4 className="card_heading text-[24px] text-[#909090] chivo uppercase">I believe in <span className='slide'>
                          <span className='wrapper text-[#fffced]'>
                            {words.map((word) => (
                           <span key={word.text}>
                            <span>{word.text}</span>
                           </span>
                          
                            ))}
                          </span>
                 
                      </span>
                    </h4>
            <motion.p className="text_para w-xl font-normal mt-6" >I am a dedicated and passionate professional committed to making a positive impact through effective communication. I design modern interfaces that communicate effectively. Engage in professional communication with stakeholders and clients.</motion.p>
            </div>
           
           <div>
            
           </div>
           
                <motion.div
                  whileHover={{ borderRadius: "50%", scale: 1.08, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 180, damping: 12 }}
                  
                  className="mt-12 btn flex justify-center size-20 items-center gap-2 flex-col p-6 rounded-[2px] outline-1 outline-[#4a4a4a] hover:bg-(--secondary-color)"
                >
              
               <svg className="size-8" fill="#ededee" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M196,64V168a4,4,0,0,1-8,0V73.65625L66.82812,194.82812a3.99957,3.99957,0,0,1-5.65625-5.65625L182.34375,68H88a4,4,0,0,1,0-8H192A4.0002,4.0002,0,0,1,196,64Z"></path> </g></svg>

                </motion.div>

               
          </div>

        </div>

        <div className='relative w-full flex items-center justify-center lg:w-1/2'>

         <div className="absolute flex bottom-15 right-0 flex-color lg:flex-col gap-4">
        
                    <motion.div
                      className="z-50"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                     
                    </motion.div>
        
                  
        
                  </div>
        
   

                  <div className='absolute bg-transparent z-60 bottom-15 right-0  gap-2 outline-[1.2px] outline-(--secondary-color) items-center rounded-full p-6 flex '>
             
                  <ThreeStars color="#635985" size={33} />
                  
                </div> 
          <div className="relative outline-6 outline-(--text-color) h-[480px]  w-[340px] [perspective:1000px]">
          <img src={work} className='size-full  object-cover' />            
        </div>

        </div>

          

      


      </div>    
 
          
    </div>



 </section>
  );
};

export default AboutMe;