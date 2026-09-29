import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollProgress =
        (scrollTop + windowHeight) / documentHeight;

      setShowButton(scrollProgress >= 0.8);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-[#fffced]/20
        bg-(--secondary-color)/80
        text-[#fffced]
        backdrop-blur-md
        shadow-lg
        transition-all
        duration-500
        hover:scale-110
        hover:bg-(--secondary-color)
        ${
          showButton
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-5 opacity-0"
        }
      `}
    >
      <ArrowUp size={20} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTopButton;