import React from "react";
import { useEffect, useRef, useState } from "react";
import {motion, AnimatePresence, backInOut} from 'framer-motion'
import { ArrowRight,ArrowUpRight, SplinePointer, ChevronDown } from 'lucide-react'
import branding from '../assets/WorkExp2.jpg'
import noise from "../assets/noise.png";

const WorkExperience = () => {


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
    hidden: { opacity: 0, x: -80 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.75, ease: "easeInOut" }
    },
  };
  
 

        const bg4 = {
    backgroundImage: `url(${branding})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };





   const WhyUs = [
  {
    id: 1,
    point: "Service Desk Engineer",
    description:
      "Monitoring network and service alarms and escalating incidents in accordance with established procedures.",

    employer: "INQ Digital",
    duration: "February 2026 – August 2026",

    responsibilities: [
      "Monitoring network and service alarms.",
      "Handling and documenting client technical issues.",
      "Escalating incidents to the appropriate technical teams.",
      "Providing technical support to clients.",
      "Processing and updating service desk tickets.",
      "Communicating with clients regarding service interruptions.",
      "Following established incident management procedures.",
    ],

    referee: {
      name: "Referee Name",
      position: "Position",
      phone: "+265 XXX XXX XXX",
      email: "referee@example.com",
    },
  },

  // Add your other experiences here...
];



const [navOpen, setNavOpen] = useState(false);

  const [activeIndex, setActiveIndex] = useState(null);

const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

const [selectedExperience, setSelectedExperience] = useState(null);


const openExperience = (item) => {
  setSelectedExperience(item);
};

const closeExperience = () => {
  setSelectedExperience(null);
};



  return (
       <section className="lg:min-h-[95vh] w-full py-6 bore bg-[#ada6a6] relative overflow-hidden">

  {/* Section Heading */}
 <div className="Section_wrapper mt-12 !py-0">

        <div className="section_header ">

          <h3 className="Section_title text-[#201f1f]">
            <span className="text-[#201f1f]">
              Work
            </span>{" "}
            Experience
          </h3>

        </div>

      </div>


  <div className="Section_wrapper relative z-50">

    <div className="flex flex-col w-full lg:gap-8">

      {/* MAIN EXPERIENCE CONTAINER */}
      <div className="w-full h-[550px] relative px-6  py-6  flex items-end border border-(--text-color)/40  mt-6 lg:mt-0 rounded-sm shadow_red overflow-hidden " >

        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-sm size-full">

          <motion.img
            src={branding}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="
              size-full
           
              rounded-sm
              object-cover
            "
          />

        </div>


        {/* Background Overlay */}
        <div
          className="
            absolute
            rounded-sm
            z-10
            inset-0
            bg-gradient-to-t
            from-(--primary-color)/85
            via-(--primary-color)/60
            to-transparent
            opacity-100
          "
        />


        {/* EXPERIENCE CONTENT */}
        <div className="z-50 w-full">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className=" lg:w-[60%]  w-full z-50 flex  bottom-8 left-8 flex-col lg:mt-0  mt-6 justify-start gap-6 items-start">

            {WhyUs.map((item, index) => (

              <motion.div
                variants={itemVariants}
                key={item.id}
                id={item.id}
                className=" px-4  py-4 w-full rounded-sm backdrop-blur-xl  bg-[#272626]/50  border border-[#fffced]/20"  >

                {/* Accordion Header */}
                <div
                  onClick={() => toggleAccordion(index)}
                  className=" flex items-center z-50 justify-between cursor-pointer">

                  <motion.h4 className=" card_heading " >
                    {item.point}
                  </motion.h4>


                  <motion.div
                    animate={{
                      rotate:
                        activeIndex === index
                          ? 180
                          : 0,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="z-50"
                  >
                    <ChevronDown
                      size={26}
                      color="#e0ded2"
                    />
                  </motion.div>

                </div>


                {/* ACCORDION CONTENT */}
                <AnimatePresence>

                  {activeIndex === index && (

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        clipPath:
                          "inset(0 0 100% 0)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        clipPath:
                          "inset(0 0 0% 0)",
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        clipPath:
                          "inset(0 0 100% 0)",
                      }}
                      transition={{
                        duration: 0.75,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >

                      {/* Role Summary */}
                      <p  className="mt-4 text-[#fffced] text_para"> {item.description}</p>

                      {/* LEARN MORE */}
                      <button
                        onClick={(e) => {
                        e.stopPropagation();
                        openExperience(item);
                        }}
                        className="mt-4 text-[#978F66] uppercase font-semibold text-[14px] hover:text-[#fffced]  transition-colors  duration-300 cursor-pointer  ">
                        Learn More →
                      </button>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            ))}

          </motion.div>

        </div>


        {/* ================================================= */}
        {/* DETAILED EXPERIENCE MODAL */}
        {/* ================================================= */}

        <AnimatePresence>

          {selectedExperience && (

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
              }}
              transition={{
                duration: 0.45,
                ease: "easeInOut",
              }}
              className="
                absolute
                inset-0
                z-[200]
                rounded-sm
                bg-[#161819]/95
                backdrop-blur-xl
                border
                border-[#fffced]/20
                overflow-hidden
              "
            >

              {/* Modal Header */}
              <div
                className="
                  sticky
                  top-0
                  z-20
                  flex
                  items-center
                  justify-between
                  px-6
                  py-5
                  bg-[#161819]/95
                  backdrop-blur-xl
                  border-b
                  border-[#fffced]/10
                "
              >

                <div>
                  <p className="page_title"  > Work Experience </p>
                  <h2  className=" Section_title "  >{selectedExperience.point} </h2>
                </div>


                {/* CLOSE BUTTON */}
                <button
                  onClick={closeExperience}
                  className="
                    size-10
                    rounded-full
                    border
                    border-[#fffced]/30
                    flex
                    items-center
                    justify-center
                    text-[#fffced]
                    hover:bg-[#fffced]
                    hover:text-[#161819]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                  aria-label="Close experience details"
                >
                  <span className="text-[22px]">
                    -
                  </span>
                </button>

              </div>


              {/* SCROLLABLE CONTENT */}
              <div
                className="
                  h-[calc(100%-90px)]
                  overflow-y-auto
                  px-6
                  py-6
                  lg:px-10
                  lg:py-8
                "
              >

                {/* Employer + Duration */}
                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-4
                    mb-8
                  "
                >

                  <div
                    className="
                      border
                      border-[#fffced]/15
                      bg-[#fffced]/5
                      rounded-sm
                      p-4
                    "
                  >

                    <p
                      className="
                        uppercase
                        text-[11px]
                        text-[#b8b8b8]
                        font-semibold
                        mb-1
                      "
                    >
                      Employer
                    </p>

                    <p
                      className="
                        text-[#fffced]
                        text-[17px]
                        font-semibold
                      "
                    >
                      {selectedExperience.employer}
                    </p>

                  </div>


                  <div
                    className="
                      border
                      border-[#fffced]/15
                      bg-[#fffced]/5
                      rounded-sm
                      p-4
                    "
                  >

                    <p
                      className="
                        uppercase
                        text-[11px]
                        text-[#b8b8b8]
                        font-semibold
                        mb-1
                      "
                    >
                      Duration
                    </p>

                    <p
                      className="
                        text-[#fffced]
                        text-[17px]
                        font-semibold
                      "
                    >
                      {selectedExperience.duration}
                    </p>

                  </div>

                </div>


                {/* Role Summary */}
                <div className="mb-8">
                  <h3 className=" card_heading " > Role Summary </h3>
                  <p className=" text-[#fffced]/80 text-[15px] leading-7"> {selectedExperience.description}</p>
                </div>

                {/* ROLES & RESPONSIBILITIES */}
                <div className="mb-8">

                  <h3
                    className="
                      text-[#fffced]
                      uppercase
                      font-bold
                      text-[18px]
                      mb-4
                    "
                  >
                    Roles & Responsibilities
                  </h3>


                  <div className="flex flex-col gap-3">

                    {selectedExperience.responsibilities?.map(
                      (responsibility, index) => (

                        <div
                          key={index}
                          className=" flex gap-3 items-start border-b  border-[#fffced]/10  pb-3 " >

                          <span  className=" text-[#978F66] font-bold ">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="  text-[#fffced]/85 text-[15px]  leading-6  "> {responsibility} </p>

                        </div>

                      )
                    )}

                  </div>

                </div>



              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </div>

  </div>

</section>
  );
};

export default WorkExperience;