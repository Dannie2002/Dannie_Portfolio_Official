import React from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

import SectionHeader from "./SectionHeader.jsx";

import mwapata from "../assets/Mwapataredesign.png";
import banner from "../assets/Good.jpg";
import digital from "../assets/DigitalMarketing.jpg";
import photography from "../assets/Webbb.jpg";
import electronic from "../assets/Webbb.jpg"
import mockup from "../assets/projects-mockup.png"

const projects = [
  {
    slug: "mwapata-website-redesign",

    title: "MwAPATA Website Redesign",

    category: "Website Redesign",

    year: "2026",

    image: mwapata,

    shortDescription:
      "A modern website redesign focused on communicating MwAPATA's research, publications, events, and impact in Malawi.",

    overview:
      "The MwAPATA Institute website redesign was focused on creating a clearer, more engaging digital experience for communicating research and development work. The new structure places greater emphasis on research publications, events, resources, and the organisation's wider impact.",

    challenge:
"The interface needed to remain professional while also making important content easier to discover.",

    approach:
      "The interface was structured around clear sections and reusable components so that the experience could remain consistent throughout the website.",

    contribution:
      "I contributed to the website redesign, frontend development, component structure, responsive layouts, visual presentation, and overall interaction design.",

    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "GitHub",
    ],

    gallery: [
      mwapata,
      banner,
      digital,
      photography,
    ],

    liveUrl: "#",

    githubUrl: "#",
  },

  {
    slug: "livestock-health-tracker",

    title: "Livestock Health Tracker",

    category: "Web Application",

    year: "2022",

    image: banner,

    shortDescription:
      "A web application designed to support livestock health management and record keeping.",

    overview:
      "The Livestock Health Tracker was developed as a web-based solution for organising livestock health information and making important records easier to manage.",

    challenge:
      "The project focused on reducing the difficulty of keeping track of livestock health information and presenting relevant records in a more structured digital environment.",

    approach:
      "The application was structured around simple interfaces that allow users to interact with livestock information in a more organised way.",

    contribution:
      "I worked on the application structure, frontend development, interface design, and implementation of the core user experience.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Lalavel",
      "Next.js",
    ],

    gallery: [
      banner,
      digital,
      photography,
    ],

    liveUrl: "#",

    githubUrl: "#",
  },

  {
    slug: "electronic-cashbox",

    title: "Electronic Cashbox",

    category: "FinTech",

    year: "2025",

    image: electronic,

    shortDescription:
      "A digital cash management concept designed to improve the organisation of financial transactions.",

    overview:
      "Electronic Cashbox explores how digital interfaces can simplify the recording and organisation of cash transactions.",

    challenge:
      "The project focused on creating a straightforward experience for recording and managing financial information while keeping the interface easy to understand.",

    approach:
      "The interface was designed around simplicity, clear information hierarchy, and efficient interaction with financial records.",

    contribution:
      "I worked on the interface structure, frontend implementation, and interaction design of the project.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    gallery: [
      digital,
      banner,
      photography,
    ],

    liveUrl: "#",

    githubUrl: "#",
  },

  {
    slug: "bike-tech-e-commerce",

    title: "Bike Tech E-commerce",

    category: "E-commerce",

    year: "2024",

    image: mockup,

    service: "Web design & development",

    shortDescription:
      "An e-commerce interface concept designed around presenting products through a clean digital shopping experience.",

    overview:
      "Bike Tech E-commerce explores a product-focused interface where customers can discover products and interact with an organised online catalogue.",

    challenge:
      "The challenge was to create an interface that could present products clearly while maintaining a simple and intuitive shopping experience.",

    approach:
      "The design focused on product presentation, navigation, responsive layouts, and clear calls to action.",

    contribution:
      "I worked on the frontend structure, visual presentation, responsive interface, and overall user experience.",

    technologies: [
      "React",
      "JavaScript",
      "Tailwind CSS",
    ],

    gallery: [
      photography,
      digital,
      banner,
    ],

    liveUrl: "#",

    githubUrl: "#",
  },
];

