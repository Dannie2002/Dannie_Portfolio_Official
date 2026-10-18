import { useEffect, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";

const Transition = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
animateOut() {
  return new Promise((resolve) => {
    gsap.killTweensOf(".Transition .block");

    const tl = gsap.timeline({
      onComplete: resolve,
    });

    gsap.set(".Transition .block", {
      visibility: "visible",
    });

    // PHASE 1 — controlled movement
    tl.to(".Transition .left-block", {
      x: "-45%",
      duration: 0.35,
      ease: "power2.out",
    });

    tl.to(
      ".Transition .right-block",
      {
        x: "45%",
        duration: 0.35,
        ease: "power2.out",
      },
      0
    );

    // PHASE 2 — magnetic snap toward center
    tl.to(".Transition .left-block", {
      x: "0%",
      duration: 0.45,
      ease: "power4.in",
    });

    tl.to(
      ".Transition .right-block",
      {
        x: "0%",
        duration: 0.45,
        ease: "power4.in",
      },
      "<"
    );
  });
},

animateIn() {
  return new Promise((resolve) => {
    gsap.killTweensOf(".Transition .block");

    const tl = gsap.timeline({
      onComplete: resolve,
    });

    // PHASE 1 — aggressive magnetic release
    tl.to(".Transition .left-block", {
      x: "-45%",
      duration: 0.45,
      ease: "power4.out",
    });

    tl.to(
      ".Transition .right-block",
      {
        x: "45%",
        duration: 0.45,
        ease: "power4.out",
      },
      "<"
    );

    // PHASE 2 — glide away
    tl.to(".Transition .left-block", {
      x: "-100%",
      duration: 0.35,
      ease: "power2.inOut",
    });

    tl.to(
      ".Transition .right-block",
      {
        x: "100%",
        duration: 0.35,
        ease: "power2.inOut",
      },
      "<"
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
      x: "-100%",
      visibility: "visible",
    });

    gsap.set(".Transition .right-block", {
      x: "100%",
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
          bg-(--secondary-color)
        "
      />
    </div>
  );
});

Transition.displayName = "Transition";

export default Transition;