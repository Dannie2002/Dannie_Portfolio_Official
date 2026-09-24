import React from "react";
import {motion} from "framer-motion";
import {Link} from "react-router";
import header from "../assets/Hero.jpg";
import { House } from "lucide-react";
import noise from "../assets/Noise.png";

const SectionHeader = ({ title,link ,breadcrumbs = [],bgImage }) => {

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -90 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.29, ease: "easeInOut" }
    },
  };





  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
   className="relative  h-85 lg:h-[490px] w-full flex flex-col items-center lg:items-center lg:px-22 justify-center bg-cover bg-center"
          style={{ 
    backgroundImage: `url(${bgImage})`, 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat' 
  }}
>
{/* overlay to apply blend mode */}
    <div className="absolute flex z-0 inset-0 bg-gradient-to-l from-[#060607] via-[#060607] to-[#070708]/70 opacity-40"></div>
    <img src={noise} className="absolute h-full w-full z-0 opacity-20 inset-0"/>
        <motion.div
       variants={itemVariants}
        
        className="z-10 mt-12  lg:mt-0">
         
        </motion.div>

        <motion.nav
     variants={itemVariants}
        
        className="py-2 px-6 rounded-full mt-3 lg:mt-6 mx-auto bg-transparent z-50 hover:shadow-[4px_8px_12px_rgba(221,115,10,0)] shadow-[0_6px_12px_rgba(255,241,255,0.3)]  border-[#fffced]/30 items-center justify-center  backdrop-blur-2xl  hover:translate-y-2 duration-500 transform ease-in-out ">
          <ul className="flex items-center gap-2">
            {breadcrumbs.map((item, index) => (
              
              <li className={`text-[10px] btn text-[#b8b8b8] zalando font-medium uppercase ${item.link ? 'cursor-pointer' : 'cursor-default'}`} key={index}>
                
                {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
                
                </li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default SectionHeader;