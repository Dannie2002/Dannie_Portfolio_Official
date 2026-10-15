import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link} from "react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import banner from "../assets/LivestockHealth.png";
import digital from "../assets/projects-mockup.png";
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
    slug: "livestock-health-tracker",
    title: "Livestock Health Tracker",
    category: "Web Application",
    year: "2022",
    image: banner,
    description: "A livestock health management system.",
  },

  {
    slug: "bike-tech-e-commerce",
    title: "Bike Tech E-commerce",
    category: "E-commerce",
    year: "2024",
    image: digital,
    description: "An e-commerce platform for a modern.",
  },

  {
    slug: "electronic-cashbox",
    title: "Electronic Cashbox",
    category: "FinTech",
    year: "2025",
    image: banner,
    description: "A digital cash management solution.",
  },

  {
    slug: "mwapata-website-redesign",
    title: "MwAPATA Website Redesign",
    category: "Website Redesign",
    year: "2026",
    image: mwapata,
    description:
      "A modern website redesign.",
  },
];

  /* ----- Carousel Reference*/

  const carouselRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  /* --------------------------------
     Check Carousel Position
  -------------------------------- */

  const checkScrollability = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    setCanScrollLeft(carousel.scrollLeft > 90);

    setCanScrollRight(
      carousel.scrollLeft <
        carousel.scrollWidth - carousel.clientWidth - 1
    );
  };

  /* Initialize Carousel */

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

  /*  Scroll Carousel */

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
    slug
  }) => {
    return (
      <div className="shrink-0 snap-start   w-[87%] sm:w-[62%] md:w-[48%] lg:w-[31%]">
        <div className="relative group ">
            <div className="absolute blur-3xl bottom-0 right-5 size-40 rounded-full shadow-[15px_10px_16px_2px_rgba(99,89,133,0.1)] z-0 bg-gradient-to-l  from-(--secondary-color)/80  to-(--secondary-color)/40" />

 
          <div
            className=" border p-6 border-(--text-color)/70 rounded-[22px] h-[490px] w-full bg-[#909090]/10 overflow-hidden
              flex
              flex-col
              hover:shadow-[0_6px_12px_rgba(189,166,206,0.2)]
              transition-all
              duration-300
              group-hover:border-(--secondary-color)/50 ">
            {/* Category + Title */}

            <div className="card_space">
              <div className="hidden  svg_container relative">
                <div className="absolute size-8 rounded-full -bottom-5 blur-xs opacity-60 bg-(--secondary-color)" />

                <h1 className="text-[22px] geonova">
                  {String(index + 1).padStart(2, "0")}
                </h1>
              </div>
<div className="">
    <span className="text-[12px] chivo uppercase text-(--text-colour) font-medium">
                {category}
              </span>
</div>
          

           
            </div>

            <div className="min-h-44 w-full relative overflow-hidden mt-6">
              <div className="absolute bg-() hidden z-60 size-full bottom-5  outline-1 outline-[#fffced] top-5 "/>
                   <img src={image} alt={title}  className="grayscale h-full w-full aspect-2/6  object-cover transition-transform  duration-700 group-hover:scale-105" />
            </div>
<div className="flex mt-8 items-center justify-between">
    <h3 className="text-[18px] leading-[27px] geonova font-bold text-[#ededed] ">
                {title}
              </h3>
              <div className="bg-(--secondary-color) p-2">

                    <Link
            to={`/projects/${slug}`}>
     <svg
  className="size-6  group-hover:scale-135 transition-transform duration-300 ease-in-out"
  fill="#ededed"
  viewBox="0 0 32 32"
  xmlns="http://www.w3.org/2000/svg"
  aria-label="Arrow pointing up and right"
  role="img"
>
  <title>Arrow up right</title>
  <polygon
    points="10 6 10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6"
  />
  <rect
    width="32"
    height="32"
    fill="none"
  />
</svg>
            </Link>

              </div>
          
</div>
 
            <div className="card_space mt-6">
              <p className="text_para text-[14px] leading-relaxed max-w-[90%]">
                {description}
              </p>

              <div className="relative mt-2 overflow-hidden flex items-center text-[#fffced] justify-center py-1 px-3 bg-transparent ">
                <span className="text-[10px]  text-(--text-colour)">
                  {year}
                </span>
     
              </div>
            </div>
          </div>

       {/*Hover Project Image*/}
<div
  className="
    
    hidden
    left-1/2
    top-1/2
    z-10
    w-[95%]
    h-[95%]
    -translate-x-1/2
    -translate-y-1/2
    flex items-center justify-center
   
    opacity-0
    invisible
    scale-90
    group-hover:opacity-100
    group-hover:visible
    group-hover:scale-100
    transition-all
    duration-500
    z-10
  "
>
  <div
    className="
      w-full
      h-full
      overflow-hidden
      
      rounded-2xl
    
      bg-[#909090]/40
      
    "
  >
    <div className="relative h-[55%]  w-full p-6 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="
          size-full
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

  
    </div>

    <div className="h-[45%] p-5 card_space">
      <p className="text-[18px] font-semibold text-[#fffced]">
        {title}
      </p>

      <p className="text_para text-[12px]  mt-2">
        {year}
      </p>
          <Link
            to={`/projects/${slug}`} viewTransition
            
            className="text-[#9B8EC7] btn hover:text-[#fffced] transition-colors duration-300"
          >
            View Project
          </Link>
    </div>
  </div>
</div>
        </div>
      </div>
    );
  };


  /* Render */

  return (
    <section id="my-projects" className="relative w-full min-h-screen overflow-hidden bg-(--background-color) py-6">
      {/* Section Heading */}

      <div className="Section_wrapper">
        <div className="section_header">
          <motion.h1 className="page_title">
            View Selected Projects
          </motion.h1>

          <h3 className="Section_title">Built with purpose, works of impact.</h3>
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
               slug={card.slug}
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