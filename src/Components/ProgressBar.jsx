import React from "react";
import { useEffect, useState } from "react";

const ProgressBar = () => {

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        documentHeight > 0
          ? (scrollTop / documentHeight) * 100
          : 0;

      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <div
      id="prograss-container"
      style={{
        height: "1.7px",
        width: "100%",
        backgroundColor: "transparent",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100"
      }}
      className="hidden lg:flex"
    >

      <div
        className="progress-fill"
        style={{
          height: "100%",
          width: `${scrollPercentage}%`,
          backgroundColor: "#fffced",
          transition: "width 0.05s linear"
        }}
      >

      </div>

    </div>

  );
};

export default ProgressBar;