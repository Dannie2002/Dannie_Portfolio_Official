import { useEffect, useState } from "react";
import { Link } from "react-router";
import cv from "../assets/Dannie_Mankhwazi_CV_SEPTEMBER.pdf";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ArrowRight,
  Home,
  Info,
  Download,
  Briefcase,
  Palette,
  Phone,
} from "lucide-react";
import { title } from "motion/react-client";

export default function MainHeader() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileItems, setExpandedMobileItems] = useState({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      title: "Home",
      link: "/"
    },

    {
      title: "About Dannie",
      children: [
        {
          title: "Who is Dannie", link: "/who-is-dan?",
        },
        {
          title: "My Gallery", link: "/my-gallery",
        },
      ],
    },

    {
      title: "Core Competencies",
      children: [
        {
          title: "Telecommunications",
          link: "/telecommunications",
        },
        {
          title: "Service Desk Engineering",
          link: "/service-desk",
        },
        {
          title: "Website Design & Development",
          link: "/website-design-development",
        },
        {
          title: "Client Relationship Management",
          link: "/client-relationship-management",
        },
        {
          title: "Media & Strategic Communications Consultancy",
          link: "/media-strategic-communications",
        },
      ],
    },

    {
      title: "My Projects",
      link: "/my-projects",
    },

    {
      title: "Contact Me",
      link: "/contact-me",
    },
  ];

  const toggleMobileItem = (index) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getIconForLink = (title) => {
    switch (title) {
      case "Home":
        return <Home size={18} />;

      case "About Dannie":
        return <Info size={18} />;

      case "Core Competencies":
        return <Briefcase size={18} />;

      case "My Projects":
        return <Palette size={18} />;

      case "Contact Me":
        return <Phone size={18} />;

      default:
        return null;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 z-99  w-full border-b border-[#fffced]/15 transition-all duration-400 ${
        scrolled
          ? "bg-(--secondary-color) shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      {/* Glass Navbar */}
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-24 relative z-90">

        {/* =================================
            Logo
        ================================= */}

        <Link
          to="/"
          className="flex btn items-center justify-center rounded-full border border-white size-16 relative z-90"
        >
          <h2 className="text-white chivo text-2xl tracking-widest">
            DM
          </h2>
        </Link>

        {/* =================================
            Desktop Navigation
        ================================= */}

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((item, index) => {
            const hasGrandChildren =
              item.children?.some((child) => child.children);

            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveMenu(index)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* Main Navigation Button */}

                <Link
                to={item.link}
                  className="flex items-center gap-1 cursor-pointer text-[#fffced] archivo
                  transition-all duration-300 relative group"
                >
                  {item.title}

                  {item.children && (
                    <ChevronDown
                      size={17}
                      className={`transition duration-300 ${
                        activeMenu === index ? "rotate-180" : ""
                      }`}
                    />
                  )}

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#fffced] transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* =================================
                    Mega Menu
                ================================= */}

                <AnimatePresence>
                  {item.children && activeMenu === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.35,
                        },
                      }}
                      className="absolute top-full left-1/2 -translate-x-1/2 overflow-hidden"
                    >
                      <div className="pt-[37px]">
                        <div
                          className={`shadow-2xl border border-white/10
                          bg-[#f8f6ed] backdrop-blur-2xl
                          ${
                            hasGrandChildren
                              ? "grid grid-cols-2 min-w-[620px] gap-10"
                              : "min-w-[320px]"
                          }`}
                        >

                          {/* =================================
                              Simple Dropdown
                          ================================= */}

                          {!hasGrandChildren && (
                            <motion.ul
                              className="py-3"
                              initial="hidden"
                              animate="visible"
                              variants={{
                                hidden: {},
                                visible: {
                                  transition: {
                                    delayChildren: 0.1,
                                    staggerChildren: 0.05,
                                  },
                                },
                              }}
                            >
                              {item.children.map((child, idx) => (
                                <motion.li
                                  key={idx}
                                  variants={{
                                    hidden: {
                                      opacity: 0,
                                      y: -12,
                                    },
                                    visible: {
                                      opacity: 1,
                                      y: 0,
                                      transition: {
                                        duration: 0.3,
                                        ease: [0.22, 1, 0.36, 1],
                                      },
                                    },
                                  }}
                                >
                                  <Link
                                    to={child.link}
                                    className="block btn px-6 py-4
                                    text-(--text-color)
                                    hover:bg-white/5
                                    hover:translate-x-2
                                    ease-in-out duration-250
                                    hover:text-(--primary-color)
                                    transition"
                                  >
                                    {child.title}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}

                          {/* =================================
                              Mega Menu
                          ================================= */}

                          {hasGrandChildren &&
                            item.children.map((section, i) => (
                              <motion.div
                                key={i}
                                className="px-6 py-4"
                              >
                                <h3
                                  className="uppercase archivo text-(--secondary-color)
                                  font-semibold text-[18px] mb-4 tracking-wider"
                                >
                                  {section.title}
                                </h3>

                                <motion.ul>
                                  {section.children?.map((child, j) => (
                                    <motion.li
                                      key={j}
                                      variants={{
                                        hidden: {
                                          opacity: 0,
                                          y: -8,
                                        },
                                        visible: {
                                          opacity: 1,
                                          y: 0,
                                          transition: {
                                            duration: 0.2,
                                            ease: "easeOut",
                                          },
                                        },
                                      }}
                                    >
                                      <Link
                                        to={child.link}
                                        className="group flex items-center
                                        py-2 border-b border-white/5
                                        text-(--text-color)
                                        hover:text-(--secondary-color)
                                        transition"
                                      >
                                        <span
                                          className="opacity-0 h-0.5 bg-amber-300 w-2 -translate-x-2
                                          group-hover:opacity-100
                                          group-hover:translate-x-0
                                          transition"
                                        ></span>

                                        {child.title}
                                      </Link>
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* =================================
            CTA
        ================================= */}

      <motion.a
  href={cv}
  target="_blank"
  rel="noopener noreferrer"
  className="lg:flex border btn-fill-sweep  btn hidden group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-trasparent hover:bg-(--primary-color)/80 border-[#fffced]/60 px-6 py-2 items-center gap-4 relative z-90"
>
  <h3 className="text_button archivo">
    Download My CV
  </h3>

  <div className="flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm justify-center bg-[#fffced] size-7 p-3">

    <Download
      className="absolute size-6 group-hover:rotate-15 ease-in-out transform transition-all duration-490 group-hover:translate-x-10 text-(--primary-color)"
    />
<Download 
      className="absolute group-hover:-rotate-45 ease-in-out size-6 transform -translate-x-10 opacity-0 transition-all duration-600 group-hover:opacity-100 group-hover:translate-x-0 text-[#272626]"
    />

  </div>
</motion.a>

        {/* =================================
            Mobile Menu Button
        ================================= */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex lg:hidden rounded-full p-2 flex-col justify-center items-end gap-1.5 relative z-90"
        >
          <motion.span
            className="w-6 h-0.5 bg-[#fffced]"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />

          <motion.span
            className="w-5 h-0.5 bg-[#fffced]"
            animate={{
              opacity: isOpen ? 0 : 1,
            }}
            transition={{ duration: 0.2 }}
          />

          <motion.span
            className="w-6 h-0.5 bg-[#fffced]"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </button>
      </div>

      {/* =================================
          Mobile Menu Drawer
      ================================= */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
            />

            {/* Mobile Menu Drawer */}

            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-(--secondary-color)   relative z-50 border-t border-white/10"
            >
              <nav className="flex flex-col px-6 py-6 gap-4">

                {navLinks.map((item, index) => (
                  <div key={index}>

                    <Link
                    to={item.link}
                      onClick={() => toggleMobileItem(index)}
                      className="flex items-center justify-between w-full text-[18px] py-3 text-[#fffced] archivo font-medium transition-colors duration-300"
                    >
                      <span className="flex items-center gap-3">
                        {getIconForLink(item.title)}
                        {item.title}
                      </span>

                      {item.children && (
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            expandedMobileItems[index]
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      )}
                    </Link>

                    {/* =================================
                        Mobile Submenu
                    ================================= */}

                    <AnimatePresence>
                      {item.children &&
                        expandedMobileItems[index] && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="overflow-hidden"
                          >
                            <ul className="flex flex-col shadow-[3px_6px_8px_rgba(255,255,255,0.6)] gap-2 bg-[#eef3ee] pl-4 py-2 border rounded-sm border-white/20">

                              {item.children.map(
                                (child, childIndex) => (
                                  <li key={childIndex}>

                                    {/* Child Link */}

                                    {child.link ? (
                                      <Link
                                        to={child.link}
                                        className="block py-2 text-sm text-(--primary-color) hover:text-[#b98815] transition-colors duration-300"
                                        onClick={() =>
                                          setIsOpen(false)
                                        }
                                      >
                                        {child.title}
                                      </Link>
                                    ) : (
                                      <span className="block py-2 text-sm text-(--primary-color) hover:text-[#b98815] transition-colors duration-300">
                                        {child.title}
                                      </span>
                                    )}

                                    {/* =================================
                                        Grandchildren
                                    ================================= */}

                                    {child.children && (
                                      <ul className="flex flex-col gap-1 pl-3 mt-2 border-l border-white/10">

                                        {child.children.map(
                                          (
                                            grandchild,
                                            grandIndex
                                          ) => (
                                            <li
                                              key={grandIndex}
                                            >
                                              <Link
                                                to={
                                                  grandchild.link
                                                }
                                                className="block py-1.5 text-xs text-[#fffced]/60 hover:text-[#b98815] transition-colors duration-300"
                                                onClick={() =>
                                                  setIsOpen(false)
                                                }
                                              >
                                                {
                                                  grandchild.title
                                                }
                                              </Link>
                                            </li>
                                          )
                                        )}

                                      </ul>
                                    )}
                                  </li>
                                )
                              )}

                            </ul>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                ))}

              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}