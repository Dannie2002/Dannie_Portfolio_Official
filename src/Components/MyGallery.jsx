import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import digital from "../assets/DigitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import branding from "../assets/Civo_tower.jpg";
import noise from "../assets/Noise.png";
import servicedesk from "../assets/Field3.jpg";
import banner from "../assets/Gallery.jpg";
import field4 from "../assets/Field4.jpg"
import fat from "../assets/FAT.jpg";
import fiberh from "../assets/Fiberh.jpg"
import netoperations from "../assets/Field2.jpg";
import router from "../assets/Field1.jpg";
import meatcivo from "../assets/MeatCivo.jpg"
import graduation from "../assets/Graduation.jpg"
import radwin from "../assets/Radwin.jpg"
import tplink from "../assets/TpLink.jpg"
import onu from "../assets/ONU.jpg"
import fat2 from "../assets/FAT2.jpg"
import roundedrouter from "../assets/RoundRouter.jpeg"
import SectionHeader from "./SectionHeader.jsx";
import MoonBalls from "./MoonBalls.jsx";

const MyGallery = () => {
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  /* --------------------------------
     Gallery Images
  -------------------------------- */

  const galleryImages = [
    {
      image: servicedesk,
      title: "Service Desk Operations",
      category: "ISP Operations",
    },

    {
      image: branding,
      title: "CIVO TOWER, LL",
      category: "Telecommunications",
    },

    {
      image: photography,
      title: "Work Experience",
      category: "Professional Experience",
    },

    {
      image: fiberh,
      title: "Network Operations",
      category: "NOC & Monitoring",
    },

    {
      image: router,
      title: "Network Equipment",
      category: "Networking",
    },

    {
      image: fat2,
      title: "Fibre Access Terminal",
      category: "FTTH",
    },

    {
      image: graduation,
      title: "Technical Environment",
      category: "Field Experience",
    },

    {
      image: onu,
      title: "BSc BIT",
      category: "Education",
    },

    {
      image: field4,
      title: "Technical Work",
      category: "Technology",
    },

    // Repeated for now — replace these with your real evidence
    {
      image: fat,
      title: "Client Service Operations",
      category: "Service Desk",
    },

    {
      image: tplink,
      title: "Network Configuration",
      category: "Networking",
    },

    {
      image: radwin,
      title: "Fibre Infrastructure",
      category: "FTTH",
    },

    {
      image: netoperations,
      title: "Network Monitoring",
      category: "Network Operations",
    },

    {
      image: meatcivo,
      title: "Professional Experience",
      category: "Experience",
    },

    {
      image: roundedrouter,
      title: "Internet Service Provider",
      category: "ISP Operations",
    },
  ];

  return (
    <section className="bg-[#101011] min-h-screen flex flex-col relative w-full overflow-hidden">
      <MoonBalls />

      {/* --------------------------------
          Section Header
      -------------------------------- */}

      <SectionHeader
        title="My Gallery"
        bgImage={banner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ My Gallery" },
        ]}
      />

      {/* --------------------------------
          Gallery Introduction
      -------------------------------- */}

      <div className="Section_wrapper z-10">

        <div className="section_header">

          <motion.h1
            className="page_title autoShow ]"
          >
            Evidence Of The Work
          </motion.h1>

          <h3 className="Section_title text-[#fffced]">
            Relavance through <span className="text-(--secondary-color)">Evidence.</span>
          </h3>

        </div>


        <div className="flex items-center justify-between gap-20 mt-8">

          <motion.p
            className="
              pt-6
              text-[#fffced]
              font-normal
              text-[16.5062px]
              leading-[23.754px]
              max-w-3xl
            "
          >
            This
            gallery documents some of the work I have been involved in.
            These are moments from the environments where the work actually
            happens.
          </motion.p>

        </div>


        {/* --------------------------------
            Masonry Gallery
        -------------------------------- */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            columns-2
            md:columns-2
            lg:columns-5
            gap-5
            mt-16
          "
        >

          {galleryImages.map((item, index) => (
            <GalleryCard
              key={index}
              item={item}
              variants={itemVariants}
            />
          ))}

        </motion.div>

      </div>

    </section>
  );
};


/* --------------------------------
   Gallery Card
-------------------------------- */

const GalleryCard = ({ item, variants }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (

    <motion.div
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        relative
        mb-5
        break-inside-avoid
        overflow-hidden
       
        group
        cursor-pointer
        bg-[#201f1f]
        shadow-[3px_6px_28px_rgba(255,255,255,0.08)]
        outline-[#fffced]/10 outline-[1.3px] rounded-sm
      "
    >

      {/* --------------------------------
          Image
      -------------------------------- */}

      <img
        src={item.image}
        alt={item.title}
        className="
          w-full
          h-auto
          block
          object-cover
          grayscale
          transition-all
          duration-700
          ease-out
          group-hover:grayscale-0
          group-hover:scale-[1.03]
        "
      />


      {/* --------------------------------
          Dark Overlay
      -------------------------------- */}

      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{
          duration: 0.45,
          ease: "easeOut",
        }}
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#0b0b0d]
          via-[#0b0b0d]/35
          to-transparent
          pointer-events-none
        "
      />


      {/* --------------------------------
          Gallery Information
      -------------------------------- */}

      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 20,
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          z-20
          p-5
        "
      >

        <p className="
        page_title
          mb-2
        ">
          {item.category}
        </p>

        <h3 className="
          text-[#fffced]
          text-lg
          font-semibold
          leading-tight
        ">
          {item.title}
        </h3>

      </motion.div>

    </motion.div>
  );
};


export default MyGallery;