import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import digital from "../assets/digitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import branding from "../assets/ISP.jpg";
import noise from "../assets/noise.png";
import SectionHeader from "./SectionHeader.jsx";
import servicedesk from "../assets/ServiceDesk.jpg"
import ContactPlane from "../SVGS/ContactPlane.jsx";
import MoonBalls from "./MoonBalls.jsx";


const ContactMe = () => {

  /* --------------------------------
     Animation Variants
  -------------------------------- */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

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


  /* --------------------------------
     Product Cards



  /* --------------------------------
     Card Component
  -------------------------------- */




  return (


    
    <section className="bg-[#101011] min:h-screen flex flex-col lg:items-start lg:justify-center relative  w-full">

      <MoonBalls />



      
            
      {/* --------------------------------
          Section Heading
      -------------------------------- */}



{/* --------------------------------
    Main Products Layout
-------------------------------- */}
<div className="Section_wrapper z-10">

              <div className="section_header mt-34">
          
                     <motion.h1  className="page_title"  > Start a conversation </motion.h1>
                    <h3   className="Section_title "> I would be glad to hear from you.</h3>
          
          
                    <div className="flex lg:flex-row flex-col items-center justify-between gap-20">
          
                      <motion.p className="text_para text-[#fffced] " > Write to me through the form and will update you shortly. </motion.p>
                      <ContactPlane color="#ca852b" size={36} className="hidden lg:flex" />
          
                    </div>
          
                  </div>


  

    <div className="w-full flex mt-12 gap-16  flex-col-reverse lg:flex-row">
      
<div className="lg:w-[45%] flex flex-col gap-4">

  <div className="flex  gap-2 lg:gap-4 flex-row">
   <div className="size-10 lg:size-12 shrink-0 flex items-center justify-center rounded-full bg-(--secondary-color) p-3 text-[#fffced] chivo">
  DM
</div>
   <div className="flex bg-[#464640]/40 rounded-2xl backdrop-blur-[4px] p-4 gap-4 flex-row justify-end items-start ">
<motion.p className="text_para text-(--text-colour)">
    <span className="text-[#fffced] mb-2">Good day,</span><br />
    I came across your portfolio and I'm interested in your skills.
    What exactly do you specialize in?
  </motion.p>
   
   </div>
  </div>

   <div className="flex  flex-end  justify-end "><h3 className="flex items-end gap-4 text-(--text-colour) bg-(--primary-color)/40 p-1 rounded-sm"> Write to me through the form and will update you shortly. <span><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-check"><path  d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/></svg></span></h3></div>

  <div className="flex  gap-2 lg:gap-4 flex-row">
   <div className="size-10 lg:size-12 shrink-0 flex items-center justify-center rounded-full bg-(--secondary-color) p-3 text-[#fffced] chivo">
  DM
</div>
   <div className="flex bg-[#464640]/40 rounded-2xl backdrop-blur-[4px] p-4 gap-4 flex-row justify-end items-start ">
<motion.p className="text_para text-(--text-colour)">
  Ok sure.
  </motion.p>
   
   </div>
  </div>

</div>
         
  

     

       

               <form action="#" method="POST" className="mt-6 lg:mt-0 border-3 bg-[#201f1f] rounded-sm backdrop-blur-[3px] z-50 border-(--text-colour)/25 p-4">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className=''>
                  <label htmlFor="first-name" className="text_label">First name:</label>
                  <div className="mt-2 ">
                    <input id="first-name" type="text" name="first-name" autoComplete="given-name" placeholder="Eg: Dannie" className="text_field "  />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="text_label">Last name:</label>
                   <div className="mt-2 ">
                    <input id="last-name" type="text" name="last-name" autoComplete="given-name" placeholder="Eg: Mankhwazi" className="text_field" />
                  </div>
                </div>
              
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text_label">Email:</label>
                    <div className="mt-2 ">
                    <input  id="email" type="email" name="email" autoComplete="given-name" placeholder="Eg: danniemankhwazi@gmail.com" className="text_field " />
                  </div>
                </div>

                                 <motion.div
                  
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                 
                >
                  <label className="text_label">
                  Enter Phone Number:
                  </label>

                  <div className="flex bg-transparent mt-2 border-b border-b-green/20 focus-within:border-green transition-all">
                    <select className="text_field bg-(--text-color)/40 w-fit">
                      <option className='text-[12px] '>MW</option>
                      <option>US</option>
                      <option>MZ</option>
                    </select>

                    <input
                      type="text"
                      placeholder="+265-123-456-890"
                      className="text_field"
                    />
                  </div>
                </motion.div>

                                   <motion.div
                  
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                 
                >
                  <label className="text_label">
                  Select Category
                  </label>

                  <div className="flex bg-transparent mt-2 focus-within:border-green transition-all">
                    <select className="text_field">
                      <option className='text-[12px]  text-[#201f1f] bg-(--background-color)'>Web Development</option>
                      <option className='text-[12px] text-[#201f1f] bg-(--background-color)'>Networking</option>
                   <option className='text-[12px] text-[#201f1f] bg-(--background-color)'>Be Content</option>
                    </select>

                  </div>
                </motion.div>


                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text_label">Message:</label>
                    <div className="mt-2 ">
                    <textarea rows={4} id="message" type="textarea" name="message" autoComplete="given-name" placeholder="" className="text_field border border-(--text-color)/30" />
                  </div>
                </div>
             
             
        


    
                
              </div>
            <div className="mt-6 bg-(--secondary-color) rounded-sm">
              <button type="submit" className="block btn cursor-pointer text-[16px] w-full rounded-[4px]  px-3.5 py-2.5 text-center text-[16px] font-medium text-[#0b0b0d] shadow-sm transition-all  tracking-wide">Send a Message</button>
            </div>
        
                </form>

    </div>

 


</div>




    </section>
  );
};

export default ContactMe;