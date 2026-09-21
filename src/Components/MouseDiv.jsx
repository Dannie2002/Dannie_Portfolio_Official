import { useEffect } from "react";

const MouseDiv = () => {
  useEffect(() => {
    const pointer = document.querySelector(".pointer");

    const movePointer = (e) => {
      pointer.style.setProperty("--mouseX", `${e.clientX}px`);
      pointer.style.setProperty("--mouseY", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", movePointer);

    return () => {
      window.removeEventListener("mousemove", movePointer);
    };
  }, []);

  return <div className="pointer hidden lg:flex" aria-hidden="true" />;
};

export default MouseDiv;