const ProjectDetails = () => {
  const { slug } = useParams();

  /* --------------------------------
     Find Project
  -------------------------------- */

  const project = projects.find(
    (item) => item.slug === slug
  );

  /* --------------------------------
     Handle Invalid Project
  -------------------------------- */

  if (!project) {
    return (
      <section className="min-h-screen bg-(--background-color) text-[#fffced] flex items-center justify-center px-6">

        <div className="text-center">

          <p className="text-[#9B8EC7] uppercase tracking-[0.2em] text-sm">
            Project
          </p>

          <h1 className="mt-4 text-4xl font-semibold">
            Project not found
          </h1>

          <p className="mt-4 text-[#fffced]/60">
            The project you are looking for does not exist.
          </p>

          <Link
            to="/"
            className="
              inline-flex
              items-center
              gap-2
              mt-8
              text-[#9B8EC7]
              hover:text-[#fffced]
              transition-colors
              duration-300
            "
          >
            <ArrowLeft size={18} />

            Back to Home
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-(--background-color) min-h-screen ">

      {/* =========================================
          PROJECT HEADER
      ========================================== */}

      <SectionHeader
        title={project.title}
        bgImage={project.image}
        breadcrumbs={[
          {
            label: "Home",
            link: "/",
          },
          {
            label: "/ Projects",
            link: "/#projects",
          },
          {
            label: `/ ${project.title}`,
          },
        ]}
      />

      {/* =========================================
          PROJECT INTRODUCTION
      ========================================== */}

      <div className="Section_wrapper mt-12">

        

          <div className=" flex_container gap-12 lg:gap-20 items-start">

            {/* ---------------------------------
                LEFT
            ---------------------------------- */}





      <div className="lg:w-[50%] lg:sticky lg:top-25 w-full">
        <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="section_header mt-0"
            >

              <p className="page_title"> {project.category} · {project.year}  </p>

              <h1 className=" Section_title ">{project.title}</h1>

              <p className="mt-7 max-w-2xl text-[16px] lg:text-[18px] leading-relaxed text-[#fffced]/65"> {project.shortDescription}</p>

            </motion.div>

             <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className=" border-t border-[#909090]/15 pt-5 mt-12">

              <div className="grid grid-cols-2 gap-6 mt-6">

                <div className="flex flex-col p-3 rounded-[4px] gap-2 bg-(--text-color)/60">
                   <p className="lg:text-[10px] text-[7px] uppercase font-bold chivo tracking-wider text-(--text-colour)">  Category </p>
                   <p className="mt-2 text-sm text-[#909090]"> {project.category} </p>
                </div>

              <div className="flex flex-col p-3 rounded-[4px] gap-2 bg-(--text-color)/60">
                   <p className="lg:text-[10px] text-[7px] uppercase font-bold chivo tracking-wider text-(--text-colour)"> Year </p>
                  <p className="mt-2 text-sm text-[#909090]">{project.year} </p>
                </div>

               <div className="flex flex-col p-3 rounded-[4px] gap-2 bg-(--text-colour)/20">
                   <p className="lg:text-[10px] text-[7px] uppercase font-bold chivo tracking-wider text-(--text-colour)"> Service </p>
                   <p className="mt-2 text-sm text-[#909090]">{project.service} </p>
                </div>

              </div>

              {/* Technologies */}

              <div className="lg:mt-18 mt-6">

                <p className="lg:text-[12px] text-[7px] uppercase font-bold chivo tracking-wider text-(--text-colour)">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-[22px]
                        border
                        border-[#fffced]/10
                        px-3
                        py-1.5
                        text-xs
                        text-[#fffced]/70
                      "
                    >
                      {technology}
                    </span>
                  ))}

                </div>

              </div>

               

       

                

          

            </motion.div>
</div>
      

            {/* ---------------------------------
                RIGHT — PROJECT META
            ---------------------------------- */}

             <div className="relative w-full lg:w-1/2 flex flex-col gap-6">
             <div className="absolute flex justify-center items-center flex-col size-30 -bottom-15 -left-15 rounded-full bg-(--secondary-color)"><div className="flex justify-center items-center flex-col gap-3 ">

                
                    <h4 className="  text-[16px] font-medium  text-button text-[#fffced]/70 "> Live Site</h4>
                  
               <svg className="size-8" fill="#ededee" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M196,64V168a4,4,0,0,1-8,0V73.65625L66.82812,194.82812a3.99957,3.99957,0,0,1-5.65625-5.65625L182.34375,68H88a4,4,0,0,1,0-8H192A4.0002,4.0002,0,0,1,196,64Z"></path> </g></svg>

                </div></div>
                <div className="lg:h-[550px] h-[420px] w-full" >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-2xl" />
                </div>
        </div>
          </div>

      

      </div>

    {/*HERO PROJECT IMAGE */}

     <div className="Section_wrapper mt-12 flex flex-col items-center justify-center">
 <div className=" card_space mx-auto grid grid-cols-1 lg:grid-cols-1 gap-12 lg:gap-20 items-start">
 
          <div className="  border-b border-b-(--text-color)/60 py-8">
          {/* 1. Tag showing the overview text */}

      <p className="text-[#909090] geonova uppercase tracking-[0.2em] text-4xl mt-4"> 01
          </p>


      <div className="flex_container">
          <h2 className="lg:mt-3 geonova text-(--secondary-color) text-2xl lg:text-8xl card_heading">
            Overview
          </h2>
               <p className="text_para lg:ml-12 text-[#ededed]">
            {project.overview}
          </p>
<div className="flex items-start justify-end">
 <svg className="lg:size-25 lg:ml-12 size-10" fill="#909090" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362.667 362.667" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M352,341.333H36.373l323.2-323.093c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0 l-323.2,323.093V10.667C21.333,4.8,16.533,0,10.667,0C4.8,0,0,4.8,0,10.667V352c0,5.867,4.8,10.667,10.667,10.667H352 c5.867,0,10.667-4.8,10.667-10.667C362.667,346.133,357.867,341.333,352,341.333z"></path> </g> </g> </g></svg>
</div>
         

</div>
          {/* 2. Structured Content */}
      
          
    
          </div>


   <div className="  border-b border-b-(--text-color)/60 py-8">
          {/* 1. Tag showing the overview text */}

      <p className="text-[#909090] geonova uppercase tracking-[0.2em] text-4xl mt-4">
            02
          </p>


      <div className="flex_container">
          <h2 className="lg:mt-3 geonova text-(--secondary-color) text-2xl lg:text-8xl card_heading">
            Challenge
          </h2>
               <p className="text_para lg:ml-12 text-[#ededed]"> {project.challenge}  </p>
<div className="flex items-start justify-end">
 <svg className="lg:size-25 lg:ml-12 size-10" fill="#909090" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362.667 362.667" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M352,341.333H36.373l323.2-323.093c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0 l-323.2,323.093V10.667C21.333,4.8,16.533,0,10.667,0C4.8,0,0,4.8,0,10.667V352c0,5.867,4.8,10.667,10.667,10.667H352 c5.867,0,10.667-4.8,10.667-10.667C362.667,346.133,357.867,341.333,352,341.333z"></path> </g> </g> </g></svg>
</div>
         

</div>
          {/* 2. Structured Content */}
      
          
    
          </div>


         <div className="  border-b border-b-(--text-colour)/60 py-8">
  

      <p className="text-[#909090] geonova uppercase tracking-[0.2em] text-4xl mt-4">  03  </p>


      <div className="flex_container">
          <h2 className="lg:mt-3 geonova text-(--secondary-color) text-2xl lg:text-8xl card_heading">  Approach  </h2>
          <div className="flex flex-items-center justify-center">
              <p className="text_para lg:ml-12 text-[#ededed]"> {project.approach}</p>
            </div>
           
<div className="flex items-start justify-end">
 <svg className="lg:size-25 lg:ml-12 size-10" fill="#909090" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 362.667 362.667" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M352,341.333H36.373l323.2-323.093c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0 l-323.2,323.093V10.667C21.333,4.8,16.533,0,10.667,0C4.8,0,0,4.8,0,10.667V352c0,5.867,4.8,10.667,10.667,10.667H352 c5.867,0,10.667-4.8,10.667-10.667C362.667,346.133,357.867,341.333,352,341.333z"></path> </g> </g> </g></svg>
</div>
         

</div>
          {/* 2. Structured Content */}
      
          
    
          </div>


        </div>
    </div>
         



      <div className="Section_wrapper">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-12
            lg:mt-20
            overflow-hidden
            rounded-2xl
            bg-[#201f1f]
          "
        >

          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              aspect-[8/3]
              object-cover
            "
          />

          <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#101011]/30
            via-transparent
            to-transparent
          " />

        </motion.div>

      </div>

        


      {/* =========================================
          PROJECT GALLERY
      ========================================== */}

      <div className="hidden Section_wrapper">

        <div className="py-20 lg:py-32">

          <div className="mb-12">

            <p className="text-[#9B8EC7] uppercase tracking-[0.2em] text-sm">
              04
            </p>

            <h2 className="mt-3 text-3xl lg:text-5xl font-semibold">
              The Work
            </h2>

          </div>

          <div className="
            columns-1
            md:columns-2
            gap-5
          ">

            {project.gallery.map((image, index) => (

              <motion.div
                key={`${project.slug}-${index}`}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="
                  mb-5
                  break-inside-avoid
                  overflow-hidden
                  rounded-xl
                  bg-[#201f1f]
                  h-[40px]
                "
              >

                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="
                    block
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />

              </motion.div>

            ))}

          </div>

        </div>

      </div>


   {/* ===== PROJECT LINKS== */}

      {/*  PROJECT NAVIGATION */}

      <div className="Section_wrapper">

        <div className="grid grid-cols-2  gap-4 border-t  border-[#fffced]/10 py-12 lg:py-20 ">

          <div>

            <Link
              to="/#projects"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-[#fffced]/50
                hover:text-[#fffced]
                transition-colors
                duration-300
              "
            >

              <ArrowLeft size={16} />

              Back to Projects

            </Link>

          </div>

          <div className="flex justify-end">

            <Link
              to="/#projects"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-[#9B8EC7]
                hover:text-[#fffced]
                transition-colors
                duration-300
              "
            >

              All Projects

              <ArrowUpRight size={16} />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ProjectDetails;