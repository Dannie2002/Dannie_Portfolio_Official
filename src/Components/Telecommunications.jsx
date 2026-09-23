import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import banner from "../assets/Good2.jpg";
import fat from "../assets/FAT.jpg";
import netoperations from "../assets/NetOperations.jpg";
import { ArrowRight,ArrowUpRight, SplinePointer, ChevronDown } from 'lucide-react'
import router from "../assets/Router.jpg";
import noise from "../assets/noise.png";
import isp from "../assets/Good.jpg";
import SectionHeader from "./SectionHeader.jsx";
import Telecom from "../SVGS/Telecom.jsx";

const Telecommunications = () => {

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


  const teleExpertise = [
    {
      title: "Network Infrastructure",
      image: banner,
      items: [
        "GPON/FTTH architecture",
        "OLT, FDT, ODF & ONT/ONU",
        "Fibre-optic networks & infrastructure",
        "Ethernet & structured cabling",
        "Point-to-point wireless links",
        "Network topology & connectivity",
      ],
    },

    {
      title: "Internet & Connectivity",
      image: fat,
      items: [
        "Internet backbone connectivity",
        "Bandwidth & throughput analysis",
        "MPLS VPN",
        "SD-WAN",
        "Wireless connectivity",
        "Latency & packet-loss analysis",
      ],
    },

    {
      title: "Network Operations",
      image: netoperations,
      items: [
        "Network monitoring",
        "Fault detection & troubleshooting",
        "Incident & outage management",
        "NOC coordination",
        "SLA monitoring",
        "RFO management",
      ],
    },

    {
      title: "Technologies & Tools",
      image: router,
      items: [
        "MikroTik",
        "FortiGate",
        "Cacti",
        "Radwin",
        "PowerBeam",
        "PoE",
        "IP networking",
      ],
    },
  ];


  const ProductCard = ({ title, image, items }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        variants={itemVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className=" group relative overflow-hidden rounded-sm shadow-[3px_6px_28px_rgba(255,255,255,0.2)]  flex flex-col items-start justify-end px-6  py-8 lg:min-h-[480px] min-h-[400px] btn ">

        <img
          src={image}
          className="absolute inset-0 size-full z-0 object-cover group-hover:scale-135 transition-all duration-2450 grayscale group-hover:grayscale-0"
        />

        <div className="absolute lg:group-hover:flex transition-colors duration-450 ease-in-out inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#201f1f]/60 to-transparent opacity-99">
        </div>


        <motion.div
          animate={{
            y: isHovered ? -35 : 0,
          }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 flex flex-col gap-4 w-full"
        >

          <div className="flex flex-col items-start gap-4 justify-start">

            <svg
              fill="#9B8EC7"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              className="size-10"
            >
              <g>
                <path d="M23.748,2.747c2.271,0,4.405,0.884,6.011,2.489l24.506,24.506c1.646,1.645,2.546,3.921,2.479,6.255c0.068,2.337-0.833,4.614-2.479,6.261L29.758,66.764c-1.605,1.605-3.739,2.489-6.01,2.489c-2.271,0-4.405-0.884-6.01-2.489c-3.314-3.314-3.314-8.707,0-12.021L36.481,36L17.738,17.258c-3.314-3.314-3.314-8.707,0-12.021C19.344,3.631,21.478,2.747,23.748,2.747z M23.748,65.253c1.202,0,2.332-0.468,3.182-1.317L50.963,39.43c0.891-0.893,0.833-2.084-0.833-3.355c0-0.051,0-0.101,0-0.151c0-1.271,0.058-2.461,0.833-3.353L26.693,8.064c-0.85-0.85-1.862-1.317-3.063-1.317c-1.203,0-2.273,0.468-3.123,1.317c-1.755,1.755-1.725,4.61,0.03,6.365l20.172,20.156c0.781,0.781,0.788,2.047,0.007,2.828L20.563,57.57c-1.754,1.755-1.753,4.61,0.001,6.365C21.413,64.785,22.546,65.253,23.748,65.253z" />
              </g>
            </svg>
          

            <h4 className="bigcard_heading uppercasetext-[#fffced] leading-tight"> {title}</h4>


            {/* CONTENT REVEAL */}

            <motion.div
              animate={{
                height: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                height: {
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: 0.45,
                  ease: "easeOut",
                },
              }}
              className="overflow-hidden w-full"
            >

              <div className="grid grid-cols-1 gap-x-8 gap-y-4 mt-2">

                {items.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-3 text-[#fffced] text-sm leading-relaxed">
                     <svg className="size-6" fill="#ffffff" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 3.3437 30.8945 C 3.3437 40.8086 9.9999 47.4414 20.9687 47.4414 L 26.0780 47.4414 C 31.4921 47.4414 34.6327 44.8867 34.7030 40.5274 C 36.4140 39.9883 37.4687 38.5820 37.4687 36.6133 C 37.4687 35.9570 37.3280 35.2774 37.1171 34.5742 C 38.9921 33.9648 40.1640 32.4180 40.1640 30.3789 C 40.1640 29.8398 40.0936 29.2774 39.9062 28.7148 L 47.7109 28.7148 C 50.6874 28.7148 52.6563 26.7461 52.6563 23.9805 C 52.6563 21.1914 50.6874 19.2227 47.7109 19.2227 L 28.1640 19.2227 C 28.0468 19.2227 27.9530 19.1523 27.9530 19.0352 C 27.9530 18.9414 28.0233 18.8711 28.1171 18.8476 L 31.8671 17.2774 C 34.3046 16.2461 35.2421 14.1367 34.4218 11.9336 C 33.5077 9.4727 31.1171 8.5586 28.1874 9.5898 L 16.5858 13.7148 C 7.7968 16.8320 3.3437 22.6211 3.3437 30.8945 Z M 6.5780 31.0117 C 6.5780 24.4492 9.6014 19.4336 17.5936 16.5742 L 29.1718 12.4258 C 30.3905 11.9805 31.2812 12.3086 31.6562 13.2461 C 31.9843 14.1367 31.4687 14.9570 30.4609 15.4023 L 23.3358 18.5898 C 22.1640 19.1055 21.7890 19.8320 21.7890 20.6523 C 21.7890 21.6367 22.5624 22.3398 23.6405 22.3398 L 47.9216 22.3398 C 48.9296 22.3398 49.6328 23.0196 49.6328 23.9805 C 49.6328 24.9414 48.9296 25.5976 47.9216 25.5976 L 30.5780 25.5976 C 29.7577 25.5976 29.1483 26.3008 29.1483 27.1211 C 29.1483 27.9180 29.7577 28.5742 30.5780 28.5742 L 36.8124 28.5742 C 37.0233 28.9727 37.1405 29.5117 37.1405 29.9805 C 37.1405 31.1523 36.3671 31.8555 35.1483 31.8555 L 29.6874 31.8555 C 28.8202 31.8555 28.2577 32.5586 28.2577 33.3555 C 28.2577 34.1289 28.8202 34.8320 29.6874 34.8320 L 34.1171 34.8320 C 34.3280 35.2305 34.4452 35.7696 34.4452 36.2148 C 34.4452 37.4101 33.6718 38.0898 32.4530 38.0898 L 28.7968 38.0898 C 27.9296 38.0898 27.3436 38.8164 27.3436 39.6133 C 27.3436 40.3867 27.9296 41.0664 28.7968 41.0664 L 31.4921 41.0664 C 31.4921 43.1523 29.3358 44.3477 25.6093 44.3477 L 21.3436 44.3477 C 11.9218 44.3477 6.5780 39.2852 6.5780 31.0117 Z"></path></g></svg>
                    <span>  {item}</span>
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </motion.div>

      </motion.div>
    );
  };


  return (

    <section className="bg-[#101011] relative w-full">

      <SectionHeader
        title="Telecommunications"
        bgImage={banner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ Competencies" },
          { label: "/ Telecommunications" }
        ]}
      />


      <div className="Section_wrapper mt-12 !py-0">

        <div className="section_header">

           <motion.h1  className="page_title"  > Telecommunications </motion.h1>
          <h3   className="Section_title text-[#fffced]"> Exposed to <span className="text-(--secondary-color)">cutting edge </span> technologies in Telecommunications.</h3>


          <div className="flex lg:flex-row flex-col items-center justify-between gap-20">

            <motion.p
              className="text_para max-w-xl text-[#fffced] "
            >
              From the internet backbone to telecommunications and ISP operations, Internet
            and Fibre-to-the-Home (FTTH) installation
            </motion.p>

                <motion.div className='flex btn border  mt-6 group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-(--primary-color) border-(--primary-color)/40 px-6  py-2 items-center gap-4' >
                     <div className='relative flex overflow-hidden'>
                             <h3 className='text_button group-hover:translate-y-6 ease-in-out transition-transform duration-490 out'>
                          Exlpore more
                        </h3>
                        <h3 className='text_button absolute -translate-y-4 ease-in group-hover:opacity-100 group-hover:translate-y-0 opacity-0  transform transition-all duration-600'>
                          Contact Us
                        </h3>
                     </div>
                     
                        <div className='flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm  justify-center bg-[#fffced] size-7 p-2'>
                          <ArrowRight className='absolute group-hover:rotate-15  ease-in-out  size-full transform  transition-all duration-490  group-hover:translate-x-10 text-(--primary-color)' />
                          <ArrowRight className='absolute group-hover:-rotate-45  ease-in-out  size-full transform -translate-x-10 opacity-0  transition-all duration-600 group-hover:opacity-100  group-hover:translate-x-0 text-[#272626]' />
                        </div>
                       
                      </motion.div>

          </div>

        </div>

      </div>


      <div className="Section_wrapper mt-12">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">

          {teleExpertise.map((card, index) => (

            <ProductCard
              key={index}
              title={card.title}
              image={card.image}
              items={card.items}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Telecommunications;