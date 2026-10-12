import React from 'react';
import work from "../assets/ServiceDesk3.jpg";
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
      <MoonBalls />
        <img
              src={noise}
              alt=""
              className="absolute z-0 inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay"
            />


        <div className='Section_wrapper'>

          <div className="section_header relative z-10">
                <motion.h1   className="page_title font-semibold flex items-center justify-centergap-1"> <span><Energy fill="#909090" size={20} /></span>About Me </motion.h1>
                <h3 className="Section_title z-20"> Defined by credibility, <br /> I define <span className='text_gradient'>creativity. </span> </h3>

         
          
            
        
                 
          </div>

      <div className='flex_container'>

      <div className='lg:w-1/2'>
          <div className="relative  rounded-full h-[360px] flex flex-col items-start justify-between">
            <div className="card_space">
                    <h4 className="card_heading text-[#909090] chivo uppercase">I believe in <span className='slide'>
                          <span className='wrapper text-[#fffced]'>
                            {words.map((word) => (
                           <span key={word.text}>
                            <span>{word.text}</span>
                           </span>
                          
                            ))}
                          </span>
                 
                      </span>
                    </h4>
            <motion.p className="text_para  font-normal " >I am a dedicated and passionate professional committed to making a positive impact through effective communication. I design modern interfaces that communicate effectively. Engage in professional communication with stakeholders and clients.</motion.p>
            </div>
           

                 <div className='bg-transparent py-2 gap-2 outline-[1.2px] outline-(--secondary-color) items-center rounded-full px-6 flex '>
                  <Web fill="#635985" size={33} />
                  <Energy fill="#635985" size={30} />
                  <Telecom fill="#635985" size={33} />
                  <ContactPlane fill="#635985" size={30} />
                  <ThreeStars color="#635985" size={33} />
                  
                </div> 
          </div>

        </div>

        <div className='w-full lg:w-1/4'>
          <div className="relative outline-6 outline-(--text-color) h-90 lg:w-80 w-full [perspective:1000px]">
          <img src={work} className='size-full grayscale object-cover' />            
        </div>

        </div>

        <div className='w-full flex Grid_4 lg:items-center items-center justify-center lg:w-1/4 '>
          <div className="relative outline  outline-[#909090] outline-20 lg:outline-3  rounded-[22px] bg-transparent h-[360px] w-full [perspective:1000px]"></div>
           <div className="relative outline  outline-[#909090] outline-20 lg:outline-3  rounded-[22px] bg-transparent h-[360px] w-full [perspective:1000px]"></div>
        </div>


      </div>    
 
          
    </div>



 </section>
  );
};

export default AboutMe;