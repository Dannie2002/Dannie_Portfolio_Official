import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import bag from "../assets/052.png";
import banner from "../assets/Good2.jpg";
import fat from "../assets/FAT.jpg";
import netoperations from "../assets/NetOperations.jpg";
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
        className="
          group
          relative
          overflow-hidden
          rounded-sm
          shadow-[3px_6px_28px_rgba(255,255,255,0.2)]
          flex
          flex-col
          items-start
          justify-end
          px-6
          py-8
          lg:min-h-[480px]
           min-h-[400px]
          btn
        "
      >

        <img
          src={image}
          className="absolute inset-0 size-full z-0 object-cover group-hover:scale-105 transition-all duration-1450 grayscale group-hover:grayscale-0"
        />

        <div className="absolute lg:group-hover:flex transition-colors duration-450 ease-in-out inset-0 bg-gradient-to-t from-[#0b0b0d] via-[#201f1f]/60 to-transparent opacity-99">
        </div>


        <motion.div
          animate={{
            y: isHovered ? -35 : 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-20 flex flex-col gap-4 w-full"
        >

          <div className="flex flex-col items-start gap-3 justify-start">

            <svg
              fill="#88841d"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              className="size-10"
            >
              <g>
                <path d="M23.748,2.747c2.271,0,4.405,0.884,6.011,2.489l24.506,24.506c1.646,1.645,2.546,3.921,2.479,6.255c0.068,2.337-0.833,4.614-2.479,6.261L29.758,66.764c-1.605,1.605-3.739,2.489-6.01,2.489c-2.271,0-4.405-0.884-6.01-2.489c-3.314-3.314-3.314-8.707,0-12.021L36.481,36L17.738,17.258c-3.314-3.314-3.314-8.707,0-12.021C19.344,3.631,21.478,2.747,23.748,2.747z M23.748,65.253c1.202,0,2.332-0.468,3.182-1.317L50.963,39.43c0.891-0.893,0.833-2.084-0.833-3.355c0-0.051,0-0.101,0-0.151c0-1.271,0.058-2.461,0.833-3.353L26.693,8.064c-0.85-0.85-1.862-1.317-3.063-1.317c-1.203,0-2.273,0.468-3.123,1.317c-1.755,1.755-1.725,4.61,0.03,6.365l20.172,20.156c0.781,0.781,0.788,2.047,0.007,2.828L20.563,57.57c-1.754,1.755-1.753,4.61,0.001,6.365C21.413,64.785,22.546,65.253,23.748,65.253z" />
              </g>
            </svg>

            <h4 className="bigcard_heading uppercasetext-[#fffced] leading-tight">
              {title}
            </h4>


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

              <div className="grid grid-cols-1 gap-x-8 gap-y-3 mt-2">

                {items.map((item, index) => (

                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-3
                      text-[#fffced]
                      text-sm
                      leading-relaxed
                    "
                  >

                    <span className="text-[#FFBF00] shrink-0">
                      →
                    </span>

                    <span>
                      {item}
                    </span>

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
          <h3   className="Section_title "> Exposed to cutting edge communication technologies.</h3>


          <div className="flex lg:flex-row flex-col items-center justify-between gap-20">

            <motion.p
              className="text_para text-[#fffced] "
            >
              From the internet backbone to telecommunications and ISP operations, Internet
            and Fibre-to-the-Home (FTTH) installation
            </motion.p>

            <Telecom color="#ca852b" size={36} className="hidden lg:flex" />

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