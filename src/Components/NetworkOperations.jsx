import React from "react";
import { motion } from "framer-motion";
import banner from "../assets/NetOperations.jpg";
import SectionHeader from "./SectionHeader.jsx";

const NetworkOperations = () => {

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

  const operationsCards = [
    {
      title: "Monitoring & Alarms",
      description:
        "Monitoring network performance, service alarms, and device availability using tools such as Cacti, while tracking incidents and coordinating responses to network disruptions.",
    },

    {
      title: "SLA Compliance",
      description:
        "Tracking service performance against agreed service levels, following up on incidents, monitoring restoration timelines, and supporting accurate incident and end-of-shift reporting.",
    },

    {
      title: "Diagnostics & Configuration",
      description:
        "Troubleshooting connectivity issues using diagnostic tools, MikroTik command-line operations, configuration checks, connectivity tests, latency and packet-loss analysis, and other network troubleshooting techniques.",
    },
  ];

  const OperationsCard = ({ title, description }) => {
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
        title="Network Operations"
        bgImage={banner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ Competencies" },
          { label: "/ Telecommunications" },
          { label: "/ Network Operations" }
        ]}
      />

      <div className="Section_wrapper ">

        <div className="section_header">

          <motion.h1 className="page_title">
            Network Operations & Monitoring
          </motion.h1>

        </div>

      </div>


      <div className="Section_wrapper">

        <div className="flex_container mt-0">
          {/* LEFT */}
          <div className="lg:w-1/2 flex flex-col gap-6">

                <h3 className="Section_title text-[#fffced]">
                  Keeping networks{" "}
                  <span className="text_gradient">
                    visible, reliable, and responsive.
                  </span>
                </h3>

            <div className="relative  rounded-full flex flex-col items-start justify-between">


                <h4 className="card_heading chivo text-[18px] uppercase">
                  Network Operations
                </h4>

                <motion.p className="text_para mt-4 text-[#fffced] font-normal max-w-sm">
                  Monitoring network services, investigating incidents,
                  tracking service performance, and supporting the
                  restoration of connectivity when issues arise.
                </motion.p>

          

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

              {operationsCards.map((card, index) => (
                <OperationsCard
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

export default NetworkOperations;