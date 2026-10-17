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
          scaleY: 0,
          transformOrigin: "bottom",
        });

        tl.to(".Transition .first-row .block", {
          scaleY: 1,
          duration: 0.5,
          stagger: {
            each: 0.08,
            from: "end",
            grid: [1, 5],
            axis: "x",
          },
          ease: "expo.out",
        });

        tl.to(
          ".Transition .second-row .block",
          {
            scaleY: 1,
            duration: 0.5,
            stagger: {
              each: 0.08,
              from: "end",
              grid: [1, 5],
              axis: "x",
            },
            ease: "expo.out",
          },
          0
        );
      });
    },

    animateIn() {
      return new Promise((resolve) => {
        gsap.killTweensOf(".Transition .block");

        const tl = gsap.timeline({
          onComplete: resolve,
        });

        gsap.set(".Transition .block", {
          visibility: "visible",
          scaleY: 1,
          transformOrigin: "top",
        });

        tl.to(".Transition .first-row .block", {
          scaleY: 0,
          duration: 0.8,
          delay: 0.1,
          stagger: {
            each: 0.08,
            from: "start",
            grid: [1, 5],
            axis: "x",
          },
          ease: "expo.inOut",
        });

        tl.to(
          ".Transition .second-row .block",
          {
            scaleY: 0,
            duration: 0.8,
            stagger: {
              each: 0.08,
              from: "start",
              grid: [1, 5],
              axis: "x",
            },
            ease: "expo.inOut",
          },
          0
        );
      });
    },
  }));

  useEffect(() => {
    const blocks = document.querySelectorAll(".Transition .block");

    gsap.set(blocks, {
      visibility: "visible",
      scaleY: 1,
      transformOrigin: "top",
    });

    const tl = gsap.timeline();

    tl.to(".Transition .first-row .block", {
      scaleY: 0,
      duration: 0.8,
      delay: 0.1,
      stagger: {
        each: 0.08,
        from: "start",
        grid: [1, 5],
        axis: "x",
      },
      ease: "expo.inOut",
    });

    tl.to(
      ".Transition .second-row .block",
      {
        scaleY: 0,
        duration: 0.8,
        stagger: {
          each: 0.08,
          from: "start",
          grid: [1, 5],
          axis: "x",
        },
        ease: "expo.inOut",
      },
      0
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="Transition fixed inset-0 w-full h-full flex flex-col z-[9999] pointer-events-none">
      <div className="transition-row first-row flex flex-1">
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
      </div>

      <div className="transition-row second-row flex flex-1">
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
        <div className="block flex-1 bg-[#0b0b0d]"></div>
      </div>
    </div>
  );
});

Transition.displayName = "Transition";

export default Transition;