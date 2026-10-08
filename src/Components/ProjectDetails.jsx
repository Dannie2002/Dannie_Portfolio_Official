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
import photography from "../assets/WorkExp.jpg";

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
      "The challenge was to create a website structure that could communicate a large amount of research-oriented information without making the experience feel overwhelming. The interface needed to remain professional while also making important content easier to discover.",

    approach:
      "The redesign focused on improving information hierarchy, visual storytelling, navigation, content presentation, and responsive behaviour. The interface was structured around clear sections and reusable components so that the experience could remain consistent throughout the website.",

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

    image: digital,

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

    image: photography,

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
      <section className="min-h-screen bg-[#101011] text-[#fffced] flex items-center justify-center px-6">

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
    <main className="bg-[#101011] min-h-screen text-[#fffced]">

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

      <section className="Section_wrapper">

        <div className="pt-16 lg:pt-24">

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-20 items-start">

            {/* ---------------------------------
                LEFT
            ---------------------------------- */}

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
            >

              <p className="text-[#9B8EC7] uppercase tracking-[0.2em] text-sm">
                {project.category} · {project.year}
              </p>

              <h1 className="
                mt-5
                text-4xl
                lg:text-6xl
                font-semibold
                leading-[1.05]
                tracking-tight
              ">
                {project.title}
              </h1>

              <p className="
                mt-7
                max-w-2xl
                text-[16px]
                lg:text-[18px]
                leading-relaxed
                text-[#fffced]/65
              ">
                {project.shortDescription}
              </p>

            </motion.div>

            {/* ---------------------------------
                RIGHT — PROJECT META
            ---------------------------------- */}

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
              className="
                border-t
                border-[#fffced]/15
                pt-5
              "
            >

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#fffced]/40">
                    Category
                  </p>

                  <p className="mt-2 text-sm text-[#fffced]">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-widest text-[#fffced]/40">
                    Year
                  </p>

                  <p className="mt-2 text-sm text-[#fffced]">
                    {project.year}
                  </p>
                </div>

              </div>

              {/* Technologies */}

              <div className="mt-8">

                <p className="text-xs uppercase tracking-widest text-[#fffced]/40">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border
                        border-[#fffced]/10
                        bg-[#fffced]/5
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

        </div>

      </section>

      {/* =========================================
          HERO PROJECT IMAGE
      ========================================== */}

      <section className="Section_wrapper">

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
              aspect-[16/9]
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

      </section>

      {/* =========================================
          PROJECT OVERVIEW
      ========================================== */}

      <section className="Section_wrapper">

        <div className="
          grid
          lg:grid-cols-[0.35fr_1fr]
          gap-10
          lg:gap-20
          py-20
          lg:py-32
          border-b
          border-[#fffced]/10
        ">

          <div>
            <p className="text-[#9B8EC7] uppercase tracking-[0.2em] text-sm">
              01
            </p>

            <h2 className="mt-3 text-2xl lg:text-3xl font-semibold">
              Overview
            </h2>
          </div>

          <p className="
            max-w-3xl
            text-[#fffced]/65
            text-[16px]
            lg:text-[18px]
            leading-[1.8]
          ">
            {project.overview}
          </p>

        </div>

      </section>

      {/* =========================================
          THE CHALLENGE
      ========================================== */}

      <section className="Section_wrapper">

        <div className="
          grid
          lg:grid-cols-[0.35fr_1fr]
          gap-10
          lg:gap-20
          py-20
          lg:py-32
          border-b
          border-[#fffced]/10
        ">

          <div>
            <p className="text-[#9B8EC7] uppercase tracking-[0.2em] text-sm">
              02
            </p>

            <h2 className="mt-3 text-2xl lg:text-3xl font-semibold">
              The Challenge
            </h2>
          </div>

          <p className="
            max-w-3xl
            text-[#fffced]/65
            text-[16px]
            lg:text-[18px]
            leading-[1.8]
          ">
            {project.challenge}
          </p>

        </div>

      </section>

      {/* =========================================
          APPROACH
      ========================================== */}

      <section className="Section_wrapper">

        <div className="
          grid
          lg:grid-cols-[0.35fr_1fr]
          gap-10
          lg:gap-20
          py-20
          lg:py-32
          border-b
          border-[#fffced]/10
        ">

          <div>
            <p className="text-[#9B8EC7] uppercase tracking-[0.2em] text-sm">
              03
            </p>

            <h2 className="mt-3 text-2xl lg:text-3xl font-semibold">
              The Approach
            </h2>
          </div>

          <p className="
            max-w-3xl
            text-[#fffced]/65
            text-[16px]
            lg:text-[18px]
            leading-[1.8]
          ">
            {project.approach}
          </p>

        </div>

      </section>

      {/* =========================================
          PROJECT GALLERY
      ========================================== */}

      <section className="Section_wrapper">

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
                "
              >

                <img
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="
                    block
                    w-full
                    h-auto
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

      </section>

      {/* =========================================
          CONTRIBUTION
      ========================================== */}

      <section className="Section_wrapper">

        <div className="
          grid
          lg:grid-cols-[0.35fr_1fr]
          gap-10
          lg:gap-20
          py-20
          lg:py-32
          border-t
          border-[#fffced]/10
        ">

          <div>

            <p className="text-[#9B8EC7] uppercase tracking-[0.2em] text-sm">
              05
            </p>

            <h2 className="mt-3 text-2xl lg:text-3xl font-semibold">
              My Contribution
            </h2>

          </div>

          <p className="
            max-w-3xl
            text-[#fffced]/65
            text-[16px]
            lg:text-[18px]
            leading-[1.8]
          ">
            {project.contribution}
          </p>

        </div>

      </section>

      {/* =========================================
          PROJECT LINKS
      ========================================== */}

      <section className="Section_wrapper">

        <div className="
          flex
          flex-col
          sm:flex-row
          gap-4
          py-12
          border-t
          border-[#fffced]/10
        ">

          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#fffced]
                px-6
                py-3
                text-sm
                font-semibold
                text-[#101011]
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >

              Visit Live Project

              <ArrowUpRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />

            </a>
          )}

          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[#fffced]/15
                px-6
                py-3
                text-sm
                text-[#fffced]
                transition-all
                duration-300
                hover:bg-[#fffced]/5
              "
            >

              <ArrowUpRight size={17} />

              View Source

              <ExternalLink size={15} />

            </a>
          )}

        </div>

      </section>

      {/* =========================================
          PROJECT NAVIGATION
      ========================================== */}

      <section className="Section_wrapper">

        <div className="
          grid
          grid-cols-2
          gap-4
          border-t
          border-[#fffced]/10
          py-12
          lg:py-20
        ">

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

      </section>

    </main>
  );
};

export default ProjectDetails;