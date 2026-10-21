import { useEffect, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";

const Transition = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    animateOut() {
      return new Promise((resolve) => {
        gsap.killTweensOf(".Transition .block");

        const tl = gsap.timeline({ onComplete: resolve });

        gsap.set(".Transition .block", { visibility: "visible" });

        tl.to(
          ".Transition .left-block",
          { xPercent: 0, duration: 0.8, ease: "power2.inOut" },
          0
        );
        tl.to(
          ".Transition .right-block",
          { xPercent: 0, duration: 0.8, ease: "power2.inOut" },
          0
        );
      });
    },

    animateIn() {
      return new Promise((resolve) => {
        gsap.killTweensOf(".Transition .block");

        const tl = gsap.timeline({ onComplete: resolve });

        tl.to(
          ".Transition .left-block",
          { xPercent: -100, duration: 0.8, ease: "power2.inOut" },
          0
        );
        tl.to(
          ".Transition .right-block",
          { xPercent: 100, duration: 0.8, ease: "power2.inOut" },
          0
        );
      });
    },
  }));

  useEffect(() => {
    const blocks = document.querySelectorAll(".Transition .block");

    // Initial state:
    // Left curtain is outside the screen to the left.
    // Right curtain is outside the screen to the right.
    gsap.set(".Transition .left-block", {
      xPercent: -100,
      visibility: "visible",
    });

    gsap.set(".Transition .right-block", {
      xPercent: 100,
      visibility: "visible",
    });

    return () => {
      gsap.killTweensOf(blocks);
    };
  }, []);

  return (
    <div className="Transition fixed inset-0 z-[9999] pointer-events-none flex items-center">
      {/* LEFT CURTAIN */}
      <div
        className="
          block
          left-block
          absolute
          left-0
          top-0
          h-full
          w-1/2
          will-change-transform
          bg-[#131313]
        "
      />

      {/* RIGHT CURTAIN */}
      <div
        className="
          block
          right-block
          absolute
          right-0
          top-0
          h-full
          w-1/2
          will-change-transform
          bg-(--secondary-color)
        "
      />
    </div>
  );
});

Transition.displayName = "Transition";

export default Transition;