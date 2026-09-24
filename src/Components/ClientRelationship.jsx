import { motion } from "framer-motion";
import client from "../assets/CRM.jpg";
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
      "Understand fiber broadband and other connectivity solutions.",
  },


  {
    title: "SLA Monitoring",
    paragraph:
      "Monitor service performance to support SLA compliance.",
  },

];

  /* --------------------------------
     Card Component
  -------------------------------- */

  const ProductCard = ({index,paragraph, title}) => {
    return (
      <motion.div
  variants={itemVariants}
    className={`  group relative  overflow-hidden  rounded-sm
    shadow-[3px_6px_28px_rgba(255,255,255,0.1)]  flex   flex-col  items-start   justify-start   px-6   py-8
    ${index === 0 ? 'bg-(--secondary-color)' : 'bg-(--primary-color)/30'}`}>

  
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

              <div className="section_header">
                               <motion.h1  className="page_title"  > Client Relationship Management </motion.h1>
                               <h3 className="Section_title "> Engaging in professional customer communication. </h3>
                                    <div className="flex w-full justify-between items-center gap-20">
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

<div className="Section_wrapper lg:mt-12">

  <div className="w-full  flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">


      {/* CONTENT */}
    <div className="w-full  lg:w-[55%] flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
    
      <div className="lg:h-[520px] outline outline-2 outline-[#4a4a4a]/60 lg:w-[45%] w-full lg:sticky lg:top-25 h-84 shadow-[6px_6px_18px_rgba(255,255,255,0.2)]">
        <img
          src={servicedesk}
          alt="Photography and creative services"
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