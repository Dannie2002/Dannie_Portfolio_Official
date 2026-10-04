import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

import banner from "../assets/LivestockHealth.png";
import digital from "../assets/Livestockapp.jpg";
import mwapata from "../assets/Mwapataredesign.png";

const Projects = () => {
  

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





  const productCards = [
    {
      title: "Livestock Health Tracker",
      category: "Web Application",
      year: "2022",
      image: banner,
      description: "A livestock health management system.",
    },

    {
      title: "Bike Tech E-commerce",
      category: "E-commerce",
      year: "2024",
      image: digital,
      description: "An e-commerce platform for a modern cycling business.",
    },

    {
      title: "Electronic Cashbox",
      category: "FinTech",
      year: "2025",
      image: digital,
      description: "A digital cash management solution.",
    },

    {
      title: "MwAPATA Website Redesign",
      category: "Website Redesign",
      year: "2026",
      image: mwapata,
      description:
        "A modern website redesign focused on communicating MwAPATA's research.",
    },
  ];

  /* --------------------------------
     Carousel Reference
  -------------------------------- */

  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* --------------------------------
     Check Carousel Position
  -------------------------------- */

  const checkScrollability = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    setCanScrollLeft(carousel.scrollLeft > 40);

    setCanScrollRight(
      carousel.scrollLeft <
        carousel.scrollWidth - carousel.clientWidth - 1
    );
  };

  /* --------------------------------
     Initialize Carousel
  -------------------------------- */

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    checkScrollability();

    carousel.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);

    return () => {
      carousel.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  /* --------------------------------
     Scroll Carousel
  -------------------------------- */

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const firstCard = carousel.firstElementChild;

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = 42;

    const scrollAmount = cardWidth + gap;

    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  /* --------------------------------
     Project Card
  -------------------------------- */

  const ProductCard = ({
    title,
    category,
    year,
    image,
    description,
    index,
  }) => {
    return (
      <div className="shrink-0 snap-start  w-[87%] sm:w-[62%] md:w-[48%] lg:w-[29%]">
        <div className="relative group">

 
          <div
            className=" border p-6 border-(--text-color)/70 rounded-[22px] h-[430px] w-full bg-(--text-color)/10  overflow-hidden
              flex
              flex-col
              hover:shadow-[0_6px_12px_rgba(189,166,206,0.2)]
              justify-between
              transition-all
              duration-300
              group-hover:border-(--secondary-color)/50 ">
            {/* Category + Title */}

            <div className="card_space">
              <div className="svg_container relative">
                <div className="absolute size-8 rounded-full -bottom-5 blur-xs opacity-60 bg-(--secondary-color)" />

                <h1 className="relative text-[22px] geonova">
                  {String(index + 1).padStart(2, "0")}
                </h1>
              </div>

              <span className="text-[12px] chivo uppercase text-(--text-colour) font-medium">
                {category}
              </span>

              <h3 className="text-[28px] leading-[30px] geonova font-bold text-[#fffced] zalando">
                {title}
              </h3>
            </div>


            <div className="card_space">
              <p className="text_para leading-relaxed max-w-[90%]">
                {description}
              </p>

              <div className="relative mt-2 overflow-hidden flex items-center text-[#fffced] justify-center py-1 px-3 bg-transparent border border-(--text-color)">
                <span className="text-[10px] text-(--text-colour)">
                  {year}
                </span>
              </div>
            </div>
          </div>

       {/*Hover Project Image*/}
         <div className=" pointer-events-none absolute inset-0 z-40 flex items-center justify-centervbg-(--secondary-color)/5
    backdrop-blur-[1px]
    opacity-0
    invisible
    group-hover:opacity-100
    group-hover:visible
    transition-all
    duration-300"
>
  <div className="w-full overflow-hidden  bg-[#575770] ">

    <img
      src={image}
      alt={title}
      className=" aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"/>

    <div className="p-4 card_space">
      <p className="text-[18px] font-semibold text-[#fffced]">{title}</p>
      <p className="text_para"> {description}</p>
    </div>

  </div>
</div>
        </div>
      </div>
    );
  };


  /* Render */

  return (
    <section id="my-projects" className="relative w-full min-h-screen overflow-hidden bg-[#101011] py-6">
      {/* Section Heading */}

      <div className="Section_wrapper">
        <div className="section_header">
          <motion.h1 className="page_title">
            My Projects
          </motion.h1>

          <h3 className="Section_title">
            <span>
              Built with purpose,
            </span>{" "}
            works of impact.
          </h3>
        </div>
      </div>

      {/* Projects Carousel */}

      <div className="Section_wrapper">
        <motion.div
          ref={carouselRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            flex
            lg:gap-8
            gap-6
            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
         
            pb-4
            pr-[5%]
            scrollbar-none
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          {productCards.map((card, index) => (
            <ProductCard
              key={index}
              title={card.title}
              category={card.category}
              year={card.year}
              image={card.image}
              description={card.description}
              index={index}
            />
          ))}
        </motion.div>

        {/* Carousel Controls */}

        <div className="mb-4 flex justify-end gap-2">
          {/* Previous */}

          <button
            type="button"
            onClick={() => scrollCarousel("left")}
            disabled={!canScrollLeft}
            aria-label="Previous projects"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#fffced]/20
              bg-[#fffced]
              text-[var(--primary-color)]
              transition-all
              duration-300
              hover:scale-105
              disabled:cursor-not-allowed
              disabled:opacity-30
              disabled:hover:scale-100
            "
          >
            <ArrowLeft size={20} />
          </button>

          {/* Next */}

          <button
            type="button"
            onClick={() => scrollCarousel("right")}
            disabled={!canScrollRight}
            aria-label="Next projects"
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#fffced]/20
              bg-[#fffced]
              text-[var(--primary-color)]
              transition-all
              duration-300
              hover:scale-105
              disabled:cursor-not-allowed
              disabled:opacity-30
              disabled:hover:scale-100
            "
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;