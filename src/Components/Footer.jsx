import React, { useState } from "react";
import { Link } from "react-router";
import noise from "../assets/Noise.png";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown,Plus, ChevronUp, ChevronRight } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import ScrollWords from "../Components/ScrollWords"


const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  library.add(fab);

  const byPrefixAndName = {
    fab: {
      facebook: ["fab", "facebook"],
      instagram: ["fab", "instagram"],
      linkedin: ["fab", "linkedin"],
      github: ["fab", "github"],
    },
  };


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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.79,
        ease: "easeInOut",
      },
    },
  };


  /* --------------------------------
     Footer Links
  -------------------------------- */

  const footerLinks = [
    {
      title: "About Dannie",
      links: [
        {
          label: "Who Is Dannie?",
          link: "/who-is-dan?",
        },
        {
          label: "Proffession Background",
          link: "/about#professional-background",
        },
        {
          label: "Education",
          link: "/about#education",
        },
        {
          label: "Mission Vision",
          link: "/about#mission-vision",
        },
      ],
    },

    {
      title: "Core Competencies",
      links: [
        {
          label: "Client Support",
          link: "/competencies#client-support",
        },
        {
          label: "Web Design & Development",
          link: "/website-design-development",
        },
        {
          label: "Client Relation Management",
          link: "/client-relationship-management",
        },
        {
          label: "ISP Operations & Architecture",
          link: "/telecommunications",
        },
      ],
    },

    {
      title: "Get involved",
      links: [
        {
          label: "Let's Connect",
          link: "/lets-connect",
        },
        {
          label: "Collaborations",
          link: "/collaborations",
        },
        {
          label: "Contact Me",
          link: "/contact",
        },
      ],
    },

    {
      title: "Follow Me on:",
      socials: [
        {
          label: "GitHub",
          link: "https://github.com/Dannie2002",
          icon: (
            <FontAwesomeIcon
              icon={byPrefixAndName.fab["github"]}
              size="2x"
              className="white"
            />
          ),
        },

        {
          label: "Instagram",
          link: "https://instagram.com/",
          icon: (
            <FontAwesomeIcon
              icon={byPrefixAndName.fab["instagram"]}
              size="2x"
              className="white"
            />
          ),
        },

        {
          label: "LinkedIn",
          link: "https://linkedin.com/",
          icon: (
            <FontAwesomeIcon
              icon={byPrefixAndName.fab["linkedin"]}
              size="2x"
            />
          ),
        },
      ],
    },
  ];


  return (
    <footer className="min-h-[40vh] relative border border-t-[#fffced] bg-[#0d0e0e]">

      

      <div className="Section_wrapper z-20">
       

        <div className="Grid_4  z-20">

          {footerLinks.map((section, index) => (

            <nav
              key={index}
              className={`flex flex-col z-20 gap-2   ${index === 3 ? '' : ' '}`}
            >

              <div className="flex items-center justify-between z-20">

                <h6
                  className={`card_heading ${
                    section.links
                      ? "cursor-pointer lg:cursor-default"
                      : ""
                  }`}
                  onClick={() =>
                    section.links && handleToggle(index)
                  }
                >
                  {section.title}
                </h6>

              {section.links && (
  <button
    type="button"
    onClick={() => handleToggle(index)}
    className="relative flex lg:hidden w-6 h-6 items-center justify-center"
  >
    <span className="absolute w-5 h-[1.5px] bg-[#fffced]" />

    <span
      className={`absolute w-5 h-[1.5px] bg-[#fffced] transition-transform duration-450 ease-in-out ${
        openIndex === index
          ? "rotate-0"
          : "rotate-90"
      }`}
    />
  </button>
)}

              </div>


              <motion.div
                initial={{
                  opacity: 0,
                  x: 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 1.99,
                  ease: "easeInOut",
                }}
                className="w-full relative h-[1.5px] mb-2 mt-2 lg:hidden bg-green"
              />


              {section.links && (
                <>

                  {/* Desktop view: always visible */}

                  <motion.div
                    className="hidden lg:flex flex-col gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >

                    {section.links.map((item, i) => (

                      <motion.div
                        key={i}
                        variants={itemVariants}
                      >

                        <Link
                          to={item.link}
                          className="text_link btn text-(--text-colour) hover:text-[#fffced] border-0 p-0"
                        >
                          {item.label}
                        </Link>

                      </motion.div>

                    ))}

                  </motion.div>


                  {/* Mobile view: animated accordion */}

                  <AnimatePresence>

                    {openIndex === index && (

                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.45,
                          ease: "easeInOut",
                        }}
                        className="flex lg:hidden flex-col gap-3 overflow-hidden"
                      >

                        {section.links.map((item, i) => (

                          <Link
                            key={i}
                            to={item.link}
                            className="link cursor-pointer lg:text-[16.5px] text-(--text-colour) link-hover"
                          >
                            {item.label}
                          </Link>

                        ))}

                      </motion.div>

                    )}

                  </AnimatePresence>

                </>
              )}


              {/* Social Links */}

              {section.socials && (

                <div className="flex mt-4 lg:mt-0 gap-6">

                  {section.socials.map((social, i) => (

                    <a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="cursor-pointer transition-transform duration-460 ease-in-out hover:-translate-y-2 hover:shadow-[4px_8px_12px_rgba(221,115,10,0.6)] rounded-[4px] bg-(--primary-color) p-3 text-green hover:bg-green"
                    >
                      {social.icon}
                    </a>

                  ))}

                </div>

              )}

            </nav>

          ))}

        </div>

         <ScrollWords className="" />

      </div>


      <div className="w-full border border-t-(--text-colour)/20 px-6 lg:flex-row lg:mx-auto lg:px-18 flex-col py-4 flex items-center justify-between relative">

        <p className="white text-[12px] text-(--primary-color) lg:text-[14px] z-50">
          Privacy Policy
        </p>

        <p className="white text-[12px] text-(--primary-color) lg:text-[14px] z-50">
          ©2026 All rights reserved.
        </p>

        <div className="bg-orange flex items-center justify-center px-4 py-2 gap-4 border border-[#fffced]/20 rounded-l-full z-20">

          <h6 className="white text-[12px] lg:text-[14px] text-(--primary-color)">
            Design & Built by Dannie Mankhwazi
          </h6>

        </div>

      </div>

    </footer>
  );
};

export default Footer;