import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/Router.jpg";
import SectionHeader from "./SectionHeader.jsx";

const TechnologyTools = () => {

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

  const technologyCards = [
    {
      title: "International Connectivity",
      description:
        "Exposure to international network connectivity through WIOCC upstream links and coordination with network operations teams to investigate upstream service issues and maintain connectivity.",
    },

    {
      title: "Network & Security",
      description:
        "Hands-on exposure to SD-WAN, MPLS VPNs, MikroTik, FortiGate, and Zenarmor while supporting connectivity, routing, security, and customer network services.",
    },

    {
      title: "Data Center & Infrastructure",
      description:
        "Exposure to data center operations and hosted infrastructure, including the network environment supporting business services, connectivity, and customer-hosted systems.",
    },
  ];

  const TechnologyCard = ({ title, description }) => {
    return (
      <motion.div
        variants={itemVariants}
        className="group relative overflow-hidden border-b border-b-(--text-color)/60 flex flex-col lg:items-start lg:justify-start p-6 h-auto"
      >

        <div className="relative z-10 flex flex-col lg:items-start lg:justify-start lg:flex-row pb-4 gap-6 lg:gap-8">

          <div className="flex flex-col gap-4 lg:items-start items-center lg:justify-start justify-center">

            <h4 className="card_heading">
              {title}
            </h4>

            <p className="text-[#b8b8b8] text-center lg:text-start">
              {description}
            </p>

          </div>

        </div>

      </motion.div>
    );
  };

  return (

    <section className="bg-[#101011] relative w-full">

      <SectionHeader
        title="Technologies & Tools"
        bgImage={banner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ Competencies" },
          { label: "/ Telecommunications" },
          { label: "/ Technologies & Tools" }
        ]}
      />

      <div className="Section_wrapper mt-12 !py-0">

        <div className="section_header">

          <motion.h1 className="page_title">
            Technologies & Tools
          </motion.h1>

        </div>

      </div>


      <div className="Section_wrapper">

        <div className="flex_container">

          {/* LEFT */}
          <div className="lg:w-1/2">

            <div className="relative rounded-full h-80 flex flex-col items-start justify-between">

              <div className="flex flex-col gap-6">

                <h3 className="Section_title text-[#fffced]">
                  Working across the{" "}
                  <span className="text_gradient">
                    infrastructure stack.
                  </span>
                </h3>

                <h4 className="card_heading chivo text-[18px] uppercase">
                  Technologies & Tools
                </h4>

                <motion.p className="text_para mt-4 text-[#fffced] font-normal max-w-sm">
                  Exposure to the technologies and infrastructure
                  supporting internet connectivity, network security,
                  international links, and data center operations.
                </motion.p>

              </div>

              <div className="bg-transparent py-2 gap-2 outline-[1.2px] outline-[#101111] items-center rounded-full px-6 flex">
              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div className="w-full lg:w-1/2">

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid lg:grid-cols-1 gap-6 lg:gap-8"
            >

              {technologyCards.map((card, index) => (
                <TechnologyCard
                  key={index}
                  title={card.title}
                  description={card.description}
                />
              ))}

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TechnologyTools;