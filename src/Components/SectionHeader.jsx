import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { House } from "lucide-react";
import noise from "../assets/Noise.png";
import bag from "../assets/12.png"

const SectionHeader = ({ title, link, breadcrumbs = [], bgImage }) => {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -350,
      y: 8,
      scale: 0.96,
    },

    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,

      transition: {
        type: "spring",
        stiffness: 420,
        damping: 32,
        mass: 0.65,
      },
    },
  };

  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative overflow-x-hidden h-85 lg:h-[490px] w-full flex flex-col items-center lg:items-center lg:px-22 justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* overlay to apply blend mode */}
        <div className="absolute flex z-0 inset-0 bg-gradient-to-l from-[#060607] via-[#060607] to-[#070708]/70 opacity-40"></div>

        <img
          src={noise}
          className="absolute h-full w-full z-0 opacity-20 inset-0"
        />
 <img src={bag} alt=""  className="absolute  inset-0 z-5 h-full w-full object-cover opacity-40 mix-blend-overlay"/>
        <motion.div
          variants={itemVariants}
          className="z-10 mt-12 lg:mt-0"
        ></motion.div>

        <motion.nav
          variants={itemVariants}
          className="
            py-2
            px-4
            lg:px-6
            rounded-full
            mt-3
            lg:mt-6
            mx-auto
            max-w-[92%]
            lg:max-w-fit
            bg-[#909090]/40
            z-50
            shadow-[0_6px_12px_rgba(255,241,255,0.3)]
            border
            border-[#fffced]/30
            backdrop-blur-2xl
            hover:shadow-[4px_8px_12px_rgba(221,115,10,0)]
            hover:translate-y-2
            duration-500
            transform
            ease-in-out
          "
        >
          <ul
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-2
              gap-y-1
            "
          >
            {breadcrumbs.map((item, index) => (
              <li
                key={index}
                className={`text-[9px] sm:text-[10px] btn text-[#b8b8b8]
                  zalando
                  font-medium
                  uppercase
                  whitespace-nowrap
                  ${item.link ? "cursor-pointer" : "cursor-default"}
                `}
              >
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>
    </div>
  );
};

export default SectionHeader;