import TablePhoneMockup from "./TablePhoneMockup.jsx";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bag from "../assets/12.png"
import noise from "../assets/Noise.png";
import Scribble from "../Components/Scribble.jsx";
import webbb from "../assets/Webbb.jpg";
import work from "../assets/ServiceDesk3.jpg";
import fat from "../assets/FAT.jpg";
import { ScrollVelocityContainer, ScrollVelocityRow } from '../Components/ScrollVelocity';

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

const cmsPosts = [
  { id: 1, title: "The art of creative direction" },
  { id: 2, title: "Designing calmer interfaces for focus" },
  { id: 3, title: "Organic shapes and natural layouts" },
  { id: 4, title: "Earthy color palettes that convert" },
  { id: 5, title: "Designing with growth: how to scale" },
  { id: 6, title: "Optimizing layout rendering threads" },
  { id: 7, title: "The physics of fluid spring micro-gestures" }
];

  return (
    <section className="min-h-screen overflow-hidden lg:h-[95vh] w-full relative bg-(--background-color) flex items-center">

      

      {/* Noise */}
     
        <img
        src={bag}
        alt=""
        className="absolute  inset-0 z-10 h-full w-full object-cover opacity-60 mix-blend-overlay"
      />
      {/* Overlay */}
      <div className="hidden z-0 top-40 right-5 size-30 rounded-full shadow-[15px_10px_16px_2px_rgba(99,89,133,0.1)] z-0 bg-gradient-to-l opacity-78 from-[#0b0b0d] via-[#0b0b0d] to-(--secondary-color)/40" />


      {/* Content */}
      <div className="relative Section_wrapper z-30 w-full">


        <div className="flex_container">
                <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:w-[40%] lg:mt-22 mt-15 relative z-30 items-start justify-center"
        >


          {/* Scribble */}
          <motion.div className="flex gap-5 items-center" variants={itemVariants}>
        
             <motion.h1
            variants={itemVariants}
            className="text-[14px] hidden tracking-[3px] mb-4 uppercase chivo font-medium text-[#909090]"
          > Fleelancer .
          </motion.h1>
          </motion.div>
          

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-heading geonova !text-[46px] !leading-[54px] !capitalize font-bold leading-[68px] text-[#d4dac4]"
          >          
            Product
          </motion.h1>

<div className="  w-full  ">


      
            <motion.h1
            variants={itemVariants}
            className="font-heading  geonova !text-[46px] !leading-[54px] !capitalize font-bold leading-[68px] text-[#d4dac4]"
          >          
            brand
            </motion.h1>
   

 
</div>

          
           
<div className="relative border-t border-b pb-2 lg:w-86 w-full border-b-[#484a4a]/40 border-t-[#4a4a4a]/40">
    <Scribble className="absolute -top-7 right-0"  
              size={32}
              color="#909095"
            />
<svg className="absolute size-8 right-0" fill="#90afd0" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 72 72" enable-background="new 0 0 72 72" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M50.5,15.615c-0.441,0-0.846-0.294-0.965-0.741c-0.144-0.533,0.173-1.082,0.707-1.225l2.292-0.614 c0.532-0.145,1.081,0.173,1.225,0.707c0.143,0.533-0.174,1.082-0.707,1.225l-2.292,0.614 C50.673,15.604,50.586,15.615,50.5,15.615z"></path> </g> <g> <path d="M29.6,21.214c-0.441,0-0.846-0.294-0.965-0.741c-0.144-0.533,0.173-1.082,0.707-1.225L45.91,14.81 c0.536-0.146,1.081,0.173,1.225,0.707c0.143,0.533-0.174,1.082-0.707,1.225L29.86,21.18C29.773,21.204,29.686,21.214,29.6,21.214 z"></path> </g> </g> <g> <path d="M16.683,68.555c-1.294,0-2.514-0.591-3.729-1.808l-7.662-7.662c-3.796-3.795-0.944-6.646,0.426-8.016 c9.247-8.834,13.635-13.021,15.726-15.013l-8.48-5.464c-2.923-1.584-4.451-4.418-4.092-7.599c0.437-3.862,3.607-7.229,7.889-8.376 L56.639,3.934c4.353-1.169,8.198-0.206,10.292,2.523c1.707,2.225,2.124,5.401,1.175,8.943L57.42,55.278 c-1.375,5.136-5.925,7.476-9.57,7.476l0,0c-2.984,0-5.461-1.468-6.489-3.837l-4.345-8.334c-2.166,2.132-6.655,6.537-16.01,15.703 C19.958,67.334,18.504,68.555,16.683,68.555z M7.388,55.326c0.008,0,0.095,0.294,0.731,0.931l7.662,7.662 c0.629,0.629,0.898,0.636,0.901,0.636c0.041,0,0.429-0.031,1.508-1.111c4.799-4.701,17.277-16.933,17.89-17.555 c0.427-0.455,1.042-0.686,1.67-0.619c0.665,0.071,1.251,0.471,1.561,1.063l5.632,10.804c0.026,0.052,0.051,0.104,0.073,0.158 c0.563,1.354,2.311,1.459,2.833,1.459c2.167,0,4.877-1.411,5.706-4.511l10.687-39.877c0.62-2.314,0.448-4.258-0.484-5.474 c-0.927-1.207-2.438-1.46-3.544-1.46c-0.781,0-1.636,0.123-2.54,0.365L17.795,18.481c-3.127,0.838-4.739,3.097-4.95,4.963 c-0.176,1.558,0.559,2.856,2.068,3.656c0.051,0.026,0.1,0.056,0.147,0.086l10.687,6.885c0.533,0.344,0.872,0.92,0.913,1.554 c0.04,0.633-0.222,1.249-0.707,1.658C25.576,37.633,13.232,49.421,8.512,53.93C7.568,54.875,7.411,55.221,7.388,55.326 L7.388,55.326z"></path> </g> </g> </g></svg>
<motion.h1
            variants={itemVariants}
            className="font-heading mx-0  text_gradient geonova !text-[60px] !leading-[66px] !capitalize font-bold leading-[68px] text-[#d4dac4]"
          >          
            Designer.
          </motion.h1>

   <ScrollVelocityContainer className='hidden z-90 w-full'>
              
    
    <ScrollVelocityRow baseVelocity={-13} className='lg:p-0 '>
            <div className='flex  items-center justify-center gap-6 min-w-[200px]' >
    <motion.h1
            variants={itemVariants}
            className="font-heading mx-0  text_gradient geonova !text-[46px] !leading-[54px] !capitalize font-bold leading-[68px] text-[#d4dac4]"
          >          
            brands.
          </motion.h1>

             <motion.h1
            variants={itemVariants}
            className="font-heading mx-0  text-[#4a4a4a] geonova !text-[46px] !leading-[54px] !capitalize font-bold leading-[68px] text-[#d4dac4]"
          >          
            Trust.
          </motion.h1>
            </div>
        
    </ScrollVelocityRow>
    </ScrollVelocityContainer>
  
</div>
     
       
        


          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="pt-12  text-[16px] text_para max-w-[500px]"
          >
            I design and build modern digital products<span className="">  enabling your business to grow effortlessly.</span>
           
          </motion.p>

          {/* Contact Button */}
          <motion.div
            variants={itemVariants}
            className="flex gap-5 w-full btn lg:mt-6 mt-8"
          >

             <motion.div className=' flex btn  mt-8 group lg:w-fit w-full transition-all duration-500 cursor-pointer rounded-[2px]  bg-(--secondary-color) hover:bg-[#9681e6] hover:bg-(--text-colour)/10 border-(--primary-color)/60 px-10 lg:py-2  py-2.5 items-center gap-6' >
             <div className='relative flex overflow-hidden'>
                             <h3 className='text_button  !text-[15px] text-[#fffced]! group-hover:translate-y-6 ease-in transition-transform duration-490 out'>
                          View works
                        </h3>
                          <h3 className='text_button absolute text-[#fffced]! group-hover:translate-y-0 -translate-y-4 group-hover:opacity-100 opacity-0 ease-out transition-transform duration-590 out'>
                          View works
                        </h3>
                     </div>
                     
                                 
                                    <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-full  justify-center group-hover:bg-[#fffced] bg-transparent hover:bg-[#101011] group-hover:bg-gradient-to-r from-[#75797c] via-[#7a7e80] to-[#7a7e80] size-6 p-3'>
                                      <ArrowRight className='size-6 absolute group-hover:rotate-15  ease-in-out   transform  transition-all duration-490  group-hover:translate-x-10 text-[#fffced]' />
                                      <ArrowRight className='absolute group-hover:-rotate-45  ease-in-out  size-6 transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                                    </div>
                                   
                                  </motion.div>

          </motion.div>

                </motion.div>


            <div className="lg:w-1/2 relative w-full  flex flex-col lg:mt-28 lg:ml-12 mt-0 relative z-30 items-start lg:items-center justify-center ">

         
           

              <TablePhoneMockup />
      

            </div>




        </div>
      
      </div>

    </section>
  );
};

export default LandingPage;