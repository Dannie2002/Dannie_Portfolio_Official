import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download, X } from "lucide-react";

export default function MobileMenuDrawer({
  isOpen,
  onClose,
  navLinks,
  getIconForLink,
  cv,
}) {
  const [expandedMobileItems, setExpandedMobileItems] = useState({});

  const toggleMobileItem = (index) => {
    setExpandedMobileItems((previous) => ({
      ...previous,
      [index]: !previous[index],
    }));
  };

  const handleMobileNavigation = () => {
    setExpandedMobileItems({});
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-x-0 bottom-0 top-[73px] z-[100] bg-(--background-color)/75 backdrop-blur-xs md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
       <motion.div
  key="mobile-menu-drawer"
  initial={{
    opacity: 0,
    scaleX: 0.15,
    scaleY: 0.35,
    y: -25,
  
  }}
  animate={{
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    y: 0,
    borderRadius: "1rem",
  }}
  exit={{
    opacity: 0,
    scaleX: 0.15,
    scaleY: 0.35,
    y: -25,
    
  }}
  transition={{
    type: "spring",
    stiffness: 420,
    damping: 30,
    mass: 0.65,
  }}
  className="fixed left-5 right-5 top-[73px] z-[101] max-h-[calc(100dvh-73px)] overflow-y-auto rounded-2xl border border-white/10 bg-(--background-color) md:hidden origin-top"
>
            <div className="absolute z-0 top-40 right-5 size-30 rounded-full shadow-[15px_10px_16px_2px_rgba(224,222,218,0.1)] bg-gradient-to-l from-[#0b0b0d] via-[#0b0b0d] to-[#b8b8b8]/40 opacity-78" />

            <div className="relative z-50 flex justify-end px-6 pt-3">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close navigation menu"
                className="flex size-10 items-center justify-center rounded-full border border-[#fffced]/60 text-[#fffced] transition-colors hover:bg-[#fffced]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fffced]"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="relative z-50 flex flex-col px-6 py-6 mx-auto gap-4">
              {navLinks.map((item, index) => (
                <div key={index} className="z-50">
                  <Link
                    to={item.link}
                    onClick={(event) => {
                      if (item.children) {
                        event.preventDefault();
                        toggleMobileItem(index);
                      } else {
                        handleMobileNavigation();
                      }
                    }}
                    className="flex items-center justify-between w-full text-[16px] py-3 text-[#fffced] uppercase chivo font-medium transition-colors duration-300"
                  >
                    <span className="flex items-center gap-3">
                      {getIconForLink(item.title)}
                      {item.title}
                    </span>
                    {item.children && (
                      <ChevronDown
                        size={24}
                        className={`transition-transform duration-300 ${
                          expandedMobileItems[index] ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>

                  <AnimatePresence>
                    {item.children && expandedMobileItems[index] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="flex flex-col shadow-[3px_6px_8px_rgba(255,255,255,0.6)] gap-2 bg-[#eef3ee] pl-4 py-2 border rounded-sm border-white/20">
                          {item.children.map((child, childIndex) => (
                            <li key={childIndex}>
                              {child.link ? (
                                <Link
                                  to={child.link}
                                  className="block py-2 text-[16px] text-(--primary-color) hover:text-[#b98815] transition-colors duration-300"
                                  onClick={handleMobileNavigation}
                                >
                                  {child.title}
                                </Link>
                              ) : (
                                <span className="block py-2 text-sm text-(--primary-color) hover:text-[#b98815] transition-colors duration-300">
                                  {child.title}
                                </span>
                              )}

                              {child.children && (
                                <ul className="flex flex-col gap-1 pl-3 mt-2 border-l border-white/10">
                                  {child.children.map(
                                    (grandchild, grandIndex) => (
                                      <li key={grandIndex}>
                                        <Link
                                          to={grandchild.link}
                                          className="block py-1.5 text-xs text-[#fffced]/60 hover:text-[#b98815] transition-colors duration-300"
                                          onClick={handleMobileNavigation}
                                        >
                                          {grandchild.title}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="card_space px-6 py-6 mx-auto">
              <motion.a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                className="flex border btn-fill-sweep btn lg:hidden group w-fit transition-all duration-500 cursor-pointer rounded-sm bg-trasparent hover:bg-(--primary-color)/80 border-[#fffced]/60 px-6 py-2 items-center gap-4 relative z-90"
              >
                <h3 className="text_button archivo">Download My CV</h3>
                <div className="flex relative group-hover:rotate-45 transition-transform duration-450 ease-in-out group items-center overflow-hidden rounded-sm justify-center bg-[#fffced] size-7 p-3">
                  <Download className="absolute size-6 group-hover:rotate-15 ease-in-out transform transition-all duration-490 group-hover:translate-x-10 text-(--primary-color)" />
                  <Download className="absolute group-hover:-rotate-45 ease-in-out size-6 transform -translate-x-10 opacity-0 transition-all duration-600 group-hover:opacity-100 group-hover:translate-x-0 text-[#272626]" />
                </div>
              </motion.a>
              <div className="flex mt-2 flex-col gap-2">
                <h4 className="card_heading chivo uppercase ">Socials</h4>
                <div className="flex gap-3">
                  <h4 className="text_para font-medium text-[12px] uppercase">Instagram</h4>
                  <h4 className="text_para font-medium text-[12px] uppercase">Facebook</h4>
                  <h4 className="text_para font-medium text-[12px] uppercase">Hithub</h4>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
