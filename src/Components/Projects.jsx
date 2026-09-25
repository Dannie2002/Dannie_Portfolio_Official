import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import banner from "../assets/LivestockHealth.png";
import digital from "../assets/Livestockapp.jpg";
import mwapata from "../assets/Mwapataredesign.png";

const Projects = () => {

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
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };


  /* --------------------------------
     Projects
  -------------------------------- */

  const productCards = [
    {
      title: "Livestock Health Tracker",
      image: banner,
   
    },
     {
      title: "Bike Tech E-commerce",
      image: mwapata,
 
    },


    {
      title: "Electronic Cashbox",
      image: digital,
    
    },

    {
      title: "MwAPATA Website Redesign",
      image: mwapata,
 
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

    carousel.addEventListener(
      "scroll",
      checkScrollability
    );

    window.addEventListener(
      "resize",
      checkScrollability
    );

    return () => {
      carousel.removeEventListener(
        "scroll",
        checkScrollability
      );

      window.removeEventListener(
        "resize",
        checkScrollability
      );
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

    const cardWidth =
      firstCard.getBoundingClientRect().width;

    const gap = 42;

    const scrollAmount = cardWidth + gap;

    carousel.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,

      behavior: "smooth",
    });
  };


  /* --------------------------------
     Project Card
  -------------------------------- */

 const ProductCard = ({ title, image, index }) => {
  return (
    <div className="shrink-0   snap-start mt-12  w-[87%] sm:w-[62%] md:w-[48%] lg:w-[38%]" >

      <div  className=" group relative shadow-[inset_0_0_0_4px_#A29922]  outline-(--primary-color) h-[430px] w-full " >
      
        <img
          src={image}
          alt={title}
          loading="eager"
          className=" absolute inset-0  h-full  w-full object-cover"
        />



      </div>

      <h3 className="mt-4 text-[18px] font-bold text-(--text-colour) zalando">{title} </h3>

    </div>
  );
};

  /* --------------------------------
     Render
  -------------------------------- */

  return (
    <section className=" relative w-full min-h-screen  overflow-hidden bg-[#101011]   py-6 " >

      {/* --------------------------------
          Section Heading
      -------------------------------- */}

      <div className="Section_wrapper ">

            <div className="section_header">
                        <motion.h1  className="page_title"  > My Projects </motion.h1>
                        <h3 className="Section_title "><span className="text-[]"> Work is more than tasks—it’s shared experiences, collaboration, </span>{" "}&  growth.</h3>
             </div>

      </div>

      {/* Projects Carousel----- */}

      <div className="Section_wrapper ">
       {/*  Carousel Controls----- */}

        <div className="mb-4 flex justify-end gap-2">
          {/* Previous */}

          <button
            type="button"
            onClick={() =>
              scrollCarousel("left")
            }
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
            onClick={() =>
              scrollCarousel("right")
            }
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
       
        <motion.div
          ref={carouselRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className=" flex  lg:gap-8 gap-6  overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pr-[5%] scrollbar-none
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >

         
          {productCards.map(
            (card, index) => (

              <ProductCard
                key={index}
                title={card.title}
                image={card.image}
                index={index}
              />

            )
          )}

        </motion.div>


       

      </div>

    </section>
  );
};

export default Projects;