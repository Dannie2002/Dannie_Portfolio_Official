import { motion, useScroll,useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import client from "../assets/Handshake.jpg";
import digital from "../assets/DigitalMarketing.jpg";
import photography from "../assets/WorkExp.jpg";
import SectionHeader from "./SectionHeader.jsx";
import servicedesk from "../assets/ServiceDesk.jpg"
import CodeMerge from "../SVGS/Management.jsx"

const ClientRelationship = () => {

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

const svgRef = useRef(null);
const imgRef = useRef(null);

// 1. First scroll tracker (for SVG)
const { scrollYProgress: svgScrollProgress } = useScroll({
  target: svgRef,
  offset: ["start end", "center center"],
});

// 2. Second scroll tracker (for Image) - Renamed to avoid conflict
const { scrollYProgress: imgScrollProgress } = useScroll({
  target: imgRef,
  offset: ["start end", "center center"],
});

// --- SVG ANIMATIONS ---
const rawX = useTransform(svgScrollProgress, [0, 1], [700, 0]);
const rawRotate = useTransform(svgScrollProgress, [0, 1], [180, 0]);
const x = useSpring(rawX, { stiffness: 100, damping: 20 });
const rotate = useSpring(rawRotate, { stiffness: 100, damping: 20 });

// --- IMAGE ANIMATIONS ---
const rawScale = useTransform(imgScrollProgress, [0, 1], [0.5, 1]);
const scale = useSpring(rawScale, { stiffness: 90, damping: 25, mass: 0.8 });
  /* --------------------------------
     Product Cards
  -------------------------------- */

  
const productCards = [
  {
    title: "Customer Communication",
    paragraph:
      "Communicate clearly with local and international clients.",
  },

  {
    title: "Proactive Engagement",
    paragraph:
      "Follow up on incidents, provide timely updates..",
    featured: true,
  },

  {
    title: "Product Knowledge",
    paragraph:
      "Understand the products or service being offered to ensure clarity during communications.",
  },


  {
    title: "User Satisfaction Assuarance",
    paragraph:
      "Provide updates and timely resolution of incidents or requests.",
  },

];

  /* --------------------------------
     Card Component
  -------------------------------- */

  const ProductCard = ({index,paragraph, title}) => {
    return (
      <motion.div
  variants={itemVariants}
    className={`moving-border-card group relative  overflow-hidden  
    shadow-[3px_6px_28px_rgba(255,255,255,0.1)]  flex rounded-[8px] outline-[0.5px] outline-[#fffced]/20  flex-col  items-start   justify-start   px-6   py-8
    ${index === 1 ? '' : ''}`}>

    <div >
      <motion.svg
        style={{
          x,
          rotate,
        }}
        className="size-10 mb-4 text-[#fffced]"
        viewBox="0 0 16 16"
        fill="#fffced"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 8C0 12.4183 3.58172 16 8 16V0C3.58172 0 0 3.58172 0 8Z"
          fill="#fffced"
        />
      </motion.svg>
    </div>

      <div className="relative z-10 flex flex-col gap-4">
         <h4  className=" card_heading"> {title} </h4>
         <p className="text-[#fffced]">{paragraph}</p>    
      </div>

      </motion.div>
    );
  };


  return (


    <section className="bg-[#101011] relative  w-full">
        <SectionHeader
          title="Client Relationship Management"
          bgImage={client}
          breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "/ Competencies" },
          { label: "/ CRM" }]}
          />



      <div className="Section_wrapper mt-12 !py-0">

              <div ref={svgRef}  className="section_header">
                               <motion.h1  className="page_title"  > Client Relationship Management </motion.h1>
                               <h3 className="Section_title "> Engaging in <span className="text_gradient"> professional</span> customer communication. </h3>
                                    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-20">
                                                      <motion.p
                                                                className="
                                                                  pt-6
                                                                  text-[#fffced]
                                                                  font-normal
                                                                  text-[16.5062px]
                                                                  leading-[23.754px]
                                                                  max-w-2xl
                                                                "
                                                              >
                                                              Clients are the biggest part of the businesses. I engage in bridging between your business and clients.
                                                       </motion.p>
                                                    
                                                       <CodeMerge color="#978F66" size={36}/>
                                                    
                                                    </div>
                        </div>


      </div>

<div   className="Section_wrapper">

  <div className="flex_container">


      {/* CONTENT */}
    <div className="w-full  lg:w-[55%] flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 lg:gap-8">
       {productCards.map((card, index) => (
  <ProductCard
    key={index}
    index={index}
    title={card.title}
   paragraph= {card.paragraph}
  />
))}
      </div>
      {/* Add a few more paragraphs if needed so the right side is clearly taller */}
    </div>

    {/* IMAGE - Sticky */}
    
      <div ref={imgRef} className="lg:h-[520px] outline outline-2 outline-[#4a4a4a]/60 lg:w-[45%] w-full lg:sticky lg:top-25 h-84 shadow-[6px_6px_18px_rgba(255,255,255,0.2)]">
       <motion.img
          src={servicedesk}
          alt="Photography and creative services"
           style={{ scale }}
          className="w-full h-full object-cover grayscale"
        />
      </div>
    

  

  </div>

 

  <div>
    
  </div>
</div>




    </section>
  );
};

export default ClientRelationship;