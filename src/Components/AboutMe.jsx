import React from 'react';
import work from "../assets/ServiceDesk3.jpg";
import Scribble from '../Components/Scribble'
import { motion } from 'framer-motion';
import { Link } from "react-router";
import MoonBalls from "./MoonBalls.jsx";
import Web from '../SVGS/Web.jsx';



const AboutMe = () => {


  
          const bg4 = {
      backgroundImage: `url(${work}`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
      
    };
  



  return (
    <section className="h-min-screen relative bg-(--background-color)">

<MoonBalls />
       

        <div className='Section_wrapper'>

           

                     <div className="section_header">
                       <motion.h1   className="page_title text-[#201f1f] font-semibold"> About Me </motion.h1>
                     
        
                  <h3 className="Section_title text-[#201f1f]">
                 
                     Defined by credibility, <br /> I define creativity<span className='text-(--primary-color)'> .</span>
                   
                  </h3>

         
          
            
        
                 
        </div>





      <div className='flex  mt-12 items-start'>

       

   <div className='flex w-full gap-30 rounded-sm gap-6 relative'>
 
 

<div className='lg:w-1/2'>
  <div className="relative  rounded-full h-80 flex flex-col items-start justify-between">
     <motion.p className="">
            I design modern digital products that dont just look great but bring seamless experience. Exposed to cutting-edge technologies in telecommunications. Engage in professional communication to local and international clients. I belive every learning oppportunity is a step closer to a win.
        </motion.p>

        <div className='bg-transparent outline-2 outline-(--primary-color) items-center rounded-full px-10 flex py-2'>
           <Web fill="#978F66" size={33} />
          <h4 className='uppercase text-[15px]'>See more about Dannie</h4>

        </div>
          
  </div>

</div>

<div className='lg:w-1/4'>
  <div className="relative outline-6 outline-(--primary-color) h-80 w-60 [perspective:1000px]">
    <img src={work} className='size-full grayscale object-cover' />
    
    
  </div>

</div>

<div className='lg:w-1/4'>
  <div className="relative outline  outline-[#201f1f] outline-80 mt-16  rounded-full bg-transparent h-50 w-50 [perspective:1000px]">
    
  </div>

</div>






      </div>
      
      
      </div>    
 
          
        </div>



 </section>
  );
};

export default AboutMe;