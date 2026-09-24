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



const AboutMe = () => {


  
          const bg4 = {
      backgroundImage: `url(${work}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      
    };
  



  return (
    <section className="h-min-screen relative bg-(--background-color)">


        <div className='Section_wrapper'>

          <div className="section_header">
                <motion.h1   className="page_title text-[#201f1f] font-semibold"> About Me </motion.h1>
                <h3 className="Section_title text-[#201f1f]"> Defined by credibility, <br /> I define creativity.<span className='text-(--primary-color)'> </span> </h3>

         
          
            
        
                 
          </div>

      <div className='flex_container'>

      <div className='lg:w-1/2'>
          <div className="relative  rounded-full h-80 flex flex-col items-start justify-between">
            <motion.p className="text_para text-[#101011] font-normal max-w-sm" >I design modern digital products that dont just look great but bring meaningful results. Exposed to cutting-edge technologies in telecommunications. Engage in professional communication to local and international clients. I belive every learning oppportunity is a step closer to a win. </motion.p>
                 <div className='bg-transparent py-2 gap-2 outline-[1.2px] outline-[#101111] items-center rounded-full px-6 flex '>
                  <Web fill="#101111" size={33} />
                  <Energy fill="#101111" size={30} />
                  <Telecom fill="#101111" size={33} />
                  <ContactPlane fill="#101111" size={30} />
                  <ThreeStars color="#101111" size={33} />
                  
                </div> 
          </div>

        </div>

        <div className='w-full lg:w-1/4'>
          <div className="relative outline-12 outline-(--primary-color) h-80 lg:w-60 w-full [perspective:1000px]">
          <img src={work} className='size-full grayscale object-cover' />            
        </div>

        </div>

        <div className='w-full flex lg:items-start justify-center lg:w-1/4 lg:ml-16'>
          <div className="relative outline  outline-[#4A4A4A] outline-20 lg:outline-110 mt-22  rounded-full bg-transparent size-20 lg:h-30 lg:w-30 [perspective:1000px]"></div>

        </div>


      </div>    
 
          
    </div>



 </section>
  );
};

export default AboutMe;