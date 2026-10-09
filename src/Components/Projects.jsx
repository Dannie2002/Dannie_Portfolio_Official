import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link} from "react-router";
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
    description: "An e-commerce platform for a modern cycling business.",
  },

  {
    slug: "electronic-cashbox",
    title: "Electronic Cashbox",
    category: "FinTech",
    year: "2025",
    image: digital,
    description: "A digital cash management solution.",
  },

  {
    slug: "mwapata-website-redesign",
    title: "MwAPATA Website Redesign",
    category: "Website Redesign",
    year: "2026",
    image: mwapata,
    description:
      "A modern website redesign focused on communicating MwAPATA's research.",
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

              <div className="relative mt-2 overflow-hidden flex items-center text-[#fffced] justify-center py-1 px-3 bg-transparent ">
                <span className="text-[10px] hidden text-(--text-colour)">
                  {year}
                </span>
                 <Link>
            to={`/projects/${slug}`}
                <svg
            fill="#9B8EC7"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 72"
            className="size-8"
          >
            <g>
              <path d="M23.748,2.747c2.271,0,4.405,0.884,6.011,2.489l24.506,24.506c1.646,1.645,2.546,3.921,2.479,6.255c0.068,2.337-0.833,4.614-2.479,6.261L29.758,66.764c-1.605,1.605-3.739,2.489-6.01,2.489c-2.271,0-4.405-0.884-6.01-2.489c-3.314-3.314-3.314-8.707,0-12.021L36.481,36L17.738,17.258c-3.314-3.314-3.314-8.707,0-12.021C19.344,3.631,21.478,2.747,23.748,2.747z M23.748,65.253c1.202,0,2.332-0.468,3.182-1.317L50.963,39.43c0.891-0.893,0.833-2.084-0.833-3.355c0-0.051,0-0.101,0-0.151c0-1.271,0.058-2.461,0.833-3.353L26.693,8.064c-0.85-0.85-1.862-1.317-3.063-1.317c-1.203,0-2.273,0.468-3.123,1.317c-1.755,1.755-1.725,4.61,0.03,6.365l20.172,20.156c0.781,0.781,0.788,2.047,0.007,2.828L20.563,57.57c-1.754,1.755-1.753,4.61,0.001,6.365C21.413,64.785,22.546,65.253,23.748,65.253z" />
            </g>
          </svg>
            </Link>
              </div>
            </div>
          </div>

       {/*Hover Project Image*/}
<div
  className="
    
    absolute
    left-1/2
    top-1/2
    z-10
    w-[95%]
    h-[95%]
    -translate-x-1/2
    -translate-y-1/2
    flex items-center justify-center
    backdrop-blur-[2px]
    opacity-0
    invisible
    scale-90
    group-hover:opacity-100
    group-hover:visible
    group-hover:scale-100
    transition-all
    duration-500
  "
>
  <div
    className="
      w-full
      h-full
      overflow-hidden
      
      rounded-2xl
    
      bg-gradient-to-b from-[#575770] via-[#101011] to-[#101011]
      
    "
  >
    <div className="relative h-[55%]  w-full overflow-hidden">
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
            to={`/projects/${slug}`}
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
    <section id="my-projects" className="relative w-full min-h-screen overflow-hidden bg-[#101011] py-6">
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